'use server';

const API_KEY = process.env.API_KEY;

export default async function getData(city: string, date: string) {
  if (!API_KEY) {
    throw new Error("Missing API_KEY.");
  }

  if (!city) {
    throw new Error("City is required.");
  }

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(
    city
  )}&days=1&aqi=no&alerts=no`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Weather API error: ${res.status}`);
  }

  return res.json();
}
