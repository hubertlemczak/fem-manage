import Footer from './components/Footer';
import Hero from './components/Hero';
import ListSection from './components/ListSection';
import Navbar from './components/NavBar';
import SimplifySection from './components/SimplifySection';
import UserReviews from './components/UserReviews';

function App() {
  return (
    <>
      <div className="px-5 container mx-auto lg:max-w-5xl">
        <Navbar />
        <main>
          <Hero />
          <ListSection />
          <UserReviews />
        </main>
      </div>
      <SimplifySection />
      <Footer />
    </>
  );
}

export default App;
