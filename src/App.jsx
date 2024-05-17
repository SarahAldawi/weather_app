import { Forecast, Header, Map, OtherCities, WeekReport } from "./components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Autosuggest from "react-autosuggest";

function App() {
  const [city, setCity] = useState("Kairo");
  const [inputCity, setInputCity] = useState("");
  const handleInputCity = (e) => {
    setInputCity(e.target.value);
  };
  const handleSearch = () => {
    setCity(inputCity);
    setInputCity("")
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["weatherData", city],
    queryFn: async () => {
      try {
        const response = await axios(
          `https://weather.algobook.info/forecast/${city}`
        );
        return response.data;
      } catch (error) {
        throw new Error("Error fetching the data");
      }
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching</div>;
  }
  return (
    <div className="container">
      {/* <Header data={data} /> */}
      <form>
        <input
          type="text"
          placeholder="Search"
          value={inputCity}
          onChange={handleInputCity}
        />
        <button onClick={handleSearch}>search</button>
      </form>
      <div className="grid grid-flow-col">
        <Forecast data={data} />
        <WeekReport data={data} />
      </div>
      <Map />
      {/* <OtherCities /> */}
    </div>
  );
}

export default App;
