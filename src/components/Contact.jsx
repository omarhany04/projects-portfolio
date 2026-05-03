import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone
} from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";
import AnimatedText from "./AnimatedText";
import GlowCard from "./GlowCard";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = [
      `Hi ${personalInfo.name.split(" ")[0]},`,
      "",
      formData.message,
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`
    ].join("\n");

    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#6c63ff"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
      color: "#00d4ff"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "#a855f7"
    }
  ];

  const inputClasses = (fieldName) =>
    `w-full rounded-xl border bg-white/[0.03] px-5 py-4 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 ${
      focusedField === fieldName
        ? "border-accent/50 bg-white/[0.05] shadow-glow-sm"
        : "border-white/10 hover:border-white/20"
    }`;

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="dot-pattern absolute inset-0 opacity-10" />
      <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-[300px] w-[300px] rounded-full bg-neon-purple/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.p
            className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            07 - Get In Touch
          </motion.p>
          <AnimatedText
            text="Let's Work Together"
            className="justify-center font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          />
          <motion.p
            className="mx-auto mt-4 max-w-xl text-lg text-white/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Have an AI project, computer vision idea, or LLM product in mind? I'd love to hear
            about it and explore how we can build something useful together.
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            className="space-y-6 lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const Wrapper = info.href ? "a" : "div";

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlowCard className="glass hover-lift rounded-xl p-5" glowColor={`${info.color}25`}>
                    <Wrapper
                      href={info.href || undefined}
                      data-cursor={info.href ? "pointer" : undefined}
                      className="flex items-center gap-4"
                    >
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${info.color}15` }}
                      >
                        <Icon style={{ color: info.color }} />
                      </div>
                      <div>
                        <p className="mb-1 font-mono text-xs text-white/40">{info.label}</p>
                        <p className="text-sm font-medium text-white">{info.value}</p>
                      </div>
                    </Wrapper>
                  </GlowCard>
                </motion.div>
              );
            })}

            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="mb-4 font-mono text-sm text-white/40">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <MagneticButton key={social.name} strength={15}>
                      <a
                        href={social.url}
                        target={social.url.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        data-cursor="pointer"
                        data-cursor-text={social.name}
                        className="glass flex h-12 w-12 items-center justify-center rounded-xl text-white/50 transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-glow-sm"
                      >
                        <Icon className="text-lg" />
                      </a>
                    </MagneticButton>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="hidden pt-8 lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="glass rounded-2xl p-6">
                <p className="font-mono text-sm leading-relaxed text-white/30">
                  <span className="text-accent">const</span>{" "}
                  <span className="text-neon-blue">engineer</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-neon-purple">name</span>:{" "}
                  <span className="text-white/80">"{personalInfo.name}"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-neon-purple">role</span>:{" "}
                  <span className="text-white/80">"{personalInfo.tagline}"</span>,
                  <br />
                   &nbsp;&nbsp;<span className="text-neon-purple">focus</span>:{" "}
                   <span className="text-white/80">"{personalInfo.contactFocus}"</span>,
                   <br />
                   &nbsp;&nbsp;<span className="text-neon-purple">stack</span>:{" "}
                   <span className="text-white/80">"{personalInfo.contactStack}"</span>
                   <br />
                  {"}"};
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlowCard className="glass rounded-2xl p-8 md:p-10" glowColor="rgba(108, 99, 255, 0.15)">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/40">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your name"
                      required
                      className={inputClasses("name")}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/40">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your@email.com"
                      required
                      className={inputClasses("email")}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/40">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="What's this about?"
                    required
                    className={inputClasses("subject")}
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-white/40">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className={`${inputClasses("message")} resize-none`}
                  />
                </div>

                <MagneticButton strength={10} className="w-full">
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    data-cursor="pointer"
                    className={`btn-ripple flex w-full items-center justify-center gap-3 rounded-xl py-4 font-medium text-white transition-all duration-500 ${
                      isSubmitted
                        ? "border border-green-500/30 bg-green-500/20"
                        : "bg-gradient-to-r from-accent via-neon-purple to-accent bg-[length:200%_100%] shadow-glow hover:bg-right hover:shadow-glow-lg"
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <FaCheck className="text-green-400" />
                        Email Draft Opened
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </MagneticButton>
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
