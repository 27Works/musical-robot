import Image from 'next/image'
import RadicalLogo from "@/../public/images/radical_logo.png"
import RightChevron from "@/../public/icons/right-chevron.svg"
import Link from 'next/link'
import { Button } from './ui/button'
import { futuraPTBold } from '@/app/fonts/fonts'

export default function Navbar() {

  return (
    <>
      <nav className="px-[100px] w-full flex justify-between pt-6 absolute z-10">
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
    </>
  )
}