import About from "./components/About";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import GetirDownload from "./components/GetirDownload";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <MainContent />
        <Categories />
        <Offers />
        <GetirDownload />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
