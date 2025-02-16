export type ProjectProps = {
  id: number;
  nameKey: string;
  descriptionKey: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects: ProjectProps[] = [
  {
    id: 0,
    nameKey: "projects.matchRace.name",
    descriptionKey: "projects.matchRace.description",
    technologies: ["Electron.js", "Vue.js", "Vuetify"],
    github: "https://gitlab.forge.hefr.ch/ca-tic/match-race",
    demo: "https://www.linkedin.com/in/yoan-gilliand/#:~:text=Projets-,Match%20Race%20%E2%80%93%20A%20Digitalized%20Photo%20Competition%20Platform,-Match%20Race%20%E2%80%93%20A",
    image: require("../../public/projects/matchrace.png"),
    available: true,
  },
  {
    id: 1,
    nameKey: "projects.eParking.name",
    descriptionKey: "projects.eParking.description",
    technologies: ["Vue.js", "Express.js", "MySQL"],
    github: "https://gitlab.forge.hefr.ch/yoan.gilliand/eparking/-/tree/develop",
    demo: "https://www.linkedin.com/in/yoan-gilliand/#:~:text=Autres%20contributeurs-,eParking%20%E2%80%93%20A%20Smart%20Parking%20Permit%20Management%20Platform,-eParking%20%E2%80%93%20A%20Smart",
    image: require("../../public/projects/eparking.png"),
    available: true,
  },
];