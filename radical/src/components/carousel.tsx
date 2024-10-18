"use client"
import { Post } from "@/app/actions/getPosts";
import Link from "next/link";
import Image from "next/image";
import ArticalThumb1 from "@/../public/images/article_thumb_01.jpg";
import { useState } from "react";
import SideGradient from "@/../public/images/side_gradient.png"
import RightChevron from "@/../public/icons/right-chevron-radical-gray.svg";
import parse from 'html-react-parser';
import { futuraPTBold, futuraPTBook } from "@/app/fonts/fonts";
export default function Carousel({
  posts
}: {
  posts: Post[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4;



  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= posts.length) {
        return Math.max(posts.length - 1, 0);
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  return (
    <div className="relative mt-6">
      <div className="grid grid-cols-4 gap-4">
        {posts.slice(currentIndex, currentIndex + imagesPerPage).map((post, index) => (
          <div key={index}>
            <Link href={`/posts/${post.slug}`}>
              <div className="bg-black h-[400px] rounded-xl shadow-lg flex flex-col overflow-hidden border-2 border-white/20 ">
                <div className="relative">
                  <Image src={post.sections?.find((section) => section.content_type === "image")?.image?.[0]?.url || ArticalThumb1} alt="thumbnail" height={350} width={400} />
                  <div className="absolute bg-gradient-to-t from-black h-[64px] to-transparent  z-3 w-full bottom-0"></div>
                </div>
                <div className="p-4 flex flex-col space-y-1">
                  <h2 className={`text-white text-2xl line-clamp-2 text-ellipsis ${futuraPTBold.className}`}>{post.title}</h2>
                  <p className={`text-radicalGray line-clamp-2 text-ellipsis ${futuraPTBook.className}`}>
                    {parse(post.sections?.find((section) => section.content_type === "subtitle")?.content || "")}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {currentIndex + imagesPerPage < posts.length && (
        <>
          <button onClick={nextSlide} className="absolute right-[56px] top-[182px] z-10">
            <Image src={RightChevron} height={36} width={36} alt="Right Chevron" />
          </button>
          <Image src={SideGradient} alt="Left Gradient" className="absolute z-2 right-0 top-0 h-full " />
        </>
      )}
      {currentIndex > 0 && (
        <>
          <button onClick={prevSlide} className="absolute left-[56px] top-[182px] z-10">
            <Image src={RightChevron} height={36} width={36} alt="Left Chevron" style={{ transform: 'rotate(180deg)' }} />
          </button>
          <Image src={SideGradient} alt="Right Gradient" className="absolute z-2 left-0 top-0 h-full " style={{ transform: 'rotate(180deg)' }} />
        </>
      )}


    </div>
  );
}