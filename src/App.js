import React, { useEffect, useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 14;
      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>Boyko Denis - Ingenieur Portfolio</title>
        <meta name="description" content="Portfolio von Boyko Denis, Ingenieur mit umfassender Berufserfahrung in Messtechnik und Systemoptimierung." />
      </Helmet>
      <div className="layout">
        <aside className="left-panel">
          <div className="sidebar">
            <img
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              alt="Profilfoto von Boyko Denis"
              className="profile-photo-large"
              onClick={() => setModalOpen(true)}
              style={{ cursor: 'pointer' }}
            />
            <div className="sidebar-section">
              <h3>Boyko Denis</h3>
              <p>Ingenieur</p>
              <p>
                Ingenieur mit langjähriger Erfahrung in Messtechnik, Kalibrierung und Systemoptimierung. Mein Fokus liegt auf der Verbesserung von Prozessen, der technischen Unterstützung und der Einhaltung internationaler Normen und Vorschriften.
              </p>
            </div>
            <nav>
              <a href="#workplaces" className={activeSection === 'workplaces' ? 'active' : ''}>Berufserfahrung</a>
              <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Bildung</a>
              <a href="#languages" className={activeSection === 'languages' ? 'active' : ''}>Sprachen</a>
            </nav>
            <div className="sidebar-icons">
              <a href="mailto:ing.boyko@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/denis-boyko-3a172887/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="tel:+4917643313801">
                <FaPhone />
              </a>
            </div>
            <footer className="footer">
              <hr className="divider" />
              <p>© 2024 Boyko Denis</p>
            </footer>
          </div>
        </aside>
        <main className="main">
          <section id="workplaces" className="card">
          <h3>Berufserfahrung</h3>
          <div className="workplace-card">
            <h4>Messtechniker</h4>
            <p>Klingel Medical Metal GmbH, Pforzheim</p>
            <p>Zeitraum: 07/2023 – heute</p>
            <p>
              Führung von Kalibrierungsdokumentationen, Wartung und Instandhaltung von Messgeräten sowie enge Zusammenarbeit mit verschiedenen Abteilungen zur Sicherstellung der Messgenauigkeit.
            </p>
          </div>
          <hr className="divider" />
          <div className="workplace-card">
            <h4>Ingenieur für Messtechnik</h4>
            <p>AG Erdölverarbeitungswerk Antipinskij, Tjumen, Russland</p>
            <p>Zeitraum: 05/2014 – 07/2018</p>
            <p>
              Metrologischer Support und Wartung von Messgeräten, Erstellung von Kalibrierdokumentationen, Durchführung von Schulungen zur Metrologie und Einhaltung internationaler Standards.
            </p>
          </div>
          <hr className="divider" />
          <div className="workplace-card">
            <h4>Ingenieur für Mess-, Steuer- und Regelungsgeräte</h4>
            <p>AG SvjazTransNeft, Tjumen, Russland</p>
            <p>Zeitraum: 10/2012 – 05/2014</p>
            <p>
              Eichung und Kalibrierung von Messmitteln für elektrische und thermische Größen, Unterstützung bei der Implementierung neuer Messsysteme und Erstellung technischer Dokumentationen.
            </p>
          </div>
        </section>
        <section id="education" className="card">
            <h3>Bildung</h3>
            <div className="education-card">
              <h4>Spezialist für Metrologie</h4>
              <p>Ingenieurakademie, Jekaterinburg, Russland</p>
              <p>Zeitraum: 05/2015 – 09/2015</p>
              <p>Programm: "Metrologie und Gewährleistung der Einheitlichkeit der Messungen"</p>
            </div>
            <hr className="divider" />
            <div className="education-card">
              <h4>Ingenieur für elektronische Geräte und Anlagen</h4>
              <p>Staatliche Universität für Steuerungssysteme und Funkelektronik, Tomsk, Russland</p>
              <p>Zeitraum: 09/2003 – 06/2008</p>
            </div>
            <hr className="divider" />
            <div className="education-card">
              <h4>Elektrotechnik-Techniker</h4>
              <p>Berufslyzeum Nr. 68, Langepas, Russland</p>
              <p>Zeitraum: 09/1998 – 05/2000</p>
              <p>Fachgebiet: "Computer, Computerkomplexe, Systeme und Netzwerke"</p>
            </div>
          </section>
          <section id="languages" className="card">
            <h3>Sprachen</h3>
            <div>
              <p>Deutsch - Mittelstufe (B1/B2)</p>
              <div className="language-bar">
                <div className="fill" style={{ width: '60%' }}></div> {/* 60% indicates B1/B2 level */}
              </div>
            </div>
            <div>
              <p>Englisch - Grundkenntnisse bis Mittelstufe (A2/B1)</p>
              <div className="language-bar">
                <div className="fill" style={{ width: '40%' }}></div> {/* 40% indicates A2/B1 level */}
              </div>
            </div>
            <div>
              <p>Russisch - Muttersprache</p>
              <div className="language-bar">
                <div className="fill" style={{ width: '100%' }}></div> {/* 100% indicates native proficiency */}
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Modal implementation */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setModalOpen(false)}>&times;</span>
            <img
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              alt="Profilfoto von Boyko Denis"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;