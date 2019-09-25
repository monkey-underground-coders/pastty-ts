import store from "#/store";
import { getAuthToken } from "./store/selectors/session";
import { StoreRootState } from "./store/types";

export const constructGenericRequestHeaders = () => ({
  accept: "application/json",
  "Content-Type": "application/json",
});

export const constructRequestHeaders = (params = {}) => {
  return {
    ...constructGenericRequestHeaders(),
    ...params,
  };
};

export const constructAuthorizationHeaders = () => {
  const authToken = getAuthToken(store.getState() as StoreRootState, null);
  return { ...(authToken ? { Authorization: `Token ${authToken}` } : {}) };
};

const initialResponseHandler = (method: string) => (response: any) => {
  if (!response.ok) {
    throw new Error(
      `An error occured while sending ${method} request with status ${response.status}`,
    );
  }
  return response.json();
};

export const postRequest = (url: string, body = {}, headers = {}) => {
  return fetch(url, {
    method: "POST",
    headers: {
      ...constructRequestHeaders(),
      ...headers,
    },
    body: JSON.stringify(body),
  }).then(initialResponseHandler("POST"));
};

export const postAuthenticatedRequest = (url: string, body = {}) =>
  postRequest(url, body, constructAuthorizationHeaders());

export const getRequest = (url: string, headers = {}) =>
  fetch(url, { headers }).then(initialResponseHandler("GET"));

export const getAuthenticatedRequest = (url: string) =>
  getRequest(url, constructAuthorizationHeaders());

export const putRequest = (url: string, body = {}) =>
  fetch(url, {
    method: "PUT",
    headers: { ...constructRequestHeaders(), ...constructAuthorizationHeaders() },
    body: JSON.stringify(body),
  }).then(initialResponseHandler("PUT"));

export const deleteRequest = (url: string) =>
  fetch(url, {
    method: "DELETE",
    headers: { ...constructRequestHeaders(), ...constructAuthorizationHeaders() },
  }).then(initialResponseHandler("DELETE"));
