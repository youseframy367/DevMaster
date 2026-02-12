export  const testimonials = [
    {
      name: "Nugraha",
      role: "Founder of Mangcoding",
      avatar: "/icon/501f8c77c3ce2d5e3280f39cae87f9413a9584f2.jpg",
      text: "شركة DevMaster أثبتت أنها شريك موثوق لكل من يسعى لتطوير أعماله الرقمية. فريقهم يقدم خدمات متكاملة من تصميم وبرمجة وتسويق، مع احترافية عالية واهتمام بأدق التفاصيل. تعاوننا معهم ساعدنا على تحسين تجربة عملائنا وزيادة المبيعات بشكل ملحوظ، ونوصي بهم لأي شركة تبحث عن الجودة والتميز في مشاريعها الرقمية"
    },
    {
      name: "Fahd al-zahrany",
      role: "  Project Manager ",
      avatar: "/imgTwo/personTwo.png",
      text: "التعاون مع DevMaster ساعدنا على إطلاق مشاريعنا بسرعة وبجودة عالية، وحققنا نتائج ملموسة"
    },
    {
      name: "Laila AlMutairi",
      role: "Innovation Manager",
      avatar: "/imgTwo/personThree.png",
      text: "فريق DevMaster ملتزم بتقديم حلول رقمية مبتكرة تلبي احتياجاتنا بالكامل. بفضلهم، تحسنت تجربة العملاء وارتفعت كفاءة العمليات الرقمية بشكل ملحوظ."
    },
    {
      name: "Mohammed AlAli",
      role: " CEO – Al Raya Technology",
      avatar: "/imgTwo/personFor.png",
      text: "DevMaster قدمت لنا حلول مبتكرة ومتكاملة عززت من كفاءة عملياتنا الرقمية ورفعت مستوى خدماتنا للعملاء."
    },
    {
      name: "Fahad AlZahrani",
      role: "Marketing Manager ",
      avatar: "/imgTwo/personFife.png",
      text: "لقد كانت تجربتنا مع شركة DevMaster استثنائية بكل المقاييس. الفريق لم يقدّم لنا خدمات تصميم وتطوير فحسب، بل ساهم أيضًا في وضع استراتيجيات رقمية متكاملة عززت من حضورنا الرقمي وساعدتنا على الوصول إلى عملائنا بشكل أفضل. الالتزام بالمواعيد، الدقة في التنفيذ، والابتكار في الحلول جعلوا من DevMaster شريكًا موثوقًا نثق به في كل مشروع. بفضلهم، شهدنا تحسنًا ملموسًا في أداء أعمالنا الرقمية وزيادة واضحة في رضا العملاء والمبيعات. أنصح أي شركة تبحث عن الجودة والاحترافية أن تتعاون معهم بلا تردد"
    },
    {
      name: "Abdullah AlSaad",
      role: "Operations",
      avatar: "/imgTwo/personsix.png",
      text: "خدمات DevMaster الشاملة من برمجة وتسويق رقمي ساعدت شركتنا على التوسع وزيادة المبيعات. الالتزام بالمواعيد وجودة العمل جعلتهم شركاء موثوقين"
    }
  ];
export default function ApoutUs() {

  return (
    <div>
    <div style={{
border: "3px solid blue",
width:"4%",
zIndex:'0',
borderLeft:'none',
marginLeft:"93%",
marginTop:"-230px",
borderRadius:"0px 46px 46px 0px",
height:'280px'
}}


>

</div>
<div style={{
  border: "3px solid blue",
  borderRadius:"46px 0px 0px 46px",

  width:"90%",
  borderRight:"none",
  borderBottom:"none",
  marginLeft:'4%',
  marginTop:"-3px",
  height:"300px",

}}

>

</div>

      {/* عنوان القسم */}
<div style={{
  marginTop:"-280px",
  width:"90%",
  marginLeft:"7%",
  zIndex:'1000'
}}
        data-aos="fade-up"


>        <p style={{
          fontSize: "68px",
          fontWeight: 400,
          backgroundImage: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          margin: 0,
          fontFamily: "'Inter', sans-serif"
        }}>
          What they say about us
        </p>
        <p style={{
          color: "#fff",
          fontWeight: 400,
          fontFamily: "'Inter', sans-serif",
          lineHeight:"28px"
        }}>
Our clients’ feedback reflects the quality of our services and the professionalism of our team in every project.Our <br/> clients’ feedback reflects the quality of our services and the professionalism of our team in every project.        </p>
      </div>

      {/* Grid البطاقات */}
      <div style={{
  marginTop:"20px",
  width:'90%',
  marginLeft:'5%',
  height:'500px',
zIndex:1000,
  display: "grid",
padding:"20px",
gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px" , // اختياري: مسافة بين الأعمدة والصفوف
                          fontFamily: "'Inter', sans-serif",

}}>  
        {testimonials.map((t, index) => (
          <div key={index} style={{
            borderRadius: "24px",
          boxShadow: "-2px 0px 1px -1px rgba(255, 255, 255, 0.6)",
          overflow:"hidden",

            backgroundColor: "rgba(21, 21, 21, 0.6)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            minHeight: "248px"
          }}
          
                  data-aos="fade-up"

          >
            <div style={{
              margin: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px"
              }}>
                <img src={t.avatar} alt={t.name} style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%"
                }} />
                <div style={{ lineHeight: ".5" }}>
                  <p style={{ color: "#fff", fontWeight: 500 }}>{t.name}</p>
                  <p style={{ fontSize: "12px", fontWeight: 400, color: "#fff" }}>{t.role}</p>
                </div>
              </div>
              <img src="/imgTwo/dubelCotation.png" alt="icon" />
            </div>
            <p style={{ margin: "10px", color: "#fff", fontWeight: 400 ,lineHeight:"28px" ,fontSize:'14px', direction:'rtl',padding:'5px',  fontFamily: "'Cairo', sans-serif"}}>{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
