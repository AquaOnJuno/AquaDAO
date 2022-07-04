const NftLaunch = () => {
  return (
    <div className="w-full md:w-2/3 p-4 flex flex-col items-center" >
      <span className="text-5xl text-secondary font-black text-center">
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
        <img src="/nft.png" alt="nft" className="mt-14"/>
      </div>
    </div>
  );
};

export default NftLaunch;