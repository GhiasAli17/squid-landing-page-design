import Button from "@/components/common/Button";
import Sphere from "@/components/common/Sphere";
import {
  bLineIcon,
  featFiveIcon,
  featFourIcon,
  featOneIcon,
  featSixIcon,
  featThreeIcon,
  featTwoIcon,
  hLineIcon,
  lightSquidIcon,
  midCardIcon,
  squidIcon,
  statsIcon,
  usersIcon,
} from "@/utils/icons/icons";
import Image from "next/image";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  return (
    <main className="min-h-screen text-light-gray">
      <div className="bg-black pb-[270px] bg-vertical-lines">
        {/* header part  */}
        <header className="pt-7 ps-4 pe-4">
          <div className="max-w-[1110px] mx-auto ">
            <div className="flex w-full justify-between items-center">
              {squidIcon}
              <div className="flex items-center justify-between gap-[34px]">
                <p className="text-light-gray text-sm hover:underline cursor-pointer">
                  Home
                </p>
                <Button text="Download Template" />
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-[1140px] mx-auto ps-4 pe-4">
          <div className="grid place-items-center w-full">
            <Sphere className="size-16" />
          </div>
          <div className="flex  mt-9 pb-4">
            <div className="mr-[94px] flex items-end">
              <Sphere className="size-[130px]" />
            </div>
            <div className="pb-2">
              <h1 className="text-center text-[64px] leading-[80px] text-white max-w-[749px] mx-auto ">
                Beautiful Landing Page Design for You
              </h1>
              <p className="text-lg text-center max-w-[577px] mx-auto mt-[18px]">
                A good design is not only aesthetically pleasing, but also
                functional. It should be able to solve the problem
              </p>

              <div className="grid place-items-center mt-6">
                <Button text="Download Template" />
              </div>
            </div>
            <div className="ml-32 flex items-center">
              {" "}
              <Sphere className="size-24" />
            </div>
          </div>
        </div>
      </div>
      {/* 2nd section  */}
      <div className="min-h-[475px] ps-4 pe-4 flex justify-center bg-gradient-to-r from-gradient-start to-gradient-end relative">
        <div className="flex gap-4 w-full max-w-[870px] mx-auto p-6 bg-medium-black rounded-2xl -top-[50%] absolute">
          <div className="bg-light-black flex flex-col justify-center items-center rounded-2xl p-4 flex-1">
            <div>{lightSquidIcon}</div>
            <div className="bg-medium-gray h-[2px] w-full mt-5 mb-8" />

            <div className="flex flex-col gap-6">
              {hLineIcon}
              {hLineIcon}
              {hLineIcon}
              {hLineIcon}
              {hLineIcon}
            </div>

            <Image
              src="/images/b-card-1.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full object-cover max-w-[42px] mt-11"
              alt="user image"
            />

            <div className="mt-5">{bLineIcon}</div>
          </div>
          {/* col 2 */}
          <div className="flex-1 min-h-[441px] flex-grow flex flex-col gap-5 h-full justify-between">
            <div className="bg-light-black h-full flex flex-1 flex-col justify-center items-center rounded-2xl p-4">
              <div className="flex flex-col h-full justify-between">
                {midCardIcon}
              </div>
            </div>
            <div className="bg-light-black h-full flex flex-col justify-center items-center rounded-2xl p-4 flex-1">
              <div className="h-full">{hLineIcon}</div>
              <div className="bg-medium-gray h-[2px] w-full my-4" />
              <div className="h-full"> {statsIcon}</div>
            </div>
          </div>
          {/* col 3 */}
          <div className="flex flex-1 flex-col gap-5">
            <div className="bg-light-black rounded-2xl p-4 ">
              {midCardIcon}
              <Image
                src="/images/b-card-1.png"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover mx-auto max-w-[42px] mt-11"
                alt="user image"
              />
            </div>
            <div className="bg-light-black rounded-2xl p-4 flex-1"></div>
          </div>
        </div>
      </div>

      {/* 3rd section  */}
      <div className=" bg-black pt-24 pb-11 ps-4 pe-4">
        {" "}
        <div className=" max-w-[1110px] mx-auto  -top-[50px]">
          <h1 className="text-white font-semibold text-5xl">Feature Boxes</h1>
          <p className="text-lg max-w-[577px] mt-[5px] mb-8">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem{" "}
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-[30px]">
            <FeatureCard icon={featOneIcon} />
            <FeatureCard icon={featTwoIcon} />
            <FeatureCard
              icon={featThreeIcon}
              className="bg-gradient-to-r from-gradient-start to-gradient-end"
            />
            <FeatureCard icon={featFourIcon} />
            <FeatureCard icon={featFiveIcon} />
            <FeatureCard icon={featSixIcon} />
          </div>
        </div>
      </div>
    </main>
  );
}
