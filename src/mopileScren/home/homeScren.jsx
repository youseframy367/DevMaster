import BanerHome from "./BanerMopile";
import DesinToBaner from "./desinToBaner";

export default function HomeMopil (){
    return(
        <div style={{
            margin:"0px"
        }}>
        <BanerHome/>
        <div style={{width:"100%" ,margin:"0px",padding:"0px",display:"flex",flexDirection:"column",justifyContent:'center',alignContent:"center"}}

        >
        <DesinToBaner/>
        </div>

        
        
        </div>
    )
}