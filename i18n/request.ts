import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting
  // read from `cookies()`, `headers()`, etc.
  // const locale = cookies().get("locale")?.value || "en";
  const locale = "en"
  return {
    locale,
    messages: (await import(`../langs/${locale}.json`)).default,
  };
});
