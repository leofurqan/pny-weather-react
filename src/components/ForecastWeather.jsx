import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import ForeacastWeatherItem from "./ForecastWeatherItem";

export default function ForecastWeather({ hourly }) {
  return (
    <Container>
      <Row>
        <Card className="col-md-12 bg-info-subtle">
          <Row className="justify-content-center ">
            {hourly.map((hour) => (
              <ForeacastWeatherItem
                temperature={hour.temp_c}
                condition={hour.condition.icon}
                time={hour.time}
              />
            ))}
          </Row>
        </Card>
      </Row>
    </Container>
  );
}
