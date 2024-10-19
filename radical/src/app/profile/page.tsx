import Footer from "@/components/footer";
import Image from "next/image";
import Grid from "@/../public/images/grid.png";
import ProfileNavbar from "@/components/profileNav";
import Avatar from "@/../public/images/user_profile.jpg";
import { CarFront, FileDown, LucideIcon, Megaphone, Pencil, UserRound } from "lucide-react";
import RightChevron from "@/../public/icons/right-chevron.svg";
import RightChevronRadicalGray from "@/../public/icons/right-chevron-radical-gray.svg";
import { ProfileForm } from "@/components/profileForm";
import { getDealers } from "../actions/getDealers";
import { futuraPTBold, futuraPTBook } from "../fonts/fonts";

export default async function Page() {
  const dealers = await getDealers();


  return (
    <>
      <div className="h-screen bg-black">
        <ProfileNavbar />
        <div className="relative w-full h-full">
          <Image
            src={Grid}
            alt="Grid"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute z-9 inset-0 flex items-center justify-center w-full h-full">
            <div className="px-4 md:px-[100px] grid grid-cols-1 md:grid-cols-10 gap-x-4 md:gap-x-32">
              <div className="rounded-md border-2 border-white/5 flex flex-col w-full md:w-[400px] items-center px-4 md:px-8 pb-8 bg-[#161616] col-span-1 md:col-span-3">
                <div className="rounded-full overflow-hidden w-[120px] md:w-[189px] h-[120px] md:h-[189px] border-2 border-white/5 relative shadow-md transform -translate-y-1/2">
                  <Image
                    src={Avatar}
                    alt="Avatar"
                    objectPosition="center"
                  />
                  <div className="w-5 md:w-7 h-5 md:h-7 bg-black border-[1px] border-white/50 absolute z-15 rounded-full bottom-2 text-radical flex justify-center items-center right-[50px] md:right-[78px]">
                    <Pencil width={10} height={10} />
                  </div>
                </div>
                <div className={`text-center -mt-8 md:-mt-16 flex flex-col space-y-2 text-white ${futuraPTBook.className}`}>
                  <h1 className={`text-xl md:text-2xl bg-gradient-to-r from-radical to-[#FF9900] bg-clip-text text-transparent ${futuraPTBold.className}`}>Josephine Robinson</h1>
                  <p>Radical Since 2020</p>
                  <div className="text-radical flex justify-center">
                    <div className="border-b-[1px] w-fit border-radical flex items-center space-x-1">
                      <Pencil width={10} height={10} />
                      <p className="text-xs md:text-sm">Edit Profile</p>
                    </div>
                  </div>
                </div>
                <div className={`mt-[20px] md:mt-[40px] w-full flex flex-col space-y-2 md:space-y-3 ${futuraPTBold.className}`}>
                  {profileTabs.map((tab, index) => (
                    <ProfileTab
                      key={index}
                      Icon={tab.Icon}
                      text={tab.text}
                      isActiveTab={tab.isActiveTab}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-[#161616] rounded-md border-2 border-white/5 p-4 md:p-8 col-span-1 md:col-span-7 z-50">
                <h1 className={`bg-gradient-to-r from-radical to-[#FF9900] bg-clip-text text-transparent text-lg md:text-xl ${futuraPTBold.className}`}>MY PROFILE</h1>
                <ProfileForm dealers={dealers} />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
        </div>
      </div >
      <Footer />
    </>
  )
}


const profileTabs = [
  {
    Icon: UserRound,
    text: "MY PROFILE",
    isActiveTab: true
  }, {
    Icon: CarFront,
    text: "MY RADICAL GARAGE",
    isActiveTab: false
  }, {
    Icon: Megaphone,
    text: "TECHNICAL BULLETINS",
    isActiveTab: false
  }, {
    Icon: FileDown,
    text: "MY DOWNLOADS",
    isActiveTab: false
  }
]

const ProfileTab = ({ Icon, text, isActiveTab }: {
  Icon: LucideIcon
  text: string,
  isActiveTab: boolean
}) => {
  return (
    <div className={`px-4 py-2 flex justify-between items-center rounded-md w-full ${isActiveTab ? 'bg-gradient-to-r from-radical to-[#FF9900]' : 'border-2 text-radicalGray border-radicalGray'}`}>
      <div className="flex space-x-2 items-center">
        <Icon />
        <h2 className="text-lg mt-0">{text}</h2>
      </div>
      <Image
        src={isActiveTab ? RightChevron : RightChevronRadicalGray}
        height={12}
        width={12}
        alt="Right Chevron"
      />
    </div>
  )
}
