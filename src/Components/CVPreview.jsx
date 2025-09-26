import Address from "../assets/img/address-svgrepo-com.svg";
import Gmail from "../assets/img/gmail-svgrepo-com.svg";
import browser from "../assets/img/web.png";
import Number from "../assets/img/mobile-alt-1-svgrepo-com.svg";

function CVPreview(props) {
  return (
    <div
      className="PreviewContainer"
      style={{ width: "21cm", padding: "1.5rem" }}
    >
      <header className="introduction">
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>{props.name}</h1>
            <div
              style={{
                height: "35px",
                width: "130px",
                backgroundColor: "yellow",
                borderRadius: "1rem",
                padding: "0.5rem",
              }}
            ></div>
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
            {props.niche}
          </div>
        </div>
        <div>{props.info}</div>
      </header>
      <div className="AboutSelf">
        <div className="experience-container">
          <h2>EXPERIENCE</h2>
        </div>
        <div className="education-container">
          <h2>EDUCATION</h2>
        </div>
        <div className="skills-container">
          <h2>SKILLS</h2>
        </div>
      </div>
      <footer>
        <div>
          <img src={Address} />
          <div></div>
        </div>
        <div>
          <img src={Number} />
          <div></div>
        </div>
        <div>
          <img src={Gmail} />
          <div></div>
        </div>
        <div>
          <img src={browser} />
          <div></div>
        </div>
      </footer>
    </div>
  );
}
export default CVPreview;
