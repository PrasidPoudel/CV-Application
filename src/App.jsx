import Header from "./Components/Header.jsx";
import WorkExperience from "./Components/WorkExperience.jsx";
import PersonalData from "./Components/PersonalData.jsx";
import "./App.css";
import Skills from "./Components/Skills.jsx";
import CollegeSection from "./Components/Education.jsx";
import Contacts from "./Components/Contacts.jsx";
import CVPreview from "./Components/CVPreview.jsx";
import { useState } from "react";
function App() {
  const [Expertise, SetExpertise] = useState("");
  const [FirstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [info, setInfo] = useState("");
  const [Profile, setProfile] = useState(null);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [link, setLink] = useState("");
  const [skill, setSkill] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        justifyContent: "center",
      }}
    >
      <div
        className="PrimaryContainer"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Header />
        <PersonalData
          SetFirstName={SetFirstName}
          SetLastName={SetLastName}
          setInfo={setInfo}
          setProfile={setProfile}
          SetExpertise={SetExpertise}
        />
        <WorkExperience />
        <Skills  />
        <CollegeSection setCollege={setSchool} setDegree={setDegree} />
        <Contacts
          setAddress={setAddress}
          setEmail={setEmail}
          setNumber={setNumber}
          setLink={setLink}
        />
      </div>
      <CVPreview
        FirstName={FirstName}
        lastName={lastName}
        Expertise={Expertise}
        info={info}
        Profile={Profile}
        school={school}
        degree={degree}
        address={address}
        email={email}
        number={number}
        link={link}
      />
    </div>
  );
}

export default App;
