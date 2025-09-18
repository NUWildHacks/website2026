"use client";
import Countdown from "../components/Countdown";
import Image from "next/image";
import WildHacksLogo from "../../public/wildhacks-no-bg.png";
import { EmailInput } from "@/components/EmailInput";
import { toast } from "sonner";


export default function Home() {
  const handleSubmit = async (email: string) => {
    try {
      // const supabase = await createClient();

      // const normalizedEmail = email.trim().toLowerCase();

      // const { data: existing, error: lookupError } = await supabase
      //   .from("newsletter")
      //   .select("id")
      //   .eq("email", normalizedEmail)
      //   .maybeSingle();

      // if (lookupError) {
      //   throw lookupError;
      // }

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          toast.warning("You are already subscribed to our newsletter!", {
            position: "top-center",
            style: {
              backgroundColor: "var(--warning-background)",
              color: "var(--warning)",
            },
          });
          return;
        }
        throw new Error(data.error);
      }

      // if (existing) {
      //   toast.warning("You are already subscribed to our newsletter!", {
      //     position: "top-center",
      //     style: {
      //       backgroundColor: "var(--warning-background)",
      //       color: "var(--warning)",
      //     },
      //   });
      //   return;
      // }

      // const { error: insertError } = await supabase
      //   .from("newsletter")
      //   .insert([{ email: normalizedEmail }]);

      // if (insertError) {
      //   throw insertError;
      // }

      toast.success("Subscribed to newsletter!", {
        position: "top-center",
        style: {
          backgroundColor: "var(--success-background)",
          color: "var(--success)",
        },
      });
    } catch (error) {
      console.error("Subscription error:", error);
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
