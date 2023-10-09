import Button from "@/components/common/Button";
import CaraouselCards from "@/components/landing/CaraouselCards";
import LandingPageCard from "@/components/landing/LandingPageCard";
import Image from "next/image";
import CaraouselCSS from "../components/landing/style/caraousel.module.css";

const Page = () => (
  <div className="flex-center my-10 justify-center w-full flex-col mx-auto">
    <div className="flex flex-row mx-4 mt-12 mb-4 justify-center">
      <div className="py-3 px-6 bg-yellow-300 rounded-full text-center">
        Over 3 million ready-to-work developers in our community!
      </div>
    </div>
    <div className="text-center mt-12 flex-wrap text-8xl flex-col">
      <div>
        We are <strong className="font-extrabold">India's largest</strong> and
      </div>
      fastest
      <strong className="font-extrabold"> growing community</strong>
      <div>of developers</div>
    </div>

    <div className="flex flex-col">
      <div className="text-center text-lg font-semibold my-10">
        Connect with a community of millions of top-rated developers around the
        world.
      </div>
      <div className="flex flex-row justify-center gap-4">
        <input
          className="p-3 rounded-xl border-black-100 border-solid border"
          placeholder="Email"
        ></input>
        <div className="bg-black flex rounded-lg px-6 py-2 text-white align-middle items-center">
          Join Us
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center mt-40 mb-40 mx-10 max-w-[1280px] lg:flex-row gap-12 lg:justify-center">
      <div className="flex-col text-8xl font-light">
        <div>We speak</div>
        <div>We listen</div>
        <div>We discuss</div>
      </div>
      <div className="flex flex-col ">
        <div className="text-start text-xl my-2">
          Join our community for developers and tech enthusiasts. Engage in
          discussions, share insights, and grow together. Click below to join us
          on Telegram!
        </div>
        <div className="flex flex-col gap-2 md:flex-row lg:flex-row justify-start mt-4 mb-4 lg:mt-10">
          <div className="bg-black px-8 py-4 mr-4 flex items-center rounded-full justify-center text-white">
            Join Telegram
          </div>
          <div className="bg-black py-4 px-8 ml-4 flex items-center rounded-full justify-center text-white">
            Join Discord
          </div>
        </div>
      </div>
    </div>
    <div className="lg:mx-10">
      <div className="grid lg:grid-cols-2 lg:gap-10">
        <LandingPageCard />
        <LandingPageCard />
      </div>
    </div>
    <div className="flex flex-col bg-yellow-400 mt-32 mb-20 h-[650px] justify-center">
      <div className="text-center text-7xl pb-8 font-serif">
        Start hiring today
      </div>
      <div className="text-center text-xl">
        Browse portfolios and engage with top developers today.
      </div>
      <div className="flex flex-col my-4 mx-4 gap-2 py-8 lg:flex-row justify-center lg:gap-6">
        <div className="bg-black px-5 py-4 my-2 flex items-center rounded-full justify-center text-white">
          Get started now
        </div>
        <div className="bg-white px-5 py-4 my-2 flex items-center rounded-full justify-center">
          Learn about hiring
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
        <div className="flex text-center text-xl">Are you a developer?</div>
        <div className="underline text-xl">
          <a href="#">Join Flexxxible</a>
        </div>
      </div>
    </div>
    {/* <div
      className={`flex flex-row overflow-hidden ${CaraouselCSS.animateSlideRight}`}
    >
      <CaraouselCards title={"Animation"} imageURL={"nothing"} />
      <CaraouselCards title={"Java"} imageURL={"nothing"} />
      <CaraouselCards title={"Kafka"} imageURL={"nothing"} />
      <CaraouselCards title={"Redis"} imageURL={"nothing"} />
      <CaraouselCards title={"Something else"} imageURL={"nothing"} />
      <CaraouselCards title={"Java"} imageURL={"nothing"} />
      <CaraouselCards title={"Kafka"} imageURL={"nothing"} />
      <CaraouselCards title={"Animation"} imageURL={"nothing"} />
      <CaraouselCards title={"Java"} imageURL={"nothing"} />
    </div> */}
  </div>
);

export default Page;
