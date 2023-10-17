"use client";
import { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import "./review.css";

export default function UserReview() {
  const data = [
    {
      feedbackSubject: "Thanks for the great service",
      feedbackDescription:
        " I was very impressed with the service I received from Medic. I was able to get an appointment quickly and easily. The doctor was very professional and the pharmacy was very helpful. I would definitely recommend Medic to anyone looking for a doctor or pharmacy.",
      profile: {
        profileImage: "https://i.ibb.co/0jZzQYH/Rectangle-1.png",
        firstName: "Masud",
        lastName: "Rana",
      },
    },
    {
      feedbackSubject: "You guys are the best",
      feedbackDescription:
        "I impress with your service. I was able to get an appointment quickly and easily. The doctor was very professional and the pharmacy was very helpful. I would definitely recommend Medic to anyone looking for a doctor or pharmacy.",
      profile: {
        profileImage: "https://i.ibb.co/0jZzQYH/Rectangle-1.png",
        firstName: "Masud",
        lastName: "Rana",
      },
    },
  ];

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
    <section className=" common mb-[100px] bg-gray-100 py-5">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
        {/* left site card */}
        <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
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
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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

        <div className="-mx-6 lg:col-span-2 lg:mx-0">
          {/* main slider */}
          <div id="keen-slider" className="keen-slider">
            {/* card1 */}

            {data.map((item, index) => (
              <div className="keen-slider__slide" key={index}>
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {/* Other icons */}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                        {item?.feedbackSubject}
                      </p>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        {item?.feedbackDescription}
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; {item?.profile?.firstName} {item?.profile?.lastName}
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
          className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
          className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
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
