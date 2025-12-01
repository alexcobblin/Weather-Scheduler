'use client';
import Header from '@/components/Header';
import { useState } from 'react';
import CreateEventForm from '@/components/CreateEventForm';
import CreateEventButton from '@/components/CreateEventButton';
import LogoutButton from '@/components/LogoutButton';
import EventList from '@/components/EventList';
import ClearEventsButton from '@/components/ClearEventsButton';

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <LogoutButton />
      <main>
        <CreateEventButton openModal={() => setIsModalOpen(true)} />
        <CreateEventForm open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <ClearEventsButton />
        <EventList />
      </main>
    </>
  );
}
