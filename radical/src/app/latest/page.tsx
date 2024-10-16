import Navbar from "@/components/navbar";
import Image from "next/image";
import ArticalHero from "@/../public/images/article_hero.jpg";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="relative w-full h-full">
          <Image
            src={ArticalHero}
            alt="Article Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

        </div>
        <Footer />
      </div>

    </>);
}
