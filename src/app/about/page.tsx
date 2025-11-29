import Hero from "../../../components/About/Hero";
import Intro from "../../../components/About/Intro";
import VisionMission from "../../../components/About/VisionMission";
import Stats from "../../../components/About/Stats";
import Footer2 from "../../../components/ContactForm";
import ProjectsPage from "../../../components/Projects/ProjectsPage";


export const metadata = {
  title: 'Property Investment Experts & Real Estate Advisors | GAK Group',
  description:
    'GAK Group comprises property investment experts and experienced commercial and residential real estate advisors, guiding clients to profitable property investments.',
    robots: "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",
  keywords: [
    'Property investment experts',
    'Commercial and residential real estate advisors',
    'Experienced property investment advisors',

  ],

  alternates: {
    canonical: 'https://www.gakgroup.in/about', // 👈 update with your actual domain
  },
};




export default function AboutPage() {
  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <VisionMission />    
      </>
  );
}
