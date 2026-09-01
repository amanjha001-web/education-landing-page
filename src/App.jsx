
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <Home />

      <Footer />
    </div>
  );
};

export default App;
