export type Event = {
  eventName: string;
  startTime: string;
  endTime: string;
  location: string;
  isOutside: boolean;
};

let events: Event[] = [];

export async function createEvent(event: Event): Promise<void> {
  events.push(event);
}

export async function getEvents(): Promise<Event[]> {
  return events;
}

export async function clearEvents(): Promise<void> {
  events = [];
}
