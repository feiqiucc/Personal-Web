import Link from "next/link";
import Buttonhome from "./ui/Buttonhome";
import Buttonproject from "./ui/Buttonproject";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { links } from "./backgroundinfo";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faEnvelope} />;

export function Navbar() {
  const { email, github, linkedin } = links;
  return (
    <nav className="flex justify-between items-center top-0 py-4 z-10 px-10 fixed backdrop-blur-md w-full">
      <div className="flex gap-10">
        <Link href="/">
          <Buttonhome />
        </Link>
        <Link href="#proj">
          <Buttonproject />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Link href={`mailto:${email}`}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-2xl hover:text-foreground"
          />
        </Link>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-2xl hover:text-foreground"
          />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl hover:text-foreground"
          />
        </a>
      </div>
    </nav>
  );
}
