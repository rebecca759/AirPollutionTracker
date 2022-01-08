import React from "react";
import {Map, Marker,TileLayer,Popup} from "react-leaflet";
import { useState, useEffect, useRef } from "react"
import L from 'leaflet'
import '../../index.css'
import '../../App.css'
import { geosearch } from 'esri-leaflet-geocoder'
import 'leaflet/dist/leaflet.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

function GetIcon(_iconSize, forecast) {
       return L.icon({
        iconUrl: require("../../Static/Icons/"+forecast+".png"),
        iconSize: [_iconSize]
    })
}

const defaultCenter = [0, 0];
const defaultZoom = 4;

const MyMap = () => {
    const [result, setResult] = useState([{}]);
    const[loading,setLoading] = useState(true);
    const mapRef = useRef();

          /**
   * handleOnSearchResuts
   * @param {object} data Results object from esri-leaflet-geocoder
   */

          
  function handleOnSearchResuts(data) {
    console.log('Search results', data);
  }

    useEffect(() => {
        const {current = {}} = mapRef;
        const {leafletElement: map} = current;

        if (!map) {
            console.log('yes no map')
            return;
        }
        const control = geosearch();
        control.addTo(map);
        console.log("added to map")
        control.on('results', handleOnSearchResuts);
        console.log()
        return () => {
        control.off('results', handleOnSearchResuts);
        }
    },[]);

    useEffect(() => {
        fetch("https://api.waqi.info/map/bounds/?latlng=37.090240,-95.712891,-25.274399,133.775131&token=759c2fa2bc832f41476c4460ca1e19d8060bd35d")
          .then((response) => response.json())
          .then(function(d) {setResult(d.data)})
          .catch((error) => console.log(error));
          setLoading(false)
      }, []);
    if (!loading && result.length > 1) {
        // console.log(result)
        // console.log(result.length)
        // result.map((r)=>console.log(r))
        console.log([result[0].lat,result[0].lon])
    }
    const position = [0,0]

    function getColor(aqi) {
        aqi = parseInt(aqi)
        if (0 <= aqi && aqi <= 20) {
            return 'green'
        }
        else if (51 <= aqi && aqi <= 100) {
            return 'yellow'
        }
        else if (101 <= aqi && aqi <= 151) {
            return 'blue'
        }
        else if (151 <= aqi && aqi <= 200){
            return 'red'
        }
        else {
            return 'black'
        }
    }

    if (result.length <= 1) {
        return (
            <div>
              <h3 className="mt-5 text-center">Loading Air Quality Index</h3>
            <Map className='map' ref={mapRef} center={defaultCenter} zoom={3} minZoom={1} style={{height: "80vh", width: "80%"}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
          </Map>
       </div>
          );}
    
    else {
        console.log('here')
        console.log(result)
        return (
            <div className="mt-5">
                <h1>World Air Quality Index</h1>
                
            <Map className="map"
                 center={position}
                 ref={mapRef}
                 zoom={3}
                 minZoom={1}
                 style={{height: "80vh", width: "80%"}}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
    
                {result.map(function(location,i) {
                    return <Marker key={i} position={[location.lat,location.lon]} icon={GetIcon(20,'location-'+getColor(location.aqi))}>
                    <Popup>
                        <h6 className="font-weight-bold">{location.station.name} </h6>
                        <h6>Air quality index: {location.aqi}</h6>
                        <button 
                        onClick= {() => {
                            console.log('heree')
                            var station = location.station.name.split(',')
                            console.log(station)
                            var city = station[-1] === ')' ? station[station.length-2] : station[station.length-1]
                            localStorage.setItem("city", city)
                            localStorage.setItem("aqi",location.aqi)
                            window.location.href = '/details';
                        }}
                        type="button" className="btn btn-outline-secondary btn-sm">
                            Show Details
                            </button>
                    </Popup>
                </Marker>
                })}
                
            </Map>
            <div className="card ref-card">
                <div className="card-body">
                <ul className="ref">
                    <li className="green-blue"><span className="black pl-0 ml-0">Good</span></li>
                    <li className="green"><span className="black">Fair</span></li>
                    <li className="mod"><span className="black">Moderate</span></li>
                    <li className="poor"><span className="black">Poor</span></li>
                    <li className="v-poor"><span className="black">Very poor</span></li>
                    <li className=""><span className="black">Extremely poor</span></li>
                </ul>
                </div>
            </div>
            </div>
        )}
}

export default MyMap;