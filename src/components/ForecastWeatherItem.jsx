import React from "react";
import {Col, Image} from 'react-bootstrap'

export default function ForecastWeatherItem({temperature, condition, time}) {
  return (
    <Col md={1} className="d-flex flex-column justify-content-center">
      <h3 className="text-center">{temperature}&deg;</h3>
      <Image src={condition} />
      <p className="text-center">{time}</p>
    </Col>
  );
}
