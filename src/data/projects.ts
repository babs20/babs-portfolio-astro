export interface IProject {
  title: string;
  description: string;
  imagePath?: string;
  projectLink?: string;
  projectLinkText?: string;
  learnMoreLink?: string;
}

// List of Projects
// === Refactored Media === //


// === MultiTracks === //


// === Personal === //

export const projects: IProject[] = [
  {
    title: "Semper Liberi Website",
    description:
      "I developed and designed a significant renovation of a West Virginia based non-profit organization, Semper Liberi's website, incorporating the latest web development technology. The website now features a cutting-edge design and an enhanced user experience, improving its aesthetic appeal and offering a more efficient and user-friendly experience for visitors. The website also includes a yearly golf tournament registration form and a donation page, which has increased the organization's online presence and revenue.",
    imagePath: "/src/images/projects/semper-li-project.png",
    projectLink: "https://semperli.org",
  },
    {
    title: "ASNT's NDTProTracker PWA",
    description:
      "I was the solo developer from start to finish on ASNT's NDTProtracker, a PWA. I developed the application using React for the frontend, a Node.js API for the backend, and Supabase for the PostgreSQL database. The app works completely offline, which allows users to track their data no matter where they are during testing. The application was designed to help NDT professionals track their training requirements and is a valuable tool for managing their training.",
    imagePath: "/src/images/projects/ndt-protracker.png",
    projectLinkText: "Learn More About NDTProTracker",
    projectLink: "https://www.asnt.org/MajorSiteSections/Membership/NDT-ProTracker.aspx",
  },
  {
    title: "Big I Illinois' Website",
    description:
      "I was the main developer on the Big I Illinois website redesign, integrating the Storyblok CMS to provide a more user-friendly and efficient experience for the client. I worked closely with the project manager to ensure the design was implemented to specifications. Together we delivered a high-quality product that met and exceeded the client's expectations. One of the things I would like to highlight is the use of the Next.js App Router which takes advantage of ISR to provide a fast and up-to-date experience for the user as soon as content is updated in the CMS without requiring a full rebuild.",
    imagePath: "/src/images/projects/big-i-project.png",
    projectLink: "https://www.ilbigi.org",
  },
  {
    title: "MultiTracks' RehearsalMix Player",
    description:
      "I developed a new feature for the RehearsalMix Player that enables custom song arrangements in the ChartBuilder app. I tackled iOS WebAudio API challenges to support large audio files efficiently with low latency and smooth rearrangement. This feature received positive feedback and significantly reduced data caching issues, resolving crashing problems.",
    imagePath: "/src/images/projects/practice-app-project.png",
    projectLink: "https://www.multitracks.com/rehearsalmix/",
  },
  {
    title: "Monorepo and Shared Component Library",
    description:
      "I implemented a monorepo and shared component library, enhancing our development process and shortening the timeframe for implementing new features in our client's sites. I helped to conceptualize and design the framework for various projects that would utilize these packages. This shared component library has elevated the consistency and quality of our codebase, while the monorepo has simplified project management and maintenance",
    imagePath: "/src/images/projects/project-3.png",
    projectLinkText: "View the Project Using the Library",
    projectLink: "https://www.refactoredmedia.com/web-accelerator/"
  },
  {
    title: "MultiTracks' Developer Workflow and Documentation",
    description:
      "I focused on streamlining and removing obstacles from our development team's workflow. Adopting a new build system improved our build and TypeScript file speeds. I also enhanced our documentation for a more productive environment. These changes resulted in a 2x to 4x decrease in build times for TypeScript, asset bundling, and Sass files. The improved documentation led to a reduction in the time it takes for new developers to become productive on the project.",
    imagePath: "/src/images/projects/project-2.png",
    learnMoreLink: "/projects/developer-workflow",
  },
  {
    title: "Contributions to Open Source Projects",
    description:
      "I contributed to open source projects, including Elastic UI and SVG-Sprite, showcasing my passion for software development and a commitment to improving the web for everyone. I'm continuously seeking ways to support other open source projects and make a positive impact on the software development community.",
    imagePath: "/src/images/projects/project-5.png",
    projectLink: "https://github.com/stars/babs20/lists/oss",
    projectLinkText: "View My Open Source Contributions",
  },
  {
    title: "Incenter Documentation Website",
    description:
      "I was the main developer of Incenter's centralized documentation website, which was built with Wiki.js to streamline team workflows and enhance feature documentation. Leveraging AWS technologies including RDS, ECS, ECR, and Route 53, I designed a scalable infrastructure to ensure reliability and performance. Additionally, I implemented a SAML integration by configuring our primary Django application as an Identity Provider (IdP), enabling seamless Single Sign-On (SSO) for users. This project has transformed how our team collaborates and documents, creating a unified, efficient system for managing knowledge.",
    imagePath: "/src/images/projects/project-5.png",
  }
];

export const minorProjects: IProject[] = [
  // {
  //   title: "Innovis Website Redesign",
  //   description: "Redesigned the Innovis website using Astro. This project involved ",
  // },
  {
    title: "Streaming License and Auto Reporting Integration",
    description:
      "I was a part of the frontend implementation, which included a product page and third-party API integration for importing setlists from Planning Center. By using Vue.js, I enhanced the user experience of the setlist import flow, making it more modern and responsive compared to the previous experience using the legacy .NET Web Forms technology.",
    projectLink: "https://www.multitracks.com/products/churchstreaminglicense/",
  },
  // {
  //   title: "Partner Portal",
  //   description: "Developed the frontend for a partner portal.",
  // }
];

export const combinedProjects: IProject[] = [...projects, ...minorProjects];
