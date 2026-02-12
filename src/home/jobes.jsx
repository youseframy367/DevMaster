import { useNavigate } from "react-router-dom"


export const jops={
    jopOne:{
      name:"Sales Executive",
      site:"Ray-KSA",
      time:"Full-Time",
      count:"01",
      Deadline: " 30 Dec, 2025",
      detales:{
        one:"Manage client accounts and maintain strong relationships.",
        two :"Coordinate projects and ensure timely delivery.",
        three:'Develop strategies to achieve business goals.',
        for:"Monitor performance and provide regular reports.",
        fife:"Collaborate with internal teams to optimize results.",
      },
        JobDuties :{
   one:"Manage daily operations and ensure tasks are completed efficiently",
        two :"Communicate effectively with clients and team members.",
        three:' Ability to communicate effectively in English, both written and spoken, for professional and business purposes.',


     },

    },
     jopTwo:{
      name:"Full-Stack Developer",
      site:"Mansoura, Egypt",
      time:"Full-Time",
      count:"01",
      Deadline: " 30 Dec, 2025",
    detales:{
        one:"Manage client accounts and maintain strong relationships.",
        two :"Coordinate projects and ensure timely delivery.",
        three:'Develop strategies to achieve business goals.',
        for:"Monitor performance and provide regular reports.",
        fife:"Collaborate with internal teams to optimize results.",
      },
        JobDuties :{
   one:"Manage daily operations and ensure tasks are completed efficiently",
        two :"Communicate effectively with clients and team members.",
        three:' Ability to communicate effectively in English, both written and spoken, for professional and business purposes.',


     },

    },
     jopThree:{
      name:"SEO Specialist",
      site:"Ray-KSA",
      time:"Full-Time",
      count:"01",
      Deadline: " 30 Dec, 2025",
   detales:{
        one:"Manage client accounts and maintain strong relationships.",
        two :"Coordinate projects and ensure timely delivery.",
        three:'Develop strategies to achieve business goals.',
        for:"Monitor performance and provide regular reports.",
        fife:"Collaborate with internal teams to optimize results.",
      },
        JobDuties :{
   one:"Manage daily operations and ensure tasks are completed efficiently",
        two :"Communicate effectively with clients and team members.",
        three:' Ability to communicate effectively in English, both written and spoken, for professional and business purposes.',


     },

    },

 jopFor:{
      name:"Front-End Developer",
      site:"Mansoura, Egypt",
      time:"Full-Time",
      count:"01",
      Deadline: " 30 Dec, 2025",
    detales:{
        one:"Manage client accounts and maintain strong relationships.",
        two :"Coordinate projects and ensure timely delivery.",
        three:'Develop strategies to achieve business goals.',
        for:"Monitor performance and provide regular reports.",
        fife:"Collaborate with internal teams to optimize results.",
      },
        JobDuties :{
   one:"Manage daily operations and ensure tasks are completed efficiently",
        two :"Communicate effectively with clients and team members.",
        three:' Ability to communicate effectively in English, both written and spoken, for professional and business purposes.',


     },
    },
     jopFife:{
      name:"Social Media Specialist",
      site:"Ray-KSA",
      time:"Full-Time",
      count:"02",
      Deadline: " 30 Dec, 2025",
   detales:{
        one:"Manage client accounts and maintain strong relationships.",
        two :"Coordinate projects and ensure timely delivery.",
        three:'Develop strategies to achieve business goals.',
        for:"Monitor performance and provide regular reports.",
        fife:"Collaborate with internal teams to optimize results.",
      },
        JobDuties :{
   one:"Manage daily operations and ensure tasks are completed efficiently",
        two :"Communicate effectively with clients and team members.",
        three:' Ability to communicate effectively in English, both written and spoken, for professional and business purposes.',


     },

    },
     jopSix:{
      name:"Product Designer (UI/UX Designer)",
      site:"Mansoura, Egypt",
      time:"Full-Time",
      count:"01",
      Deadline: " 30 Dec, 2025",
    detales:{
        one:"Manage client accounts and maintain strong relationships.",
        two :"Coordinate projects and ensure timely delivery.",
        three:'Develop strategies to achieve business goals.',
        for:"Monitor performance and provide regular reports.",
        fife:"Collaborate with internal teams to optimize results.",
      },
        JobDuties :{
   one:"Manage daily operations and ensure tasks are completed efficiently",
        two :"Communicate effectively with clients and team members.",
        three:' Ability to communicate effectively in English, both written and spoken, for professional and business purposes.',


     },

    },




 jops7:{
      name:"Product Designer (UI/UX Designer)",
      site:"Ray-KSA",
      time:"Full-Time",
      count:"02",
      Deadline: " 30 Dec, 2025",
  detales:{
        one:"This text can be replaced with an alternative text that expresses the meaning",
        two :"This text can be replaced with an alternative text that expresses the meaning",
        three:'This text can be replaced with an alternative text that expresses the meaning'
      },
     JobDuties :{
   one:"This text can be replaced with an alternative text that expresses the meaning",
        two :"This text can be replaced with an alternative text that expresses the meaning",
        three:'This text can be replaced with an alternative text that expresses the meaning'


     },

    },
     jop8:{
      name:"Product Designer (UI/UX Designer)",
      site:"Mansoura, Egypt",
      time:"Full-Time",
      count:"01",
      Deadline: " 30 Dec, 2025",
    detales:{
        one:"Manage client accounts and maintain strong relationships.",
        two :"Coordinate projects and ensure timely delivery.",
        three:'Develop strategies to achieve business goals.',
        for:"Monitor performance and provide regular reports.",
        fife:"Collaborate with internal teams to optimize results.",
      },
        JobDuties :{
   one:"Manage daily operations and ensure tasks are completed efficiently",
        two :"Communicate effectively with clients and team members.",
        three:' Ability to communicate effectively in English, both written and spoken, for professional and business purposes.',


     },

    },
     jop9:{
      name:"Product Designer (UI/UX Designer)",
      site:"Ray-KSA",
      time:"Full-Time",
      count:"02",
      Deadline: " 30 Dec, 2025",
     detales:{
        one:"Manage client accounts and maintain strong relationships.",
        two :"Coordinate projects and ensure timely delivery.",
        three:'Develop strategies to achieve business goals.',
        for:"Monitor performance and provide regular reports.",
        fife:"Collaborate with internal teams to optimize results.",
      },
        JobDuties :{
   one:"Manage daily operations and ensure tasks are completed efficiently",
        two :"Communicate effectively with clients and team members.",
        three:' Ability to communicate effectively in English, both written and spoken, for professional and business purposes.',


     },

    }

}




export default function Jops ({numper=6 , showbutton=true ,widthBerant="85", widthCiled="90",widthTopTitle="90" }){


  const navigate=useNavigate()
 

  

    return(
<>    
        

<div style={{
      marginTop:"-310px",
  width:`${widthTopTitle}%`,
  display:'flex',
  flexDirection:'row',
  justifyContent:"space-between",
  alignItems:'end',

  zIndex:'1000',
}}>
  <div style={{
    display:'flex',
    flexDirection:'column',


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

>Jobs Available Now</p>






<p style={{
 color: "#fff",
          fontWeight: 400,
          fontFamily: "'Inter', sans-serif",
          marginTop:"-40px"
}}

        data-aos="fade-up"


>
We are looking for new talents to join our team in various fields, with continuous<br/> growth and development opportunities.
</p>

</div>
{showbutton &&(

<button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 24px",
              borderRadius: "40px",
              border:"none",
              outline:'none',
              fontSize:'16px',
              fontWeight:"500",
              color:'#16121E',
              border:'none',
              outline:"none",
              gap:"5px"
            }}
          >
All Job                 <img src="/icon/uil_arrow-up (1).png" alt="arrow up"  />

          </button>
)}

</div>

<div style={{
width:"90%",
  display: "grid",
padding:"20px",
gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px" , // اختياري: مسافة بين الأعمدة والصفوف
                          fontFamily: "'Inter', sans-serif",
                          
}}>


{Object.values(jops)
  .slice(0, numper) // 👈 يعرض أول (numper) عنصر فقط
  .map((item, index) => (

<div

        data-aos="fade-up"

  key={index}
  onClick={() => {
  // تمرير البيانات عبر state
navigate("/detailsJop", { state: item });
  }}

  style={{
    backgroundColor: "rgba(21, 21, 21, 0.6)",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
    borderRadius: "24px",
    padding: "15px",
    width: `${widthCiled}%`,
    height: "228px",
    color: "#fff",

    boxShadow: "-1px -1px 1px rgba(168, 166, 166, 0.98)", // top-left glow
  }}
>


              <p style={{
                fontSize:"20px",
                fontWeight:'500'

              }}>
                {item.name}
              </p>
              <div style={{
                display:"flex",
                justifyContent:'space-between'
              }}>
                <p  style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"5px",
                  fontSize:"14px",
                  fontWeight:"400"
                }}>
<img src="/icon/MapPinLine.png">
</img>{item.site}

                </p>
                <p style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"5px",
                   fontSize:"14px",
                  fontWeight:"400"
                }}>
                  <img src="/icon/Briefcase.png">
                  </img>{item.time}

                  </p>
                  <p style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"5px",
                   fontSize:"14px",
                  fontWeight:"400"
                }}>
                    <img src="/icon/ClipboardText.png">
                    </img>{item.count}  Vacancy
                  </p>



                </div>

<span style={{
  display: "block",
  width: "90%",
  margin:'5%',
  height: "1px",
  background: "#E9EAF01A",

}}></span>

<div style={{
    width:"100%",
    marginTop:"10px",
 
  display:"flex",
  alignItems:'center',
  justifyContent:"space-between"
}}>


  <p style={{
    fontSize:'600',
    fontSize:'14px',

  }}>Deadline : <span style={{
    color:'#6E7485'
  }}>{item.Deadline} </span></p>


  <button style={{
background: "transparent",
border:"none",
outline:'none'
  }}>
    <img src="/icon/Button.png"></img>
  </button>


              </div>
              </div>


           ))}

</div>


        </>
    )
}