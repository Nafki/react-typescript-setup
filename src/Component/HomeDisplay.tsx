 import { readdirSync } from 'fs';
import React from 'react';
import { Container, Row, Col} from 'react-grid-system';

 //import HomeIndex from './HomeIndex';

 type weather = {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
    }
 
 type PropType = {
    imageUrl: string,
    mainWeather: weather
    
}

 const HomeDisplay = (props: PropType) => {
    console.log('pro', props.mainWeather.temp)
    const {temp,temp_max,temp_min,feels_like,humidity, pressure} = props.mainWeather

    return(
        <Container className="App-body" >
                <img src={props.imageUrl} alt="nasaimages" width="300" height="200"/> 
                <Row >
                    <Col>
                    <p>Temprature</p>{temp}
                    </Col>
                    <Col>
                    <p>Maximun</p>{temp_max}
                    </Col>
                    <Col>
                    <p>Minimum</p>{temp_min}
                    </Col>
                </Row>
               
                <Row>
                <Col>
                    <p>It Feels Like</p>{feels_like}
                    </Col>
                    <Col >
                    <p>Humidity</p>{humidity}
                    </Col>

                    <Col >
                    <p>Pressure</p>{pressure}
                    </Col>
                    </Row>
    </Container>

    )
}
export default HomeDisplay
