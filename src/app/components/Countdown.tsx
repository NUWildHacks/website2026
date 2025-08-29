"use client";
import React, { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;  
  seconds: number;
}

const targetDate = new Date(2026, 4, 4, 9, 0, 0);

function getTimeLeft() : TimeLeft {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown flex gap-2 sm:gap-4 items-center justify-center bg-[#282A2E] dark:bg-[#ffffff] min-w-[200px] rounded-3xl py-3 sm:py-4 px-4 sm:px-8 md:px-12 select-none shadow-lg">
      <div className="countdown-item flex flex-col items-center justify-center">
        <h1 className="countdown-item-value text-xl sm:text-2xl md:text-[2.25rem]">{timeLeft.days}</h1>
        <p className="countdown-item-label text-xs sm:text-sm md:text-base">Days</p>
      </div>
      <div className="countdown-item-separator" />
      <div className="countdown-item flex flex-col items-center justify-center">
        <h1 className="countdown-item-value text-xl sm:text-2xl md:text-[2.25rem]">{timeLeft.hours}</h1>
        <p className="countdown-item-label text-xs sm:text-sm md:text-base">Hours</p>
      </div>
      <div className="countdown-item-separator" />
      <div className="countdown-item flex flex-col items-center justify-center">
        <h1 className="countdown-item-value text-xl sm:text-2xl md:text-[2.25rem]">{timeLeft.minutes}</h1>
        <p className="countdown-item-label text-xs sm:text-sm md:text-base">Minutes</p>
      </div>
      <div className="countdown-item-separator" />
      <div className="countdown-item flex flex-col items-center justify-center">
        <h1 className="countdown-item-value text-xl sm:text-2xl md:text-[2.25rem]">{timeLeft.seconds}</h1>
        <p className="countdown-item-label text-xs sm:text-sm md:text-base">Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;