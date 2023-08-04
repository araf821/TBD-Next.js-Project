"use client";

import { FC, useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

interface NewsletterSectionProps {}

const NewsletterSection: FC<NewsletterSectionProps> = ({}) => {
  const [emailInput, setEmailInput] = useState("");

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.75,
        },
      }}
      className="relative"
    >
      <section className="relative -translate-y-24 bg-gradient-to-b from-accent via-[#000000] to-primary pb-12 pt-36 text-bg shadow-[0_0_30px] shadow-zinc-700 lg:bg-gradient-to-r">
        <div className=" mx-auto max-w-[1550px] px-4 sm:px-6 md:px-10 xl:px-20">
          <div className="grid grid-cols-1 items-center gap-8 text-center lg:grid-cols-2 lg:gap-12 lg:text-start">
            <p className="balance flex flex-col font-josefin text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:gap-2 md:text-7xl lg:gap-3 lg:text-left lg:text-7xl xl:text-[80px]">
              Step Into An Insightful Wonderland
            </p>
            <div className="flex flex-col space-y-5 text-white">
              <div>
                <p className="pb-1 text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
                  <span className="font- uppercase">Join Our Newsletter</span>
                </p>
                <p className="text--900 group mx-auto w-fit lg:mx-0 ">
                 Join us for the Latest Updates and Exclusive Content!
                </p>
              </div>
              <div className="space-y-4">
                {/* Email Input */}
                <div className="relative mx-auto w-full max-w-[700px]">
                  <input
                    id="name"
                    type="email"
                    placeholder=" "
                    value={emailInput}
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                    }}
                    className={`peer w-full rounded-md border-2 px-4 py-4 text-black`}
                    required
                  />
                  <label
                    className={`pointer-events-none absolute left-3 top-4 origin-left -translate-y-6 scale-75  select-none rounded-md bg-bg px-2 text-neutral-500 transition peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-bg peer-focus:-translate-y-7 peer-focus:border-2 peer-focus:border-zinc-800 peer-focus:text-neutral-900`}
                  >
                    Email
                  </label>
                </div>
                <Button
                  special
                  label="Sign Up Now"
                  className="mx-auto max-w-[700px] border-accent"
                  onClick={() => {
                    toast.success("Coming soon!");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: 100,
            transform: "scaleX(1)",
          }}
        >
          <path className="fill-primary" d="M1200 120L0 16.48V0h1200v120z" />
        </svg>
      </div> */}
    </motion.div>
  );
};

export default NewsletterSection;
