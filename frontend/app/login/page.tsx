"use client";
import React from "react";
import Security from "../../images/svgs/security-icon.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <main className="relative h-screen bg-gradient-to-b from-[#265565] via-[#288FB1] to-[#265565]">
      <div className="w-full h-full flex flex-col justify-center items-center px-6">
        <div className="relative mb-8 ">
          <Image
            src={Security}
            alt="Security icon"
            width={107}
            height={180}
            className="mb-6 flex justify-self-center"
          />
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white mb-3">
              we'll need to verify your identity
            </h1>
            <p className="text-white/80 text-sm">
              We're required by law to verify your identity before you can use
              our services.
            </p>
          </div>
        </div>

        <div className="w-full max-w-md space-y-4">
          <Button
            size="lg"
            className="w-full py-4 bg-[#E8FF87] rounded-xl text-[#265565] font-semibold text-lg"
          >
            Continue with PI
          </Button>
          {/* <button className="w-full py-4 bg-white/10 rounded-xl text-white font-semibold text-lg">
            Not right now
          </button> */}
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
