"use client";
import Countdown from "../components/Countdown.tsx";
import Image from "next/image";
import WildHacksLogo from "../../public/wildhacks-no-bg.png";
import { EmailInput } from "@/components/EmailInput.tsx";
import { toast } from "sonner";

export default function Home() {
  const handleSubmit = async (email: string) => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_SUPABASE_URL + "/functions/v1/insert-newsletter",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    console.log(response);

    if (response.ok) {
      toast.success("Subscribed to newsletter!", {
        position: "top-center",
        style: {
          backgroundColor: "var(--success-background)",
          color: "var(--success)",
        },
      });
    } else if (response.status === 409) {
      toast.warning("You are already subscribed to our newsletter!", {
        position: "top-center",
        style: {
          backgroundColor: "var(--warning-background)",
          color: "var(--warning)",
        },
      });
    } else {
      console.error("Failed to subscribe to newsletter:", response.statusText);
      toast.error("Failed to subscribe to newsletter!", {
        position: "top-center",
        style: {
          backgroundColor: "var(--error-background)",
          color: "var(--error)",
        },
      });
    }
  };
  return (
    <div className="flex flex-col gap-2 sm:gap-4 flex-1 items-center justify-center p-4 lg:p-8">
      <Image
        src={WildHacksLogo}
        alt="WildHacks logo"
        className="w-24 sm:w-[100px] h-auto"
      />
      <p className="opacity-80 text-sm sm:text-base text-center">
        Northwestern&apos;s largest hackathon <br /> WildHacks 2026 coming
        soon...
      </p>
      <Countdown />
      <p className="opacity-80 text-sm sm:text-base text-center">
        In the meantime, get updates from our newsletter!
      </p>
      <EmailInput onSubmit={(email) => handleSubmit(email)} />
    </div>
  );
}
