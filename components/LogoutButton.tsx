'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user'); // future: clear auth token too
    router.push('/login');
  };

  return (
    <Button variant="outlined" color="secondary" onClick={handleLogout}>
      Log Out
    </Button>
  );
}
