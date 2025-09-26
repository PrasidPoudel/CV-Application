import Header from "./Components/Header.jsx";
import WorkExperience from "./Components/WorkExperience.jsx";
import PersonalData from "./Components/PersonalData.jsx";
import "./App.css";
import Skills from "./Components/Skills.jsx";
import CollegeSection from "./Components/Education.jsx";
import Contacts from "./Components/Contacts.jsx";
import CVPreview from "./Components/CVPreview.jsx";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <PersonalData />
        <WorkExperience />
        <Skills />
        <CollegeSection />
        <Contacts />
      </div>
      <CVPreview />
    </div>
  );
}

export default App;
