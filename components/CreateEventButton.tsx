'use client';
import { Button } from '@mui/material';

export default function CreateEventButton({ openModal }: { openModal: () => void }) {
  return (
      <div
      style={{
        position: "fixed",
        top: "90vh",
        width: "100%",
        textAlign: "center",
        zIndex: 10,
      }}
    >
    <Button variant="contained" color="primary" onClick={openModal}>
      Create Event
    </Button>
    </div>
  );
}
