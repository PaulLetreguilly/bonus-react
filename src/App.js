import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="App">
      <Header />
      <NavigationMenu />
      <Content />
      <Footer />
    </section>
  );
}

export default App;
