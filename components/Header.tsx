'use client';
import { usePathname } from 'next/navigation';
import LogoutButton from './LogoutButton';
import ClearEventsButton from './ClearEventsButton';


export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header-bar">
      <h2>Weather Planner</h2>

      {pathname !== '/login' && (
        <div
          style={{
            position: "absolute",
            right: "1rem",
          }}
          >
          <LogoutButton/>
        </div>
      )}
      {pathname !== '/login' && (
        <div
          style={{
            position: "absolute",
            left: "1rem",
          }}
          >
          <ClearEventsButton/>
        </div>
      )}
    </header>
  );
}
