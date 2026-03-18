export default function Contact() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Kontakt</h2>

      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input placeholder="Jméno" className="p-3 border rounded" />
        <input placeholder="Email" className="p-3 border rounded" />
        <textarea placeholder="Zpráva" className="p-3 border rounded" />

        <button className="bg-[#00AEEF] text-white p-3 rounded-xl">
          Odeslat poptávku
        </button>
      </form>
    </section>
  );
}
