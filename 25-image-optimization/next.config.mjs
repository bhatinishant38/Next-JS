/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol : "https",
                hostname : "as1.ftcdn.net"
            }
        ]
    }
};

export default nextConfig;
