import React, { useState } from 'react';
import { Menu, X, UserCircle, Calendar, Phone } from 'lucide-react';

import P1 from './images/1.jpg';
import P2 from './images/2.jpg';
import P3 from './images/3.jpg';
import P4 from './images/4.jpg';
import P5 from './images/5.jpg';
import P6 from './images/6.jpg';
import P7 from './images/7.jpg';

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sections = ['Home', 'About Us', 'Team', 'Events', 'Contact Us'];

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={require("./images/logo.png")} alt="SIGCHI SRM Logo" className="w-10 h-10 rounded-full" />
                    <span className="text-xl font-bold text-cyan-400">ACM SIGCHI SRM</span>
                </div>
                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-cyan-400">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* Navigation Links */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-gray-900 md:block md:static md:w-auto`}>
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
                        {sections.map((section) => (
                            <li key={section}>
                                <button
                                    onClick={() => {
                                        setActiveSection(section);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`w-full text-left md:text-center ${activeSection === section ? 'text-cyan-400 font-bold' : 'text-gray-300 hover:text-cyan-400'}`}
                                >
                                    {section}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Home Section
const HomeSection = () => (
  <div className="min-h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: "./Images/Techpark.jpg" }}>
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
      <div className="text-center max-w-2xl px-4 relative z-10"> {/* Ensure text is above the overlay */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">ACM SIGCHI SRM</h1>
          <p className="text-xl text-gray-300 mb-8">Exploring the Intersection of Computing and Human Interaction</p>
      </div>
  </div>
);

// About Us Section
const AboutUsSection = () => (
  <div className="min-h-screen py-16 bg-gray-800"> {/* Changed from py-16 to min-h-screen */}
      <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                  <img src={require("./images/logo.png")} alt="SIGCHI SRM" className="rounded-lg shadow-lg" />
              </div>
              <div>
                  <p className="text-gray-300 mb-4">ACM SIGCHI SRM is a vibrant student community dedicated to exploring the fascinating world of Human-Computer Interaction (HCI). We bring together passionate students to learn, innovate, and collaborate on cutting-edge interaction design and technology.</p>
                  <p className="text-gray-300">Our mission is to foster interdisciplinary learning, research, and practical applications of HCI principles.</p>
              </div>
          </div>
      </div>
  </div>
);

// Team Section
const TeamSection = () => {
  const teamDomains = {
    "Core Secretariat": [
          { name: "Pranuthi Kabilan", role: "Chairperson", img: P1 },
          { name: "Ezra Chaitanya Prasad", role: "Vice Chairperon", img: P2 },
          { name: "Mayukh Tilak", role: "Secretary", img: P3 }
      ],
    "Domain Leads": [
        { name: "Mohammed", role: "Technical Lead", img: P5 },
        { name: "Koniteji Sai Kalyan", role: "Creative Lead", img: P4 },
        { name: "Vratika Bawangade", role: "Events Lead", img: P6 },
        { name: "Krishikaa Mathi Bharathi", role: "Corporate Lead", img: P7 }
      ]
  };

  return (
      <div className="py-16  bg-gray-900">
          <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Our Team</h2>
              {Object.entries(teamDomains).map(([domain, members]) => (
                  <div key={domain} className="mb-12 justify-items-center">
                      <h3 className="text-2xl font-semibold mb-8 text-cyan-500">{domain}</h3>
                      <div className="grid md:grid-cols-4 gap-6">
                          {members.map((member) => (
                              <div key={member.name} className="text-center flex flex-col "> {/* Center align items */}
                                  <img src={member.img} alt={member.name} className="w-48 h-48 mx-auto rounded-full mb-4 object-cover border-4 border-cyan-600" />
                                  <h4 className="font-bold text-gray-200">{member.name}</h4>
                                  <p className="text-gray-400">{member.role}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

// Events Section
const EventsSection = () => {
  const upcomingEvents = [
      { title: "Code Bytes", date: "9-10 December 2024", description: "Hands-on workshop on user experience design principles" }
  ];

  const pastEvents = [
      { title: "Crafting Reality - The art of GenAI and revolutionizing Engines of Model Transformers", date: "13 September 2024", description: "A hands on GenAI Workshop." },
      { title: "Pythoneers: Code. Create. Conquer.", date: "31 August 2024", description: "An Epic Day of coding and conquering." }
  ];

  return (
      <div className="py-16 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Events</h2>
              
              <h3 className="text-2xl font-semibold text-center mb-6 text-cyan-300">Upcoming Events</h3>
              <div className="space-y-6 mb-12">
                  {upcomingEvents.map((event) => (
                      <div key={event.title} className="bg-gray-900 p-6 rounded-lg flex items-center space-x-6">
                          <Calendar className="text-cyan-600" size={48} />
                          <div>
                              <h4 className="text-xl font-bold text-cyan-400">{event.title}</h4>
                              <p className="text-gray-400 mb-2">{event.date}</p>
                              <p className="text-gray-300">{event.description}</p>
                          </div>
                      </div>
                  ))}
              </div>

              <h3 className="text-2xl font-semibold text-center mb-6 text-cyan-300">Past Events</h3>
              <div className="space-y-6">
                  {pastEvents.map((event) => (
                      <div key={event.title} className="bg-gray-900 p-6 rounded-lg flex items-center space-x-6">
                          <Calendar className="text-cyan-600" size={48} />
                          <div>
                              <h4 className="text-xl font-bold text-cyan-400">{event.title}</h4>
                              <p className="text-gray-400 mb-2">{event.date}</p>
                              <p className="text-gray-300">{event.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

// Contact Us Section
const ContactUsSection = () => {
  return (
      <div className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  <div>
                      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                          <div className="flex items-center space-x-4 mb-4">
                              <UserCircle className="text-cyan-600" size={36} />
                              <div>
                                  <h3 className="font-bold text-cyan-400">Chapter Coordinator</h3>
                                  <p className="text-gray-300">sigchi.srm@example.com</p>
                              </div>
                          </div>
                          <div className="flex items-center space-x-4">
                              <Phone className="text-cyan-600" size={36} />
                              <div>
                                  <h3 className="font-bold text-cyan-400">Contact Number</h3>
                                  <p className="text-gray-300">+91 9876 543210</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* You can add more links or information here if needed */}
              </div>
          </div>
      </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('Home');

  return (
      <div className="min-h-screen bg-gray-900 text-white">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          {activeSection === 'Home' && <HomeSection setActiveSection={setActiveSection} />}
          {activeSection === 'About Us' && <AboutUsSection />}
          {activeSection === 'Team' && <TeamSection />}
          {activeSection === 'Events' && <EventsSection />}
          {activeSection === 'Contact Us' && <ContactUsSection />}
          {/* Footer */}
          <footer className="bg-gray-800 text-white py-6">
              <div className="max-w-6xl mx-auto px-4 text-center">
                  <p className="text-gray-400">© 2024 ACM SIGCHI SRM. All Rights Reserved.</p>
              </div>
          </footer>
      </div>
  );
};

export default App;