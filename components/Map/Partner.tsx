const Partner = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-28">
      <div className="flex flex-col w-full lg:w-1/2 items-center">
        <div className="flex h-[180px] items-center">
          <img src="/partner1.png" className="w-[226px]" alt="partner" />
        </div>
        <span className="text-xl lg:text-2xl text-secondary text-center mt-4 px-4 lg:px-16">
          Aqua partners with community leaders to ensure our safety and sustainability standards.
          In addition, each community has direct access to our regional on-ground partners (ensure water quality + perform maintenance).
        </span>
        <button
          className="btn btn-primary lg:w-[300px] lg:h-[65px] text-black mt-8"
        >
          <span className="text-base lg:text-xl lg:text-2xl font-medium">
            Learn More
          </span>
        </button>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 items-center mt-8 lg:mt-0">
        <div className="flex flex-col h-[180px] items-center">
          <span className="text-3xl lg:text-5xl text-secondary">
            Real Impact
          </span>
          <img src="/partner2.png" className="w-[226px]" alt="partner" />
        </div>
        <span className="text-xl lg:text-2xl text-secondary text-center mt-4 px-4 lg:px-16">
          With over 40 years of experience in the field, we’ve seen how access to clean water transforms communties and saves lives.
          Learn more about the communities we serve and the impact Aqua is making worldwide.
        </span>
        <button className="btn btn-primary lg:w-[300px] lg:h-[65px] text-black mt-8"
        >
          <span className="text-base lg:text-xl lg:text-2xl font-medium">
            Learn More
          </span>
        </button>
      </div>
    </div >
  )
};

export default Partner;