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

const repoName = "ai-lnading-page"

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
		remotePatterns: [
			{
				hostname: "raw.githubusercontent.com",
			},
			{
				hostname: "images.unsplash.com",
			},
		],
	},
	// 👇 این دو تا خط جادو هستن برای درست شدن مسیرها در GitHub Pages
	basePath: `/${repoName}`,
	assetPrefix: `/${repoName}/`,
	env: {
		NEXT_PUBLIC_BASE_PATH: `/${repoName}`,
	},
};

export default nextConfig;
