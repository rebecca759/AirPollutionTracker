import React,{useState} from 'react';
import "./Atshma.css";
import Slideshow from '../SlideImage';


function Asthma() {
    return (
        <>
        <div className='Container'>
            <h1> Asthma</h1>
            {/*  first section */}
            <div className='cardBox'>
            <div className="card">
                <div className="cardName"> <h2> What is Asthma?</h2> </div>
                <div className="pargh"> 
                    <p>
                    Asthma is a long-term disease of the lungs. It causes your airways to get 
                        inflamed and narrow, and it makes it hard to breathe. Severe asthma can cause trouble talking or 
                        being active. You might hear your doctor call it a chronic respiratory disease. Some people refer 
                        to asthma as "bronchial asthma."
                    </p>
                    <p>
                    Asthma is a long-term condition affecting children and adults. The air passages in the lungs 
                    become narrow due to inflammation and tightening of the muscles around the small airways. 
                    This causes asthma symptoms: cough, wheeze, shortness of breath and chest tightness. These 
                    symptoms are intermittent and are often worse at night or during exercise. Other common 
                    “triggers” can make asthma symptoms worse. Triggers vary from person to person, but can 
                    include viral infections (colds), dust, smoke, fumes, changes in the weather, grass and 
                    tree pollen, animal fur and feathers, strong soaps, and perfume.
                    </p>
                </div>
            </div>
            </div>
            {/*  second section */}
            <div className='cardBox2'>
                <div className="card">
                    <Slideshow number="1"/>
                </div>
                <div className="card">
                    <div className="cardName"> <h2> What does asthma feel like? </h2> </div>
                    <div className="pargh">
                        <p>
                        Asthma is marked by inflammation of the bronchial tubes, with extra sticky secretions inside 
                        the tubes. People with asthma have symptoms when the airways tighten, inflame, or fill with 
                        mucus.
                        </p>
                        There are three major signs of asthma:
                        <p>
                            <ul>
                                <li> 
                                    <b> Airway blockage</b> When you breathe as usual, the bands of muscle around your
                                    airways are relaxed, and air moves freely. But when you have asthma, the muscles tighten. 
                                    It is harder for air to pass through.
                                </li>
                                <li>
                                    <b> Inflammation.</b> Asthma causes red, swollen bronchial tubes in your lungs. 
                                    This inflammation can damage your lungs. Treating this is key to managing asthma 
                                    in the long run.
                                </li>
                                <li>
                                    <b> Airway irritability.</b> People with asthma have sensitive airways that tend to 
                                    overreact and narrow when they come into contact with even slight triggers.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            {/*  fourth section */}
            <div className='cardBox'>
            <div className="card">
            <div className="cardName"> <h2> What are the common asthma symptoms? </h2> </div>
                    <div className="pargh">
                        <p>
                        Asthma symptoms vary from person to person. You may have infrequent asthma attacks, have 
                        symptoms only at certain times — such as when exercising — or have symptoms all the time.
                        </p>
                        Asthma signs and symptoms include:
                        <p>
                            <ul>
                                <li> 
                                Coughing, especially at night or in the morning
                                </li>
                                <li>
                                Wheezing, a whistling sound when you breathe
                                </li>
                                <li>
                                Shortness of breath
                                </li>
                                <li>
                                Tightness, pain, or pressure in your chest
                                </li>
                                <li>
                                Trouble sleeping because of breathing problems
                                </li>
                                <li>
                                Increasing difficulty breathing, as measured with a device used to check how well your lungs 
                                are working (peak flow meter)
                                </li>
                                <li>
                                The need to use a quick-relief inhaler more often
                                </li>                                
                            </ul>
                        </p>
                        <p>
                        The type of asthma that you have can determine which symptoms you experience.
                        Some people experience symptoms consistently throughout the day. Others may find that certain 
                        activities can make symptoms worse.
                        Not everyone with asthma will experience these particular symptoms. If you think the symptoms 
                        you are experiencing could be a sign of a condition such as asthma, make an appointment to see
                         your doctor.
                         Also, keep in mind that even if your asthma is well-managed, you may still occasionally 
                         experience a flare-up of symptoms. Flare-ups often improve with the use of quick-acting 
                         treatments, like an inhaler, but may require medical attention in severe cases.
                        
                        </p>
                        
                    </div>
            </div>
            </div>
            {/*  third section */}

            <div className='cardBox2'>
                <div className="card">
                    <div className="cardName"> <h2> What are the common asthma triggers? </h2> </div>
                    <div className="pargh">
                        <p>
                        Exposure to various irritants and substances that trigger allergies (allergens) can trigger 
                        signs and symptoms of asthma. Asthma triggers are different from person to person and can 
                        include:
                            <ul>
                                <li> 
                                Airborne allergens, such as pollen, dust mites, mold spores, pet dander or 
                                particles of cockroach waste
                                </li>
                                <li>
                                Respiratory infections, such as the common cold
                                </li>
                                <li>
                                Physical activity
                                </li>
                                <li>
                                Cold air
                                </li>
                                <li>
                                Air pollutants and irritants, such as smoke
                                </li>
                                <li>
                                Sulfites and preservatives added to some types of foods and beverages, including 
                                shrimp, dried fruit, processed potatoes, beer and wine
                                </li>
                                <li>
                                The need to use a quick-relief inhaler more often
                                </li>                                
                            </ul>
                        </p>
                        
                    </div>
                </div>
                <div className="card">
                <Slideshow number="2"/>
                </div>
            </div>
        </div>
        
        </>
        
    )
}

export default Asthma
