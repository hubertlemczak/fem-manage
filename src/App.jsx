import Hero from './components/Hero';
import ListSection from './components/ListSection';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="px-5 container mx-auto lg:max-w-5xl">
      <Navbar />
      <main>
        <Hero />
        <ListSection />
      </main>
    </div>
  );
}

export default App;
