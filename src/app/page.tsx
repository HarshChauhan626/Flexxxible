import LandingPageCard from "@/components/landing/LandingPageCard";

const Page = () => {
  return (
    <div>
      <Hero />
      <JoinUsOnChatPlatformSection />
      <div className="max-w-[1000px] mx-auto pb-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <LandingPageCard />
          <LandingPageCard />
        </div>
      </div>
      {/* <ConnectingToYouBestSection /> */}
      <BetterWayToHireSection />
      <StartHiringToday />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="max-w-[800px] mt-20 w-full mx-auto text-center flex flex-col">
      <TitleChip
        title={"Over 3 million ready-to-work developers in our community!"}
      />
      <div className="text-center mt-12 flex-wrap text-5xl flex-col mx-auto">
        <div>
          We are <strong className="font-extrabold">India's largest</strong> and
        </div>
        fastest
        <strong className="font-extrabold"> growing community</strong>
        <div>of developers</div>
      </div>
      <div className="text-center text-lg font-semibold my-10 mx-auto">
        Connect with a community of millions of top-rated developers around the
        world.
      </div>
      <div className="mx-auto w-full">
        <div className="flex flex-col mx-2 lg:flex-row lg:pt-6 lg:items-stretch">
          <div className="lg:w-3/4 lg:flex lg:items-center">
            <input
              type="text"
              className="w-full px-4 py-4 mb-4 lg:mb-0 lg:mr-4 rounded-xl border border-black focus:outline-none focus:border-black"
              placeholder="Your email"
            />
          </div>

          <div className="lg:w-1/4 lg:flex lg:items-center">
            {/* Button */}
            <button className="w-full bg-black hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-xl focus:outline-none focus:ring focus:ring-blue-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TitleChipProps {
  title: string;
}

const TitleChip = ({ title }: TitleChipProps) => {
  return (
    <div className="py-3 px-6 mx-4 lg:mx-auto bg-yellow-300 rounded-full text-center">
      {title}
    </div>
  );
};

const JoinUsOnChatPlatformSection = () => {
  return (
    <div className="max-w-[1280px] mt-20 mb-32 py-44 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left column for "We speak" and other divs */}
      <div className="lg:col-span-1 lg:pl-10">
        <div className="text-8xl font-light">
          <div>We speak</div>
          <div>We listen</div>
          <div>We discuss</div>
        </div>
      </div>

      {/* Right column for paragraph and buttons */}
      <div className="lg:col-span-1 lg:pr-10 flex flex-col justify-center ">
        <div className="text-start text-xl my-2">
          Join our community for developers and tech enthusiasts. Engage in
          discussions, share insights, and grow together. Click below to join us
          on Telegram!
        </div>
        {/* Buttons in a row on large screens and column on small screens */}
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-start mt-4 mb-4 lg:mt-10">
          <button className="w-full bg-black px-8 py-4 flex items-center rounded-full justify-center text-white lg:mr-4 lg:mb-0">
            Join Telegram
          </button>
          <button className="w-full bg-black py-4 px-8 flex items-center rounded-full justify-center text-white mt-2 lg:mt-0">
            Join Discord
          </button>
        </div>
      </div>
    </div>
  );
};

const ConnectingToYouBestSection = () => {
  return (
    <div className="max-w-[892px] mt-20 w-full mx-auto text-center flex flex-col">
      <TitleChip title={"Trusted by top brands and businesses"} />
      <div className="text-center mt-4 flex-wrap text-5xl flex-col mx-auto">
        Connecting brands and <br /> business builders with the <br /> world’s
        top developers
      </div>
      <div className="text-center text-lg font-light mt-4 mx-auto">
        The world’s leading brands use Dribbble to hire creative talent. Browse
        millions of top-rated
        <br />
        portfolios to find your perfect creative match.
      </div>
    </div>
  );
};

const StartHiringToday = () => {
  return (
    <div className="flex flex-col bg-yellow-400 mt-32 mb-20 h-[650px] justify-center">
      <div className="text-center text-7xl pb-8 font-serif">
        Start hiring today
      </div>
      <div className="text-center text-xl">
        Browse portfolios and engage with top developers today.
      </div>
      <div className="flex flex-col my-4 mx-4 gap-2 py-8 lg:flex-row justify-center lg:gap-6">
        <button className="bg-black px-5 py-4 my-2 flex items-center rounded-full justify-center text-white">
          Get started now
        </button>
        <button className="bg-white px-5 py-4 my-2 flex items-center rounded-full justify-center">
          Learn about hiring
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
        <div className="flex text-center text-xl">Are you a developer?</div>
        <div className="underline text-xl">
          <a href="#">Join Flexxxible</a>
        </div>
      </div>
    </div>
  );
};

const BetterWayToHireSection = () => {
  const TitleWithSubtitleCol = (title: string, subtitle: string) => {
    return (
      <div className="flex flex-col">
        <div className="text-xl font-semibold">{title}</div>
        <div className="py-6">{subtitle}</div>
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
      <div className="flex text-5xl">
        A better way to <br />
        hire developers
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {TitleWithSubtitleCol(
          "The #1 job board for design talent",
          "Get your job listings in front of millions of top-rated designers looking for their next role with an average of 1.1K targeted clicks per month."
        )}
        {TitleWithSubtitleCol(
          "Seamless designer search filters",
          "No more sifting through piles of resumes. Our advanced search & filtering options make it easy to find the right designer in just a few clicks."
        )}
        {TitleWithSubtitleCol(
          "Top-quality candidates",
          "Your brand deserves only the best. Engage with leading designers and save your favorite candidates for future projects – all in one place."
        )}
      </div>
    </div>
  );
};

const Testimonials = ()=>{
  return <div>

  </div>;
}

export default Page;
