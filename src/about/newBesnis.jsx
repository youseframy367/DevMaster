import ImgeOurYourBesnis from"./img/Frame 335.png"
import { useNavigate } from "react-router-dom"

export default function YourBesnis() {
    const navigate = useNavigate()

    return(
        <>
        
        
        <div style={{
    display:"flex",
    marginTop:"-290px"
}}>
    <div style={{
        width:"50%",
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    }}>
        <img width="550px" height='600' src={ImgeOurYourBesnis}></img>

        </div>
        <div style={{
            width:"50%"
        }}>
            <p style={{
                fontSize:"36px",
                fontWeight:"500",
                lineHeight:"48px"
            }}>
                Our Vision for Better Result<br/> for Your Success
                </p>

                <div>
                    <p style={{
                        fontSize:"22px",
                        fontWeight:"400"
                    }}>Vision we have</p>
                    <p style={{
                        width:"70%",
                        fontSize:'18px',
                        fontWeight:'400'
                    }}>Our vision is to be the cornerstone of client success by providing innovative and sustainable consulting solutions.</p>


                </div>


                
                <div>
                    <p style={{
                        fontSize:"22px",
                        fontWeight:"400"
                    }}>The path we took </p>
                    <p style={{
                        width:"70%",
                        fontSize:'18px',
                        fontWeight:'400'
                    }}>
Our mission is to guide businesses in realizing their full potential through customized strategies and high-quality services. Committed to building strong partnerships, we empower growth and create a positive impact in every facet of our consulting journey.</p>


                    <button
                    
                    onClick={()=>{
                        navigate("/Contact")
                    }}
                    style={{
                        fontSize:"18px",
                        fontWeight:"400",
                        color:"#131313",
                        padding :"14px 24px",
                        border:"none",
                        outline:"none",
                        borderRadius:"50px",
                        marginTop:"30px"
                    }}>Cooperate with us now</button>
                </div>

        </div>
        </div>
        
        
        
        
        
        
        </>
    )

}