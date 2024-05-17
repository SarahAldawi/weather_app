import Card from "./Card";

const Forecast = ({ data }) => {

  return (
    <div className="forecast flex flex-row">
      <Card data={data} />
    </div>
  );
};

export default Forecast;
