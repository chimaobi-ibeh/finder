import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../lib/firebase';
import Input from './ui/Input';
import Button from './ui/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-4">
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
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}