import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideImage.css'

var addr1 = "https://thumbs.dreamstime.com/b/asthma-normal-asthmatic-airways-medically-illustration-diagram-showing-177704286.jpg";
var addr2 = 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/sponsored-programs/asthma/11848-Severe_Asthma_Facts_Statistics_and_You-1296x728-Header.jpg?w=1155&h=1528';
var addr3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRhHHVWDL5jZfMlHeE2nEGLQJgDIlfGU3uQ&usqp=CAU";
var addr4 = 'https://www.researchgate.net/profile/Luljeta-Ahmetaj/publication/289532732/figure/fig1/AS:391344217444352@1470315140595/Prevalence-of-symptoms-of-asthma-in-the-past-12-months-among-persons-aged-18-to-45-years.png';
var addr5 = 'https://assets.aboutkidshealth.ca/akhassets/Asthma_Triggers_EQUIP_ILL_EN.jpg?RenditionID=10';
var addr6 = "https://www.bphc.org/whatwedo/healthy-homes-environment/asthma/PublishingImages/asthma%20triggers.jpg";
var addr7 = 'https://www.asthmarelief.org.uk/wp-content/uploads/2019/08/asthma-triggers.png';
var addr8 = 'https://www.stjohnvic.com.au/media/3328/2.png';
var addr9 = 'https://static.wixstatic.com/media/fc8752_5421daa0903a4018b0d1ba93aca0e211~mv2.jpg/v1/fill/w_660,h_400,al_c,q_90/fc8752_5421daa0903a4018b0d1ba93aca0e211~mv2.jpg';
var addr10 = 'https://assets.nrdc.org/sites/default/files/styles/header_background/public/health4_26_airpollguide_istock_2796602_900x600px.jpg?itok=vCwn8tgz';
var addr11 = 'https://image.slidesharecdn.com/airpollution-170129155601/95/air-pollution-causes-effects-and-solutions-of-air-pollution-1-638.jpg?cb=1486359728';
var addr12 = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/iStock-157313230-1200x628.jpg';
var addr13 = 'https://live.staticflickr.com/735/31514621884_4be8eb67a6_o.jpg';
var addr14 = 'https://www.pca.state.mn.us/sites/default/files/styles/primary_840px_wide/public/body-effects-PM-Ozone.png?itok=pcZQJcKC';
var addr15 = 'https://thumbs.dreamstime.com/z/health-effects-air-pollution-infographic-toxic-effects-health-effects-air-pollution-infographic-toxic-effects-harmful-156387612.jpg';
var addr16 = 'https://www.lalpathlabs.com/blog/wp-content/uploads/2018/10/Air_Pollution.png';

const fadeImages1 = [
  {
  url: addr1,
  },
  {
  url: addr2,
  },
  {
  url: addr3,
  },
  {
    url: addr4,
    },
];

const fadeImages2 = [
  {
  url: addr5,
  },
  {
  url: addr6,
  },
  {
  url: addr7,
  },
  {
    url: addr8,
    },
];

const fadeImages3 = [
  {
  url: addr9,
  },
  {
  url: addr10,
  },
  {
  url: addr11,
  },
  {
    url: addr12,
    },
];

const fadeImages4 = [
  {
  url: addr13,
  },
  {
  url: addr14,
  },
  {
  url: addr15,
  },
  {
    url: addr16,
    },
];

const Slideshow = (props) => {
  var lst = [];
  console.log(props.number)
  if (props.number === '1') {
    console.log('yes')
    lst = fadeImages1
  }
  else if (props.number === '2') {
    lst = fadeImages2
  }
  else if (props.number === '3') {
    lst = fadeImages3
  }
  else {
    lst = fadeImages4
  }
  return (
    <div className="slide-container">
      <Fade>
        {
            lst.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
                <div className="image-container card">
                <img src={fadeImage.url} className='image'/>
                </div>
            </div>
            ))
        }
      </Fade>
    </div>
  )
}

export default Slideshow


// function SlideImage() {
//   return (
//     <div className="slide-container">
//       <Fade>
//         {
//             fadeImages2.map((fadeImage, index) => (
//             <div className="each-fade" key={index}>
//                 <div className="image-container card">
//                 <img src={fadeImage.url} className='image'/>
//                 </div>
//             </div>
//             ))
//         }
//       </Fade>
//     </div>
//   )
// }


// function AirImage() {
//   return (
//     <div className="slide-container">
//       <Fade>
//         {
//             fadeImages3.map((fadeImage, index) => (
//             <div className="each-fade" key={index}>
//                 <div className="image-container card">
//                 <img src={fadeImage.url} className='image'/>
//                 </div>
//             </div>
//             ))
//         }
//       </Fade>
//     </div>
//   )
// }

// function AirImage1() {
//   return (
//     <div className="slide-container">
//       <Fade>
//         {
//             fadeImages4.map((fadeImage, index) => (
//             <div className="each-fade" key={index}>
//                 <div className="image-container card">
//                 <img src={fadeImage.url} className='image'/>
//                 </div>
//             </div>
//             ))
//         }
//       </Fade>
//     </div>
//   )
// }







