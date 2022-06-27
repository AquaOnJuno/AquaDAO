import Title from "components/Map/Title";
import GoogleMap from "components/Map/GoogleMap";
import Partner from "components/Map/Partner";
import FirstHand from "components/Map/FirstHand";

const Map = () => {
  return (
    <div className="w-full px-4">
      <Title />
      <GoogleMap />
      <Partner />
      <FirstHand />
    </div>
  )
};

export default Map;