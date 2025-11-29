import HeroSection from "../../components/Home/Hero";
import WhoWeAre from "../../components/Home/WhoWeAre";
import Stats from "../../components/Home/Stats";
import Guidence from "../../components/Home/Guidence";
import Services from "../../components/Home/Services";
import ClientLogos from "../../components/Home/ClientLogos";
import WhyChooseUs from "../../components/Home/WhyChooseUs";

export const metadata = {
  title: 'Real Estate Wealth Advisory & Investment Firm | GAK Group',
  description:
    'GAK Group is a leading real estate wealth advisory firm offering expert property investment advisory services and guidance for smart real estate investments.',
    robots: "INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1",
  keywords: [
    'real estate wealth advisory firm',
    'real estate invetments',
    'property investment advisory',
  ],

  alternates: {
    canonical: 'https://www.gakgroup.in/', // 👈 update with your actual domain
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <Stats />
      <Guidence/>
      <Services/> 
      <WhyChooseUs />
      <ClientLogos/>
    </div>
  );
}
