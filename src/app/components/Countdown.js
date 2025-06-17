"use client";
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date(2026, 4, 4, 9, 0, 0);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown flex gap-2 sm:gap-4 items-center justify-center bg-[#282A2E] dark:bg-[#ffffff] min-w-[200px] rounded-3xl py-3 sm:py-4 px-4 sm:px-8 md:px-12 select-none shadow-lg">
      <div className="countdown-item flex flex-col items-center justify-center">
        <span className="countdown-item-value text-xl sm:text-2xl md:text-[2.25rem]">{timeLeft.days}</span>
        <span className="countdown-item-label text-xs sm:text-sm md:text-base">Days</span>
      </div>
      <div className="countdown-item-separator" />
      <div className="countdown-item flex flex-col items-center justify-center">
        <span className="countdown-item-value text-xl sm:text-2xl md:text-[2.25rem]">{timeLeft.hours}</span>
        <span className="countdown-item-label text-xs sm:text-sm md:text-base">Hours</span>
      </div>
      <div className="countdown-item-separator" />
      <div className="countdown-item flex flex-col items-center justify-center">
        <span className="countdown-item-value text-xl sm:text-2xl md:text-[2.25rem]">{timeLeft.minutes}</span>
        <span className="countdown-item-label text-xs sm:text-sm md:text-base">Minutes</span>
      </div>
      <div className="countdown-item-separator" />
      <div className="countdown-item flex flex-col items-center justify-center">
        <span className="countdown-item-value text-xl sm:text-2xl md:text-[2.25rem]">{timeLeft.seconds}</span>
        <span className="countdown-item-label text-xs sm:text-sm md:text-base">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;