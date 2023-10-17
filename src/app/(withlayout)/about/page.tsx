"use client";
import React, { useState } from "react";

const AboutPage = () => {
  const [showCards, setShowCards] = useState("all");

  const activeClasses = "bg-primary text-white";
  const inactiveClasses = "text-body-color hover:bg-primary hover:text-white";

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] common">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Our Portfolio
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Our Recent Projects
              </h2>
              <p className="text-body-color text-base">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <ul className="mb-12 flex flex-wrap justify-center space-x-1">
              <li className="mb-1">
                <button
                  className="inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8"
                  onClick={() => setShowCards("all")}
                >
                  All Projects
                </button>
              </li>
              <li className="mb-1">
                <button
                  className={`${
                    showCards === "branding" ? activeClasses : inactiveClasses
                  } inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8`}
                  onClick={() => setShowCards("branding")}
                >
                  Branding
                </button>
              </li>
              <li className="mb-1">
                <button
                  className={`${
                    showCards === "design" ? activeClasses : inactiveClasses
                  } inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8`}
                  onClick={() => setShowCards("design")}
                >
                  Design
                </button>
              </li>
              <li className="mb-1">
                <button
                  className={`${
                    showCards === "marketing" ? activeClasses : inactiveClasses
                  } inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8`}
                  onClick={() => setShowCards("marketing")}
                >
                  Marketing
                </button>
              </li>
              <li className="mb-1">
                <button
                  className={`${
                    showCards === "development"
                      ? activeClasses
                      : inactiveClasses
                  } inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8`}
                  onClick={() => setShowCards("development")}
                >
                  Development
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div
            className={`${
              showCards === "all" || showCards === "branding"
                ? "block"
                : "hidden"
            } w-full px-4 md:w-1/2 xl:w-1/3`}
          >
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-01.jpg"
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 px-3 text-center shadow-lg">
                <span className="text-primary mb-2 block text-sm font-semibold">
                  Branding
                </span>
                <h3 className="text-dark mb-4 text-xl font-bold">
                  Branding Design
                </h3>
                <a
                  href="javascript:void(0)"
                  className="text-body-color hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${
              showCards === "all" || showCards === "marketing"
                ? "block"
                : "hidden"
            } w-full px-4 md:w-1/2 xl:w-1/3`}
          >
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-02.jpg"
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 px-3 text-center shadow-lg">
                <span className="text-primary mb-2 block text-sm font-semibold">
                  Marketing
                </span>
                <h3 className="text-dark mb-4 text-xl font-bold">
                  Best Marketing tips
                </h3>
                <a
                  href="javascript:void(0)"
                  className="text-body-color hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${
              showCards === "all" || showCards === "development"
                ? "block"
                : "hidden"
            } w-full px-4 md:w-1/2 xl:w-1/3`}
          >
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-03.jpg"
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 px-3 text-center shadow-lg">
                <span className="text-primary mb-2 block text-sm font-semibold">
                  Development
                </span>
                <h3 className="text-dark mb-4 text-xl font-bold">
                  Web Design Trend
                </h3>
                <a
                  href="javascript:void(0)"
                  className="text-body-color hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${
              showCards === "all" || showCards === "design" ? "block" : "hidden"
            } w-full px-4 md:w-1/2 xl:w-1/3`}
          >
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-01/image-04.jpg"
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-9 px-3 text-center shadow-lg">
                <span className="text-primary mb-2 block text-sm font-semibold">
                  Design
                </span>
                <h3 className="text-dark mb-4 text-xl font-bold">
                  Business Card Design
                </h3>
                <a
                  href="javascript:void(0)"
                  className="text-body-color hover:bg-primary hover:border-primary inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
