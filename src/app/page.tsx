import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Education from './_components/Education';
import Hackathons from './_components/Hackathons';
import Experiences from './_components/Experiences';
import Startup from './_components/Startup';
import ProjectList from './_components/ProjectList';

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Education />
      <Hackathons />
      <Experiences />
      <Startup />
      <ProjectList />
    </div>
  );
}
