export default function TestimonialSection() {
  const testimonials = [
    { name: 'Sarah A.', feedback: 'Amazing service! Highly recommend.', company: 'CEO, BrightTech' },
    { name: 'John D.', feedback: 'Truly professional and timely.', company: 'Manager, DevCorp' },
    { name: 'Emma K.', feedback: 'Helped us grow fast.', company: 'Founder, QuickStart' },
  ];

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-4">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[300px] bg-white rounded-lg p-6 shadow shrink-0">
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.company}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
