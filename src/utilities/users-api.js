// * The users-service.js module will definitely need to make AJAX requests to the Express server.

import { sendRequest } from "./helper-api";

//* SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

//* handleSubmit <--> [signUp]-users-service <--> [signUp]-users-api <-Internet-> server.js (Express)

const BASE_URL = "/api/users";

//* SignUp
export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

//* Login
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

//* Check Token
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
