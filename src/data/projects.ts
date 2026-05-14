export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  technicalDescription?: string;
  tags: string[];
  image?: string;
  imageClass?: string;
  imageStyle?: string;
  url?: string;
  github?: string;
  demo?: string;
  githubDisabled?: boolean;
  demoDisabled?: boolean;
}

export const projects: Project[] = [
  {
    slug: "business-website",
    name: "temtefadezzz.com",
    description: "Built for my barber's small business to establish an online presence.",
    longDescription: `<p>My barber recently took the leap and started her own business, and without much of a web presence to her name, the timing lined up perfectly with my work in web development. I offered to build her something pro bono, and teamed up with a friend from college to make it happen. It was a great experience, and has us thinking seriously about starting an LLC and doing freelance work together.</p>`,
    technicalDescription: `<div style="display:flex;flex-direction:column;gap:1rem;"><p><strong>Astro.js</strong> is a strong candidate for a largely static website like this, it's modular and offers better SEO out of the box compared to a React SPA.</p><p><strong>Tailwind CSS</strong> can make markup harder to scan inline, but it's really great for collaborative work by enforcing a consistent naming convention (still a big SCSS fan, though).</p><p><strong>Keystatic CMS</strong> gives my barber a clean admin interface to edit the text and image content freely. Accessing the admin interface is convenient with authentication via GitHub OAuth.</p></div>`,
    url: "https://temtefadezzz.com",
    github: "https://github.com/Hoyt-Steele-Design/temte-fadezzz",
    demo: "https://temtefadezzz.com",
    image: "/projects/temtefadezzz.png",
    imageClass: "w-full h-full object-cover object-center scale-125",
    tags: ["Astro.js", "Tailwind CSS", "Keystatic CMS"],
  },
  {
    slug: "personal-site",
    name: "colesteele.me",
    description: "You're looking at it! Built to showcase engineering and IT background while applying for roles.",
    longDescription: `<p>I built this site as a home for my software engineering and IT background while applying for roles. The layout is meant to be clean, easy to scan, and hopefully easy on the eyes. I carried that same philosophy through the cards, dividers, hover states, favicon, and small interactive details. The warm neutral-gold palette came from <a href="https://coolors.co" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;">Coolors.co</a>, a great resource if you're looking for color inspiration.</p>`,
    technicalDescription: `<div style="display:flex;flex-direction:column;gap:1rem;"><p><strong>Astro.js</strong> once again is a heavy hitter for fast and modular static pages.</p><p><strong>Tailwind CSS</strong> helps keep spacing, typography, and responsive styles consistent across the homepage and project detail pages.</p></div>`,
    url: "https://colesteele.me",
    image: "/projects/colesteele-me.png",
    imageClass: "w-full h-full object-cover object-top",
    tags: ["Astro.js", "Tailwind CSS"],
    github: "https://github.com/cole-steele/personal-site",
    demo: "https://colesteele.me",
  },
  {
    slug: "spa-dashboard",
    name: "Poke Dashboard",
    description: "SPA Dashboard built to sharpen React and Node.js skills.",
    longDescription: "In-progress!",
    technicalDescription: `<div style="display:flex;flex-direction:column;gap:1rem;"><p><strong>Next.js</strong> for application framework &amp; API routes</p><p><strong>React</strong> for the interactive dashboard</p><p><strong>Supabase</strong> for Postgres database &amp; auth</p><p><strong>SCSS</strong> wins over TailwindCSS when it comes to semi-complex, stateful UI</p></div>`,
    image: "/projects/construction.png",
    imageClass: "w-full h-full object-contain",
    imageStyle: "background: linear-gradient(135deg, #e8b84b 0%, #c4922a 60%, #a67820 100%);",
    tags: ["Next.js", "React", "Supabase", "SCSS"],
    github: "https://github.com/cole-steele/poke-dashboard",
    demoDisabled: true,
  },
  {
    slug: "ic-student-email",
    name: "IC Student Email Generation",
    description: "SQL automation for generating student emails and accounts from Infinite Campus records.",
    longDescription: "Coming soon!",
    image: "/projects/ic-student-email.png",
    imageClass: "w-full h-full",
    imageStyle: "object-fit:cover; transform:scale(1.6) translateX(10px); transform-origin:center;",
    tags: ["MSSQL"],
    githubDisabled: true,
  },
];
