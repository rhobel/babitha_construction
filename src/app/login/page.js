import AdminLoginForm from "@/components/AdminLoginForm";

export const metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Staff only</span>
        <h1 className="h-lg" style={{ marginBottom: 12 }}>
          Admin login
        </h1>
        <p className="lede" style={{ marginBottom: 28 }}>
          For Babita Construction staff. If you&apos;re a customer looking for a form, use the
          links in the footer instead.
        </p>
        <AdminLoginForm />
      </div>
    </section>
  );
}
