import React from 'react';
import './App.css'; // Ensure you have some CSS for styling
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Boyko Denis - Ingenieur Portfolio</title>
        <meta name="description" content="Portfolio von Boyko Denis, Ingenieur mit umfassender Berufserfahrung in Messtechnik und Systemoptimierung." />
      </Helmet>
      <header className="header">
        <div className="header-content">
          <img
            src={`${process.env.PUBLIC_URL}/profile.jpg`}
            alt="Profilfoto von Boyko Denis"
            className="profile-photo"
          />
          <div className="header-text">
            <h1>Boyko Denis</h1>
            <h2>Ingenieur</h2>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="about">
          <h3>Über mich</h3>
          <p>
            Ingenieur mit langjähriger Erfahrung in Messtechnik, Kalibrierung und Systemoptimierung. Mein Fokus liegt auf der Verbesserung von Prozessen, der technischen Unterstützung und der Einhaltung internationaler Normen und Vorschriften.
          </p>
        </section>
        <section className="workplaces">
          <h3>Berufserfahrung</h3>
          <div className="workplace-card">
            <h4>Messtechniker</h4>
            <p>Klingel Medical Metal GmbH, Pforzheim</p>
            <p>Zeitraum: 07/2023 – heute</p>
            <p>
              Führung von Kalibrierungsdokumentationen, Wartung und Instandhaltung von Messgeräten sowie enge Zusammenarbeit mit verschiedenen Abteilungen zur Sicherstellung der Messgenauigkeit.
            </p>
          </div>
          <div className="workplace-card">
            <h4>Ingenieur für Messtechnik</h4>
            <p>AG Erdölverarbeitungswerk Antipinskij, Tjumen, Russland</p>
            <p>Zeitraum: 05/2014 – 07/2018</p>
            <p>
              Metrologischer Support und Wartung von Messgeräten, Erstellung von Kalibrierdokumentationen, Durchführung von Schulungen zur Metrologie und Einhaltung internationaler Standards.
            </p>
          </div>
          <div className="workplace-card">
            <h4>Ingenieur für Mess-, Steuer- und Regelungsgeräte</h4>
            <p>AG SvjazTransNeft, Tjumen, Russland</p>
            <p>Zeitraum: 10/2012 – 05/2014</p>
            <p>
              Eichung und Kalibrierung von Messmitteln für elektrische und thermische Größen, Unterstützung bei der Implementierung neuer Messsysteme und Erstellung technischer Dokumentationen.
            </p>
          </div>
        </section>
        <section className="contact">
          <h3>Kontakt</h3>
          <p>Sie können mich gerne kontaktieren unter: <a href="mailto:ing.boyko@gmail.com">ing.boyko@gmail.com</a></p>
          <p>Telefon: 0176 43313801</p>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Boyko Denis</p>
      </footer>
    </div>
  );
}

export default App;