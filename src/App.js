import "./reset.css";
import "./App.css";

import EmailInput from "./components/EmailInput";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className="container">
      <header>
        <img className="logo" src={logo} alt="Base Apparel" />
      </header>
      <div className="background-img"></div>
      <main className="main">
        <h1 className="title">
          We're <strong>coming soon</strong>
        </h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <EmailInput />
      </main>
    </div>
  );
}

export default App;
