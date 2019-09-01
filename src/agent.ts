import store from "#/store";
import { getAuthToken } from "./store/selectors/session";
import { StoreRootState } from "./store/types";

export const constructGenericRequestHeaders = () => ({
  "Content-Type": "application/json",
});

export const constructRequestHeaders = (params = {}) => {
  const authToken = getAuthToken(store.getState() as StoreRootState, null);
  return {
    ...constructGenericRequestHeaders(),
    ...(authToken ? { Authorization: `Token ${authToken}` } : {}),
    ...params,
  };
};

const initialResponseHandler = (response: any) => {
  if (!response.ok) {
    throw new Error(`An error occured while sending POST request with status ${response.status}`);
  }
  return response.json();
};

export const postRequest = (url: string, body = {}, headers = {}) =>
  fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  }).then(initialResponseHandler);

export const postAuthenticatedRequest = (url: string, body = {}) => postRequest(url, body, constructRequestHeaders());

export const getRequest = (url: string, headers = {}) => fetch(url, { headers }).then(initialResponseHandler);

export const getAuthenticatedRequest = (url: string) => getRequest(url, constructRequestHeaders());

export const putRequest = (url: string, body = {}) =>
  fetch(url, {
    method: "PUT",
    headers: constructRequestHeaders(),
    body: JSON.stringify(body),
  }).then(initialResponseHandler);

export const deleteRequest = (url: string) =>
  fetch(url, {
    method: "DELETE",
    headers: constructRequestHeaders(),
  }).then(initialResponseHandler);
