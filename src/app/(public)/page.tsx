import CompanySection from "./company_section";
import Header from "./header";
import HeroSection from "./hero_section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-t from-pink-800 via-black to-black">
      <Header />
      <main className="h-full flex flex-col flex-1 text-center mt-48 p-8">
        <HeroSection />
        <CompanySection />
      </main>
    </div>
  );
}
