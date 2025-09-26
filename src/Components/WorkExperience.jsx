import { useState } from "react";
import Experience from "../assets/img/work-svgrepo-com.svg";
function WorkExperience() {
  const [index, setIndex] = useState(1);
  let ExperienceCollection = GetCollection();
  function GetCollection() {
    let array = [];
    for (let i = 0; i < index; i++) {
      array.push(<Detail />);
    }
    return array;
  }
  return (
    <div
      className="workContainer"
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
        <div style={{ fontSize: "1.5rem" }}>Work Experience</div>
      </div>
      {ExperienceCollection}
      <button className="add-work" onClick={() => setIndex(index + 1)}>
        +New
      </button>
    </div>
  );
}
function Detail() {
  return (
    <div
      className="detail-container "
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <div style={{ fontSize: "1.2rem" }}>Experience</div>
      <input type="text" placeholder="Position" />
      <input type="text" placeholder="Company" />
      <input type="text" placeholder="Start Date of Employment" />
      <input type="text" placeholder="End Date of Employment" />
      <textarea placeholder="Your main occupation, daily tasks and work field"></textarea>
    </div>
  );
}
export default WorkExperience;
