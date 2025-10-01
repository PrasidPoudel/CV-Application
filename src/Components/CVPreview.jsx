import Address from "../assets/img/address-svgrepo-com.svg";
import Gmail from "../assets/img/gmail-svgrepo-com.svg";
import browser from "../assets/img/web.png";
import Number from "../assets/img/mobile-alt-1-svgrepo-com.svg";
import { Skill, workExperience } from "../classes";
function CVPreview(props) {
  let array = [];
  for (let i = 0; i < props.ExperienceList.length; i++) {
    array.push(
      <div>
        <div style={{ color: "gold", fontFamily: "Arimo", fontSize: "1.2rem" }}>
          {props.ExperienceList[i].position}
        </div>
        <div style={{ fontFamily: "Roboto" }}>
          {props.ExperienceList[i].company + " " + "|" + " "}
          {props.ExperienceList[i].StartDate + " " + "-"}
          &nbsp;
          {props.ExperienceList[i].EndDate}
        </div>
        <div>{props.ExperienceList[i].Description}</div>
      </div>
    );
  }
  return (
    <div
      className="PreviewContainer"
      style={{ width: "21cm", padding: "1.5rem" }}
    >
      <header className="introduction">
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>{props.FirstName + " " + props.lastName}</h1>
            <div
              style={{
                minHeight: "35px",
                width: "160px",
                backgroundColor: "yellow",
                borderRadius: "1rem",
                padding: "0.5rem",
                textAlign: "center",
                color: "black",
                fontStyle: "italic",
                display: "flex",
                alignItems: "center",
              }}
            >
              {props.Expertise}
            </div>
          </div>
          <div
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "100%",
              backgroundColor: "yellow",
              marginLeft: "auto",
            }}
          >
            <img
              src={props.Profile}
              style={{ height: "100%", width: "100%", borderRadius: "100%" }}
            />
          </div>
        </div>
        <div
          style={{
            overflowWrap: "break-word",
            fontStyle: "italic",
            marginTop: "1.2rem",
          }}
        >
          {props.info}
        </div>
      </header>
      <div className="AboutSelf">
        <div className="experience-container">
          <h2>EXPERIENCE</h2>
          <div className="experienceContainer">{array}</div>
        </div>
        <div className="education-container">
          <h2>EDUCATION</h2>
          <div
            style={{ color: "gold", fontFamily: "Roboto", fontSize: "1.4rem" }}
          >
            {props.school}
          </div>
          <div style={{ fontFamily: "Alan Sans", fontSize: "1.2rem" }}>
            {props.degree}
          </div>
        </div>
        <div className="skills-container">
          <h2>SKILLS</h2>
          <div>
            {props.SkillList.map((element) => (
              <li key={element.id}>{element.SkillName}</li>
            ))}
          </div>
        </div>
      </div>
      <br></br>
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          borderTop: "4px solid white",
          padding: "1rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img src={Address} />
            <div>{props.address}</div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <img src={Number} />
            <div>{props.number}</div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <img src={Gmail} />
            <div>{props.email}</div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <img src={browser} />
            <div>{props.link}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default CVPreview;
