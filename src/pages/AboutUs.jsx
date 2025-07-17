import React, { useRef, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero } from '../components';
import bossImg from '../assets/team/boss.jpeg';
import rachiImg from '../assets/team/rachi.JPG';
import ksImg from '../assets/team/ks.jpeg';
import gayanImg from '../assets/team/gayan.jpeg';
import kaviImg from '../assets/team/kavi.jpeg';
import hariniImg from '../assets/team/harini.jpeg';
import isuruImg from '../assets/team/isuru.jpeg';

const team = [
  {
    name: 'Sahan Dushmantha De Silva',
    role: 'CEO & Founder',
    image: bossImg,
    description: 'Visionary leader with 15+ years in technology innovation.',
  },
  {
    name: 'Rachithra Pahansith Jayasinghe',
    role: 'Company Secretary',
    image: rachiImg,
    description: 'Ensures smooth company operations and compliance.',
  },
  {
    name: 'Kuruwitage Saveendra Perera',
    role: 'Head of Research Projects',
    image: ksImg,
    description: 'Leads research and innovation initiatives.',
  },
  {
    name: 'Kavinda Gayan Bandara',
    role: 'Head of Project Management',
    image: gayanImg,
    description: 'Expert in project delivery and client success.',
  },
  {
    name: 'Kavindya Piyumanthi Opatha',
    role: 'Head of Human Resources',
    image: kaviImg,
    description: 'Drives people strategy and team culture.',
  },
  {
    name: 'Harini Kularathne',
    role: 'Head of Finance',
    image: hariniImg,
    description: 'Manages financial planning and analysis.',
  },
  {
    name: 'Isuru Nimeshwara Kularathne',
    role: 'Head of Marketing',
    image: isuruImg,
    description: 'Leads marketing and brand strategy.',
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setActiveIdx(prev => (prev < team.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearTimeout(timer);
  }, [activeIdx, isPaused]);

  useEffect(() => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[activeIdx];
      card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [activeIdx]);

  return (
    <div className="bg-neutral-dark min-h-screen text-accent">
      <Hero
        title={
          <span className="text-accent">
            About <span className="text-secondary">Us</span>
          </span>
        }
        subtitle={
          <span className="text-accent">
            Meet Our <span className="text-secondary">Team</span>
          </span>
        }
        description={
          <span className="text-accent">
            Dedicated to delivering excellence and digital transformation.
          </span>
        }
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        gradient="from-primary via-black to-neutral-dark"
      />

      {/* Company Introduction Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary mb-4 font-heading">
            Who We Are
          </h1>
          <p className="text-accent text-lg opacity-90">
            ICT Option is a leading technology solutions provider based in Sri
            Lanka, dedicated to empowering organizations through digital
            transformation. With a passionate team of experts, we deliver
            innovative, scalable, and user-centric solutions that drive business
            growth and operational excellence. Our commitment to quality,
            integrity, and client success sets us apart in the ever-evolving
            tech landscape.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-accent mb-4 font-heading">
            Our Core Values
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary rounded-lg p-6 shadow-md border-t-4 border-secondary">
            <h3 className="text-xl font-bold text-secondary mb-2">
              Innovation
            </h3>
            <p className="text-accent text-sm">
              We embrace creativity and forward-thinking to deliver cutting-edge
              solutions for our clients.
            </p>
          </div>
          <div className="bg-primary rounded-lg p-6 shadow-md border-t-4 border-secondary">
            <h3 className="text-xl font-bold text-secondary mb-2">Integrity</h3>
            <p className="text-accent text-sm">
              We uphold the highest standards of honesty and transparency in all
              our interactions and deliverables.
            </p>
          </div>
          <div className="bg-primary rounded-lg p-6 shadow-md border-t-4 border-secondary">
            <h3 className="text-xl font-bold text-secondary mb-2">
              Client Success
            </h3>
            <p className="text-accent text-sm">
              We are dedicated to our clients' growth, building lasting
              partnerships and delivering measurable results.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-accent tracking-wide uppercase">
            Our Team
          </h2>
          <p className="text-accent opacity-80 tracking-wide">
            Over 10 years of experience
          </p>
          <div className="text-xs text-primary bg-secondary inline-block px-3 py-1 rounded mt-2 font-semibold tracking-widest uppercase">
            Private
          </div>
        </div>
        <div
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-none"
          ref={scrollRef}
        >
          {team.map((member, idx) => (
            <div
              key={member.name}
              className="relative rounded-xl overflow-hidden shadow-lg group min-w-[320px] max-w-[320px] flex flex-col justify-end h-[420px] bg-black"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'brightness(0.55)' }}
              />
              <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                <h3 className="text-2xl font-extrabold text-white mb-1 tracking-wide uppercase drop-shadow-lg">
                  {member.role}
                </h3>
                <div className="text-lg font-bold text-accent mb-2 tracking-wide uppercase drop-shadow">
                  {member.name}
                </div>
                <p className="text-sm text-neutral-200 mb-4 opacity-90 drop-shadow">
                  {member.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-secondary text-primary font-bold text-center py-2 tracking-widest text-xs uppercase z-20">
                {member.name.split(' ')[0]} {member.name.split(' ')[1]}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 grid sm:grid-cols-2 gap-8">
        {['Vision', 'Mission'].map((label, index) => (
          <motion.div
            key={label}
            className="bg-gradient-to-br from-neutral-light to-neutral-dark p-6 rounded-xl border border-accent shadow-lg hover:shadow-glow-lg transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
          >
            <h4 className="text-xl font-bold text-secondary mb-2">
              Our {label}
            </h4>
            <p className="text-accent text-sm">
              {label === 'Vision'
                ? 'To be the leading catalyst for digital transformation in Sri Lanka and beyond.'
                : 'To empower businesses with innovative, scalable, and user-centric technology solutions.'}
            </p>
          </motion.div>
        ))}
      </section>
      {/* Client Reviews Section */}
      <section className="py-20 bg-neutral-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="Testimonials Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">
              Testimonials
            </span>
            <h2 className="text-4xl font-extrabold text-white mb-2 font-heading tracking-wide uppercase">
              Our Clients Reviews
            </h2>
            <p className="text-accent opacity-80 max-w-2xl mx-auto mb-6">
              See what our clients say about working with us and how we helped
              them achieve their goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-black/80 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative min-h-[260px]">
              <p className="text-white text-base mb-8 font-medium">
                "ICT Option delivered our project on time and exceeded our
                expectations. Their team is highly skilled and professional."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Alish White"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-white text-base">
                    Alish White
                  </div>
                  <div className="text-accent text-xs">Entrepreneur</div>
                </div>
                <span className="ml-auto text-secondary text-3xl font-bold absolute bottom-6 right-6">
                  “”
                </span>
              </div>
            </div>
            {/* Review 2 */}
            <div className="bg-black/80 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative min-h-[260px]">
              <p className="text-white text-base mb-8 font-medium">
                "The digital marketing campaign brought us more leads than ever
                before. Highly recommended!"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Devin Mueller"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-white text-base">
                    Devin Mueller
                  </div>
                  <div className="text-accent text-xs">Entrepreneur</div>
                </div>
                <span className="ml-auto text-secondary text-3xl font-bold absolute bottom-6 right-6">
                  “”
                </span>
              </div>
            </div>
            {/* Review 3 */}
            <div className="bg-black/80 rounded-xl p-8 shadow-xl flex flex-col items-start border border-neutral-700 relative min-h-[260px]">
              <p className="text-white text-base mb-8 font-medium">
                "Their cloud solutions helped us scale quickly and securely.
                Great experience working with ICT Option."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/36.jpg"
                  alt="Dave Beech"
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div>
                  <div className="font-bold text-white text-base">
                    Dave Beech
                  </div>
                  <div className="text-accent text-xs">Manager</div>
                </div>
                <span className="ml-auto text-secondary text-3xl font-bold absolute bottom-6 right-6">
                  “”
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-dark">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-3 font-heading text-secondary">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
          </motion.div>
          <div className="max-w-3xl mx-auto grid gap-6 md:gap-8">
            <div className="bg-primary/90 rounded-xl p-6 shadow-lg border border-secondary flex flex-col gap-2">
              <div className="font-bold text-lg text-secondary">
                What industries do you serve?
              </div>
              <div className="text-accent text-base opacity-90">
                We work with clients across finance, healthcare, retail,
                education, and more.
              </div>
            </div>
            <div className="bg-primary/90 rounded-xl p-6 shadow-lg border border-secondary flex flex-col gap-2">
              <div className="font-bold text-lg text-secondary">
                How do I start a project?
              </div>
              <div className="text-accent text-base opacity-90">
                Simply contact us through our website or call us. We'll schedule
                a free consultation to discuss your needs.
              </div>
            </div>
            <div className="bg-primary/90 rounded-xl p-6 shadow-lg border border-secondary flex flex-col gap-2">
              <div className="font-bold text-lg text-secondary">
                Do you offer ongoing support?
              </div>
              <div className="text-accent text-base opacity-90">
                Yes, we provide ongoing maintenance and support packages
                tailored to your business.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      {/* Call to Action Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-accent mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-accent mb-10 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge
              technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-secondary text-accent px-10 py-4 rounded-full font-semibold text-lg shadow-glow hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border-2 border-accent text-accent px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-primary transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
