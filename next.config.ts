import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Adiciona configuração personalizada para o CSS (se necessário)
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        // Adiciona a regra para o CSS Module
        {
          loader: 'next/css',
          options: {
            modules: true, // Habilita o CSS Modules
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
