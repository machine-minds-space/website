// pages/index.tsx
import type { NextPage } from 'next';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Hero = () => (
  <div className="w-full bg-gray-900 text-white p-8">
    <div className="mx-auto max-w-7xl flex items-center">
      <div className="w-32 h-32 mr-8">
        <Image
          src="/logo.png"
          alt="Logo"
          width={128}
          height={128}
          className="rounded-full"
        />
      </div>
      <div>
        <h1 className="text-4xl">Machine Minds</h1>
        <p className="text-xl">Inspiring Tomorrow{"'"}s Innovations, Together</p>
      </div>
    </div>
  </div>
);

const LeadTextSection = () => (
  <div className="w-full bg-gray-200 p-8">
    <section className="mx-auto max-w-7xl">
      <p className="text-2xl text-justify leading-relaxed tracking-wide text-gray-600">
        Discover the AI revolution with Machine Minds! Connect with fellow AI enthusiasts,
        visionaries, and industry experts in our inclusive meetup group. Dive into AI{"'"}s
        transformative impact on tech, society, and businesses of all sizes. Join now, make
        friends, gain insights, and shape a smarter future together!
      </p>
    </section>
  </div>
);

const Communities = () => (
  <div className="w-full bg-gray-100 p-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl mb-8">Local Communities</h2>
      <p className="text-lg mb-8">
        Join local meetups for lively discussions, hands-on workshops, and invaluable networking. Help our young community grow as we explore the fascinating world of AI together. Dive in and be part of the Machine Minds family today!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            city: 'Berlin',
            image: '/sparky-berlin.png',
            teaser:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet.',
            link: "https://www.meetup.com/Machine-Minds-Berlin/"
          },
          {
            city: 'Hamburg',
            image: '/sparky-hh-landscape.png',
            teaser:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet.',
            link: "https://www.meetup.com/Machine-Minds-Hamburg/"
          },
        ].map((community) => (
          <div
            key={community.city}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <div className="aspect-w-1 aspect-h-1 relative mb-4">
              <a href={community.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={community.image}
                  alt={community.city}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </a>
            </div>
            <h3 className="text-xl mt-4">{community.city}</h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-xl mb-4">
          Ready to ignite AI passion in your area? Start a local Machine Minds community today! Click here to create a hub for AI enthusiasts to connect and explore together. Lead the way and expand our family!
        </p>
        <button
          type="button"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => window.location.href = 'mailto:sebastian@korfmann.net'}
        >
          Get in touch
        </button>
      </div>
    </div>
  </div>
);

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (status) {
      setTimeout(() => setStatus(''), 5000);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const API_KEY = 'V3xMfX7x6Mj4UU4kqtUeKQ';
    const FORM_ID = '5056764';
    const url = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: API_KEY,
          email,
        }),
      });

      if (response.ok) {
        setEmail('');
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Stay updated on community events, and valuable insights, all tailored for the curious minds eager to explore artificial intelligence!
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </button>
            </form>
            {status === 'success' && (
              <p className="mt-4 text-sm leading-6 text-green-500">
                Successfully subscribed! Check your email for a confirmation.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm leading-6 text-red-500">
                An error occurred. Please try again later.
              </p>
            )}
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Low frequency</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Get essential updates with our low-frequency Newsletter, featuring only the most important news and insights.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                We respect your privacy and won{"'"}t spam your inbox.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="w-full bg-gray-900 p-8">
    <div className="mx-auto max-w-7xl text-gray-300">
      <p>
        Machine Minds &copy; {new Date().getFullYear()} |{' '}
        <Link href="/imprint" className="text-gray-400 hover:text-gray-500">
          Imprint
        </Link>
      </p>
    </div>
  </footer>
);

const OrgaTeam = () => (
  <div className="w-full bg-gray-200 p-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl mb-8">Orga Team</h2>
      <div className="flex flex-wrap justify-center">
        {[
          {
            name: 'Sebastian Korfmann',
            image: '/skorfmann.jpg',
            bio: 'Creator & Founder of Machine Minds and Host of the Hamburg Meetup.',
            linkedin: 'https://www.linkedin.com/in/skorfmann',
          },
          {
            name: 'Sparky',
            image: '/sparky.png',
            bio: 'Chief Imagination Ignitor and Official Mascot of Machine Minds.',
          },
          {
            name: 'Srikanth Achanta',
            image: '/sri.jpeg',
            bio: 'Co-Founding Member of Machine Minds and Host of the Berlin Meetup.',
            linkedin: 'https://www.linkedin.com/in/srikanth-achanta-1b9a995/',
          },
          // Add more team members here
        ].map((member) => (
          <div
            key={member.name}
            className="bg-white p-4 rounded-lg shadow-md m-4 w-60"
          >
            <div className="aspect-w-3 aspect-h-4 relative mb-2 w-full rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center mt-2">
              <h3 className="text-lg mr-2">{member.name}</h3>
              {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <AiFillLinkedin size={24} className="grayscale" />
              </a>
              )}
            </div>
            <p className="text-sm mt-2 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Home: NextPage = () => (
  <div>
    <Hero />
    <LeadTextSection/>
    <Communities />
    <OrgaTeam />
    <Newsletter />
    <Footer />
  </div>
);

export default Home;
