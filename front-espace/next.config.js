/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
}

{/*module.exports = nextConfig*/}
module.exports = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
     
        return config;
      },
     }
