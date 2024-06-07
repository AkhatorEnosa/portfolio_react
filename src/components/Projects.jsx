// import RandomQuotes from '../assets/1.png'
// import GenotypeMatch from '../assets/2.png'
// import Unscramble from '../assets/3.png'
import Shaup from '../assets/shaup.png'
import SpaceTourism from '../assets/space_tourism.png'
import Splitter from '../assets/splitter.png'
import Techkare from '../assets/techkare.png'
import Hilink from '../assets/hilink.png'
import Kickrs from '../assets/kickrs.png'
// import LandingPage from '../assets/drib-1.webp'
// import BankingUl from '../assets/drib-2.webp'
// import Logo from '../assets/drib-3.webp'
// import Button from './Button'
import ProjectCards from './ProjectCards'

const Projects = () => {
  return (
    <div name="work" className='w-full h-auto bg-[#0a192f] text-[#7d7f84] py-40 overflow-scroll'>
      <div className="w-full flex flex-col justify-center items-center h-full px-10 lg:px-32">
            <div className="w-full pb-10 md:pb-8 pl-4 text-center">
              <p className='text-4xl font-bold inline border-b-4 border-[#F02252]'>
                Projects
              </p>
              <p className='py-4 text-gray-300'>Browse some of my Projects</p>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5'>
              <ProjectCards heading="Splitter" imagePath={Splitter} alt="Splitter" details="This project is based around building a web app to easily split bills between two or more persons including tips(if needed) and it is built using;" demoLink="https://splitify.netlify.app/" codeLink="https://github.com/AkhatorEnosa/bill-splitter-app"/>
              <ProjectCards heading="Space Tourism" imagePath={SpaceTourism} alt="Space Tourism" details="Space Theme Tourism website." demoLink="https://spacetourtravel.netlify.app/" codeLink="https://github.com/AkhatorEnosa/space-tourism-website-main"/>
              <ProjectCards heading="Shaup" imagePath={Shaup} alt="Shaup" details="ECommerce Frontend website built with react." demoLink="https://shaup.netlify.app" codeLink="https://github.com/AkhatorEnosa/online-store"/>
              <ProjectCards heading="Techkare" imagePath={Techkare} alt="techKare" details="Healthcare Facility Dashboard displaying a Patient's Data" demoLink="https://techkare.netlify.app/" codeLink="https://github.com/AkhatorEnosa/techcare"/>
              <ProjectCards heading="Hilink" imagePath={Hilink} alt="hilink" details="A front-end view of a typical travel camping app's Data" demoLink="https://hilinki.netlify.app/" codeLink="https://github.com/AkhatorEnosa/travel-app"/>
              <ProjectCards heading="Kickrs" imagePath={Kickrs} alt="kickrs" details="Product page for eCommerce website" demoLink="https://kickrs.netlify.app/" codeLink="https://github.com/AkhatorEnosa/product-page"/>
            </div>
      </div>
    </div>
  )
}

export default Projects