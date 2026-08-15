// Single seam between every form and its backend. Sprint 3 (BC-20/BC-21)
// replaces the body of this function with a real fetch() to the PHP
// endpoint at /api/<endpoint>.php — every form component stays unchanged.
// If the backend approach changes (requirements.md §2.3, option B), this
// is the only file that needs to change.
export async function submitForm(endpoint, data) {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true, reference: `TEMP-${Date.now().toString(36).toUpperCase()}` };
}
