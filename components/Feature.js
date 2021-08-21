import React from "react";
import FadeUp from "components/FadeUp";
import { FiSunrise } from "react-icons/fi";
const Feature = () => {
  return (
    <div className="mt-0">
      <div className="  relative">
        <FadeUp>
          <h2 className=" relative  inline-block">
            <span className="text-accent">Benefits </span>
            of working <br /> with{" "}
            <span className="relative">
              {" "}
              us.{" "}
              <img
                src="/blobs/headingblob.svg"
                className="absolute -right-10 top-2 transform scale-150 z-[-1]"
              />
            </span>
            {/* <img
            src="/blobs/headingblob.svg"
            className="absolute left-28 top-12 z-[-1]"
          /> */}
          </h2>
        </FadeUp>
      </div>
      <FadeUp amount={0.4}>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-16">
          <FeatureCard />
          <FeatureCard />

          <FeatureCard />
          <FeatureCard />
        </div>
      </FadeUp>
    </div>
  );
};

export default Feature;
const FeatureCard = () => {
  return (
    <div className="grid gap-12" style={{ gridTemplateColumns: "auto 1fr" }}>
      <div className="flex items-center justify-center">
        <div className="h-[60px] w-[60px] rounded-full bg-accent/20 flex items-center justify-center text-2xl">
          <FiSunrise />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-xl lg:text-2xl font-semibold">
          Time zones ain’t no thing
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed
          nam sem tellus erat.
        </p>
      </div>
    </div>
  );
};
