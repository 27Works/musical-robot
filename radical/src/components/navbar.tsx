"use client"
import Image from 'next/image'
import RadicalLogo from "@/../public/images/radical_logo.png"
import RightChevron from "@/../public/icons/right-chevron.svg"
import Link from 'next/link'
import { Button } from './ui/button'
import { futuraPTBold } from '@/app/fonts/fonts'
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 65) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50`}>
        <nav className={`px-[100px] w-full flex justify-between py-4 absolute z-10 transition-colors ${isScrolled ? 'bg-black/80' : ''}`}>
          <Link href={"/latest"}>
            <Image
              src={RadicalLogo}
              alt="Radical Logo"
              width={196}
              height={40}
              priority
            />
          </Link>
          <div>
            <div className='flex items-center space-x-4 text-white'>
              <Link href={"#"}>
                <h2 className='hover:text-radical transition-all'>
                  Cars
                </h2>
              </Link>
              <Link href={"#"}>
                <h2 className='hover:text-radical transition-all'>
                  Drive
                </h2>
              </Link>
              <Link href={"#"}>
                <h2 className='hover:text-radical transition-all'>
                  Our Story
                </h2>
              </Link>
              <Link href={"#"}>
                <h2 className='hover:text-radical transition-all'>
                  News
                </h2>
              </Link>
              <Link href={"#"}>
                <h2 className='hover:text-radical transition-all'>
                  Contact Us
                </h2>
              </Link>
              <Link href={"/profile"}>
                <Button className={`bg-radical text-black flex items-center px-4 py-3 space-x-[7px] hover:bg-radical ${futuraPTBold.className}`}>
                  <h2>
                    My Radical
                  </h2>
                  <Image
                    src={RightChevron}
                    alt="Right Chevron"
                  />
                </Button>
              </Link>         </div>
          </div>
        </nav>
      </div>
    </>
  )
}