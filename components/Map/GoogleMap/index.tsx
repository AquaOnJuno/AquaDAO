import SimpleMap from "./Map"

const locations = require("./locations.json");

const GoogleMap = () => {
  return (
    <div className="w-full mt-9">
      <SimpleMap locations={locations} />
    </div>
  )
};

export default GoogleMap;