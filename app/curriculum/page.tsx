import React from 'react'

const Curriculum = () => {
  return (
    <main className="px-4 py-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Curriculum</h1>
      <p className="mb-4">
        We implement the Early Childhood Care and Education (ECCE) framework designed by the National Curriculum Development Centre in Uganda.
        In addition to this, we integrate global best practices and learner-centered approaches for holistic child development.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Literacy Development</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Listening:</strong> Foundational skill to speech and language construction.</li>
        <li><strong>Speaking:</strong> Boosting communication confidence in local and foreign languages.</li>
        <li><strong>Reading & Comprehension:</strong> Focused on both reading fluency and understanding content.</li>
        <li><strong>Writing:</strong> Enabling children to express imagination and emotion through writing.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Numeracy</h2>
      <p>
        Emphasis on addition, subtraction, multiplication, and division, with practical application in daily life. Children are trained to identify, name, count, and use concepts meaningfully.
      </p>
    </main>
  )
}

export default Curriculum