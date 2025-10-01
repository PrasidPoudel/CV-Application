
import WorkExperience from "./Components/WorkExperience.jsx";
import PersonalData from "./Components/PersonalData.jsx";
import "./App.css";
import Skills from "./Components/Skills.jsx";
import CollegeSection from "./Components/Education.jsx";
import Contacts from "./Components/Contacts.jsx";
import CVPreview from "./Components/CVPreview.jsx";
import { useState } from "react";
import { Skill, workExperience } from "./classes.js";
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
  const [SkillList, SetSkill] = useState([Skill(crypto.randomUUID(), "")]);
  const [ExperienceList, SetExperience] = useState([
    workExperience(crypto.randomUUID(), "", "", "", ""),
  ]);
  console.log(ExperienceList);

  function onExperienceChange(key, value, id) {
    let index = ExperienceList.findIndex((item) => item.id === id);
    let Copy = [...ExperienceList];
    Copy[index][key] = value;
    SetExperience(Copy);
  }
  function DeleteExperienceContainer(id) {
    SetExperience(ExperienceList.filter((element) => element.id !== id));
  }
  function onSkillChange(val, uniqueKey) {
    const index = SkillList.findIndex((item) => item.uniqueKey === uniqueKey);
    const newList = [...SkillList];
    newList[index].SkillName = val;
    SetSkill(newList);
  }
  function DeleteContainer(uniqueKey) {
    SetSkill(SkillList.filter((element) => element.uniqueKey !== uniqueKey));
  }
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
        <PersonalData
          SetFirstName={SetFirstName}
          SetLastName={SetLastName}
          setInfo={setInfo}
          setProfile={setProfile}
          SetExpertise={SetExpertise}
        />
        <WorkExperience
          onExperienceChange={onExperienceChange}
          ExperienceList={ExperienceList}
          SetExperience={SetExperience}
          DeleteExperienceContainer={DeleteExperienceContainer}
        />
        <Skills
          onSkillChange={onSkillChange}
          SkillList={SkillList}
          SetSkill={SetSkill}
          DeleteContainer={DeleteContainer}
        />
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
        SkillList={SkillList}
        ExperienceList={ExperienceList}
      />
    </div>
  );
}

export default App;
