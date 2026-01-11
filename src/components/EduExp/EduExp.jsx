import { useState } from "react";
import styles from "./EduExp.module.css";

function EduExp() {
  const [sclName, setsclName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [dos, setDos] = useState("");
  const [eduList, setEduList] = useState([]);
  const [formState, setFormState] = useState("submit");
  const [id, setId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState === "edit") {
      setEduList((prevList) => prevList.map((edu) => (edu.id == id ? { ...edu, id: edu.id, sclName, studyTitle, dos } : edu)));
    } else setEduList((prevList) => [...prevList, { id: crypto.randomUUID(), sclName, studyTitle, dos }]);
    setFormState("submit");
    setsclName("");
    setStudyTitle("");
    setDos("");
  };

  const handleEdit = (edu) => {
    setFormState("edit");
    setsclName(edu.sclName);
    setStudyTitle(edu.studyTitle);
    setDos(edu.dos);
    setId(edu.id);
  };

  const handleDelete = (indexToDelete) => {
    setEduList((prevList) => prevList.filter((edu) => edu.id !== indexToDelete));
  };

  return (
    <div className={styles.eduInfoSection}>
      <div className={styles.hdr}>Educational Experience</div>
      {eduList.length
        ? eduList.map((edu) => (
            <div key={edu.id} className={styles.sclList}>
              <div className={styles.listContent}>
                <div>{edu.sclName}</div>
                <div>{edu.studyTitle}</div>
                <div>{edu.dos}</div>
              </div>
              <div className={styles.listBtns}>
                <button className={styles.editBtn} onClick={() => handleEdit(edu)}>
                  Edit
                </button>
                <button className={styles.deleteBtn} onClick={() => handleDelete(edu.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="schoolName">School Name:</label>
        <input type="text" required id="schoolName" value={sclName} onChange={(e) => setsclName(e.target.value)} />
        <label htmlFor="title">Title of Study:</label>
        <input type="text" required id="title" value={studyTitle} onChange={(e) => setStudyTitle(e.target.value)} />
        <label htmlFor="dos">Date Of Study:</label>
        <input type="date" required id="dos" value={dos} onChange={(e) => setDos(e.target.value)} />
        <button type="submit" className={styles.submitBtn}>
          {formState == "edit" ? "Save" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default EduExp;
