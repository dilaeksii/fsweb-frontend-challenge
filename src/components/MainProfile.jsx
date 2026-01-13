import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profile from "../data/profile.json"

export const MainProfile = () => {
  return (
    <>
      <section className="w-full">
        <div className="pt-20">
          <div className="flex items-center justify-between gap-16 max-sm:flex-col">
            <div className="w-[596px] max-sm:w-full">
              <div className="flex items-center gap-4">
                <span className="inline-block w-24 h-[2px] bg-[#4338CA]"/>
                <span className="text-[#4338CA] font-medium">{profile.name}</span>
              </div>
              <h1 className="mt-8 text-[72px] leading-[1.05] font-bold text-[#111827] max-sm:text-[62px]">
                Creative thinker <br /> Minimalism lover
              </h1>
              <p className="mt-6 max-w-[520px] text-[#6B7280] leading-7">
                Hi, I’m Almila. I’m a full-stack developer. If you are looking
                for a Developer who to craft solid and scalable frontend
                products with great user experiences. Let’s shake hands with me.
              </p>
              <div className="mt-10 flex items-center gap-4 max-sm:flex-col max-sm:items-start">
                <a
                  href="#"
                  className="h-12 inline-flex items-center gap-2 rounded-lg border border-[#3730A3] px-5 font-medium text-[#3730A3] hover:bg-[#3730A3] hover:text-white max-sm:w-32"
                >
                  Hire Me
                </a>

                <a
                  href={profile.github}
                  className="h-12 inline-flex items-center gap-2 rounded-lg border border-[#3730A3] px-5 font-medium text-[#3730A3] hover:bg-[#3730A3] hover:text-white max-sm:w-32"
                  target="_blank"
                >
                <FaGithub className="text-xl" />
                  Github
                </a>

                <a
                  href={profile.linkedin}
                  className="h-12 inline-flex items-center gap-2 rounded-lg border border-[#3730A3] px-5 font-medium text-[#3730A3] hover:bg-[#3730A3] hover:text-white max-sm:w-32"
                  target="_blank"
                >
                <FaLinkedinIn className="text-xl" />
                  Linkedin
                </a>
              </div>
            </div>
            <div className="shrink-0">
              <img
                className="w-[476px] h-[375px] rounded-2xl object-cover"
                src="src/images/profile.png"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
