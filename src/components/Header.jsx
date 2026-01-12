export const Header = () => {
  return (
    <>
      <div className="flex justify-between mx-auto max-w-[1140px] pt-3">
        <div className="bg-[#EEEBFF] w-10 h-10 rounded-full">
          <span className="text-[#7B61FF] font-semibold rotate-[20deg] inline-block ml-3 mt-0.5 text-2xl">
            A
          </span>
        </div>
        <div className="flex items-center gap-20">
        <a
          href="#"
          className="font-medium text-[#6B7280]"
        >
          Skills
        </a>

        <a
          href="#"
          className="font-medium text-[#6B7280]"
        >
          Profile
        </a>

        <a
          href="#"
          className="font-medium text-[#3730A3] border border-[#3730A3] rounded-lg px-4 py-1"
        >
          Hire Me
        </a>
      </div>
      </div>
    </>
  );
};
