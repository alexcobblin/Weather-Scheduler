'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginOrRegister } from '@/lib/mockAuth';

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = await loginOrRegister(username.trim(), password.trim());

    if (result === 'success') {
      localStorage.setItem('user', username);
      router.push('/dashboard');
    } else if (result === 'incorrect') {
      setError('Incorrect password');
    } else if (result === 'empty') {
      setError('Please enter a password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Login / Register</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
