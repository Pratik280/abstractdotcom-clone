import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <header className="bg-indigo-50">
        <Navbar />
        <div className="custom-container">
          <h1>How can we help?</h1>
        </div>
      </header>
      <main className="bg-white">
        <Sections />
      </main>
      <Footer />
    </>
  );
};

const Sections = () => {
  return (
    <div className="custom-container">
      <ul>
        <li>
          <section>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus maxime magni fuga!
            </p>
          </section>
        </li>
        <li>
          <section>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus maxime magni fuga!
            </p>
          </section>
        </li>
        <li>
          <section>
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus maxime magni fuga!
            </p>
          </section>
        </li>
      </ul>
    </div>
  );
};

export default App;
