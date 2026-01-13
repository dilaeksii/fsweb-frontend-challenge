import "./index.css";
import { Mode } from "./components/Mode";
import { Header } from "./components/Header";
import { MainProfile } from "./components/MainProfile";
import { Skills } from "./components/Skills";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { SettingsProvider } from "./SettingsContext";

function App() {
  return (
    <>
      <SettingsProvider>
        <div className="min-h-screen mx-auto w-full max-w-screen-xl px-4 max-sm:px-4 max-sm:overflow-x-hidden">
          <Mode />
          <Header />
          <MainProfile />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </SettingsProvider>
    </>
  );
}

export default App;
