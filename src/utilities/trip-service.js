import { sendRequest } from "./helper-api";

const TRIP_URL = "/api/trips";

export async function getTrips() {
  const result = await sendRequest(TRIP_URL);

  console.log(result);
  return result;
}

export function createTrip(tripData) {
  return sendRequest(`${TRIP_URL}/new`, "POST", tripData);
}
