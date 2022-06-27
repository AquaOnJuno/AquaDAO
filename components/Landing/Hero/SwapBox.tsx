const SwapBox = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="w-1/2">
        <span className="text-secondary text-2">
          You pay
        </span>
        <select className="select w-full max-w-xs mt-2 text-lg">
          <option disabled selected>USDC</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <button className="btn btn-primary w-full h-[57px] btn-wide text-secondary mt-6"
        // onClick={}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  )
};

export default SwapBox;