import Navbar from "@/components/navbar";
import Image from "next/image";
import ArticalHero from "@/../public/images/article_hero.jpg";
import Footer from "@/components/footer";
import { Bookmark, Dot, Share2 } from "lucide-react";
import { getPost } from "@/app/actions/getPost";
import ArticleAuthor from "@/../public/images/article_author.jpg";
import { format } from 'date-fns';
import parse from 'html-react-parser';
import { getPosts } from "@/app/actions/getPosts";
import Carousel from "@/components/carousel";
import { futuraPTBold, futuraPTBook } from "@/app/fonts/fonts";
import Link from "next/link";
interface PostProps {
  params: {
    post: string
  }
}


export default async function Page({
  params,
}: PostProps) {
  const post = await getPost({
    slug: params.post
  })

  if (!post) {
    return (
      <div className="h-screen">
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl text-white">
            404 Post not found
          </h1>
        </div>
        <Footer />
      </div>
    )
  }

  const posts = await getPosts({ count: 12, page: 1 });
  const title = post.sections.find((section) => section.content_type === "title")
  const subTitle = post.sections.find((section) => section.content_type === "subtitle")
  const bodyText = post.sections.find((section) => section.content_type === "bodyText")
  const formattedDate = format(new Date(post.created_at), "do MMMM, yyyy");
  const parsedSubTitle = parse(subTitle?.content || "")
  const parsedBody = parse(bodyText?.content || "")





  return (<>
    <div className="h-screen bg-black">
      <Navbar />
      <div className="relative w-full h-full">
        <Image
          src={post.sections?.find((section) => section.content_type === "image")?.image?.[0]?.url || ArticalHero}
          alt="Article Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
    <div className="w-full px-[300px] relative">
      <div className="-mt-52 w-full flex flex-col space-y-4 mb-16">
        <div className={`text-xl flex items-center space-x-2 text-radical ${futuraPTBook.className}`}>
          <p className="underline">
            Home
          </p>
          <p className="">
            /
          </p>
          <Link href={"/latest"}>
            <p className="underline">
              Latest News
            </p>
          </Link>
        </div>
        <h1 className="text-7xl text-radical ">
          {title?.content}
        </h1>
        <h2 className="text-white text-2xl">
          {parsedSubTitle}
        </h2>
        <div className="flex space-x-2 items-center">
          <div className={`flex items-center space-x-3 ${futuraPTBook.className}`}>
            <Image
              src={ArticleAuthor}
              alt="Avatar"
              className="rounded-full"
              height={42}
              width={42}
            />
            <h4 className="text-white text-xl">
              John Smith
            </h4>
            <Dot className="text-radicalGray" />
            <h4 className="text-white text-xl">
              {formattedDate}
            </h4>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 flex justify-center items-center border-[1px] rounded-full">
              <Bookmark height={18} width={18} className="text-radicalGray" />
            </div>
            <div className="w-9 h-9 flex justify-center items-center border-[1px] rounded-full">
              <Share2 height={18} width={18} className="text-radicalGray" />
            </div>
          </div>
        </div>
        <div className={`text-radicalGray space-y-4 text-xl ${futuraPTBook.className}`}>
          {parsedBody}
        </div>
      </div>
    </div>
    <div className="px-[100px]">
      <div className="border-t-2 border-white/20 pt-12 pb-24">
        <h2 className={`text-white text-2xl ${futuraPTBold.className}`}>
          YOU MIGHT ALSO LIKE
        </h2>
        <Carousel posts={posts} />
      </div>
    </div>

    <Footer />
  </>)
}