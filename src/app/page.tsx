import Button from "@/components/common/Button";
import Sphere from "@/components/common/Sphere";
import {
  bLineIcon,
  companyIconFive,
  companyIconFour,
  companyIconSix,
  companyIconThree,
  companyIconTwo,
  companyOneIcon,
  discordIcon,
  featFiveIcon,
  featFourIcon,
  featOneIcon,
  featSixIcon,
  featThreeIcon,
  featTwoIcon,
  fingersIcon,
  flowerIcon,
  globeIcon,
  hLineIcon,
  lightSquidIcon,
  linkedInIcon,
  midCardIcon,
  squidIcon,
  statsIcon,
  twitterIcon,
  usersIcon,
} from "@/utils/icons/icons";
import Image from "next/image";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  return (
    <main className="min-h-screen text-light-gray bg-gradient-to-r from-gradient-start to-gradient-end relative">
      <div
        className="bg-black pb-[270px] bg-vertical-lines relative"
        style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
      >
        {/* header part  */}
        <header className="pt-7 ps-4 pe-4">
          <div className="max-w-[1110px] mx-auto ">
            <div className="flex md:flex-row flex-col gap-4 md:gap-0 w-full justify-between items-center">
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
            <Sphere className="size-16 hidden md:block" />
          </div>
          <div className="flex flex-col md:flex-row  mt-9 pb-4">
            <div className="lg:mr-[94px] flex items-end">
              <Sphere className="size-[130px] hidden md:block" />
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
            <div className="lg:ml-32 flex items-center">
              {" "}
              <Sphere className="size-24 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
      {/* 2nd section  */}
      <div className="min-h-[475px] ps-4 pe-4   flex justify-center bg-gradient-to-r from-gradient-start to-gradient-end relative">
        <div className="flex md:flex-row flex-col gap-4 w-full z-20  max-w-[870px] mx-auto p-6 bg-medium-black rounded-2xl -top-[50%] absolute">
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
          <div className="flex flex-1 flex-col  gap-5">
            <div className="bg-light-black rounded-2xl p-4 flex justify-center items-center flex-col">
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
      {/* dummy section for round  */}
      <div
        className=" bg-black  h-[800px] w-full p-4 hidden md:block"
        style={{ clipPath: "ellipse(100% 100% at 50% 100%)" }}
      ></div>
      {/* 3rd section  */}
      <div className=" bg-black pt-24 pb-24 ps-4 pe-4 md:-mt-[680px]  relative z-40">
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
        <div className="max-w-[1200px] mx-auto mt-8 flex xl:flex-row flex-col justify-center items-center gap-3">
          <div>
            <div className="size-[320px] md:size-[678px] border rounded-full border-medium-gray grid place-items-center">
              <div className="size-[250px] md:size-[510px] border rounded-full border-medium-gray grid place-items-center">
                <div className="size-[180px] md:size-[380px] border rounded-full border-medium-gray grid place-items-center">
                  <div className="size-[110px] md:size-[260px] border rounded-full border-medium-gray grid place-items-center">
                    <div className="size-[100px] md:size-[129px] border rounded-full border-medium-gray bg-medium-gray grid place-items-center">
                      {flowerIcon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-2 flex-col justify-center">
            <h1 className="text-5xl text-white text-center">
              We&apos;re here to guide and help you at all times
            </h1>
            <p className="text-lg mt-5 mb-7">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem{" "}
            </p>
            <Button
              text="Download"
              className="w-auto flex-grow-0 lg:max-w-[127px]"
            />
          </div>
        </div>
      </div>

      {/* 4th section  */}
      <div className=" bg-medium-black pt-28 pb-11 ps-4 pe-4 ">
        <div className="max-w-[1110px] mx-auto mb-28">
          <h1 className="text-white text-5xl leading-[64px] font-semibold max-w-[567px] mx-auto text-center">
            Companies we Worked With in SInce 2015
          </h1>

          <div className="mt-16 flex gap-7 mx-auto w-full flex-wrap">
            <div className="flex-1 rounded-[10px] border-black bg-black p-4 grid place-items-center">
              {companyOneIcon}
            </div>
            <div className="flex-1 rounded-[10px] border-black bg-black p-4 grid place-items-center">
              {companyIconTwo}
            </div>
            <div className="flex-1 rounded-[10px] border-black bg-black p-4 grid place-items-center">
              {companyIconThree}
            </div>
            <div className="flex-1 rounded-[10px] border-black bg-black p-4 grid place-items-center">
              {companyIconFour}
            </div>
            <div className="flex-1 rounded-[10px] border-black bg-black p-4 grid place-items-center">
              {companyIconFive}
            </div>
            <div className="flex-1 rounded-[10px] border-black bg-black p-4 grid place-items-center">
              {companyIconSix}
            </div>
          </div>
        </div>
      </div>

      {/* 5th section  */}
      <div className=" bg-black pt-28 ps-4 pe-4 relative">
        <div className="max-w-[1120px]  rounded-[40px] absolute lg:-top-[15%] md:-top-[5%]   left-4 right-4 py-9 md:pl-12 bg-gradient-to-r from-gradient-start to-gradient-end  mx-auto">
          <div className="flex md:flex-row flex-col items-center">
            <div className="text-white text-xl px-4 md:px-0">
              <p>Love our Our Tool?</p>
              <h1 className="text-5xl mt-3 mb-9">
                Fell Free to Join our 15 Days Free Trial
              </h1>
              <Button noGradient={true} className="bg-black" text="Download" />
            </div>
            <div className="w-full hidden md:block">{fingersIcon}</div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center gap-8 mt-[240px] md:mt-[500px] lg:mt-[200px] p-4 ps-4 pe-4">
          <div className="flex-1 w-full flex justify-center">{globeIcon}</div>
          <div className="flex-1">
            <h1 className="text-white text-5xl -mt-[150px] md:mt-0 font-semibold">
              Get In Touch
            </h1>
            <p className="max-w-[503px] mb-7">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem{" "}
            </p>
            <div className="flex flex-col gap-[18px] lg:max-w-[408px]">
              <input
                type="email"
                placeholder="Your Email"
                className="py-3 px-7 bg-medium-black rounded"
              />
              <input
                type="text"
                placeholder="Name"
                className="py-3 px-7 bg-medium-black rounded"
              />

              <textarea
                rows={5}
                placeholder="Name"
                className="py-3 resize-none px-7 bg-medium-black rounded"
              />

              <Button text="Get in touch" className="lg:w-fit" />
            </div>
          </div>
        </div>
      </div>
      {/* footer  */}
      <div className=" bg-medium-black  py-11 ps-4 pe-4 ">
        <div className="max-w-[1110px] w-full mx-auto flex md:flex-row flex-col-reverse gap-4 md:gap-0 items-center justify-between">
          <p>All Rights Reservd @ 2024</p>
          <div className="flex gap-4">
            <div className="p-2 bg-light-black cursor-pointer rounded-full grid place-items-center">
              {twitterIcon}
            </div>
            <div className="p-2 bg-light-black cursor-pointer rounded-full grid place-items-center">
              {linkedInIcon}
            </div>
            <div className="p-2 bg-light-black cursor-pointer rounded-full grid place-items-center">
              {discordIcon}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
