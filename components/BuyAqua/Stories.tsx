import SwapBox from "components/Landing/Hero/SwapBox";

const Stories = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full p-24">
      <div className="flex flex-col w-full lg:w-1/2 justify-center">
        <span className="text-secondary text-5xl font-semibold">
          Buy&nbsp;
          <span className="text-primary">
            $AQUA
          </span>
        </span>
        <span className="text-secondary text-lg font-medium mt-6">
          Buy your $AQUA tokens today to help us<br />
          bring clean water to every person on the planet.
        </span>
        <span className="text-secondary text-5xl font-black mt-24">
          Stories + &nbsp;
          <span className="text-primary">
            insights.
          </span>
        </span>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center">
        <SwapBox />
      </div>
    </div>
  )
};

export default Stories;