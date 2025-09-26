import Contact from "../assets/img/contacts-svgrepo-com.svg";
function Contacts() {
  return (
    <div
      className="contactContainer"
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
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <img src={Contact} style={{ height: "40px", width: "40px" }} />
        <div style={{ fontSize: "1.5rem" }}>Contacts</div>
      </div>
      <div className="contacts">
        <input type="text" placeholder="Address" />
      </div>
      <div className="contacts" style={{ display: "flex", flexWrap: "wrap" }}>
        <input type="email" placeholder="E-Mail" />
        <input type="tel" placeholder="Phone Number" />
      </div>
      <div className="contacts">
        <input type="text" placeholder="Link to Portfolio" />
      </div>
    </div>
  );
}
export default Contacts;
