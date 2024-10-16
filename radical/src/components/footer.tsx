import Image from 'next/image'
import MotulLogo from "@/../public/images/motul_logo.png"
import RadicalLogo from "@/../public/images/radical_logo.png"
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="px-[100px] bg-black text-white border-t-[1px] border-white/10" style={{ backgroundImage: 'linear-gradient(to bottom, #121212, #000)' }}>
      <section className="py-16 flex space-y-6 flex-col border-b-[1px] border-white/10">
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold">
            Our Global Partners
          </h1>
          <h3 className="text-gray-200">
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </h3>
        </div>
        <div className="flex justify-between w-full">
          <Image src={MotulLogo} alt='motul logo' width={200} />
          <Image src={MotulLogo} alt='motul logo' width={200} />
          <Image src={MotulLogo} alt='motul logo' width={200} />
          <Image src={MotulLogo} alt='motul logo' width={200} />
          <Image src={MotulLogo} alt='motul logo' width={200} />
        </div>
      </section>
      <section className="py-16 flex justify-between border-b-[1px] border-white/10">
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold">
            Our Global Partners
          </h1>
          <h3 className="text-gray-200">
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </h3>
        </div>
        <div className='flex'>
          <Input type="email" placeholder="Enter your email" className='rounded-r-none border-[1px] border-[#8c8c8c]' />
          <Button className='py-4 pr-4 pl-4.5 rounded-l-none border-[1px] border-[#8c8c8c] bg-transparent border-l-0'>
            Submit
          </Button>
        </div>
      </section>
      <section className='py-16 border-b-[1px] border-white/10 flex space-x-24'>
        <div className='w-[320px] flex flex-col space-y-6'>
          <Image src={RadicalLogo} alt='radical logo' />
          <p>
            Donec ullamcorper nulla non metus auctor
            fringilla. Sed posuere consectetur est at.
          </p>
          <p>
            24 Ivatt Way Business Park <br />
            Westwood <br />
            Peterborough <br />
            PE3 7PG <br />
            Tel: +44 (0) 1733 331 616
          </p>
        </div>
        <div className='flex justify-evenly w-full'>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className='text-[#b1b3b3] mb-4'>{section.heading}</h4>
              <ul className='space-y-2'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>
                      <p>{link.text}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </section>
      <section className='py-8 flex justify-between text-[#b1b3b3]'>
        <h2>
          © 2023 Radical Motorsport
        </h2>
        <div className='flex space-x-4'>
          <Link href={"#"}>
            <Linkedin width={24} height={24} />
          </Link>
          <Link href={"#"}>
            <Facebook width={24} height={24} />
          </Link>
          <Link href={"#"}>
            <Youtube width={24} height={24} />
          </Link>
          <Link href={"#"}>
            <Twitter width={24} height={24} />
          </Link>
          <Link href={"#"}>
            <Instagram width={24} height={24} />
          </Link>
        </div>
      </section>
    </footer>
  )
}


const footerLinks = [
  {
    heading: "Cars",
    links: [
      { href: "#", text: "All cars" },
      { href: "#", text: "SR1" },
      { href: "#", text: "SR3" },
      { href: "#", text: "SR10" },
      { href: "#", text: "RXC SPYDER" },
      { href: "#", text: "RXC 600R" },
      { href: "#", text: "RXC GT3" },
      { href: "#", text: "PROJECT 25" }
    ]
  },
  {
    heading: "Company",
    links: [
      { href: "#", text: "News" },
      { href: "#", text: "Careers" },
      { href: "#", text: "Dealers" },
      { href: "#", text: "Dealer Parts" },
      { href: "#", text: "Contact" }
    ]
  },
  {
    heading: "Resources",
    links: [
      { href: "#", text: "Newsletter" },
      { href: "#", text: "Downloads" },
      { href: "#", text: "Media" }
    ]
  },
  {
    heading: "Legal",
    links: [
      { href: "#", text: "Terms & Conditions" },
      { href: "#", text: "Privacy" },
      { href: "#", text: "Cookie Policy" },
      { href: "#", text: "Payment terms & conditions" },
      { href: "#", text: "Credits" }
    ]
  },
  {
    heading: "Social",
    links: [
      { href: "#", text: "LinkedIn" },
      { href: "#", text: "Facebook" },
      { href: "#", text: "Youtube" },
      { href: "#", text: "Twitter" },
      { href: "#", text: "Instagram" }
    ]
  }
]
