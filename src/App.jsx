import heroImage from "./assets/hero.jpg";

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

  const industries = [
    "Telecommunications",
    "Internet Service Providers",
    "Corporate Offices",
    "Retail & Commercial",
    "Residential Estates",
    "Government Facilities",
  ];

  const experience = [
    "Telecom Infrastructure Support",
    "IP Network Maintenance",
    "Preventative Site Maintenance",
    "Fibre Support Services",
    "Field Engineering Operations",
    "CCTV Installations",
    "Technical Site Audits",
    "Drive Testing Support",
  ];

  return (
    <div className="bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h2 className="font-bold text-xl text-orange-500">
            Bro's Technical Services
          </h2>

          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section
  className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
  style={{
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "110%",
  backgroundPosition: "0% center",
}}
>
  <div className="absolute inset-0 bg-slate-950/85"></div>



        <div className="relative z-10 text-center max-w-4xl">

          <p className="uppercase tracking-widest text-orange-500 mb-4">
            TELECOM • INFRASTRUCTURE • FIELD ENGINEERING
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Infrastructure.
            <br />
            Networks.
            <br />
            Telecom.
          </h1>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
  Delivering telecom infrastructure, network support,
  preventative maintenance and technical field engineering
  services across South Africa.
</p>

          <div className="flex gap-6 justify-center mt-8">
            <a
  href="#contact"
  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold inline-block"
>
  Request a Quote
</a>
            <a
  href="#contact"
  className="border border-slate-700 px-8 py-4 rounded-lg inline-block"
>
  Contact Us
</a>
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Services
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

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="bg-slate-900 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-6">
            Our Experience
          </h2>

          <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
            Our team brings practical experience from telecom,
            networking, infrastructure support and preventative
            maintenance environments.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {experience.map((item) => (
              <div
                key={item}
                className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-orange-500 transition"
              >
                ✓ {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-slate-900 border border-slate-800 rounded-xl p-8"
              >
                {industry}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-slate-900 py-24"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-8">
            About Us
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
  Bro's Technical Services delivers telecom,
  network infrastructure, fibre, CCTV and
  technical maintenance solutions across
  South Africa.

  <br />
  <br />

  Our leadership team combines practical
  experience in telecom operations,
  network maintenance, field engineering,
  infrastructure support and power utility
  engineering.

  <br />
  <br />

  With backgrounds spanning telecommunications
  and engineering environments, we are committed
  to delivering reliable, professional and
  technically sound solutions for our clients.
</p>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

           <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
  <h3 className="text-2xl font-bold text-orange-500 mb-4">
    Harry Modise
  </h3>

  <p className="mb-4">
    Co-Founder & Technical Lead
  </p>

  <ul className="text-slate-400 space-y-2">
    <li>• BSc Information Technology</li>
    <li>• CTN/IP Network Maintenance Engineer</li>
    <li>• Telecom Infrastructure Support</li>
    <li>• IP Network Operations & Maintenance</li>
    <li>• Fibre & Network Support</li>
    <li>• Preventative Site Maintenance</li>
    <li>• Field Engineering Operations</li>
    <li>• Technical Service Delivery</li>
  </ul>
</div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
  <h3 className="text-2xl font-bold text-orange-500 mb-4">
    Sandile Mbonane
  </h3>

  <p className="mb-4">
    Co-Founder & Engineering Lead
  </p>

  <ul className="text-slate-400 space-y-2">
    <li>• Master's Degree in Engineering</li>
    <li>• Professional Engineer (Pr Eng)</li>
    <li>• Former Telecom Infrastructure Engineer</li>
    <li>• Eskom Engineering Experience</li>
    <li>• Field Engineering Operations</li>
    <li>• Network Infrastructure Support</li>
    <li>• Preventative Maintenance</li>
    <li>• Technical Project Delivery</li>
  </ul>
</div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-orange-500 py-20"
      >
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-8">
            Contact Us
          </h2>

          <div className="space-y-4 text-lg">
            <p>📞 083 500 5514</p>
            <p>📧 YOUR EMAIL ADDRESS</p>
            <p>💬 067 730 5958</p>
            <p>📍 Pretoria, South Africa</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-slate-400">
        © 2026 Bro's Technical Services. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;