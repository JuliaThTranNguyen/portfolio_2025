const freelancerHelsinki2025 = "https://drive.google.com/file/d/1q7Q46SaFS5m5-xBjisTzLaFIB7kioD0N/view?usp=sharing";
const integrifyCertificate2024 = "https://drive.google.com/file/d/1iEWd5BAdBn7mRDUbrEbCg7tS1brfoKWV/view?usp=sharing";
const vamkDegree2023 = "https://drive.google.com/file/d/1vsb2bZQ9YWf283lNRNlUDM73LE7j9jv_/view?usp=sharing";

const CVArray = [
  {
    start_year: "9/2018",
    end_year: "6/2023",
    type: "Study",
    title: "Bachelor of Engineering in Information Technology",
    description:
      "Major in Software Engineering. Program extended by one year due to a medical leave.",
    company: "Vaasan ammattikorkeakoulu (VAMK) ",
    location: "Vaasa, Finland",
    color: "#FF8C00",
    icon: "🎓",
    status: "Completed",
    certificate: vamkDegree2023,
  },
  {
    start_year: "12/2021",
    end_year: "7/2022",
    type: "Gap Year",
    title: "Medical Leave",
    description:
      "Took a medical leave for health reasons and received treatment at Vaasa Central Hospital.",
    company: "Vaasa Central Hospital",
    location: "Vaasa, Finland",
    color: "#FF4500",
    icon: "💤",
    status: "Completed",
  },
  {
    start_year: "9/2022",
    end_year: "4/2023",
    type: "Work",
    title: "Internship program",
    description: "Started my career as a Full Stack Developer",
    company: "Loc Dan Co.",
    location: "Ho Chi Minh, VietNam",
    color: "#2E8B57",
    icon: "💼",
    status: "Completed",
  },
  {
    start_year: "8/2023",
    end_year: "1/2024",
    type: "Work",
    title: "Trainee program",
    description: "Started a new career as a Junior Full Stack Developer",
    company: "Integrify Academy",
    location: "Helsinki, Finland",
    color: "#4169E1",
    icon: "💼",
    status: "Completed",
    certificate: integrifyCertificate2024,
  },
  {
    start_year: "11/2024",
    end_year: "2/2025",
    type: "Work",
    title: "Junior program",
    description: "Started a freelance job as a Junior Full Stack Developer",
    company: "Freelance, hired by an individual",
    location: "Helsinki, Finland",
    color: "#9B30FF",
    icon: "💼",
    status: "On-going",
    certificate: freelancerHelsinki2025,
  },
  {
    start_year: "3/2025",
    end_year: "Present",
    type: "Career",
    title: "Open to Work",
    description:
      "Actively seeking new opportunities in Full Stack Development, DevOps, or related fields.",
    company: "Looking for new challenges",
    location: "Worldwide / Remote",
    color: "#FFD700",
    icon: "🚀",
    status: "On-going",
  },
];

export default CVArray;
