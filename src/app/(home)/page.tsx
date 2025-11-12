import Image from "next/image";
import TitleProvider from "@/components/providers/TitleProvider";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <TitleProvider>FlashNotes</TitleProvider>
      <div className="home">
        <Header />
        <div className="hero">
          Manage Your Notes, Tasks and Projects{" "}
          <span className="fancy">Efficiently</span>
        </div>
        <div className="hero-description">
          Effortlessly organize your tasks, streamline your workflows, and
          enhance collaboration with our all-in-one solution. Whether
          you&apos;re managing personal projects, working solo, or teaming up
          with colleagues, our platform helps you stay focused, productive, and
          on top of your game.
        </div>
        <div className="buttons">
          <Button variant="white">Learn More</Button>
          <Button variant="black">Get Started</Button>
        </div>
      </div>
    </>
  );
}
