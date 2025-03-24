import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Pruthvi",
  lastName: "Muga",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  personality: "INFJ-T",
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const contactMe = {
  display: true,
  title: <>Let’s Connect & Collaborate</>,
  description: (
    <>Have a project or idea? Let’s talk! Reach out via LinkedIn, or email.</>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/pruthvianveshmuga",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/pruthvi-anvesh-muga/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:pruthvianveshm@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <></>,
  subline: <></>,
};

const info = {
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/pruthvi-anvesh-muga",
  },
  about: {
    label: "About",
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m fueled by an unwavering passion to eﬀect positive change in the
        world. Committed to continuous growth, I firmly believe that with
        tenacity, no challenge is too great to overcome. I cherish workplaces
        that foster learning, promote open-mindedness, and cultivate creativity.
      </>
    ),
  },
  work: {
    label: "Work",
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PubX",
        companyLink: "https://www.pubx.ai/",
        timeframe: "2023 - 2025",
        role: "Full Stack Developer",
        achievements: [
          <>
            Led end-to-end integration of modular CDN tags for 500M+ daily
            impressions across 180+ countries, ensuring cross-publisher
            compatibility for clients like Snigel and 9gag.
          </>,
          <>
            Spearheaded development of Prebid.js RTD module (open-source),
            boosting auction capture by 30% and reducing load time by 15% via
            parallel resource loading.
          </>,
          <>
            Integrated AI-driven decay values into PMAC-based exponential decay
            function, boosting price floor prediction accuracy by 18% and RPM
            (Revenue Per Mille) by 15%.
          </>,
          <>
            Built scalable analytics pipeline (AWS Kinesis, Firehose, Athena)
            processing 3B daily events, enabling visibility to reduce errors by
            75% through targeted fixes.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Udaan",
        companyLink: "https://udaan.com/",
        timeframe: "2019 - 2022",
        role: "Product Engineer",
        achievements: [
          <>
            Designed tamper-proof ID (TPID) system from scratch, reducing seller
            disputes by 97% using React, Node.js, and Kubernetes-powered
            microservices for enterprise scalability.
          </>,
          <>
            {`Built Quality Check (QC) system from the ground up, reducing seller dispute resolution time by 38% (from 39 hours to <24 hours) through extensive data collection and automation.`}
          </>,
          <>
            Implemented dynamic shipment routing in QC processes**, which cut
            transport costs by 20% and delivery time by 30% (from 9 to 6 days)
            through route optimization algorithms.
          </>,
          <>
            Developed LM Beats initiative**, introducing dynamic delivery slots
            that boosted on-time rates by 15% and lowered complaints by 40%
            using Python-driven cron jobs.
          </>,
        ],
        images: [],
      },
      {
        company: "JS Tigers",
        companyLink: "https://www.jstigers.com/",
        timeframe: "2018 - 2018",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Developed a data visualization tool using React.js, Node.js, and
            Highcharts, enabling interactive analysis of 10,000+ data points for
            real-time decision-making.
          </>,
          <>
            Enhanced data management** by integrating MongoDB, reducing manual
            data analysis time by 60% through automated filtering, sorting, and
            drill-down features.
          </>,
        ],
        images: [],
      },
    ],
  },
  education: {
    label: "Education",
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "B.Tech in Computer Science",
        description: <>IIIT Allahabad</>,
      },
      {
        name: "MBA",
        description: <>IIIT Allahabad</>,
      },
    ],
  },
  skills: {
    label: "Skills",
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  resume: {
    label: "Download Resume",
    display: true,
    link: "/resume/pruthvi-anvesh-muga.pdf",
    icon: "resume",
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, contactMe, home, info, blog, work, gallery };
