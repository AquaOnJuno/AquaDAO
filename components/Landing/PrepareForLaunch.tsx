const PrepareForLaunch = () => {
  return (
    <div className="flex w-full flex flex-col justify-center mt-14">
      <span className="text-xl text-secondary font-bold text-center">
        In the meantime, join us on social media, in order to solve big problems,
      </span>
      <div className="w-1/5 flex justify-between mt-8">
        {Array.from(Array(5), (e, i) => {
          return (
            <div className="w-10 h-10 bg-primary rounded-lg" />
          )
        })}
      </div>
      <span className="text-4xl text-secondary font-bold mt-14">
        Prepare for 
        <span className="text-primary">
          &nbsp;launch
        </span>
      </span>
    </div>
  );
};

export default PrepareForLaunch;
