export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Always learning, growing, and pushing boundaries in my craft ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Time is never a barrier when it comes to programming.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Producing a 3D Horror Game.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "WinForm Calculator",
    des: "A user-friendly WinForm calculator for basic mathematical operations.",
    img: "/GitCal.png",
    iconLists: ["/csharp.png"],
    link: "/github.com/receptahaakgul/Calculator",
  }
];


export const companies = [
  {
    id: 1,
    name: "C#",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Python",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Html",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Css",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Javascript",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Built and maintained dynamic, responsive web interfaces using React.js for a personal portfolio project, focusing on clean design and improving user experience. Continuously learning and expanding skills in front-end technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Game Dev - Unity Tech",
    desc: "Currently learning Unity and developing a horror-themed game. Gaining experience with game mechanics, physics integration, and environment creation to craft immersive and interactive gameplay. Focused on learning core game development concepts and expanding skill set.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

interface SocialMedia {
  id: number;
  img: string;
  link: string; // link özelliği eklendi
}

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    img: "/git.svg",  // GitHub ikonunun yolu
    link: "https://github.com/receptahaakgul", // GitHub profil linki
  },
  {
    id: 2,
    img: "/Xtwit.png",  // Twitter ikonunun yolu
    link: "https://x.com/RecepTahaA87865",  // Twitter profil linki
  },
  {
    id: 3,
    img: "/link.svg",  // LinkedIn ikonunun yolu
    link: "https://www.linkedin.com/in/receptahaakg%C3%BCl/",  // LinkedIn profil linki
  },
];

