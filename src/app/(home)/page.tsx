import Image from "next/image";
import TitleProvider from "@/components/providers/TitleProvider";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <TitleProvider>FlashNotes</TitleProvider>
      <div className="home">
        <Header />
      </div>
    </>
  );
}
