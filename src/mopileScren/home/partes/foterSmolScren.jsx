
import { useNavigate } from "react-router-dom"
export default function FooterSmolScren(){
    const navigate=useNavigate()
    const contenerStyle={
    width:"100%",
                display:"flex",
                flexDirection:"column",
                justifyContent:'center',
                alignItems:'center',
    }
    return(
        <div style={{
            width:'100%',
            color:"#FFF",
            background:'#1A1A1A66'
            
        }}>
            <div style={{...contenerStyle, borderTop:'solid 1px #003ACA',borderBottom:'solid 1px #003ACA',paddingBottom:'15px'}}>
            <p style={{
                          background: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize:'40px',
          lineHeight:'75px',
          fontWeight:"400",
          marginTop:'15px',
          marginBottom:'15px'

            }}>Let’s work with Us</p>
            <p style={{
                width:'90%',
                textAlign:'center',
                marginTop:'0px',
                color:"rgba(255, 255, 255, 0.7)",
                lineHeight:'28px',

            }}>
                DevMaster  is one of the largest companies in Egypt, providing website development, mobile application development, and branding services.
            </p>
            <button style={{
                border:"none",
                outline:"none",
                padding:"14px 24px",
                borderRadius:'40px',
                color:"#16121E",
                fontSize:'16px',
                width:"80%",
                fontWeight:'500',



            }} onClick={()=>{
    navigate("/serverReqstM");
                }}>Service Request</button>

</div>
<div style={{ ...contenerStyle, marginTop:"20px"}}>
    <p style={{
        color:"#fff",
        fontSize:"18px",
        fontWeight:'500',
        margin:"0px"

    }}>Services</p>
    <ul style={{
        listStyle:"none",
                color:"rgba(255, 255, 255, 0.5)",
                fontSize:'16px',
                fontWeight:"400",
                lineHeight:'30px',
                textAlign:'center',
                marginLeft:"-35px"
    }}>
        <li>Web Developmen</li>
        <li>UI/UX Designer</li>
        <li>Branding</li>
        <li>Mobile App</li>
    </ul>
</div>

<div style={contenerStyle}>
    <p style={{
        fontSize:"18px",
        fontWeight:"500",

    }}>Business Features</p>
    <ul style={{  listStyle:"none",
                color:"rgba(255, 255, 255, 0.5)",
                fontSize:'16px',
                fontWeight:"400",
                lineHeight:'30px',
                textAlign:'center',
                marginLeft:"-35px",
                marginTop:"0px"
    }}>
        <li>Data-Based Chatbot Training</li>
        <li>Model Fine-Tuning</li>
        <li>Sales & Customer Service Smart Agents</li>

    </ul>


</div>
<div style={contenerStyle}>
    <p style={{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        fontSize:"20px",
        fontWeight:'600',

    }}>      <img src="/icon/result 1.png" alt="Logo" style={{ height: "50px" }} />
        DevMaster
</p>
<p style={{
                     background: "linear-gradient(270deg, #9795FF, #FFFFFF, #FFFFFF, #BE9FFF)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight:"400",
          lineHeight:'24px',
          textAlign:"center"

}}>Companies that can help you in developing your company for the future</p>

</div>
<div style={contenerStyle
}onClick={()=>{
    navigate("/Pravic")
}}>
    <p style={{
        fontWeight:"400",

    }}>Cookie Policy</p>
    <p style={{
        fontWeight:"400"
    }}>Terms of Service</p>
    <p style={{
        fontWeight:'400'
    }}>Privacy Policy</p>
    <p style={{
        fontWeight:"400"
    }}>© 2025 DevMaster . All rights reserved.</p>
</div>




        </div>
        
        
        
    )
}