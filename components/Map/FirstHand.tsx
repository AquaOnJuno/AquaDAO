const FirstHand = () => {
  return (
    <div className="flex flex-col w-full mt-32 items-center">
      <span className="text-3xl lg:text-5xl text-secondary font-black text-center">
        Come see our work
        <span className="text-primary">
          &nbsp;firsthand.
        </span>
      </span>
      <img src="/this_is_me.png" className="w-[760px] mt-20" alt="this is me" />
      <button 
        className="btn btn-primary lg:w-[300px] lg:h-[65px] text-black mt-9"
      >
        <span className="text-xl lg:text-2xl font-medium">
          Learn More
        </span>
      </button>
    </div>
  )
};

export default FirstHand;