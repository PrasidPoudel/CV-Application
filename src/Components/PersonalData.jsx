import Profile from "../assets/img/profile1-svgrepo-com.svg";
function PersonalData({
  SetFirstName,
  SetLastName,
  setInfo,
  setProfile,
  SetExpertise,
}) {
  return (
    <div
      className="dataContainer"
      style={{
        maxWidth: "400px",
        padding: "1.5rem",
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        backgroundColor: " #1c1c1c",
        borderRadius: "1.5rem",
      }}
    >
      <div
        className="data-title"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <img
          src={Profile}
          alt=""
          style={{
            height: "40px",
            width: "40px",
          }}
        />
        <div style={{ color: "white", fontFamily: "Roboto", fontSize: "2rem" }}>
          Personal Data
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          type="text"
          className="firstname"
          placeholder="First Name"
          style={{ flexGrow: "1" }}
          onChange={(event) => {
            SetFirstName(event.target.value);
          }}
        />
        <input
          type="text"
          className="lastname"
          placeholder="Last Name"
          style={{ flexGrow: "1" }}
          onChange={(event) => {
            SetLastName(event.target.value);
          }}
        />
      </div>
      <div className="niche" style={{ display: "flex" }}>
        <input
          type="text"
          className="niche"
          placeholder="Front End Developer"
          style={{ flexGrow: "1" }}
          onChange={(event) => SetExpertise(event.target.value)}
        />
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="file"
          accept="image"
          placeholder="Place Your Image"
          style={{ flexGrow: "1" }}
          onChange={(event) =>
            setProfile(URL.createObjectURL(event.target.files[0]))
          }
        />
      </div>
      <textarea
        placeholder="Tell something about yourself to stand out from other Candidates"
        onChange={(event) => setInfo(event.target.value)}
      ></textarea>
    </div>
  );
}
export default PersonalData;
