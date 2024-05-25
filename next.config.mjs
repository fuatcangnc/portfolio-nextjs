/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:'user-images.githubusercontent.com'
            },
            {
                hostname:'cdn.sanity.io'
            }
        ]
    }
};

export default nextConfig;
