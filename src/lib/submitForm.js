import { CALL_PHONES } from "@/data/company";

// Single seam between every form and its backend. Every form component
// builds a flat values object (strings + File objects for uploads) and
// calls this — nothing else in the frontend knows the endpoint is PHP.
//
// Requires the api/*.php scripts (see /api in the repo root) to be deployed
// alongside the static export, with a private config.php and the MySQL
// schema imported. `next dev` does not execute PHP, so submissions fail
// locally by design — see DEPLOY.md "Testing the forms".
const FALLBACK = `We couldn't send that just now. Please call ${CALL_PHONES.join(" or ")} and we'll take the details.`;

export async function submitForm(endpoint, values) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(values)) {
    if (value === null || value === undefined) continue;
    formData.append(key, value instanceof File ? value : String(value));
  }

  let res;
  try {
    res = await fetch(`/api/${endpoint}.php`, {
      method: "POST",
      body: formData,
      credentials: "same-origin",
    });
  } catch {
    // Offline, DNS failure, or the request never reached a server.
    throw new Error(FALLBACK);
  }

  // A missing or misconfigured PHP backend answers with an HTML error page
  // rather than JSON. Parsing that would surface a meaningless message, so
  // fall back to the phone number instead.
  let payload = null;
  try {
    payload = await res.json();
  } catch {
    throw new Error(FALLBACK);
  }

  if (!res.ok || !payload?.ok) {
    throw new Error(payload?.message || FALLBACK);
  }

  return payload;
}
