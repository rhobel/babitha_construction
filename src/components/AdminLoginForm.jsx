"use client";

import { useState } from "react";
import Field from "./Field";
import { submitForm } from "@/lib/submitForm";

export default function AdminLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!username.trim() || !password) {
      setError("Enter both a username and a password.");
      return;
    }
    setStatus("submitting");
    try {
      await submitForm("login", { username, password });
      // api/login.php sets an httpOnly PHP session cookie on success.
      // The admin panel itself is out of scope for this phase
      // (requirements.md §10) — this assumes it already exists at /admin/.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- /admin/ is the pre-existing PHP admin panel, not a Next.js route (requirements.md §10)
      window.location.href = "/admin/";
    } catch (err) {
      setPassword("");
      setError(err?.message || "Invalid username or password.");
      setStatus("idle");
    }
  }

  return (
    <form className="cp-controls" style={{ maxWidth: 420 }} onSubmit={handleSubmit} noValidate>
      <Field label="Username" htmlFor="loginUsername">
        <input
          className="control"
          id="loginUsername"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Field>
      <div style={{ marginTop: 16 }}>
        <Field label="Password" htmlFor="loginPassword">
          <input
            className="control"
            id="loginPassword"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
      </div>

      <button
        className="btn btn-primary"
        style={{ marginTop: 20, width: "100%" }}
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Signing in…" : "Sign in"}
      </button>

      {error && <p className="field-error" style={{ marginTop: 14 }}>{error}</p>}
    </form>
  );
}
