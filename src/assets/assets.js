import avatar from "./avatar.jpg";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import mongodb from "./mongodb.png";
import figma from "./figma.png";
import git from "./git.png";
import organicProject from "./organick.jpg";
import socialMedia from "./social.jpg";
import fashionProject from "./fashion_cover.jpg"
import kitchnProject from "./thekitchnProject.png"
import venomProject from "./venomProject.png"
export const assets = {
  avatar,
  vscode,
  mongodb,
  firebase,
  figma,
  git,
  organicProject,
  socialMedia,
  kitchnProject
};

export const projectsData = [
  {
    _id: "01",
    name: "Fashion E-Commercer Web App",
    description:
      "This e-commerce website is built with ReactJS for the frontend, Node.js for the backend, and MongoDB for the database, with Tailwind CSS for responsive design. It offers a smooth shopping experience with product browsing, cart management, and secure checkout. The combination of these technologies ensures a fast, scalable, and mobile-friendly platform.",
    image: fashionProject,
    url: "https://fashion9.netlify.app"
  },

  {
    _id: "02",
    name: "Food Deliery App",
    description:
      '"Welcome to The Kitchn, where culinary delights meet convenience! Our React-powered food delivery website is your gateway to a world of gastronomic satisfaction. Immerse yourself in a seamless browsing experience as you explore a diverse array of delectable dishes meticulously curated from top-notch restaurants. From savory classics to exotic flavors, The Kitchn offers something to satisfy every craving.',
    image: kitchnProject,
    url: "https://github.com/krantikumar09/food-delivery-app.git"
  },

  {
    _id: "03",
    name: "Organic Food Store Web App",
    description:
      "Experience our responsive e-commerce website featuring organic fruits and vegetables. With a user-friendly interface, secure checkout, and captivating visuals, enjoy a seamless shopping experience.",
    image: organicProject,
    url: ""
  },
  {
    _id: "04",
    name: "Venom Blog Site",
    description:
      "Venom is a fully responsive blog webpage built with HTML, CSS, JavaScript, and jQuery. It features a sleek design with a filter option that allows users to easily sort blog posts by categories such as 'All', 'Design', 'Tech', and 'Mobile/Tab'. The site ensures a seamless browsing experience across different devices, adapting to various screen sizes.",
    image: venomProject,
    url: "https://krantikumar09.github.io/blogwebsite/"
  },
  {
    _id: "05",
    name: "Social Media Dashboard",
    description:
      "social media management with our user-friendly Social Media Dashboard Website. Schedule posts, analyze data, engage with followers, and collaborate seamlessly. Elevate your social media strategy today.",
    image: socialMedia,
    url: "https://krantikumar09.github.io/social-media-dashboard/"
  },
];
