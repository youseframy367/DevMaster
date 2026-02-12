
import SideBar from "./sidbar"
import { useState } from "react"
export default function Header (){
  const [sidebar, setSidebar] = useState(false);
      return(
        < div style={{
            position:"absolute",
            top:"0px",
            width:"100%",
            left:'0px'
        }}>
        
      <img
      onClick={()=>{
        setSidebar(true)
      }}
      
      style={{
        position:"absolute",
        top:"59px",
        left:"28px",
      }} src="/imgSmolScren/sidbarIcon.png"></img>

         {sidebar &&(
     
        <div style={{
        position:"fixed",
        top:"0px",
      left:'0px',
      zIndex:999999,
      width:'100%'
          }}>
<SideBar setSidebar={setSidebar} />
          </div>
      )}
        
        </div>
    )
}