import Link from "next/link";

export default function LegalPage({ content }) {
  return (
    <article className="relative mx-auto w-[90%] max-w-[1100px] px-0 pb-20 pt-[120px] text-white max-[480px]:pt-[90px]">
      <header className="mb-10 text-center" data-aos="fade-up">
        <h1 className="title-gradient bg-[linear-gradient(270deg,#9795FF,#FFFFFF,#FFFFFF,#BE9FFF)] bg-[length:400%_400%] bg-clip-text text-[42px] font-normal leading-[1.25] text-transparent max-[640px]:text-[30px]">
          {content.title}
        </h1>
        <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-7 text-[#DDD] max-[480px]:text-[14px]">
          {content.intro}
        </p>
      </header>

      <div className="mx-auto flex max-w-[900px] flex-col gap-8">
        {content.sections.map((section, index) => (
          <section
            key={`${content.slug}-${section.heading}`}
            className="rounded-[24px] border border-white/10 bg-[#1A1A1A66] p-6 backdrop-blur-[30px] max-[480px]:p-5"
            data-aos="fade-up"
            data-aos-delay={index * 40}
          >
            <h2 className="mb-3 text-[22px] font-medium text-white max-[480px]:text-[19px]">
              {section.heading}
            </h2>
            <div className="flex flex-col gap-3 text-[15px] leading-7 text-[#CCC] max-[480px]:text-[14px]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        <Link href="/" className="transition-colors hover:text-white">
          {content.backLinkText}
        </Link>
      </div>
    </article>
  );
}
