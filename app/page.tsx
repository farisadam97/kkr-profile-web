import Portfolio from "@/components/Portfolio";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  py-24">
      <Header />
      <Portfolio />
    </main>
  );
}
