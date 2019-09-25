export const hostname = "https://pastty.a6raywa1cher.com/pastty-spring/";

const getAbsoluteUrl = (route: string) => `${hostname}${route}`;

export const apiRoutes = {
  // Auth
  authorize: getAbsoluteUrl(`user/authorize`),

  // Scripts / Paste
  uploadScript: getAbsoluteUrl(`script/upload`),
};

export default apiRoutes;
