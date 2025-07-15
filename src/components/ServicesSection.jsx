export default function ServicesSection() {
  const services = [
    { title: 'Web Development', desc: 'Custom websites & web apps', icon: '🌐' },
    { title: 'Mobile Apps', desc: 'iOS and Android apps', icon: '📱' },
    { title: 'UI/UX Design', desc: 'Modern, intuitive designs', icon: '🎨' },
    { title: 'SEO Optimization', desc: 'Improve search rankings', icon: '🚀' },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{s.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
