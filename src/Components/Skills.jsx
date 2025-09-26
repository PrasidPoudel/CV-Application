import Experience from "../assets/img/settings-gear-combination-svgrepo-com.svg";
import { useState } from "react";
function Skills() {
  const [index, setIndex] = useState(1);
  let SkillCollection = GetCollection();
  function GetCollection() {
    let array = [];
    for (let i = 0; i < index; i++) {
      array.push(<Details />);
    }
    return array;
  }
  return (
    <div
      className="SkillsContainer"
      style={{
        maxWidth: "400px",
        padding: "1.5rem",
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        backgroundColor: " #1c1c1c",
        borderRadius: "1.5rem",
        marginTop: "1.3rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img
          src={Experience}
          alt=""
          style={{ height: "40px", width: "40px" }}
        />
        <div style={{ fontSize: " 1.5rem" }}>Skills</div>
      </div>
      {SkillCollection}
      <button
        className="add-work add-skills"
        onClick={() => setIndex(index + 1)}
      >
        +New
      </button>
    </div>
  );
}
function Details() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
      <div style={{ fontSize: "1.1rem" }}>Skill</div>
      <input type="text" placeholder="Language or Technology" />
    </div>
  );
}
export default Skills;
