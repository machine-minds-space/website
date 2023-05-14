// pages/machine-minds-camp.tsx
import type { NextPage } from 'next';
import Image from 'next/image';
import { AiFillLinkedin } from 'react-icons/ai';
import React from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Head from 'next/head';

const Hero = () => (
  <div className="w-full bg-gray-900 text-white p-8">
    <div className="mx-auto max-w-7xl flex items-center">
      <div>
        <h1 className="text-4xl">Machine Minds Camp</h1>
        <p className="text-xl">Entdecke die Zukunft der generativen KI</p>
      </div>
    </div>
  </div>
);

const InfoSection = () => (
  <div className="w-full bg-gray-200 p-8">
    <section className="mx-auto max-w-7xl">
      <p className="text-xl sm:text-2xl text-justify leading-snug sm:leading-relaxed tracking-wide text-gray-600">
        Das Machine Minds Camp findet am 2. Juni im New Work Harbour in Hamburg statt. Es ist ein Open Space Event, bei dem jeder einen Beitrag leisten kann. Sei dabei und diskutiere auf Deutsch über generative KI.
      </p>
    </section>
  </div>
);

const OpenSpaceTopics = () => (
  <div className="w-full bg-gray-100 p-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl mb-8">Vorgeschlagene Open Space Themen</h2>
      <ul className="list-disc list-inside text-lg">
        <li>Generative Adversarial Networks (GANs) in der Kreativindustrie</li>
        <li>Anwendungen von Transformer-Modellen</li>
        <li>Die Rolle von KI in der Medizin</li>
        <li>Automatisierte Textgenerierung</li>
        <li>Die ethischen Fragen der KI-Entwicklung</li>
      </ul>
    </div>
  </div>
);

const Organizers = () => (
  <div className="w-full bg-gray-200 p-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl mb-8">Organisatoren</h2>
      <div className="grid grid-cols-2 gap-8">
        {[
          { name: 'Sebastian', image: '/sebastian.jpg' },
          { name: 'Björn', image: '/bjorn.jpg' },
          { name: 'Georg', image: '/georg.jpg' },
          { name: 'Sri', image: '/sri.jpg' },
        ].map((organizer) => (
          <div
            key={organizer.name}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <div className="aspect-w-1 aspect-h-1 relative mb-4">
              <Image
                src={organizer.image}
                alt={organizer.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl mt-4">{organizer.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Sponsors = () => (
  <div className="w-full bg-gray-100 p-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl mb-8">Sponsoren</h2>
      <div className="grid grid-cols-2 gap-8">
        {[
          { name: 'New Work SE', image: '/new-work-se-logo.png' },
          { name: 'Machine Minds', image: '/machine-minds-logo.png' },
        ].map((sponsor) => (
          <div
            key={sponsor.name}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <div className="aspect-w-1 aspect-h-1 relative mb-4">
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl mt-4">{sponsor.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MachineMindsCamp: NextPage = () => (
  <>
    <Head>
      <title>Machine Minds Camp</title>
    </Head>
    <div>
      <Hero />
      <InfoSection />
      <OpenSpaceTopics />
      <Organizers />
      <Sponsors />
    </div>
  </>
);

export default MachineMindsCamp;