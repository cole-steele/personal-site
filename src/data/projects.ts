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
}

export const projects: Project[] = [
  {
    slug: "business-website",
    name: "temtefadezzz.com",
    description: "Built for my barber's small business to establish an online presence.",
    longDescription: `<p>My barber recently took the leap into private practice, and without much of a web presence to her name, the timing lined up perfectly with my work in web development. I offered to build her something pro bono, and teamed up with a friend from college to make it happen. It was a great experience, and has us thinking seriously about starting an LLC and doing freelance work together, though I'm equally curious to see what it's like working in the industry full-time.</p>`,
    technicalDescription: `<div style="display:flex;flex-direction:column;gap:1rem;"><div style="display:flex;gap:0.5rem;align-items:baseline;"><span style="font-size:0.75rem;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent);white-space:nowrap;">Stack</span><span>Astro.js, Tailwind CSS, and Keystatic CMS.</span></div><p><strong>Astro.js</strong> was a natural fit for a mostly static site, it's modular and offers better SEO out of the box compared to a React SPA.</p><p><strong>Tailwind CSS</strong> can make markup harder to scan inline, but it's really great for collaborative work by enforcing a consistent naming convention (still a big SCSS fan, though).</p><p><strong>Keystatic CMS</strong> rounds things out by giving the user a clean admin interface to edit the images and text on the page any time. Authentication is performed via GitHub OAuth.</p></div>`,
    url: "https://temtefadezzz.com",
    github: "https://github.com/Hoyt-Steele-Design/temte-fadezzz",
    image: "/projects/temtefadezzz.png",
    imageClass: "w-full h-full object-cover object-center scale-125",
    tags: ["Astro.js", "Tailwind CSS", "Keystatic CMS"],
  },
  {
    slug: "personal-site",
    name: "colesteele.me",
    description: "You're looking at it! Built to showcase engineering and IT background while applying for roles.",
    longDescription: `<p>I built this site as an intentional home for my software engineering and IT background while applying for roles. The goal was to try to keep the layout straightforward and easy to scan. I started with a warmer neutral-and-gold color palette generated from Coolors. I tried to carry that philosophy through the cards, dividers, hover states, favicon, and small interaction details.</p>`,
    technicalDescription: `<div style="display:flex;flex-direction:column;gap:1rem;"><div style="display:flex;gap:0.5rem;align-items:baseline;"><span style="font-size:0.75rem;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent);white-space:nowrap;">Stack</span><span>Astro.js and Tailwind CSS.</span></div><p><strong>Astro.js</strong> keeps the site fast and simple, with mostly static pages that are easy to maintain and deploy.</p><p><strong>Tailwind CSS</strong> helps keep spacing, typography, and responsive styles consistent across the homepage and project detail pages.</p></div>`,
    url: "https://colesteele.me",
    image: "/projects/colesteele-me.png",
    imageClass: "w-full h-full object-contain object-top",
    tags: ["Astro.js", "Tailwind CSS"],
    github: "https://github.com/cole-steele/personal-site",
    demo: "https://colesteele.me",
  },
  {
    slug: "spa-dashboard",
    name: "Poke Dashboard",
    description: "SPA Dashboard built to sharpen React and Node.js skills.",
    longDescription: "Coming soon!",
    technicalDescription: `<div style="display:flex;flex-direction:column;gap:1rem;"><div style="display:flex;gap:0.5rem;align-items:baseline;"><span style="font-size:0.75rem;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent);white-space:nowrap;">Stack</span><span>Next.js, React, and Supabase.</span></div><p><strong>Next.js</strong> provides the application framework and API routes.</p><p><strong>React</strong> powers the interactive dashboard interface.</p><p><strong>Supabase</strong> handles the Postgres database and authentication.</p></div>`,
    image: "/projects/construction.png",
    imageClass: "w-full h-full object-contain",
    imageStyle: "background:#c4922a;",
    tags: ["Next.js", "React", "Supabase"],
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
  },
];
