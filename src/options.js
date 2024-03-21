import { apiKey } from "./api";

export const catOptions = {
    method : "GET",
    headers: {
    "Content-type" : "application/json",
    "x-api-key" : apiKey,
    },
}