import React, { Component} from 'react';
import HomeDisplay from './HomeDisplay';

type weather = {
feels_like: number,
humidity: number,
pressure: number,
temp: number,
temp_max: number,
temp_min: number
}
type StateType = {
    imageUrl: string,
    mainWeather: weather
}
export default class HomeIndex extends Component<{}, StateType> {
    constructor(props: any){
    super(props)
    this.state = {
        imageUrl: '',
        mainWeather: {
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0
        }
    }
    }
    componentDidMount(){
        const location = navigator.geolocation.getCurrentPosition(this.weatherData)
    }
    weatherData = (pos: any) => {
        let crd = pos.coords;
        fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${crd.longitude}&lat=${crd.latitude}&date=2014-02-01&api_key=79HsecS8LBbHbGgRLuQRPxAUlY6cp5cQPItLZ4Np`)
        .then((response)=>{
           if(!response.ok){
            throw Error("error fetching images")
           }
            return response.json()
        })
        .then((data)=>{
            console.log("Data", data)
            this.setState({imageUrl: data.url})

        }).catch(error=>{
            throw Error(error.message)
        })

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=79161887469fcc530c9dfbad7392edb7&units=imperial`)
        .then((response)=>{
            if(!response.ok){
             throw Error("error fetching weather")
            }
             return response.json()
         })
         .then((data)=>{
             console.log("Data2", data)
             this.setState({mainWeather: data.main})
         })
         .catch(error=>{
             throw Error(error.message)
         })
    }
    
    render(){
        console.log('NASA', this.state.imageUrl)
        console.log('wearher', this.state.mainWeather)
        return (
        <section >
            <h2 className="App-header" >Main Weather and Nasa Image</h2>
          
          <HomeDisplay imageUrl={this.state.imageUrl}
        
          mainWeather={this.state.mainWeather}/>
        
        </section>
        )
    }
}
