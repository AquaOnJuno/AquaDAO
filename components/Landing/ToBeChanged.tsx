const ToBeChanged = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full mt-14 px-4 lg:px-8">
      <div className="w-full lg:w-1/2">
        <span className="text-3xl lg:text-5xl text-secondary font-bold" >
          ToBeChanged<br />
        </span>
        <span className="text-4xl lg:text-6xl text-primary font-bold lg:leading-[80px]" >
          Measurable Impact.<br/>
        </span>
        <span className="text-xl lg:text-2xl text-secondary font-bold pt-5">
          Our team has over 40 years of experience in the nonprofit sector. We understand the pain points and limitations nonprofits face.  That’s why we created AQUA. By combining innovative financial tools with robust incentive systems, nonprofits will now be able to access entirely new capital markets as they scale their operations.
        </span>
      </div>
      <div className="w-full lg:w-1/2 flex bg-red justify-end">
        <img src="/tobechanged.png" alt="to be changed" className="w-full lg:w-[396px]" />
      </div>
    </div>
  );
};

export default ToBeChanged;
