import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://ourofino-lp-git-main-arcavs-projects.vercel.app/sitemap.xml',
    }
}
