import { Footer } from "@/components/layout/Footer";
import { LandingNav } from "@/components/landing/LandingNav";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
