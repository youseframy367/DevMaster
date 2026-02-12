import imgeWork from "./img/image 19.png"
import imgWorkTwo from"./img/image 15.png"
import imgWorkThree from"./img/image 20.png"
import imgWorkFor from "./img/image 21.png"
import imgWorkFife from "./img/image 23.png"
import imgDecor from"./img/Frame 51.png"


export default function ImgWork (){



    return(
        <>
        
        
        
        
        

   <div
 style={{
  backgroundImage: `url(${imgDecor})`,
  backgroundRepeat: "repeat-x",  // تكرار أفقي فقط
  backgroundSize: "120px auto",  // حجم الصورة
  backgroundPosition: "center",  // تمركز الصورة
  width: "100%",
  height: "300px",
  marginTop: "30px",
  fontFamily: "'Inter', sans-serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 9,
}}
>
    <div style={{
        display:"flex",
    gap:"15px",
    width:"95%",
    position:'relative',
    zIndex:9999
    



    }}>
  <img src={imgWorkTwo} alt="Description"  width="222px" height="195px"/>
<img src={imgeWork} alt="Work" width="222px" height="195px" />
<img src={imgWorkThree}  width="222px" height="195px"></img>
<img src={imgWorkFor}  width="222px" height="195px"/>
<img src={imgWorkFife} width="222px" height="195px"/>

</div>


</div>
        
        
        
        
        
        
        
        </>
    )
}