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
    <div className="login-container">
    <div className="login-box">
    <h4>Log In / Register</h4>
    <form onSubmit={handleSubmit}>
      <label>
        <div>Username:</div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <div><p>Password:</p></div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit" style={{ display: 'block', margin: '0.5rem auto 0 auto'}}>Go!</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
    </div>
    </div>
  );
}
