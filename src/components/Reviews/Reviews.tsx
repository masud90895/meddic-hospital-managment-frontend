"use client";
import { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import "./review.css";

export default function UserReview({ data }: any) {
  useEffect(() => {
    const keenSlider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    const keenSliderPreviousDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const keenSliderNextDesktop = document.getElementById(
      "keen-slider-next-desktop"
    );

    keenSliderPrevious!.addEventListener("click", () => keenSlider.prev());
    keenSliderNext!.addEventListener("click", () => keenSlider.next());

    keenSliderPreviousDesktop!.addEventListener("click", () =>
      keenSlider.prev()
    );
    keenSliderNextDesktop!.addEventListener("click", () => keenSlider.next());
  }, []);

  return (
    <section className=" common mb-[100px] bg-gray-100 py-5 max-h-[600px]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
        {/* left site card */}
        <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right max-h-[600px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Read trusted reviews from our customers
          </h2>

          <p className="mt-4 text-gray-700">
            Medic is a platform that connects patients with doctors and
            pharmacies. We are a team of doctors, pharmacists, and technologists
            that believe in the power of technology to improve access to
            healthcare for all Egyptians.
          </p>

          <div className="hidden lg:mt-8 lg:flex lg:gap-4">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous-desktop"
              className="rounded-full border border-[#4851D5] p-3 text-[#4851D5] transition hover:bg-[#666feb] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next-desktop"
              className="rounded-full border border-[#4851D5] p-3 text-[#4851D5] transition hover:bg-[#666feb] hover:text-white"
            >
              <svg
                className="h-5 w-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="-mx-6 lg:col-span-2 lg:mx-0 max-h-[600px]">
          {/* main slider */}
          <div id="keen-slider" className="keen-slider">
            {/* card1 */}

            {data?.map((item: any, index: number) => (
              <div className="keen-slider__slide" key={index}>
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-[#4851D5] sm:text-3xl">
                        {item?.feedbackSubject}
                      </p>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        {item?.feedbackDescription}
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    <p>
                      {" "}
                      &mdash; {item?.profile?.firstName}{" "}
                      {item?.profile?.lastName}
                    </p>
                    <p className="text-xs text-primary ml-4">
                      {new Date(item?.createdAt!).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* only for mobail buttons */}
      <div className="mt-8 flex justify-center gap-4 lg:hidden">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous"
          className="rounded-full border border-[#4851D5] p-4 text-[#4851D5] transition hover:bg-[#666feb] hover:text-white"
        >
          <svg
            className="h-5 w-5 -rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          aria-label="Next slide"
          id="keen-slider-next"
          className="rounded-full border border-[#4851D5] p-4 text-[#4851D5] transition hover:bg-[#666feb] hover:text-white"
        >
          <svg
            className="h-5 w-5 -rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
