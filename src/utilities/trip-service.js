import { sendRequest } from "./helper-api";

const TRIP_URL = "/api/trips";

export async function getTrips() {
  const result = await sendRequest(TRIP_URL);

  console.log(result);
  return result;
}

export async function createTrip(tripData) {
  return await sendRequest(`${TRIP_URL}/new`, "POST", tripData);
}
