import Portfolio from "@/components/Portfolio";
import Header from "@/components/Header";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Portfolio />
      <Profile />
    </main>
  );
}
