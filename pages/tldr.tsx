import Head from 'next/head';
import Image from 'next/image';

interface Link {
  title: string;
  teaser: string;
  image: string;
  link: string;
}

const links: Link[] = [
  {
    title: 'Bill Gates: People Don’t Realize What’s Coming',
    teaser: 'Bill Gates warns of massive job disruption due to AI, as it targets white-collar work and reduces demand for many skill sets. While AI will benefit companies through cost-cutting and innovation, it may lead to joblessness and economic inequality. As the job market undergoes significant changes, individuals must adapt by embracing the creator economy and enhancing their skills to stay relevant in a constantly evolving world.',
    image: '/tldr/tldr-ai-jobs.png',
    link: 'https://javascript.plainenglish.io/bill-gates-people-dont-realize-what-s-coming-dc06d3b81c9d',
  },
  {
    title: 'Stop doing this on ChatGPT and get ahead of the 99% of its users',
    teaser: 'Discover the groundbreaking potential of the Wolfram plugin for ChatGPT in this deep-dive article. Learn how this revolutionary computational tool can bridge the gap between AI and human comprehension, transforming society and redefining disruptive technology. Don\'t miss out on the opportunity to explore the future of AI decision-making and communication.',
    image: '/tldr/tldr-chatgpt-plugins.png',
    link: 'https://medium.com/geekculture/stop-doing-this-on-chatgpt-get-ahead-99-users-ai-artificial-intelligence-productivity-prompt-engineering-4-f3441bf7a25a',
  },
];

// Function to extract the domain from the URL
const extractDomain = (url: string): string => {
  const domain = new URL(url).hostname;
  return domain.startsWith('www.') ? domain.slice(4) : domain;
};

const TldrPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>tl;dr</title>
      </Head>
      <h1 className="text-4xl font-bold my-8">tl;dr</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {links.map((link) => (
          <div
            key={link.title}
            className="bg-white border p-4 rounded-lg shadow-lg"
          >
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-0 pb-[56.25%] relative">
                <Image
                  src={link.image}
                  alt={link.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">{link.title}</h2>
            </a>
            <p className="text-lg mb-4">{link.teaser}</p>
            <div className="flex items-center justify-between">
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Read more
              </a>
              <span className="text-gray-500 text-sm">
                {extractDomain(link.link)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TldrPage;