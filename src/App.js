import './App.css';
import Header from './component/Header';
import CardMain from './component/CardMain';
import Footer from './component/Footer';
import Main from './component/Main'
import {
  BrowserRouter as Router,
  Route, Switch, Routes
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>

        <Header />

        <Routes>
          <Route path="/" element={<CardMain />} />
        </Routes>
        <Routes>
          <Route path="/:id" element={ <Main />} />
        </Routes>

        <Footer />

      </Router>
    </>

  );
}

export default App;
