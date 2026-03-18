export default function Hero() {
  return (
    <section className="bg-[#00AEEF] text-white py-32 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Spolehlivá doprava po celé Evropě
      </h1>

      <p className="mb-6 text-lg">
        Rychlá a bezpečná logistika pro vaše podnikání
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-white text-[#00AEEF] px-6 py-3 rounded-xl font-semibold">
          Nezávazná poptávka
        </button>

        <button className="border border-white px-6 py-3 rounded-xl">
          Zavolat
        </button>
      </div>
    </section>
  );
}
