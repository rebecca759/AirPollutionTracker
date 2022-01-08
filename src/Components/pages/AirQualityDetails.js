import React from "react";
import { useState, useEffect } from "react";
import { VictoryPie } from "victory";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../../index.css";
import DetailsProvider from "../DetailsProvider";
import "../details.css";
import Example from "../Piechart";

const AirQualityDetails = () => {
  const [result, setResult] = useState([{}]);
  const [loading, setLoading] = useState(false);

  const calcColor = (percent, start, end) => {
    let a = percent / 100,
      b = (end - start) * a,
      c = b + start;

    //return an CSS hsl color string
    return "hsl(" + c + ", 100%, 50%";
  };

  const score = parseInt(localStorage.getItem("aqi"));
  var city = localStorage.getItem("city");
  console.log(city);

  function getMode(aqi) {
    aqi = parseInt(aqi);
    if (0 <= aqi && aqi <= 20) {
      return "Good";
    } else if (51 <= aqi && aqi <= 100) {
      return "Fair";
    } else if (101 <= aqi && aqi <= 151) {
      return "Moderate";
    } else if (151 <= aqi && aqi <= 200) {
      return "Poor";
    } else {
      return "Very Poor";
    }
  }

  var text = getMode(score);
  var data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ]

  var refs = {
    "h": "Hydrogen",
    "pm25": "Particle Matter (PM 25)",
    "w":"Tungsten",
    "no2": "Nitrogen Dioxide",
    "so2":"Sulfur Dioxide",
    "co": "Carbon Monoxide"
  }

  useEffect(() => {
    fetch(`https://api.waqi.info/feed/${city}/?token=759c2fa2bc832f41476c4460ca1e19d8060bd35d`)
      .then((response) => response.json())
      .then(function(d) {
        setResult(d.data);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  console.log(result);
  var res = result;
  var info = result.iaqi;
  console.log(info);
  if (info !== undefined) {
    // console.log(info.co.v);  
    var summ = 0
    data = [];

    for (const key in info) {
      if (key === 'p') {continue}
      console.log(key,info[key].v)
      var cur = {"name":key,"value": info[key].v}
      data.push(cur)
      if (data.length === 7) {break}
    }
    console.log(data)
    for (var val in data) {
        summ += parseInt(val)
    }
    var other = 100-summ
    console.log(other)
    data.push({name: "Other",value:other})
  }
  if (info !== undefined) {
    return (
      <div>
        <h1 className="mt-4">{city} Air Quality Details</h1>
        <div className="row mt-3 text-center">
          <div className="col-md-5"></div>
          <div className="prog ml-5">
            <DetailsProvider valueStart={0} valueEnd={score}>
              {(value) => (
                <CircularProgressbar
                  className="black"
                  value={value}
                  text={text}
                  circleRatio={value / 100}
                  styles={
                    ({
                      trail: {
                        strokeLinecap: "butt",
                        transform: "rotate('120deg)",
                        transformOrigin: "center center",
                      },
                      path: {
                        strokeLinecap: "butt",
                        transform: "rotate('120deg)",
                        transformOrigin: "center center",
                        stroke: calcColor(value, 0, 120),
                      },
                      text: {
                        fill: "#505050",
                        fontSize: "18px",
                      },
                    },
                    buildStyles({
                      pathColor: calcColor(value, 0, 120),
                      trailColor: "#eee",
                      strokeLinecap: "butt",
                    }))
                  }
                  strokeWidth={10}
                />
              )}
            </DetailsProvider>
          </div>
        </div>
        <div className="card bg-light mb-3 detail-card">
          {/* <div className="card-header">Header</div> */}
          <div className="card-body">
            <h5 className="card-title text-center mb-3">Gases affecting air quality</h5>
            <div className="row ml-4">
              <div className="col-4">
                <ul className="detail-list mt-5">
                    {data.map((item,i) => {
                      var key = data[i].name;
                      if (key in refs) {
                        key = refs[key];
                      }
                      return(
                        <li>{key}: {data[i].value}</li>
                      )
                    })}
                </ul>
              </div>
              <div className="col pie-chart">
                <Example data={data}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <h2 className="mt-5 ml-5 text-center">
        Result loading <img src="../../Static/loading.gif" alt="" />
      </h2>
    );
  }
};

export default AirQualityDetails;
