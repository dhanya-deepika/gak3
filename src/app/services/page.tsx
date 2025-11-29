import HeroSection from "../../../components/Services/HeroSection";
import ServicesSection from "../../../components/Services/ServicesSection";
// import DetailedServices from "../../../components/Services/DetailedServices";
import ProjectsSection from "../../../components/Services/ProjectsSection";
import BrandsSection from "../../../components/Services/BrandsSection";
import Testimonials from "../../../components/Services/Testimonials";
import ContactForm from "../../../components/Services/SocialReviews";

export const metadata = {
  title: 'Residential & Commercial Real Estate Advisory Services | GAK Group',
  description:
    'GAK Group provides residential and commercial real estate advisory services. Get expert guidance for property investments and advisory tailored to your needs.',
    robots: "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",
  keywords: [
    'residential real estate advisory services',
    'commercial real estate advisory services',

  ],

  alternates: {
    canonical: 'https://www.gakgroup.in/services', // 👈 update with your actual domain
  },
};

export default function ServicesPage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      {/* <DetailedServices /> */}
      <ProjectsSection />
      <BrandsSection />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
