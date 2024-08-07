import "../App.css"
import NavigationBar from "./NavigationBar"
import Intro from "./Intro"
import Trending from "./Trending"
import SuperHero from "./Superhero"

import "../style/landingPage.css"

const Home = () => {
    return ( 
        <div>
            <div className="myBG">
                <NavigationBar />
                <Intro />
            </div>

            <div className="trending">
                <Trending />
            </div>

            <div className="superhero">
                <SuperHero />
            </div>
        </div>
     );
}
 
export default Home;