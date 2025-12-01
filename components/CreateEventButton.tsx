'use client';
import { Button } from '@mui/material';

export default function CreateEventButton({ openModal }: { openModal: () => void }) {
  return (
    <Button variant="contained" color="primary" onClick={openModal}>
      Create Event
    </Button>
  );
}
