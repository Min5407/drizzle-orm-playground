import { Dribbble, Figma, Github, Slack, Youtube } from "lucide-react";

const CompanySection = () => {
  return (
    <section className="mt-auto">
      <h2 className="opacity-70 mb-10">Trusted by these Largest Companies</h2>
      <ul className="flex justify-around text-white/80">
        <li className="grid gap-3 place-items-center">
          <Dribbble size={30} />
          <span>Dribble</span>
        </li>
        <li className="grid gap-3 place-items-center">
          <Youtube size={30} />
          <span>Youtube</span>
        </li>
        <li className="grid gap-3 place-items-center">
          <Figma size={30} />
          <span>Figma</span>
        </li>
        <li className="grid gap-3 place-items-center">
          <Github size={30} />
          <span>Github</span>
        </li>
        <li className="grid gap-3 place-items-center">
          <Slack size={30} />
          <span>Slack</span>
        </li>
      </ul>
    </section>
  );
};

export default CompanySection;
