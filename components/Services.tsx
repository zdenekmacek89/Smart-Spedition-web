const services = [
  "Vnitrostátní doprava",
  "Mezinárodní přeprava",
  "Expresní zásilky",
  "Skladování",
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Služby</h2>

      <div className="grid md:grid-cols-4 gap-6 px-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
