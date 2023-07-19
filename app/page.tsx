import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="relative">
          <img
            className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image"
            width="4377"
            src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
            alt=""
          />
        </div>
        <div className="hero-section px-3">
          <HeroComponent />
        </div>
      </div>
    </main>
  );
}
