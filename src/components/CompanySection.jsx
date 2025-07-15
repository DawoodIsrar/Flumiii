export default function CompaniesSection() {
  return (
    <section className="py-16 bg-gray-50" id="partners">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">TechNova Inc.</h3>
            <p className="text-gray-600">A trusted innovation partner building AI solutions with us.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">CloudEdge Ltd.</h3>
            <p className="text-gray-600">Helps us deploy and scale seamlessly across the cloud.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
