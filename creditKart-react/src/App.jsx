import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx'
import LandingPage from './pages/Landingpage/Landingpage.jsx';
import CardPage from './pages/Cardpage/Cardpage.jsx'; // See? Clean.
import './App.css';

/* This is your main Layout component.
  It renders the Header and an "Outlet", which is a
  placeholder for whatever the current page's component is.
*/

function AppLayout() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet /> {/* <-- 1. The "page" goes here */}
      </main>
      <Footer />
    </div>
  );
}

// This is your main App component
function App() {
  return (
    <Routes> {/* 2. This is the "route-switcher" */}

      {/* 3. This route group uses your shared layout */}
      <Route path="/" element={<AppLayout />}>

        {/* 4. When the URL is "/", show LandingPage inside the Outlet */}
        <Route index element={<LandingPage />} />

        {/* 5. When the URL is "/cards", show CardPage inside the Outlet */}
        <Route path="cards" element={<CardPage />} />

        {/* 6. Add more pages here, e.g. <Route path="about" element={<AboutPage />} /> */}

      </Route>

      {/* You could add other routes *without* the header here, like a login page */}
      {/* <Route path="/login" element={<LoginPage />} /> */}

    </Routes>
  );
}

export default App;