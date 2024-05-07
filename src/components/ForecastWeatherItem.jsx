import React from "react";
import {Col, Image} from 'react-bootstrap'

export default function ForecastWeatherItem() {
  return (
    <Col md={1} className="d-flex flex-column justify-content-center">
      <h3 className="text-center">23&deg;</h3>
      <Image src="https://cdn.weatherapi.com/weather/64x64/day/113.png" />
      <p className="text-center">12:00 PM</p>
    </Col>
  );
}
