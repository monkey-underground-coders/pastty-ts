import { createSelector } from "reselect";
import { SessionState, StoreRootState } from "#/store/types";

type Props = {} | null;

const getSession = (store: StoreRootState, _: Props) => (store.session ? store.session : null);

export const getAuthToken = createSelector(
  [getSession],
  (session: SessionState | null) => (session ? session.token : null),
);

export const isAuthenticated = createSelector(
  [getSession],
  (session: SessionState | null) => (session ? session.token !== null : null),
);

export const isAuthenticating = createSelector(
  [getSession],
  (session: SessionState | null) => (session ? session.isAuthenticating : false),
);

export default {
  getAuthToken,
  isAuthenticated,
  isAuthenticating,
};
