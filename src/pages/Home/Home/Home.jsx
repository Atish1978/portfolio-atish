import Banner from "../../Banner/Banner";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
import Skills from "../../Skills/Skills";
import About from "../About/About";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>


        </div>
    );
};


export default Home;