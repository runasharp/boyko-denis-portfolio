import React from 'react';
import './App.css'; // Ensure you have some CSS for styling

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
        <img
        src={`${process.env.PUBLIC_URL}/profile.jpg`}
        alt="Profile of Boyko Denis"
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
            Ich bin ein Ingenieur mit Erfahrung im Entwerfen, Bauen und Optimieren von Systemen und Technologien, die das Leben erleichtern. Leidenschaftlich daran interessiert, Probleme zu lösen und innovative Lösungen zu schaffen.
          </p>
        </section>
        <section className="workplaces">
          <h3>Berufserfahrung</h3>
          <div className="workplace-card">
            <h4>Firma 1</h4>
            <p>Position: Ingenieur</p>
            <p>Zeitraum: 2020 - 2023</p>
            <p>Kurzbeschreibung der Rolle und der wichtigsten Aufgaben.</p>
          </div>
          <div className="workplace-card">
            <h4>Firma 2</h4>
            <p>Position: Senior Ingenieur</p>
            <p>Zeitraum: 2017 - 2020</p>
            <p>Kurzbeschreibung der Rolle und der wichtigsten Aufgaben.</p>
          </div>
        </section>
        <section className="contact">
          <h3>Kontakt</h3>
          <p>Sie können mich gerne kontaktieren unter: <a href="mailto:email@example.com">email@example.com</a></p>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Boyko Denis</p>
      </footer>
    </div>
  );
}

export default App;