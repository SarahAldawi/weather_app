import { FaLocationDot } from "react-icons/fa6";

function Location({data}) {
const {city:{name}}= data;
  return (
    <div>
      <FaLocationDot /> {name}
    </div>
  );
}

export default Location;
