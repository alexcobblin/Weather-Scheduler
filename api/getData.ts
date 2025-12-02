'use server';
const API_KEY = process.env.API_KEY;

const City = "London";

export default async function getData() {
  if (!API_KEY) {
    throw new Error("Missing API_KEY.");
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${City}&aqi=no`;

  const res = await fetch(url, {

    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error(`Weather API error: ${res.status}`);
  }

  const data = await res.json();
  return data;
}