import { profile } from "../data/profile";
const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          © 2026 {profile.name}. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm text-slate-400">
          <a href={profile.github} target="_blank" className="hover:text-cyan-400">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" className="hover:text-cyan-400">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-cyan-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;