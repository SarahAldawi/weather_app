import main from "../assets/images/Logo.svg";
function Card(data) {
  const {
    city: { id, name, country },
    forecast: [Today, Tomorrow],
  } = data.data;
  const dateString = Today.day;
  const dateObj = new Date(dateString);
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const day = dateObj.getDate();
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th");

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl ml-5">
      <img src={main} alt="" /> <figure></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2><p>{country}</p>
        <h1>
          {month},{dayWithSuffix}
        </h1>
        <h1>{Today.maxTempCelsius}°C</h1>
        <p>{Today.windAverageKmh}Kmh</p>
        <p>{Today.WindDirection}</p>
        
      </div>
    </div>
  );
}

export default Card;
