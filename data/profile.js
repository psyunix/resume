const profileData = {
  title: "Resume",
  name: "Milan Cvetic",
  sub_title: "Sr Systems Architect",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `Insightful Information Technology Manager/Engineer with 15 years of IT leadership experience, including oversight of infrastructure, application support, and security services. Dedicated to customer satisfaction with focused delivery of technical solutions. Proven leader in directing operations, maintenance, and support of complex systems. Develops creative business solutions, leveraging diverse methodologies and delivering engineering solutions for leading organizations. Highly adept in requests for proposal development, technology needs assessments, and staff training.`,
    contact: {
      email: "psyunix@gmail.com",
      phone: "+1 808 284 0781",
      address: "Honolulu, Hawaii",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/milancvetic/",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/psunix",
      iconClass: "fa-brands fa-github",
    },
  ],
  skills: [
    {
      title: "Software",
      value: "Extensive experience working with the following software: Omeka and Omeka S (Digital Library), Canvas (Learning Management System), Oxygen, VS Code, GitHub, Protégé (Ontology Management)",
    },
    {
      title: "Databases",
      value: "Proficient in graph database design, working with Neo4J and CYPHER queries; experience with SQL and relational databases.",
    },
    {
      title: "Web Development",
      value: "HTML, CSS, JavaScript; experience with WordPress and LibGuides (CMS).",
    },
  ],
  experiences: [
    {
      organization: "SAS Institute | Cary, North Carolina (Honolulu, Hawaii office)",
      title: "Sr Systems Architect - Risk Research and Quantitative Solutions ",
      date: "August 2022 - Present",
      details: [
        `As part of the <strong>SAS Institute RQS</strong> team, worked on the development of core features like <strong>TDS summary & certificate</strong>, <strong>game join & re-join flow</strong> improvements,
        <strong>scorecard</strong>, <strong>withdrawal flow</strong>, <strong>user referral flow</strong>, and <strong>game bubble state</strong> optimizations.
        I ensured end-to-end responsibility, focusing on <strong>pixel-perfect UI</strong>, smooth UX, user testing, <strong>A/B experiments</strong>, cross-platform compatibility,
        and timely delivery.`,
        `Implemented the <strong>FT/UX</strong> (First Time User Experience) flow, boosting day1 metrics of Registration to Add Cash and Registration to Cash Game by around <strong>5%</strong>.`,
        `Integrated in-house <strong>help center SDK</strong>, offering self-help features like guided app core flows and callback scheduling for users, leading to a <strong>reduction in customer call volume</strong>.`,
        `Initiated the standardization of a React-Native <strong>custom UI library</strong>, encompassing reusable components, utilities, higher-order components, hooks, and animations for versatile project needs.`,
        `Addressed live issues such as App crashes, JS crashes, and ANRs using <strong>Sentry</strong> and <strong>Firebase Crashlytics</strong>. Mentored juniors through knowledge-sharing and code-review sessions to ensure bug-free code and optimal performance.`,
      ],
    },
    {
      organization: "Kamakura Corporation | Honolulu, Hawaii",
      title: `Director of Enterprise Information Technology`,
      date: "Jun 2019 - Aug 2022",
      details: [
        `Primary responsibilities include troubleshooting, supporting internal application systems, and maintaining the day-to-day operation of the production and development network and server environment.`,
        `Deployment, maintenance, and client technical support of the Kamakura Risk Manager (KRM) and Kamakura Risk Information Services (KRIS), Azure DevOps CI/CD for the KRM-WebUI software, including design and maintaining two Colocation data centers.`,
        `Analyzed department and job-related functionality requirements to align technology priorities with business needs.`,
        `Developed and implemented technical application support and information technology policies and procedures that advanced investment needs, outcomes, and performance measurements to balance continuous innovation with responsible risk-taking.`,
        `Job-related used technologies: Microsoft platform including the M365 Cloud, SharePoint, AD/FTP/DNS, and PowerBI, Unix/Linux, Virtualization, Storage systems (SAN&NAS) Dell/IBM/TrueNAS, Nessus Security, Cloud Computing (AWS, Azure), Fortinet Cloud Security - IPsec/VPN, OKTA IAM, RSA, Secure Pulse, VMware, Veeam Cloud DR/BC, Nagios XI monitoring, ESET AV Cloud, Python, Bash, and PowerShell Scripting, MS SQL, Oracle, PostgreSQL, R, STATA, SVN, DevOps CI/CD, YAML and JSON, Atlassian Confluence collaboration tools and Jira Agile tools for software teams. PCI Compliance.`,
        
      ],
    },
    {
      organization: "Superb Internet Corp | Honolulu, Hawaii",
      title: `Senior System Engenieer`, 
      date: "Nov 2016 - Jun 2019",
      details: [
        `Created feature-specific modules within the internal CRM to enhance team operations. Utilized <strong>ReactJS</strong> with <strong>SCSS</strong> and <strong>Redux</strong> for frontend development, alongside <strong>NodeJS-Express</strong> with protobuf for backend functionality.`,
        `Developed a tailored <strong>Content Management System (CMS) for MPL's website</strong>, enabling seamless content and image updates across various pages in real-time.`,
      ],
    },
    {
      organization: "Wipro",
      title: `Project Engineer`,
      desc: `Project Engineer`,
      date: "Aug 2018 - Apr 2020",
      details: [
        `Contributed to the development of a <strong>collaborative online
        blueprint editor</strong> by translating the design mockups into reusable UI components
        with industry-standard UX patterns using <strong>Angular</strong> with <strong>SCSS</strong>,
        <strong>NgRx</strong> and <strong>Angular-Material</strong> and adding actions to those by
        creating services to integrate backend REST-APIs.`,
        `Resolved UI/UX issues by refactoring React components and re-structuring CSS/SCSS of an internal project with the codebase of ReactJS-Redux.`,
      ],
    },
    {
      organization: "Venuemonk",
      title: "Full-Stack Developer Intern",
      desc: `<strong>Full-Stack Developer intern</strong> at  <a target='_blank' rel='noreferrer' href='https://www.venuemonk.com/'>
      <strong> Venuemonk </strong> </a> (<a target='_blank' rel='noreferrer' href='https://drive.google.com/open?id=1ch_9x9jCp_TJwKY43FG-pCr_zV9H2iun'> https://goo.gl/Uz1gaf</a>)`,
      date: "Jan 2018 - Apr 2018",
      details: [
        `Designed and developed a <strong>Venue Onboarding platform</strong> to streamline and automate
        the onboarding process of partner venues using <strong>React.js-Redux</strong> frontend and
        <strong>Node.js-Express, MongoDB</strong> backend.`,
      ],
    },
    {
      organization: "Hasura",
      title: "Product Development Intern (Remote)",
      desc: `<strong>Product development intern</strong> at <a target='_blank' rel='noreferrer' href='https://hasura.io/'>
      <strong> Hasura </strong> </a> (<a target='_blank' rel='noreferrer' href='https://goo.gl/8V3jBy'> https://goo.gl/8V3jBy</a>)`,
      date: "Jun 2017 - Aug 2017",
      details: [
        `Created a web app using <strong>Node.js-Express</strong> with <strong>EJS</strong> server-side-templating on
        <strong>Hasura's BaaS platform</strong> with features of group chat and a
        sketch board for real-time collaboration with peers. The work was more focused
        towards <strong>using auth and data APIs</strong> offered by the platform, deploying the app,
        testing and reporting the bugs in it.`,
      ],
    },
  ],
  projects: [
    {
      title: "Restaurant Review",
      duration: "Jun - Nov 2018",
      link: "https://github.com/imvpn22/restaurant-review-pwa",
      desc: `A web app to list, view and add reviews of restaurants.
      The app includes filtering based on location, cuisine, and rating.
      This project was a part of Udacity's <strong>Mobile Web Specialist</strong> nano degree program.
      Developed using <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong>
      with Progressive Web-Application standards including full-responsiveness,
      offline support, and improved accessibility.`,
    },
    {
      title: "WhiteBoard",
      duration: "Jun - Aug 2017",
      link: "https://github.com/imvpn22/whiteboard",
      desc: `A simple <strong>web-app for collaborative brainstorming sessions</strong>.
      The app includes a real-time messaging and sketching platform for collaboration with Peers.
      It also has features to create groups(teams) and add/remove members.
      Developed using <strong>Node.js-Express</strong> with server-side-templating (EJS),
      <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Socket.io</strong>.`,
    },
  ],
  education: [
    {
      alma: "University of Hawaiʻi at Mānoa (USA), Ph.D. Communication and Information Sciences (CIS) Interdisciplinary Program",
      duration: "2014 - 2018",
      std: "B.Tech. (Computer Science & Engineering)",
      score: "71.00%",
    },
    {
      alma: "Jwala Devi SVMIC, Prayagraj",
      duration: "2011 - 2013",
      std: "Class XI-XII (PCM)",
      score: "89.80%",
    },
  ],
  certifications: [
    {
      desc: `<strong>VCTA-DCV 2021 - VMware Certified Technical Associate (VCTA) - Data Center Virtualization.</strong> by <strong>VMware</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: "May - Aug 2021",
    },

  ],
  events: [],
};
