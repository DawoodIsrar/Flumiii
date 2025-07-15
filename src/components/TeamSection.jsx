export default function TeamSection() {
  const team = [
    { name: 'Alice', role: 'Frontend Developer' },
    { name: 'Bob', role: 'Backend Developer' },
    { name: 'Clara', role: 'UI Designer' },
  ];

  return (
    <section className="py-16 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-4">
          {team.map((member, i) => (
            <div key={i} className="min-w-[250px] bg-gray-100 rounded-lg p-6 shadow">
              <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-center">{member.name}</h4>
              <p className="text-sm text-gray-600 text-center">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {team.map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
