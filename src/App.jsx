import "./index.css";
import { Mode } from "./components/Mode";
import { Header } from "./components/Header";
import { MainProfile } from "./components/MainProfile";
import { Skills } from "./components/Skills";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Mode />
        <Header />
        <MainProfile/>
        <Skills/>
        <Profile/>
        <Projects/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
