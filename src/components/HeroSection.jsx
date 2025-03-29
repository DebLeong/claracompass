import { motion } from "framer-motion";

export default function HeroSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for joining the waitlist!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen flex flex-col justify-center items-center bg-ivory text-clay text-center p-6"
    >
      <h1 className="text-5xl font-serif font-semibold mb-4">Clara Compass</h1>
      <p className="text-lg max-w-xl">
        Investing as it should feel — soft, strong, and sovereign. A gentle rhythm guiding women toward financial clarity.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-sm">
        <input
          type="email"
          placeholder="Your email address"
          required
          className="w-full px-4 py-2 mb-4 border rounded-full"
        />
        <button
          type="submit"
          className="bg-clay text-white px-6 py-3 rounded-full hover:opacity-90 transition w-full"
        >
          Join the Waitlist
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-500">
        Or follow our journey:
        <br />
        <iframe
          src="https://claracompass.substack.com/embed"
          width="300"
          height="100"
          style="border: 1px solid #EEE; background: white; margin-top: 10px;"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </motion.div>
  );
}
