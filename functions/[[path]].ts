export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  const isPagesDevHost =
    url.hostname === "mmehedimasum.pages.dev" ||
    url.hostname.endsWith(".mmehedimasum.pages.dev");

  if (isPagesDevHost) {
    url.hostname = "mmehedimasum.com";
    url.protocol = "https:";

    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
