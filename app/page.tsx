import HeroSection from '@/components/HeroSection';
import valuesData from '@/lib/ValueData';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <HeroSection />
      <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>

      {valuesData.map((value, index) => (
        <div
          key={value.title}
          className={`flex flex-col ${
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-8 mb-12`}
        >
          {/* Text */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
            <p className="text-gray-700">{value.description}</p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={value.image}
              alt={value.title}
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      ))}
    </section>
    </main>
  );
}
