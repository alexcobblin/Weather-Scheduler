'use client';
import { useEffect, useState } from 'react';
import { getEvents, Event } from '@/lib/mockEvents';

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const data = await getEvents();
      setEvents(data);
    }

    fetchEvents();
  }, []);

  if (events.length === 0) {
    return <p>No events scheduled.</p>;
  }

  return (
    <div>
      <h2>Scheduled Events:</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.eventName}</strong><br />
            {event.startTime} - {event.endTime} <br />
            Location: {event.location} <br />
            Outside: {event.isOutside ? 'Yes' : 'No'}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
