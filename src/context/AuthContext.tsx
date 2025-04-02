import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

// Define the user role type
type UserRole = 'buyer' | 'realtor' | 'admin' | null;

// Define the context type
interface AuthContextType {
  user: User | null;
  role: UserRole;
  setRole: (role: UserRole) => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  setRole: () => {},
  loading: true,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // In a real app, fetch the role from the backend or Firebase custom claims
        // For now, we'll mock it by storing it in localStorage (replace this with a backend call)
        const storedRole = localStorage.getItem('userRole') as UserRole;
        setRole(storedRole || 'buyer'); // Default to 'buyer' if no role is set
      } else {
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, setRole, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);