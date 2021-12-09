import "./reset.css";
import "./App.css";

import EmailInput from "./components/EmailInput";
import logo from "./images/logo.svg";

function App() {
  return (
    <main className="main">
      <img className="logo" src={logo} alt="Base Apparel" />
      <div className="background-img"></div>
      <section>
        <h1 className="title">
          We're <strong>coming soon</strong>
        </h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <EmailInput />
      </section>
    </main>
  );
}

export default App;
