import React, { useState, useEffect } from "react";
import { TimerContainer } from "components/NftLaunch/TimerContainer";

const NftLaunch = () => {
  // const [time, setTime] = useState<number>(7);
  // const [newTime, setNewTime] = useState<number>(0)
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  // const [message, setMessage] = useState<string>("");
  // const timeToDays = time * 60 * 60 * 24 * 1000;

  let countDownDate = 1657576800000;

  useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();
      const offset = new Date().getTimezoneOffset()*60*1000;
      now += offset;

      var difference = countDownDate - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        // setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    })

    return () => {
      clearInterval(updateTime);
    }
  }, []);
  return (
    <div className="w-full md:w-2/3 p-2 flex flex-col items-center" >
      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />

      <span className="mt-2 md:mt-6 text-5xl text-secondary font-black text-center">
        Secure Your Whitelist Spot Today
      </span>
      <span className="text-2xl text-secondary font-semibold mt-20 text-center">
        <span className="font-bold">Introducing the “AquaNauts.”</span>
        <br />
        Aqua’s genesis mint hosted on Stargaze July 11th.
        <br /><br />
        <span className="font-bold">Owners of AquaNauts receive:</span>
        <br /><br />
        *2% of Total $Aqua supply<br />
        *Pre-IDO pricing on our upcoming swap.<br />
        *Airdrops, special allocations, and more from our upcoming Social Impact <br />
        DAOs such as Casa and Summit.
        <br /><br />
        We’re committed to ensuring our NFTs are packed with<br />
        value and can’t wait to see them out in the wild.
        <br /><br />
        Secure your spot today!<br />
        Price: $100 USD (Equivalent in $STARS)<br />
        Max Mint: 3 Per WL
      </span>
      <div className="flex-col w-full md:w-[718px] flex justify-center items-center mt-14">
        <button className="btn btn-primary w-[250px] h-[62px] text-black" >
          JOIN WHITELIST
        </button>
        <img src="/nft.png" alt="nft" className="mt-14" />
      </div>
    </div>
  );
};

export default NftLaunch;