import React,{useState} from 'react';
import "./Atshma.css";
import Slideshow from '../SlideImage';


function AirPollution() {
    return (
        <>
        <div className='Container'>
            <h1> Air Pollution</h1>
            {/*  first section */}
            <div className='cardBox'>
            <div className="card">
                <div className="cardName"> <h2> What is Air Pollution?</h2> </div>
                <div className="pargh"> 
                    <p>
                    Air pollution is contamination of the indoor or outdoor environment by any chemical, physical or
                     biological agent that modifies the natural characteristics of the atmosphere. Household combustion
                    devices, motor vehicles, industrial facilities and forest fires are common sources of air pollution.
                    Pollutants of major public health concern include particulate matter, carbon monoxide, ozone, 
                    nitrogen dioxide and sulfur dioxide. Outdoor and indoor air pollution cause respiratory and 
                    other diseases and is an important source of morbidity and mortality.
                    </p>
                    <p>
                    Air pollution kills an estimated seven million people worldwide every year. WHO data shows that 
                    almost all of the global population (99%) breathe air that exceeds WHO guideline limits containing
                     high levels of pollutants, with low- and middle-income countries suffering from the highest 
                     exposures. WHO is supporting countries to address air pollution.
                     From smog hanging over cities to smoke inside the home, air pollution poses a major threat to 
                     health and climate. The combined effects of ambient (outdoor) and household air pollution cause 
                     millions of premature deaths every year, largely as a result of increased mortality from stroke, 
                     heart disease, chronic obstructive pulmonary disease, lung cancer and acute respiratory infections.
                    </p>
                </div>
            </div>
            </div>
            {/*  second section */}
            <div className='cardBox2'>
                <div className="card">
                <Slideshow number="3"/>
                </div>
                <div className="card">
                    <div className="cardName"> <h2> What Causes Air Pollution? </h2> </div>
                    <div className="pargh">
                        <p>
                        Air pollution is caused by solid and liquid particles and certain gases that are suspended in 
                        the air. These particles and gases can come from car and truck exhaust, factories, dust, 
                        pollen, mold spores, volcanoes and wildfires. The solid and liquid particles suspended in our
                         air are called aerosols.
                        </p>
                        <p>
                        Certain gases in the atmosphere can cause air pollution. For example, in cities, a gas called 
                        ozone is a major cause of air pollution. Ozone is also a greenhouse gas that can be both good 
                        and bad for our environment. It all depends where it is in Earth’s atmosphere.
                        </p>
                    </div>
                </div>
            </div>
            {/*  third section */}

            <div className='cardBox2'>
                <div className="card">
                    <div className="cardName"> <h2>How does air pollution affect our health?</h2> </div>
                    <div className="pargh">
                        <p>
                            <b> Respiratory Disease:</b>
                        </p>
                            <ul>
                                <li> 
                                Air pollution can affect lung development and is implicated in the development of 
                                emphysema, asthma, and other respiratory diseases, such as chronic obstructive 
                                pulmonary disease (COPD).
                                </li>
                                <li>
                                PM and nitrogen oxide are linked to chronic bronchitis.
                                </li>                                
                            </ul>
                        <p>
                            <b> Cardiovascular Disease:</b>
                        </p>
                            <ul>
                                <li> 
                                Fine particulate matter can impair blood vessel function and speed up calcification 
                                in arteries.
                                </li>
                                <li>
                                NIEHS researchers established links between short-term daily exposure by 
                                post-menopausal women to nitrogen oxides and increased risk of hemorrhagic stroke.
                                </li>
                                                                
                            </ul>
                        
                    </div>
                </div>
                <div className="card">
                <Slideshow number="4"/>
                </div>
            </div>
            {/* fourth ection */}
        </div>
        
        </>
        
    )
}

export default AirPollution
