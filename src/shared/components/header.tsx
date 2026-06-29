"use client";

import React, { useState, useEffect } from "react";
import LogoIcon from "./icons/logo";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 1000 * 0.5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header
      className={`bg-background sticky top-0 z-10 border-b border-border py-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0 shadow-sm" : "-translate-y-full"
      }`}
    >
      <nav className="flex max-w-7xl xl:px-0 mx-auto items-center justify-between px-6">
        <LogoIcon className="text-primary h-12" />
      </nav>
    </header>
  );
};

export default Header;
