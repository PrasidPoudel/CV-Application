import { useState } from "react";
import Experience from "../assets/img/work-svgrepo-com.svg";
import Delete from "../assets/img/delete-junk-2-svgrepo-com.svg";
import { workExperience } from "../classes";
function WorkExperience({
  onExperienceChange,
  ExperienceList,
  SetExperience,
  DeleteExperienceContainer,
}) {
  const [index, setIndex] = useState(1);
  console.log(index);
  let ExperienceCollection = GetCollection();
  function GetCollection() {
    let array = [];
    for (let i = 0; i < index; i++) {
      console.log(ExperienceList[i]);
      if (!ExperienceList[i]) continue;
      array.push(
        <Detail
          onExperienceChange={onExperienceChange}
          id={ExperienceList[i].id}
          DeleteExperienceContainer={DeleteExperienceContainer}
          obj={ExperienceList[i]}
        />
      );
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
      <button
        className="add-work"
        onClick={() => {
          setIndex(index + 1);
          SetExperience([
            ...ExperienceList,
            workExperience(crypto.randomUUID(), "", "", "", ""),
          ]);
        }}
      >
        +New
      </button>
    </div>
  );
}
function Detail({ onExperienceChange, id, DeleteExperienceContainer, obj }) {
  return (
    <div
      className="detail-container "
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ fontSize: "1.2rem" }}>Experience</div>
        <img
          src={Delete}
          style={{ height: "24px", width: "24px", marginLeft: "auto" }}
          id={id}
          onClick={() => DeleteExperienceContainer(id)}
        />
      </div>
      <input
        type="text"
        placeholder="Position"
        value={obj.position}
        onChange={(event) =>
          onExperienceChange("position", event.target.value, id)
        }
      />
      <input
        type="text"
        placeholder="Company"
        value={obj.company}
        onChange={(event) =>
          onExperienceChange("company", event.target.value, id)
        }
      />
      <input
        type="text"
        placeholder="Start Date of Employment"
        value={obj.StartDate}
        onChange={(event) =>
          onExperienceChange("StartDate", event.target.value, id)
        }
      />
      <input
        type="text"
        placeholder="End Date of Employment"
        value={obj.EndDate}
        onChange={(event) =>
          onExperienceChange("EndDate", event.target.value, id)
        }
      />
      <textarea
        placeholder="Your main occupation, daily tasks and work field"
        value={obj.Description}
        onChange={(event) =>
          onExperienceChange("Description", event.target.value, id)
        }
      ></textarea>
    </div>
  );
}
export default WorkExperience;
