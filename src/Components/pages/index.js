import React, { useState } from "react";
import "./index.css";
//import Piechart from '../components/Piechart';
import Example from "../Piechart";

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]

function Home() {
  return (
    <>
      <div className="vidboarder">
        <iframe
          className="try"
          src="https://www.youtube.com/embed/unMy_jCVMxM"
        ></iframe>
      </div>
      <div className="effect">
        <h1>Air pollution and Asthma</h1>
        <p>
          What Do I Need to Know About Air Pollution? <br />
          <br />
          The United States Environmental Protection Agency (EPA) defines air
          pollution as “any visible or invisible particle or gas found in the
          air that is not part of the natural composition of air.” Air pollution
          comes from many different sources – some are man-made and some are
          naturally occurring. Air pollution includes gases, smoke from fires,
          volcanic ash and dust particles. Research shows that air pollution can
          worsen asthma symptoms. A study of young campers with moderate to
          severe asthma showed they were 40 percent more likely to have acute
          asthma episodes on high pollution summer days than on days with
          average pollution levels. Another study found that older adults were
          more likely to visit the emergency room for breathing problems when
          summer air pollution was high.
        </p>
        <p>
          How Can Air Pollution Affect My Asthma?
          <br />
          <br />
          Ozone Ozone, a gas, is one of the most common air pollutants. Ozone
          contributes to what we typically experience as "smog" or haze. It is
          most common in cities where there are more cars. It is also more
          common in the summer when there is more sunlight and low winds. Ozone
          triggers asthma because it is very irritating to the lungs and
          airways. It is well known that ozone concentration is directly related
          to asthma attacks. It has also caused the need for more doses of
          asthma drugs and emergency treatment for asthma. Ozone can reduce lung
          function. Ozone can make it more difficult for you to breathe deeply.
          Airborne particles Other forms of air pollution may also trigger your
          asthma. Small particles in the air can pass through your nose or mouth
          and get into your lungs. Airborne particles, found in haze, smoke and
          airborne dust, present serious air quality problems. People with
          asthma are at greater risk from breathing in small particles. The
          particles can make asthma worse. Both long-term and short-term
          exposure can cause health problems such as reduced lung function and
          more asthma attacks.
        </p>
        <p>
          Are There Special Programs for Monitoring Air Pollution? <br />
          <br />
          The EPA reports air pollution levels using the Air Quality Index
          (AQI). AQI reports the level of ozone and other air pollutants. When
          the AQI is 101 or higher, it is dangerous for people with asthma. You
          may have to change your activities and medicines. If you have asthma,
          your symptoms can worsen even when ozone levels are moderate (AQI
          51-100). Many local weather forecasts warn the public about high air
          pollution days. You can find this information anytime at AirNow.gov.
          Throughout the United States, when air pollution is high, we have
          AirNow Action Days. These forecast high air pollution days with
          unhealthy air. During Action Days, people with asthma should limit
          their time outdoors, especially from 11 a.m. to 8 p.m. Stay in a
          well-ventilated, preferably air-conditioned, building. Most of all, do
          not exercise outdoors on Action Days.
        </p>
        <p>
          Should I Worry About Air Pollution in My Work Environment? <br />
          <br />
          Yes, but your concern should be appropriate to the type of environment
          you work in. If you work with certain chemicals, sprayed substances,
          powders or known carcinogens or allergens, your risk may be high.
          Occupational Health and Safety Administration (OSHA), the EPA of the
          workplace, requires your employer to reduce your risk. Even if you
          work in what seems to be a chemical-free environment, you may have
          exposure to indoor or outdoor air pollution. No matter how old the
          building is, there may be hidden indoor air pollution. Buildings may
          have mold spores or cockroaches. These are both powerful allergens.
          Dust mites are in most indoor areas. New carpet may release toxic
          fumes. Poorly filtered air systems may spread allergens and irritants.
          If they are damp, they may actually breed mold spores. If your
          employer allows tobacco smoking in the building, smoke may pollute the
          air you breathe.
        </p>{" "}
      </div>
      <div className="row">
        <div className="card">
          <div className="card_img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kVpOPbaytSFRtEuFqBmsWAHXWZof892bJA&usqp=CAU"></img>
          </div>
          <div className="title">
            <h2>What really is asthma?</h2>
          </div>
          <div className="des">
            <p>
              You can Add Desccription Here...You can Add Desccription
              Here...You can Add Desccription Here...You can Add Desccription
              Here...
            </p>
            <button>Read More...</button>
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kVpOPbaytSFRtEuFqBmsWAHXWZof892bJA&usqp=CAU"></img>
          </div>
          <div className="title">
            <h2>What really is asthma</h2>
          </div>
          <div className="des">
            <p>
              You can Add Desccription Here...You can Add Desccription
              Here...You can Add Desccription Here...You can Add Desccription
              Here...
            </p>
            <button>Read More...</button>
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            <img src="https://cdn.pixabay.com/photo/2018/01/09/03/49/the-natural-scenery-3070808_1280.jpg"></img>
          </div>
          <div className="title">
            <h2>What really is asthma</h2>
          </div>
          <div className="des">
            <p>
              You can Add Desccription Here...You can Add Desccription
              Here...You can Add Desccription Here...You can Add Desccription
              Here...
            </p>
            <button>Read More...</button>
          </div>
        </div>
      </div>
      <Example data={data}/>
    </>
  );
}
export default Home;
