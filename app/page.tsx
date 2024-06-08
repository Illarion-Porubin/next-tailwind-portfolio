import Hero from "@/components/main/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-flex w-flex">
      <div className="flex flex-col gap-20">
        <Hero/>
      </div>
    </main>
  );
}