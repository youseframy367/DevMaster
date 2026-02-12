export default function LogoAnimation({width=80 ,height="120",heightImgAnimwtion="60" ,marginLogo="30"}) {
  const logos = [
    "/icon/e6b08986e699dd21b87627e3b0a86a309ee36f03.png",
    "/icon/Group(6).png",
    "/icon/NnlhqIdId8noSZWwrhwTL9m7z9W9SZaU8oejDOQ4 1(1).png",
    "/icon/logo-white 1.png",
    "/icon/arabic-logo 1.png",
    "/icon/website_images_logos_splash_sa_ar_logo-splash 1.png",
    "/icon/FAxacBciPwmGGziG44usNqMrhpSsBJqVGg6QXn0Q 1.png",
    "/icon/449738f6-d67c-4f00-8731-0f80609a647c 1.png",
   "/icon/e6b08986e699dd21b87627e3b0a86a309ee36f03.png",
    "/icon/Group(6).png",
    "/icon/NnlhqIdId8noSZWwrhwTL9m7z9W9SZaU8oejDOQ4 1(1).png",
    "/icon/logo-white 1.png",
    "/icon/arabic-logo 1.png",
    "/icon/website_images_logos_splash_sa_ar_logo-splash 1.png",
  "/icon/FAxacBciPwmGGziG44usNqMrhpSsBJqVGg6QXn0Q 1.png",
    "/icon/449738f6-d67c-4f00-8731-0f80609a647c 1.png",
   "/icon/e6b08986e699dd21b87627e3b0a86a309ee36f03.png",
    "/icon/Group(6).png",
    "/icon/NnlhqIdId8noSZWwrhwTL9m7z9W9SZaU8oejDOQ4 1(1).png",
    "/icon/logo-white 1.png",
    "/icon/arabic-logo 1.png",
    "/icon/website_images_logos_splash_sa_ar_logo-splash 1.png",
    "/icon/FAxacBciPwmGGziG44usNqMrhpSsBJqVGg6QXn0Q 1.png",
    "/icon/449738f6-d67c-4f00-8731-0f80609a647c 1.png"
  ];  return (
    <div
      style={{
        width: `${width}%`,
        height: `${height}px`,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: "url('/icon/Rectangle 42136.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 200,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '40px',
          marginTop:`${marginLogo}px`,
          whiteSpace: 'nowrap',
          animation: 'marquee 20s linear infinite',
        }}
      >
        {[...logos, ...logos].map((src, i) => ( // نسخ المجموعة لتكون سلسة
          <img key={i} src={src} alt="logo" style={{ height: `${heightImgAnimwtion}px` }} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
