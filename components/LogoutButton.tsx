'use client';
import { logoutAction } from '@/lib/logout';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const StyledLogoutButton = styled.button`
  background-color: #1e3a8a;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3459c0;
  }
`;

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <StyledLogoutButton type="submit">
        Log Out
      </StyledLogoutButton>
    </form>
  );
}
