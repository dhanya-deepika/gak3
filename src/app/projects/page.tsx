import Footer2 from "../../../components/ContactForm";
import ProjectsPage from "../../../components/Projects/ProjectsPage";
export const metadata = {
  title: 'Real Estate Investment Projects | GAK Group ',
  description:
    'Explore GAK Group’s real estate investment projects including residential property developments and commercial real estate projects. Trusted guidance for strategic investment.',
    robots: "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",
  keywords: [
    'Real estate investment projects',
    'Residential property developments',
    'Commercial real estate projects',
    'Ongoing real estate projects',

  ],

  alternates: {
    canonical: 'https://www.gakgroup.in/projects', // 👈 update with your actual domain
  },
};
export default function Home() {
  return (
    <div>
      <ProjectsPage />
    </div>
  );
}
