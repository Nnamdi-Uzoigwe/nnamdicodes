import GetToKnowMe from "../sections/home/GetToKnowMe";
import Hero from "../sections/home/Hero";
import LetsWork from "../sections/home/LetsWork";
import SelectedProjects from "../sections/home/SelectedProjects";

export default function Home() {
    return (
        <div>
           <Hero />
           <SelectedProjects />
           <GetToKnowMe />
           <LetsWork />
        </div>
    )
}