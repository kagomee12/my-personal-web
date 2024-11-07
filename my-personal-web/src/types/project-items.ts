export type TProjectItems = {
  name: string;
  ref: string;
  description: string;
  image: string;
  tech: string[];
  isDeploy: boolean;
};

export const projectItems: TProjectItems[] = [
  {
    name: "My Personal Web",
    ref: "/",
    description: "This is my personal website built with Next.js and Tailwind.",
    image:
      "https://res.cloudinary.com/dq1pow2vn/image/upload/v1730888619/my-personal-web/awv1vuaihvaskqnildx9.png",
    tech: ["Next.js", "Tailwind", "TypeScript", "Prisma", "Postgresql"],
    isDeploy: true,
  },
  {
    name: "Circle",
    ref: "https://circle-project-frontend.vercel.app/",
    description:
      "Built with React and Express, this social media platform provides a similar experience to Twitter, allowing users to easily share updates, connect with others, upload images and text, follow favorite accounts, and interact through likes, comments, and replies.",
    image:
      "https://res.cloudinary.com/dq1pow2vn/image/upload/v1730876765/my-personal-web/v6k4zzw5ctkspghg8tnp.png",
    tech: [
      "Typescript",
      "React",
      "Express",
      "Postgresql",
      "Material UI",
      "Prisma",
      "Axios",
    ],
    isDeploy: true,
  },
  {
    name: "Satu-Klinik",
    ref: "https://github.com/satuklinik-team/satu-klinik-mobile",
    description:
      "A mobile application for managing clinics, equipped with diagnosis, medical records, and payment features. This application is designed to facilitate clinic management and provide convenience in health administration.",
    image:
      "https://res.cloudinary.com/dq1pow2vn/image/upload/v1730876765/my-personal-web/njtauqepir5t3u9awkzf.png",
    tech: [
      "Typescript",
      "React Native",
      "NestJs",
      "Postgresql",
      "Native Base",
      "Prisma",
      "Axios",
      "TanStack",
      "zustand",
    ],
    isDeploy: false,
  },
  {
    name: "Hallo-Corona",
    ref: "/",
    description:
      "Hallo-Corona is a health application that can be used by patients and doctors to interact directly through This application is designed to make it easier for patients and doctors to interact directly through the online consultation feature. Designed to make it easier for patients to receive medical advice from doctors without having to visit a healthcare facility in person, Hallo Corona also provides a platform for doctors to share health information and education through articles.",
    image:
      "https://res.cloudinary.com/dq1pow2vn/image/upload/v1730876766/my-personal-web/ibr1rmgjt1dfkfgw64t3.png",
    tech: [
      "Typescript",
      "React",
      "NestJs",
      "Postgresql",
      "Material UI",
      "Prisma",
      "Axios",
      "TanStack",
    ],
    isDeploy: false,
  },
];
