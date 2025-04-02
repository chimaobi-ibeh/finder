import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../lib/firebase';
import Input from './ui/Input';
import Button from './ui/Button';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'buyer' | 'realtor' | 'admin'>('buyer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      // In a real app, save the role to the backend or Firebase custom claims
      // For now, store it in localStorage (replace this with a backend call)
      localStorage.setItem('userRole', role);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      <form onSubmit={handleRegister} className="max-w-md mx-auto space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label className="block mb-2">Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'buyer' | 'realtor' | 'admin')}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="buyer">Buyer/Renter</option>
            <option value="realtor">Realtor/Seller</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}