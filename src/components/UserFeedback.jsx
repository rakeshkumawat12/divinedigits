import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";

const UserFeedback = () => {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="section-header text-[1.3rem] mb-6 text-center md:text-[2rem]">Loved by hundreds of people</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default UserFeedback;

const testimonials = [
  {
    quote:
      "I just tried it out this is crazy awesome",
    name: "Advait Trasy",
    title: "Senior Analyst at Kinesso",
  },
  {
    quote:
      "bro just keeps dropping crazy alpha",
    name: "Harsh Tambade",
    title: "Founder, Funnel Guru",
  },
  {
    quote: "So happy to see @rakesh work being recognised 🥹🤌🏻♥️ His work is literally a treasure trove for people ",
    name: "Aniket Naik",
    title: "Founder & CEO - Forum",
  },
  {
    quote: "Bookmarking it right away",
    name: "Ashok Menaria",
    title: "BI Consultant",
  },
  {
    quote: "Wow all for free! Setup a tip jar or buy me a coffee! I'd paid or this",
    name: "Rushabh Jain",
    title: "Finance executive",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Samay Sethia",
    title: "Paid Search Marketer",
  },

  {
    quote: "Looking absolutely awesome ! 👏",
    name: "Nachiket Morale",
    title: "Deputy Manager",
  },
  {
    quote: "I just tried it out this is crazy awesome",
    name: "Vishnu Acharya",
    title: "Equity Research Analyst",
  },
  {
    quote: "is amazing ❤️‍🔥❤️‍🔥 It is open forever?",
    name: "Ganesh Pal",
    title: "DevOps Specialist at OpsTree",
  },
];
