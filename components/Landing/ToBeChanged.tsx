const ToBeChanged = () => {
  return (
    <div className="flex w-full mt-14 px-8">
      <div className="w-1/2">
        <span className="text-5xl text-secondary font-bold" >
          ToBeChanged<br />
        </span>
        <span className="text-6xl text-primary font-bold leading-[80px]" >
          Measurable Impact.<br/>
        </span>
        <span className="text-2xl text-secondary font-bold pt-5">
          Our team has over 40 years of experience in the nonprofit sector. We understand the pain points and limitations nonprofits face.  That’s why we created AQUA. By combining innovative financial tools with robust incentive systems, nonprofits will now be able to access entirely new capital markets as they scale their operations.
        </span>
      </div>
      <div className="w-1/2 flex bg-red justify-end">
        <img src="/tobechanged.png" alt="to be changed" className="h-[319px]" />
      </div>
    </div>
  );
};

export default ToBeChanged;
