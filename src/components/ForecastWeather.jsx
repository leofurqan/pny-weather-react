import React from 'react'
import {Container, Row, Card} from 'react-bootstrap'
import ForeacastWeatherItem from './ForecastWeatherItem'

export default function ForecastWeather() {
  return (
    <Container>
        <Row>
            <Card className='col-md-12 bg-info-subtle'>
                <Row className='justify-content-center '>
                    <ForeacastWeatherItem />

                    <ForeacastWeatherItem />

                    <ForeacastWeatherItem />

                    <ForeacastWeatherItem />
                </Row>
            </Card>
        </Row>
    </Container>
  )
}
