const WhatdoWedo = () => {
  return (
    <div className="flex w-full mt-14 bg-[#111827]">
      <div className="w-full flex flex-col px-12 py-12 justify-center">
        <span className="text-2xl text-secondary font-bold text-center">
          What do we do?
        </span>
        <img src="/what_do_we_do_horz.svg" alt="what do we do" className="hidden md:block h-[117px]"/>
        <img src="/what_do_we_do_vert.svg" alt="what do we do" className="block md:hidden h-[580px]"/>
      </div>
    </div>
  );
};

export default WhatdoWedo;
