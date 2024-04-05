import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection(`posts`)
  
  return rss({
    title: 'Astro Learner | Blog',
    description: `My journey learning Astro`,
    site: context.site,
    items: posts.map(({ data, slug }) => ({
      title: data.title,
      pubDate: data.pubDate,
      description: data.description,
      link: `/posts/${slug}`,
    })),
    customData: `<language>en-us</language>`,
  })
}