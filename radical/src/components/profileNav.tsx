"use client"

import Image from 'next/image'
import RadicalLogo from "@/../public/images/radical_logo.png"
import Link from 'next/link'
import { Bell, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react';

export default function ProfileNavbar() {
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
            <div className='border-l-[1px] border-[#8c8c8c] px-4 flex items-center space-x-4'>
              <div className='text-radical flex items-center space-x-2'>
                <UserRound width={16} height={16} />
                <p>Josephine</p>
              </div>
              <div className='relative'>
                <Bell />
                <div className='absolute -top-1.5 -right-1 rounded-full bg-red-500 flex items-center justify-center w-4 h-4'>
                  <p className='text-white text-xs'>4</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}