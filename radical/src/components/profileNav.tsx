import Image from 'next/image'
import RadicalLogo from "@/../public/images/radical_logo.png"
import RightChevron from "@/../public/icons/right-chevron.svg"
import Link from 'next/link'
import { Button } from './ui/button'
import { Bell, UserRound } from 'lucide-react'

export default function ProfileNavbar() {

  return (
    <>
      <nav className="px-[100px] w-full flex justify-between pt-6 absolute z-10">
        <Image
          src={RadicalLogo}
          alt="Radical Logo"
          width={196}
          height={40}
          priority
        />
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
    </>
  )
}