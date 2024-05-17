import { FiSun } from "react-icons/fi";
import { FaCloudRain } from "react-icons/fa";

function WeekReport(data) {
  const { forecast } = data.data;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5 ">
      {forecast.map((item) => (
        <div key={item.day} className="rounded-lg border flex">
          <div className="flex flex-xol p-2 bg-white-100 rounded-box items-center p-4 ">
            <h1 className="mx-2">{item.formattedDay}</h1>
            <h1>{item.maxTempCelsius}°C</h1>
          </div>
          <div className="self-center">
            {item.forecastText == "Clear sky" ? (
              <FiSun />
            ) : item.forecastText == "Nearly clear sky" ? (
              <FiSun />
            ) : item.forecastText == "Light rain showers" ? (
              <FaCloudRain />
            ) : item.forecastText == "Light rain" ? (
              <FaCloudRain />
            ) : (<span></span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeekReport;
///Clear sky///Overcast//Halfclear sky//early clear sky//Variable cloudiness///Moderate rain showers
///Moderate rain//Variable cloudiness//Light rain showers/Light rain
