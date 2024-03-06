import "./App.css";
import NavBarComponent from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      <div className="bg-gray-0 3h-screen flex flex-col justify-between">
        <NavBarComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
