import { useState } from "react";
import styles from "./PractExp.module.css";

function PractInfo() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [mainResponsibility, setMainResponsibility] = useState("");
  const [workFrom, setWorkFrom] = useState("");
  const [workedTill, setWorkedTill] = useState("");
  const [id, setId] = useState(null);
  const [formState, setFormState] = useState("submit");
  const [jobList, setJobList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState === "edit") {
      setJobList((prevList) => prevList.map((job) => (job.id == id ? { ...job, id: job.id, companyName, jobTitle, mainResponsibility, workFrom, workedTill } : job)));
    } else setJobList((prevList) => [...prevList, { id: crypto.randomUUID(), companyName, jobTitle, mainResponsibility, workFrom, workedTill }]);
    setFormState("submit");
    setCompanyName("");
    setJobTitle("");
    setMainResponsibility("");
    setWorkFrom("");
    setWorkedTill("");
  };

  const handleEdit = (job) => {
    setFormState("edit");
    setCompanyName(job.companyName);
    setJobTitle(job.jobTitle);
    setMainResponsibility(job.mainResponsibility);
    setWorkFrom(job.workFrom);
    setWorkedTill(job.workedTill);
    setId(job.id);
  };

  const handleDelete = (indexToDelete) => {
    setJobList((prevList) => prevList.filter((job) => job.id !== indexToDelete));
  };

  return (
    <div className={styles.practInfoSection}>
      <div className={styles.hdr}>General Information</div>
      {jobList.length
        ? jobList.map((job) => (
            <div key={job.id} className={styles.jobList}>
              <div className={styles.listContent}>
                <div>{job.companyName}</div>
                <div>{job.jobTitle}</div>
                <div>{job.mainResponsibility}</div>
                <div>{job.workFrom}</div>
                <div>{job.workedTill}</div>
              </div>
              <div className={styles.listBtns}>
                <button className={styles.editBtn} onClick={() => handleEdit(job)}>
                  Edit
                </button>
                <button className={styles.deleteBtn} onClick={() => handleDelete(job.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="cName">Company Name:</label>
        <input type="text" required id="cName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        <label htmlFor="jobTitle">Job Title:</label>
        <input type="text" required id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        <label htmlFor="mainResp">Main Responsibilities:</label>
        <textarea id="mainResp" rows={3} value={mainResponsibility} onChange={(e) => setMainResponsibility(e.target.value)}></textarea>
        <label htmlFor="workFrom">Worked From:</label>
        <input type="date" required id="workFrom" value={workFrom} onChange={(e) => setWorkFrom(e.target.value)} />
        <label htmlFor="workTill">Worked Till:</label>
        <input type="date" required id="workTill" value={workedTill} onChange={(e) => setWorkedTill(e.target.value)} />
        <button type="submit" className={styles.submitBtn}>
          {formState === "edit" ? "Save" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default PractInfo;
