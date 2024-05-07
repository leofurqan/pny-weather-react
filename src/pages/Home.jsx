import React from "react";
import Header from "../components/Header";
import { Container, Row } from "react-bootstrap";
import CurrentWeather from "../components/CurrentWeather";
import ForecastWeather from "../components/ForecastWeather";
import { useEffect, useState } from "react";

export default function Home() {
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState("");
  const [hourlyData, setHourlyData] = useState([])

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=51aa2d4f8ce640cb891123540232306&q=lahore"
    )
      .then(async (res) => {
        var data = await res.json();
        setTemp(data.current.temp_c);
        setCondition(data.current.condition.icon)
        setHourlyData(data.forecast.forecastday[0].hour)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Header />
      <Container>
        <Row>
          <CurrentWeather temperature={temp} condition={condition} />
        </Row>

        <Row className="mt-5">
          <ForecastWeather hourly={hourlyData} />
        </Row>
      </Container>
    </>
  );
}
