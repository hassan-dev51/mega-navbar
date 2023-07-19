import React from "react";

type Props = {};

const HeroComponent = (props: Props) => {
  return (
    <div className="relative max-w-[1288px] lg:pt-32 md:px-10 pt-16">
      <img
        className="absolute hero-drone top-28 w-1/4 h-auto right-0 xl:right-0"
        width="500"
        height="326"
        src="https://github.githubassets.com/images/modules/site/home-campaign/hero-drone.webp"
        alt=""
      />
      <div className="relative">
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/lines-hero.svg"
          width="437"
          height="637"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroComponent;
