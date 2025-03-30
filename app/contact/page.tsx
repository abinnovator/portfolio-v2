"use client";
import React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const icons = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    description: "None Yet:)",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    description: "info@example.com",
    link: "mailto:info@example.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    description: "Banglore, India",
  },
];

import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            {/* Form */}
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Lets work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas faucibus diam risus, eu blandit ex consequat in.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="First name" />
                <Input type="firstname" placeholder="Last name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone no." />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Fullstack">
                      Full stack webapp Development
                    </SelectItem>
                    <SelectItem value="Landing">Landing page design</SelectItem>
                    <SelectItem value="UI/UX">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Text area */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* Button */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            Info
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
