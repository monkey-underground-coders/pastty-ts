export const hostname = "http://localhost:8000/";

const getAbsoluteUrl = (route: string) => `${hostname}${route}`;

export default {
  authorize: getAbsoluteUrl(`user/authorize`),
};