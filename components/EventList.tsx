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
    return <p className="no-events-text">No events scheduled.</p>;
  }

  return (
    <div className="events-container">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h3 className="event-title">{event.eventName}</h3>

          <p className="event-line">
            <span className="event-label">Time:</span> {event.startTime} – {event.endTime}
          </p>

          <p className="event-line">
            <span className="event-label">Location:</span> {event.location}
          </p>

          <p className="event-line">
            <span className="event-label">Outside:</span> {event.isOutside ? "Yes" : "No"}
          </p>
        </div>
      ))}
    </div>
  );
}
