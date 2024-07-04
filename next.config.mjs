/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        forceSwcTransforms: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.pokemondb.net',
                pathname: '**',
            }
        ],
    },
};

export default nextConfig;
