import { border } from "@chakra-ui/react"
import db from "../../db"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
function AllTickets() {
   const navigate = useNavigate();

   useEffect(()=>{
      setdata(db)
   },[db])

   const [data, setdata ] = useState(db);

   const deletehandle = (id) => {

      const updatedDb = db.filter((ticket) => ticket.id !== id);
      db.length = 0;
      db.push(...updatedDb);
      setdata(updatedDb);
      console.log(`Deleted ticket with id: ${id}`);
      console.log(db); 
   };
   return (
      <>
      <center><h2>All Tickets</h2></center>
      <br />
      <div className="wholebox">
         
         {data.map((ticket) => {
            let color = "blue"
            if (ticket.Priority > 5) {
               color = "red"
            } else if (ticket.Priority < 3) {
               color = "green"
            }
            return (

               <div class="card" style={{ border: `solid ${color} 2px` }} >
                  <div onClick={()=> navigate(`/ticket/${ticket.id}`)}>
                  <h2>Title : {ticket.title}</h2>
                  <h2>Descriptions: {ticket.Description}</h2>
                  <h2>Assigned To : {ticket.Assinee}</h2>
                  <h2>Status: {ticket.Status}</h2>
                  <h2>Priority : {ticket.Priority}</h2>
                  </div>
                  <div className="flexbox">
                     <button className="buttoneditdelete" onClick={()=> navigate(`/edittickets/${ticket.id}`)} >Edit</button>
                     <br />
                     <button className="buttoneditdelete" onClick={()=> deletehandle(ticket.id)} >Delete</button>
                  </div>
               </div>

            )
         }
         )}
      </div>
      </>
   )
}

export default AllTickets