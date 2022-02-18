import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import GetStart from './components/GetStart/GetStart';
import Reviews from './components/Reviews/Reviews';
import Questions from './components/Questions/Questions';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {

  return (
    <div className="page">
      <Header />

      <Nav />

      <main className='main'>
        <div className="container">
          <GetStart />

          <Reviews />

          <Questions/>
        </div>

        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}

export default App;
