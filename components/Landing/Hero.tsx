import {
  useRouter
} from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="flex w-full px-14">
      <div className="flex flex-col w-1/2">
        <span className="text-6xl text-[#FCFFFF] font-bold">
          Bringing
          <i className="font-normal">&nbsp;clean</i>
          &nbsp;water to
          <span className="font-normal">&nbsp;every</span>
          &nbsp;person <br />
          <span className="text-primary">on the planet.</span>
        </span>
        <span className="text-xl text-[#F3F4F6] font-normal mt-5">
          Join us as we revolutionize charity and save countless lives.
        </span>
        <div className="flex w-full mt-12">
          <button className="btn btn-primary w-[250px] h-[62px] btn-wide text-black"
            onClick={() => router.push("/buy")}
          >
            Buy $AQUA Tokens
          </button>
          <button className="btn btn-secondary w-[180px] h-[62px] ml-8 text-black">Learn More</button>
        </div>
        <div className="flex w-full mt-12">
          <span className="text-secondary text-3xl font-bold">
            We’re flipping the <span className="text-primary">charity world upside down</span>
          </span>
        </div>
      </div>
      <div
        className="flex w-1/2  bg-cover bg-center"
        style={{ backgroundImage: "url('./swap_background.png')" }}
      >

      </div>
    </div>
  );
};

export default Hero;
