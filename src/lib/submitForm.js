// Single seam between every form and its backend. Every form component
// builds a flat values object (strings + File objects for uploads) and
// calls this — nothing else in the frontend knows the endpoint is PHP.
// If the backend approach changes (requirements.md §2.3, option B), this
// is the only file that needs to change.
//
// Requires the api/*.php scripts (see /api in the repo root) to be
// deployed alongside the static export — there is nothing to hit this
// against under `next dev` or a plain static file server.
export async function submitForm(endpoint, values) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(values)) {
    if (value === null || value === undefined) continue;
    formData.append(key, value instanceof File ? value : String(value));
  }

  const res = await fetch(`/api/${endpoint}.php`, {
    method: "POST",
    body: formData,
    credentials: "same-origin",
  });

  let payload = null;
  try {
    payload = await res.json();
  } catch {
    throw new Error("Unexpected response from the server. Please try again.");
  }

  if (!res.ok || !payload?.ok) {
    throw new Error(payload?.message || "Submission failed. Please try again.");
  }

  return payload;
}
