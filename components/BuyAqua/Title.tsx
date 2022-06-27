const Title = () => {
  return (
    <div className="flex flex-col w-full">
      <span className="w-full text-secondary text-xl font-semibold text-center">
        Join us on one of our transformation trips to experience the impact of our work firsthand.
      </span>
      <div
        className="flex w-full bg-cover bg-center py-16"
        style={{ backgroundImage: "url('/buyaqua_background.png')" }}
      >
        <span className="w-full text-black text-4xl font-bold text-center">
          Want to help shape the future of AquaDAO?<br/>
          Buy your $AQUA tokens today.
        </span>
      </div>
    </div>
  )
};

export default Title;