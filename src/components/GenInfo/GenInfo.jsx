import { useState } from "react";
import styles from "./GenInfo.module.css";

function GenInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleForm = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <div className={styles.genInfoSection}>
      <div className={styles.hdr}>General Information</div>
      {showForm ? (
        <form onSubmit={(e) => handleForm(e)}>
          <label htmlFor="name">Name:</label>
          <input type="text" required id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">Email:</label>
          <input type="email" required id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="phNo">Phone Number:</label>
          <input type="tel" required id="phNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Phone Number: {phoneNo}</div>
          <button className={styles.editBtn} onClick={() => setShowForm(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default GenInfo;
