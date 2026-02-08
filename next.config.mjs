/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // 注意：这里我去掉了 'electron'，只保留了 playwright
    serverComponentsExternalPackages: ['rebrowser-playwright-core'],
  },
  webpack: (config) => {
    // 这行代码就是“瘦身魔法”：把 electron 替换成空，不让它打包进去
    config.resolve.alias['electron'] = false;
    return config;
  },
};

export default nextConfig;
