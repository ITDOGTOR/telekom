import Company from 'pages/company';
import Contacts from 'pages/contacts';
import Home from 'pages/home';
import MapOffices from 'pages/map-offices';
import Partners from 'pages/partners';
import Projects from 'pages/projects';
import Layout from 'shared/ui/layout';
import Footer from 'widgets/footer';
import Header from 'widgets/header';

export default function App() {
  return (
    <div className="page">
      <Header />

      <Layout>
        <Home />
        <Company />
        <Projects />
        <Partners />
        <MapOffices />
        <Contacts />
      </Layout>

      <Footer />
    </div>
  );
}
