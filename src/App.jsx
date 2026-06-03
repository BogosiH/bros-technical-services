function App() {
  const services = [
    "Network Installations",
    "Wi-Fi Solutions",
    "Fibre & Telecom Support",
    "CCTV Installations",
    "Preventative Site Maintenance",
    "Field Technical Support",
    "Network Site Audits",
    "Drive Testing Support",
  ];

  return (
    <div className="bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div>
            <h2 className="font-bold text-xl text-orange-500">
              Bro's Technical Services
            </h2>
          </div>

          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="text-center max-w-4xl">

          <p className="uppercase tracking-widest text-orange-500 mb-4">
            Telecom • Infrastructure • Field Engineering
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Infrastructure.
            <br />
            Networks.
            <br />
            Telecom.
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Delivering network infrastructure support,
            preventative maintenance, fibre solutions,
            technical field services and telecom support
            across South Africa.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold">
              Request Service
            </button>

            <button className="border border-slate-700 px-8 py-4 rounded-lg">
              Contact Us
            </button>
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => (
            <div
              key={service}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-orange-500 transition"
            >
              <h3 className="font-semibold">
                {service}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries"
        className="bg-slate-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-950 p-8 rounded-xl">
              Telecommunications
            </div>

            <div className="bg-slate-950 p-8 rounded-xl">
              Internet Service Providers
            </div>

            <div className="bg-slate-950 p-8 rounded-xl">
              Corporate Offices
            </div>

            <div className="bg-slate-950 p-8 rounded-xl">
              Retail & Commercial
            </div>

            <div className="bg-slate-950 p-8 rounded-xl">
              Residential Estates
            </div>

            <div className="bg-slate-950 p-8 rounded-xl">
              Government Facilities
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-5xl mx-auto text-center py-24 px-6"
      >
        <h2 className="text-4xl font-bold mb-8">
          Why Choose Us
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed">
          Our team combines network engineering,
          infrastructure support, preventative maintenance,
          field technical support and telecom experience
          to deliver dependable technical services across
          multiple industries.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-orange-500 text-white py-20"
      >
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-lg">
            Available for telecom, infrastructure,
            network and field support projects.
          </p>

        </div>
      </section>

    </div>
  );
}

export default App;