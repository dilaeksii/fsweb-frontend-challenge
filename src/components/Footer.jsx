export const Footer = () => {
  return (
    <>
      <div className="h-[409px] bg-[#F9F9F9] max-sm:h-full">
        <p className="w-[540px] text-[#1F2937] h-[106px] font-semibold text-[42px] leading-[1.2] pl-[125px] pt-20 max-sm:w-40 max-sm:pl-2">
          Let’s work together on your next product.
        </p>
        <div className="pl-[125px] pt-30 flex justify-between max-sm:pl-2 max-sm:pt-80 max-sm:flex-col max-sm:gap-5">
          <div>
            👉{" "}
            <a
              href="#"
              className="underline text-[#AF0C48] font-medium text-xl"
            >
              almilasucode@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-[20px] pr-[169px] max-sm:flex-col max-sm:items-start max-sm:mt-5">
            <a href="#" className="text-[#0A0A14] text-lg font-medium">
              Personal Blog
            </a>
            <a
              href="https://github.com/dilaeksii"
              target="_blank"
              className="text-[#00AB6B] text-lg font-medium"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/dilaeksi/"
              target="_blank"
              className="text-[#0077B5] text-lg font-medium"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
