import Experience from "../assets/img/settings-gear-combination-svgrepo-com.svg";
import { Skill } from "../classes";
import { useState } from "react";
import Delete from "../assets/img/delete-junk-2-svgrepo-com.svg";
function Skills({ onSkillChange, SkillList, SetSkill, DeleteContainer }) {
  const [index, setIndex] = useState(0);
  let SkillCollection = GetCollection();
  function GetCollection() {
    let array = [];
    for (let i = 0; i <= index; i++) {
      if (!SkillList[i]) continue;
      array.push(
        <Details
          onSkillChange={onSkillChange}
          uniqueKey={SkillList[i].uniqueKey}
          DeleteContainer={DeleteContainer}
          text={SkillList[i].SkillName}
        />
      );
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
        onClick={(event) => {
          setIndex(index + 1);
          let SpecialKey = crypto.randomUUID();
          SetSkill([...SkillList, Skill(SpecialKey, "")]);
        }}
      >
        +New
      </button>
    </div>
  );
}
function Details({ onSkillChange, uniqueKey, DeleteContainer, text }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ fontSize: "1.1rem" }}>Skill</div>
        <img
          uniqueKey={uniqueKey}
          src={Delete}
          onClick={() => DeleteContainer(uniqueKey)}
          style={{ height: "24px", width: "24px", marginLeft: "auto" }}
        />
      </div>
      <input
        type="text"
        placeholder="Language or Technology"
        uniqueKey={uniqueKey}
        value={text}
        onChange={(event) => onSkillChange(event.target.value, uniqueKey)}
      />
    </div>
  );
}
export default Skills;
