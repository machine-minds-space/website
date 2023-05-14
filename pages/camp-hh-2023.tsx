// pages/machine-minds-camp.tsx
import type { NextPage } from 'next';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Head from 'next/head';

const Hero = () => (
  <div className="w-full bg-gradient-to-r from-blue-600 to-blue-900 text-white p-8">
    <div className="mx-auto max-w-7xl flex items-center">
      <div>
        <h1 className="text-4xl">Machine Minds Camp</h1>
        <p className="text-xl">Entdecke die Zukunft der generativen KI</p>
      </div>
    </div>
  </div>
);

const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const targetDate = new Date('June 2, 2023');
      const currentDate = new Date();
      const diff = targetDate.getTime() - currentDate.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex space-x-4 text-center">
      <div>
        <p className="text-2xl font-bold">{time.days}</p>
        <p>Tage</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{time.hours}</p>
        <p>Stunden</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{time.minutes}</p>
        <p>Minuten</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{time.seconds}</p>
        <p>Sekunden</p>
      </div>
    </div>
  );
};

const RegisterButton = () => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
    Jetzt anmelden
  </button>
);

const InfoSection = () => (
  <div className="w-full bg-gray-200 p-8">
    <section className="mx-auto max-w-7xl">
      <CountdownTimer />
      <p className="text-xl sm:text-2xl text-justify leading-snug sm:leading-relaxed tracking-wide text-gray-600">
        Das Machine Minds Camp findet am 2. Juni im New Work Harbour in Hamburg statt. Es ist ein Open Space Event, bei dem jeder einen Beitrag leisten kann. Sei dabei und diskutiere auf Deutsch über generative KI.
      </p>
      <RegisterButton />
    </section>
  </div>
);

const OpenSpaceTopics = () => (
  <div className="w-full bg-gray-100 p-8">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-2xl mb-8">Vorgeschlagene Open Space Themen</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
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
            className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-150"
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
            className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-150"
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

const Footer = () => (
  <footer className="w-full bg-gray-800 text-white p-8">
    <div className="mx-auto max-w-7xl">
      <p className="text-xl">Kontakt</p>
      <p>Email: info@machinemindscamp.com</p>
      <p>Telefon: +49 123 456 7890</p>
    </div>
  </footer>
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
      <Footer />
    </div>
  </>
);

export default MachineMindsCamp;