// app/vision/page.tsx
import React from 'react';

const VisionPage = () => {
  const values = [
    {
      title: "Responsible",
      description:
        "We are responsible for the growth and development of our learners and ensure everyone knows what they are supposed to do and achieve.",
    },
    {
      title: "Empathetic",
      description:
        "We show empathy by appreciating each learner’s abilities and encouraging learners to empathize with one another.",
    },
    {
      title: "Social",
      description:
        "Socialization fosters teamwork and harmony. We emphasize relationships, interaction, and collaboration.",
    },
    {
      title: "Productive",
      description:
        "We ensure that learners demonstrate knowledge and skills taught and apply them in daily life.",
    },
    {
      title: "Encouraging",
      description:
        "We support learners and staff in overcoming challenges, never giving up on their goals.",
    },
    {
      title: "Creative",
      description:
        "Creativity drives our learning approach. We combine global insights and local realities to foster hybrid solutions.",
    },
    {
      title: "Transformative",
      description:
        "We aim to bring meaningful change by addressing root causes and scaling accessible, quality education.",
    },
  ];

  return (
    <main className="px-4 py-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Vision, Mission & Values</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p className="text-lg mt-2">“Equitable access to early childhood care and education across Uganda.”</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-lg mt-2">
          Growing children with a higher grasp of numeracy, literacy, values and skills for a stronger foundation of lifelong learning.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Our Motto</h2>
        <p className="text-lg mt-2 italic">Care, Challenge, Create</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Core Values (R-E-S-P-E-C-T)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((val, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold">{val.title}</h3>
              <p className="text-sm mt-1">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VisionPage;
