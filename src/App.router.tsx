import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './features/Home/pages/HomePage';
import { AboutPage } from './features/About/pages/AboutPage';
import { BlogsPage } from './features/Blogs/pages/BlogsPage';
import { OurMenuPage } from './features/OurMenu/pages/OurMenuPage';
import { LocationsPage } from './features/Locations/pages/LocationsPage';
import { FranchisePage } from './features/Franchise/pages/FranchisePage';
import { ExperiencesPage } from './features/Experiences/pages/ExperiencesPage';
import { ContactUsPage } from './features/ContactUs/pages/ContactUsPage';
import { Footer, NavBar } from './ui';

export default function App() {
  return (
    <div className="container">
      <div className='mid-bg'></div>
      <main className="page-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-menu" element={<OurMenuPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />

          {/* Ruta temporal para futuras páginas */}
          <Route path="/coming-soon" element={<h1>Próximamente…</h1>} />

          {/* Catch-all: cualquier ruta no encontrada → Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </main>
    </div >
  );
}

