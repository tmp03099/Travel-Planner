import { sendRequest } from "./helper-api";

const ACTIVITY_URL = "/api/activities";

export async function getActivity(id) {
  return await sendRequest(`${ACTIVITY_URL}/${id}`);
}

export async function updateActivity(ActivityData) {
  return await sendRequest(
    `${ACTIVITY_URL}/${ActivityData._id}`,
    "PUT",
    ActivityData
  );
}

export async function deleteActivity(id) {
  return await sendRequest(`${ACTIVITY_URL}/${id}`, "DELETE");
}

export async function createActivity(ActivityData) {
  return await sendRequest(`${ACTIVITY_URL}/new`, "POST", ActivityData);
}
