'use client';
import { clearEvents } from '@/lib/mockEvents';
import { useState } from 'react';

export default function ClearEventsButton() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleClear = async () => {
    await clearEvents();
    window.location.reload(); // reload
  };

  return (
    <button onClick={handleClear}>
      Clear All Events
    </button>
  );
}
