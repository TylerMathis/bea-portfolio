import Navigation from '../components/Navigation'
import ParallaxBanner from '../components/ParallaxBanner'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import './Home.scss'

const Home = () => {
  return (
    <div style={{backgroundColor: '#c6c4c7'}}>
      <Navigation />
      <ParallaxBanner />
      <AboutMe />
      <ContactMe />
    </div>
  )
}

export default Home