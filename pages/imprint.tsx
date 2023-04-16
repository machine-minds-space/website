import Head from 'next/head';

const Imprint = () => {
  return (
    <>
      <Head>
        <title>Machine Minds - Imprint</title>
      </Head>

      <main className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h1 className="text-4xl font-bold text-white mb-6">Imprint</h1>

              <h2 className="text-2xl font-semibold mt-4 mb-3 text-white">Information according to § 5 TMG</h2>
              <p className="text-gray-300 mb-4">Korfmann Ventures UG<br />
                Parkallee 7<br />
                20144 Hamburg</p>

              <p className="text-gray-300 mb-4">Commercial register: HRB 177270<br />
                Register court: Hamburg</p>

              <p className="text-gray-300 mb-4"><strong>Represented by:</strong><br />
                Sebastian Korfmann</p>

              <h2 className="text-2xl font-semibold mt-4 mb-3 text-white">Contact</h2>
              <p className="text-gray-300 mb-4">Phone: +49-040-52479932<br />
                Fax: +49-040-52479932<br />
                E-Mail: hello@korfmann.net</p>

              <h2 className="text-2xl font-semibold mt-4 mb-3 text-white">VAT ID</h2>
              <p className="text-gray-300 mb-4">VAT identification number according to § 27 a VAT Act:<br />
                DE355878489</p>

              <h2 className="text-2xl font-semibold mt-4 mb-3 text-white">Editorially responsible</h2>
              <p className="text-gray-300 mb-4">Sebastian Korfmann</p>

              <h2 className="text-2xl font-semibold mt-4 mb-3 text-white">EU Dispute Resolution</h2>
              <p className="text-gray-300 mb-4">The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">https://ec.europa.eu/consumers/odr/</a>.<br /> You can find our e-mail address in the imprint above.</p>

              <h2 className="text-2xl font-semibold mt-4 mb-3 text-white">Consumer Dispute Resolution/Universal Dispute Resolution Body</h2>
              <p className="text-gray-300 mb-4">We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>

              <p className="text-gray-300 mt-4">Source: <a href="https://www.e-recht24.de" className="text-blue-600 hover:text-blue-800">eRecht24</a></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Imprint;