/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/summit-workplace',
  assetPrefix: '/summit-workplace/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
