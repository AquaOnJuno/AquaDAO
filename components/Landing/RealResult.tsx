const RealResult = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-14 px-4 lg:px-8">
      <div className="w-full lg:w-[396px] flex bg-red justify-end">
        <img src="/real_result.png" alt="to be changed" className="w-full"/>
      </div>
      <div className="w-full ml-0 lg:ml-10 flex flex-col justify-center">
        <span className="text-3xl lg:text-4xl text-secondary font-bold" >
          Real Results<br />
        </span>
        <span className="text-3xl lg:text-4xl text-primary font-bold" >
          Measurable Impact.<br />
        </span>
        <span className="text-xl lg:text-2xl text-secondary font-bold">
          <br/>
          Clean water saves lives. It transfroms communities. It strengthens local economies. It brings hope. At AquaDAO we document the entire process. You’ll see each of our projects from start to finish as we upload content and statistics from each community.
        </span>
      </div>
    </div>
  );
};

export default RealResult;
