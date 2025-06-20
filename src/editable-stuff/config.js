// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Rahul Teja",
  middleName: "",
  lastName: "",
  message: "Passionate about developing strategies that enhance business performance and help companies achieve their full potential through data-driven solutions.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/rahulteja1",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/rahultejalock/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_rahul_teja/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/rahultejabolloju",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pic.png"),
  imageSize: "auto",
  message:
    "I am Rahul Teja, an Entrepreneurial driven Analytical Data Science Strategist focused on leveraging data science and analytics to drive growth and innovation. Passionate about developing strategies that enhance business performance and help companies achieve their full potential through data-driven solutions.",
  resume: "https://drive.google.com/file/d/1uXNoU1nZYJNyWRTy7ebrTq1EF-RvcDqE/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "rahulteja1", // your GitHub username
  reposLength: 0, // disables auto-fetching recent repos
  specificRepos: ["RFM-Analysis-for-Customer-Segmentation", "Music-Generation-Using-LSTM", "Digital-Handwriting-Recognition-using-Hand-Tracking-by-using-Media-pipe-and-OpenCV-libraries", "Kaggle-Survey-Data-Scientists-in-USA"], // replace with your actual repo names
};


// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Machine Learning & Optimization", value: 85 },
    { name: "Data Visualization", value: 75 },
    { name: "Cloud Technologies", value: 75 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am looking for full-time Data Analyst, Data Scientist or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "b.rahulteja01@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    // {
    //   role: 'Data Scientist',
    //   // Company : 'Pitney Bowes',// Here Add Company Name
    //   companylogo: require('../assets/img/pb.png'),
    //   date: 'Augusst 2024 – Present',
    // },
    {
      role: 'Data Science Intern',
      // Company : 'Pitney Bowes',// Here Add Company Name
      companylogo: require('../assets/img/pb.png'),
      date: 'July 2023 – August 2023',
    },
    {
      role: 'Data Analyst',
      companylogo: require('../assets/img/fonkR.png'),
      date: 'June 2020 – July 2022',
    },
    {
      role: 'Data Analyst',
      companylogo: require('../assets/img/vinx.png'),
      date: 'May 2020 – June 2020',
    },
    {
      role: 'Data Science Intern',
      companylogo: require('../assets/img/sb.png'),
      date: 'May 2019 – June 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
