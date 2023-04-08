import React from "react";
import ModelComponent from "../../../Modal";
import "./style.scss";

const Training = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const modalref = React.useRef(null);

  const handleClickOutside = (e) => {
    if (modalref.current && !modalref.current.contains(e.target)) {
      setOpenModal(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [openModal]);

  React.useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openModal]);

  const skills = [
    {
      list: "Advanced cardiovascular life support (ACLS).",
    },
    {
      list: "Patient care",
    },
    {
      list: "Critical care",
    },
    {
      list: "Life support",
    },
    {
      list: "Cardiopulmonary resuscitation (CPR)",
    },
    {
      list: "Trauma",
    },
    {
      list: "Pt. /family education and instruction.",
    },
    {
      list: "Telemetry",
    },
    {
      list: "Discharge planning.",
    },
  ];

  const qualities = [
    "Planning",
    "Communication",
    "Critical thinking",
    "Research",
    "Computer literacy",
    "Physical abilities",
    "Problem solving",
    "Organization",
    "Time management",
  ];

  return (
    <>
      <div className="training__container">
        <div className="wrapper">
          <h1>Our Training Programs Help You Build Quality</h1>
          <span></span>
          <p>
            3 month Critical Care Training is based in 1month theory plus 2month
            practical classes fully ICU ward based. By which all nurses, medical
            person will be fully trained and will know about all settings of ICU
            ward. After this training you all can easily apply for job after
            which no nurses have to do volunteer job or observation duties.{" "}
          </p>

          <h2>Trainings Provided</h2>
          <span></span>
          <div className="skills">
            <ul>
              {skills.map((skill, index) => {
                return (
                  <div key={index}>
                    <p>
                      <i className="ri-check-line"></i>
                    </p>
                    <li>{skill.list}</li>
                  </div>
                );
              })}
            </ul>
          </div>
          <h2>Qualities developed after training:</h2>
          <span></span>
          <div className="skills">
            <ul>
              {qualities.map((quality, index) => {
                return (
                  <div key={index}>
                    <p>
                      <i className="ri-check-line"></i>
                    </p>
                    <li>{quality}</li>
                  </div>
                );
              })}
            </ul>
          </div>
          <button onClick={() => setOpenModal(true)}>Watch Video</button>
        </div>
      </div>
      {openModal && (
        <ModelComponent modalref={modalref} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default Training;
