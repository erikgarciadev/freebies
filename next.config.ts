import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withNextIntl = require("next-intl/plugin")();
module.exports = withNextIntl(nextConfig);
