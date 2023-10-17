/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

const AboutPage = () => {
  const [showCards, setShowCards] = useState("all");

  const activeClasses = "bg-primary text-white";
  const inactiveClasses = "text-body-color hover:bg-primary hover:text-white";

  return (
    <div className="common">
      {/* about */}
      <>
        <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
          <div className="container">
            <div className="md:flex items-center justify-between -mx-4">
              <div className="w-full px-4 lg:w-6/12">
                <div className="flex items-center -mx-3 sm:-mx-4">
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-4">
                      <img
                        src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src="https://i.ibb.co/rfHFq15/image-2.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4">
                      <img
                        src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                      <span className="absolute -right-7 -bottom-7 z-[-1]">
                        <svg
                          width={134}
                          height={106}
                          viewBox="0 0 134 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="1.66667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={31}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3334"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 60.3334 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={103}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={132}
                            cy={104}
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={31}
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={103}
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={132}
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={31}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={31}
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 60.3333 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 88.6667 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 117.667 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 74.6667 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={103}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={103}
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 103 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={132}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={132}
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 132 30.9998)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={31}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={31}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 31 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={103}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={103}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 103 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={132}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={132}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 132 16.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={31}
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 31 45.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={31}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3333)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="60.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="88.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="117.667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx="74.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={103}
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={103}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 103 1.66683)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={132}
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                            fill="#3056D3"
                          />
                          <circle
                            cx={132}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 132 1.66683)"
                            fill="#3056D3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="mt-10 lg:mt-0">
                  <span className="block mb-2 text-lg font-semibold text-primary">
                    Why Choose Us
                  </span>
                  <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                    Make your customers happy by giving services.
                  </h2>
                  <p className="mb-8 text-base text-body-color">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less.
                  </p>
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* about end */}

      {/* team */}
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] ">
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
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
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
                      showCards === "marketing"
                        ? activeClasses
                        : inactiveClasses
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
                showCards === "all" || showCards === "design"
                  ? "block"
                  : "hidden"
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

      {/* owr services */}
    </div>
  );
};

export default AboutPage;
