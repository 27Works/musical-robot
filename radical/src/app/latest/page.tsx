import Navbar from "@/components/navbar";
import Image from "next/image";
import ArticalHero from "@/../public/images/article_hero.jpg";
import ArticalThumb1 from "@/../public/images/article_thumb_01.jpg";
import Footer from "@/components/footer";
import { getPosts } from "../actions/getPosts";
import Link from "next/link";
import { futuraPTBold } from "../fonts/fonts";
import FadeUp from "@/components/fadeUp";

export default async function Home() {
  const posts = await getPosts({ count: 3, page: 1 });

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
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute inset-x-0 px-[100px] w-full flex items-center my-auto h-full">
            <div className="max-w-full">
              <FadeUp delay={0.4} duration={4}>
                <h1 className={`text-5xl text-white text-left ${futuraPTBold.className}`}>Latest from <span className="text-radical">Radical</span></h1>
              </FadeUp>
              <div className="grid grid-cols-3 gap-16 mt-24">
                {posts.slice(0, 3).map((post, index) => (
                  <FadeUp delay={0.4 + index * 0.4} duration={4} key={index}>
                    <Link href={`/posts/${post.slug}`}>
                      <div className="bg-black h-[400px] rounded-xl shadow-radical shadow-lg flex flex-col overflow-hidden border-2 border-radical pb-12">
                        <div className="relative">
                          <Image src={post.sections?.find((section) => section.content_type === "image")?.image?.[0]?.url || ArticalThumb1} alt="thumbnail" height={350} width={500} />
                          <div className="absolute bg-gradient-to-t from-black h-[64px] to-transparent  z-50 w-full bottom-0"></div>
                        </div>
                        <div className="p-4 pr-8 -translate-y-5">
                          <h2 className={`text-white text-2xl ${futuraPTBold.className} z-[51]`}>{post.title}</h2>
                        </div>
                      </div>
                    </Link>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

    </>);
}
