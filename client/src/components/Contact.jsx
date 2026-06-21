import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      const response = await axios.post(
        "https://portfolio-backend.onrender.com/api/contact",
        formData
      );

      if (response.data.success) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus("Failed to send message.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-slate-400 mb-10 max-w-2xl">
          Have a project idea or opportunity? Let's connect.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl space-y-5"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3"
          />

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-green-400">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;