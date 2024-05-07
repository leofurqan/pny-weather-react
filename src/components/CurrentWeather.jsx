import React from "react";
import { Card, Row, Image } from "react-bootstrap";

export default function CurrentWeather({temperature}) {
  return (
    <Card className="bg-warning-subtle">
      <Row className="align-items-center ms-5">
        <div className="col-md-10">
          <h2>{temperature}&deg;</h2>
          <p>Lahore, Pakistan</p>
        </div>

        <div className="col-md-2">
          <Image style={{width: "100%"}} src="https://cdn.weatherapi.com/weather/64x64/day/113.png" />
        </div>
      </Row>
    </Card>
  );
}
