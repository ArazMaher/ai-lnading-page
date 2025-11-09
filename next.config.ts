// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
// 	reactStrictMode: true,
// 	typescript: {
// 		ignoreBuildErrors: true,
// 	},
// 	eslint: {
// 		ignoreDuringBuilds: true,
// 	},
// 	experimental: {
// 		optimizeCss: true,
// 		reactCompiler: true,
// 	},
// 	images: {
// 		remotePatterns: [
// 			{
// 				hostname: "raw.githubusercontent.com",
// 			},
// 			{
// 				hostname: "images.unsplash.com",
// 			},
// 		],
// 	},
// };
// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		optimizeCss: true,
		reactCompiler: true,
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{ hostname: "raw.githubusercontent.com" },
			{ hostname: "images.unsplash.com" },
		],
	},
	output: "export",    
	basePath: "/ai-lnading-page", 
	assetPrefix: "/ai-lnading-page/",  
};

export default nextConfig;
