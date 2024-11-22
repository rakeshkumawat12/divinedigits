import React from "react";
import { BackgroundGradient } from "../components/ui/BackgroundGradient";
import { Link } from "react-router-dom";
import RajyogImg from "../assets/rajyogImg.png";
import horseshoe from "../assets/horseshoe.png";
import angelnumberImg from "../assets/angelnumberImg.png";

const ExploreMore = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h1 className="section-header mb-9 text-center text-[1.3rem] md:text-[2rem]">
        What also you will get inside{" "}
      </h1>
      <div className="flex flex-col gap-6 md:flex-row mx-5">
        <div>
          <BackgroundGradient className="rounded-lg max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <img
              src={RajyogImg}
              alt="Moon"
              height="400"
              width="400"
              className="object-contain bg-transparent"
            />

            <p className="text-base bg-transparent sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Rajyog
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 bg-transparent">
              Discover the auspicious combinations in your birth chart that can
              bring you luck, success, and prosperity.
            </p>

            <Link to="/dateinput">
              <button className="rounded-md pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span className="bg-transparent">Click now </span>
                <span className="bg-zinc-700 rounded-md text-[0.6rem] px-2 py-0 text-white">
                  FREE
                </span>
              </button>
            </Link>
          </BackgroundGradient>
        </div>

        <div>
          <BackgroundGradient className="rounded-lg max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <img
              src={horseshoe}
              alt="Moon"
              height="400"
              width="400"
              className="object-contain bg-transparent"
            />

            <p className="text-base bg-transparent sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Signature Analysis
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 bg-transparent">
              Uncover the hidden meanings behind your signature. Learn about
              your personality traits, strengths, and challenges.
            </p>

            <Link to="/signatureinsights">
              <button className="rounded-md pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span className="bg-transparent">Click now </span>
                <span className="bg-zinc-700 rounded-md text-[0.6rem] px-2 py-0 text-white">
                  FREE
                </span>
              </button>
            </Link>
          </BackgroundGradient>
        </div>

        <div>
          <BackgroundGradient className="rounded-lg max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <img
              src={angelnumberImg}
              alt="Moon"
              height="400"
              width="400"
              className="object-contain bg-transparent"
            />

            <p className="text-base bg-transparent sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              Angel Numbers
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 bg-transparent">
              Decode the divine messages from the universe. Understand the
              significance of repeating number sequences in your life.
            </p>

            <Link to="/dateinput">
              <button className="rounded-md pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span className="bg-transparent">Click now </span>
                <span className="bg-zinc-700 rounded-md text-[0.6rem] px-2 py-0 text-white">
                  FREE
                </span>
              </button>
            </Link>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
