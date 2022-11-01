import React from 'react'
import List from "./List"
const listarr=[{data:"Moderation",description:"Easily review all question before they go live"},
{data:"Labels",description:"Categorize and filter question"},
{data:"DownVotes",description:"Enable downloading of Questions"},
{data:"Replies",description:"Allow participants to reply to or comment on questions"},
{data:"Anonymous Question",description:"Let your participants send anonymous questions"},
{data:"Maximum Question Length",description:"Show number of votes instead of percentage"},
{data:"Close Question ",description:"Prevent the participants from sending new questions to your event"}]
const MainPanel = () => {
  return (
    <div>
        <div>
          <h3 style={{width:"50vw",textAlign:"left", marginLeft:"10vw",fontSize :"20px",borderBottom:"3px solid gray", padding:"27px", color:"rgb(173, 32, 255)"}}>Audience Q&A</h3>
          <div style={{display:"flex", flexDirection:"column",paddingTop:"40px"}}>
          {listarr.map(ele=>{
            if(ele.data==="Maximum Question Length"){
              return  <>
                        <List data={ele.data} description={ele.description}/>
                        <div>
                          <span style={{backgroundColor:"rgb(173, 32, 255)",padding :"6px 25px",borderRadius:"7px",marginRight:"10px", border:"1px solid rgb(173, 32, 255)"}}>160</span>
                          <span style={{backgroundColor:"rgb(173, 32, 255)",padding :"6px 25px",borderRadius:"7px", marginRight:"10px",border:"1px solid rgb(173, 32, 255)"}}>240</span>
                          <span style={{backgroundColor:"rgb(173, 32, 255)",padding :"6px 25px",borderRadius:"7px", border:"1px solid rgb(173, 32, 255)"}}>300</span>
                        </div>
                      </>
              }

                return  <List data={ele.data} description={ele.description}/>
          })}
         </div>

        </div>
        <span style={{backgroundColor:"rgb(173, 32, 255)",padding :"6px 25px",borderRadius:"7px",marginRight:"10px", border:"1px solid rgb(173, 32, 255)"}}>Save</span>
    </div>
  )
}

export default MainPanel
