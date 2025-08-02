
 const leaders = [
    { name: "Decimon Wandera", role: "Co-founder and Director", background: "Educationist, MEC, BAE-ELS&LIT" },
    { name: "Denis Kinyera", role: "Co-founder", background: "Educationist, ME, BAE-ECON&ENT" },
    { name: "Catherine Kantono", role: "Secretary SMC", background: "Business Administration, Bachelors" },
    { name: "Juliet Namulondo", role: "Vice Chairperson SMC", background: "Teacher, Educationist" },
    { name: "Owere Wilson", role: "Chairperson SMC", background: "Business, Entrepreneurship" },
    { name: "Babalanda Patrick", role: "Chairperson PTA", background: "Business, Entrepreneurship" }
  ];


const Leadership = () => {
  return (
    <main className="px-4 py-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">School Leadership</h1>
      <ul className="space-y-4">
        {leaders.map((leader, i) => (
          <li key={i} className="border-b pb-2">
            <p className="font-semibold">{leader.name} — <span className="text-blue-700">{leader.role}</span></p>
            <p className="text-sm text-gray-600">{leader.background}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Leadership