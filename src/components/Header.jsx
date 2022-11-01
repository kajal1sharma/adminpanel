import React from 'react'

const Header = () => {
  return (
    <div style={{display:"flex"}}>
      <div style={{display:"flex",flexDirection:"column",width:"2.5vw", paddingLeft:"1vw"}}>
        <span style={{width:"1.8vw",display:"inline-flex", borderBottom:"3px solid black",marginTop:"30px"}}></span>
        <span style={{width:"1.2vw",display:"inline-flex", borderBottom:"3px solid black",marginTop:"5px"}}></span>
        <span style={{width:"0.5vw",display:"inline-flex", borderBottom:"3px solid black",marginTop:"5px"}}></span>
      </div>
      <div style={{width:"72vw", fontSize:"28px",fontWeight:600,textAlign:"left", marginTop:"20px"}}>
        Admin Dashboard
      </div>
      <div style={{width:"10vw",border:"1px solid gray",color:"gray",display:"flex",justifyContent:"center", alignItems:"center", marginTop:"auto", padding:"9px 15px" , borderRadius:"5px"}}>
        <span>Preview on :</span>
        <span style={{border:"1px solid gray", borderRadius:"50%", width:"22px", marginLeft:"5px"}}>M</span>
        <span style={{border:"1px solid gray", borderRadius:"50%", width:"22px", marginLeft:"5px"}}>D</span>
      </div>
    </div>
  )
}

export default Header
