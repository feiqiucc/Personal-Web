import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { projectintro } from "../projectintro";
import { MagicCard } from "./ui/Magiccardproject";

export function Project() {
  const fprojectList = projectintro;
  return (
    <div className="px-12 py-12 sm:px-14 flex flex-col gap-8 pt-20" id="proj">
      <h2 className="font-semibold text-3xl pt-5">Projects</h2>
      <div className="flex gap-12 flex-row flex-wrap justify-between h-fit">
        {fprojectList.map((project, index) => (
          <MagicCard
            key={project.id || index}
            className="group w-full sm:w-[22rem]"
          >
            <div className="h-full w-full flex flex-col p-[0.07rem]">
              <div className="relative w-full h-52 rounded-t-[0.7rem] overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} cover image`}
                    fill
                    className="object-cover "
                  />
                ) : (
                  <Image
                    src={"/none.svg"}
                    alt={`${project.title} cover image`}
                    className="object-contain p-10"
                    fill
                  />
                )}
              </div>
              <div className="flex-grow p-5 pt-7 flex flex-col justify-between gap-7">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="font-semibold text-xl">{project.title}</h3>
                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <GitHubLogoIcon className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                  <p>{project.description}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500">
                    {project.techStack.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
}
