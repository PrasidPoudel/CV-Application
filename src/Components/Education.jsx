import Education from "../assets/img/work-svgrepo-com.svg";
function CollegeSection() {
  return (
    <div
      className="collegeContainer"
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
      <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
        <img src={Education} alt="" style={{ height: "40px", width: "40px" }} />
        <div style={{ fontSize: "1.5rem" }}>Education</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
        <input type="text" placeholder="School" />
        <input type="text" placeholder="Degree" />
      </div>
    </div>
  );
}
export default CollegeSection;
