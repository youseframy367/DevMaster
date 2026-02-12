





 export const artical={
        artical1:{
            img :'/icon/Group 1261153701(1).png',
            title:"Market Analysis",
            artical:"We provide precise market analyses that help you understand trends, competitors, and customer needs to make successful strategic decisions.",
            linK:"",
            date:"24 Dec 2025"

        },
           artical2:{
            img :'/icon/Group 1261153701(2).png',
            title:"Digital Marketing Agency",
            artical:" We provide end-to-end digital solutions to help your business thrive. From strategy and content creation to SEO, social media management, and paid campaigns, we ensure your brand reaches the right audience and achieves measurable results.",
            linK:"",
                        date:"24 juin 2025"

        },
           artical3:{
            img :'/icon/Group 1261153701.png',
            title:"Nom du blog",
            artical:"Explanatory text indicating the presence of alternative text here Text here n Alt text here Explanatory text indicating the presence of alternative text here Text here",
            linK:"",
                        date:"24 juin 2025"

        },

     artical4:{
            img :'/imgTwo/newOne.png',
            title:"Market Analysis",
            artical:"We provide precise market analyses that help you understand trends, competitors, and customer needs to make successful strategic decisions.",
            linK:"",
            date:"24 juin 2025"

        },
           artical5:{
            img :'/imgTwo/newTwo.png',
            title:"Digital Marketing Agency",
            artical:"Stay updated with the latest trends, strategies, and news shaping the business world.",
            linK:"",
                        date:"24 juin 2025"

        },
           artical6:{
            img :'/imgTwo/newThree.png',
            title:"Business Trends",
            artical:"Explore the latest developments, strategies, and insights shaping today’s business landscape.",
            linK:"",
                        date:"24 juin 2025"

        }








    }










export default function Articles( {numper=3 , showBotton=true , gap="20", width="90"}){
   
    return(
        <>
        





<div style={{
      marginTop:"-330px",
  width:'90%',
  zIndex:'100',
  height:'auto',
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:'end',
  
}}>
  <div style={{
    display:'flex',
    flexDirection:"column",

  }}>
<p style={{
          fontFamily: "'Inter', sans-serif",

     backgroundImage: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
          WebkitBackgroundClip: "text",
          color: "transparent",
             fontSize: "68px",
          fontWeight: 400,

}}

  data-aos="fade-up"


>Find out the latest articles</p>






<p style={{
 color: "#fff",
          fontWeight: 400,
          fontFamily: "'Inter', sans-serif",
          lineHeight:"28px",
          marginTop:'-40px',
}}
  data-aos="fade-up"


>
Explore our latest articles and new content we publish regularly so you stay updated with everything new.</p>
</div>

{showBotton &&(

<button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 24px",
              borderRadius: "40px",
              color:'#16121E',
              fontSize:"16px",
              fontWeight:'500',
              gap:"5px"
            }}

              data-aos="fade-up"

          >
All article                    <img src="/icon/uil_arrow-up (1).png" alt="arrow up"  />

          </button>


)}



</div>






























<div style={{
width:`${width}%`,
  minHeight:'500px',
  display: "grid",
  marginLeft:"-20px",
padding:"20px",
gridTemplateColumns: "repeat(3, 1fr)",
gap: `${gap}px`, // ✅ يضيف px إلى القيمة
                          fontFamily: "'Inter', sans-serif",
}}>
           {Object.values(artical).slice(0,numper).map((item, index) => (



 <div

   data-aos="fade-up"

              key={index}
              style={{
  borderRadius: "24px",
          
            backgroundColor: "rgba(21, 21, 21, 0.6)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",           
                 borderRadius: "20px",
                padding: "15px",
                width: "93%",
                height:"450px",


    boxShadow: "-1px -1px 1px rgba(168, 166, 166, 0.98)", // top-left glow
              }}
            >
              <img src={item.img} alt={item.title} style={{ width: "100%", borderRadius: "10px" }} />
             
             
             <div style={{
                width:"100%",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                color:"#fff"
             }}>
              <p style={{ marginTop: "15px" ,fontWeight:"600" }}>{item.title}</p>
              <p style={{fontSize:'14px',color:"#969696",fontWeight:'400'}}>{item.date}</p>
              </div>
              <p style={{fontSize:"14px",fontWeight:"400",color:'#CAC6DD'}}>{item.artical}</p>
              
           
            </div>
            
        
          ))}
</div>
        </>
    )

}