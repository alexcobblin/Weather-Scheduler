'use client';
import { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Checkbox, FormControlLabel} from '@mui/material';
import { createEvent } from '@/lib/mockEvents';

export default function CreateEventForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [isOutside, setIsOutside] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createEvent({
      eventName,
      startTime,
      endTime,
      location,
      isOutside,
    });

    // reset form
    setEventName('');
    setStartTime('');
    setEndTime('');
    setLocation('');
    setIsOutside(false);

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 4,
          width: 400,
          margin: '100px auto',
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Create Event
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Start Time"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="End Time"
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Location / Zip Code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isOutside}
                onChange={(e) => setIsOutside(e.target.checked)}
              />
            }
            label="Is Outside?"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
