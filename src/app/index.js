import Company from 'pages/company';
import Home from 'pages/home';
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
      </Layout>

      <Footer />
    </div>
  );
}
