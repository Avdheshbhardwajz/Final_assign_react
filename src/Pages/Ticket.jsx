import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import db from "../../db";
function Ticket() {
   const { id } = useParams();
   const navigate = useNavigate();
   const deletehandle = (id) => {

      const updatedDb = db.filter((ticket) => ticket.id !== id);
      db.length = 0;
      db.push(...updatedDb);
      console.log(`Deleted ticket with id: ${id}`);
      console.log(db);
      navigate("/AllTickets")
   };
   const [ticket, setticket] = useState({});
   useEffect(() => {
      const ticket = db.find((ticket) => ticket.id === parseInt(id));
      if (ticket) {
         setticket(ticket);
      }
   }, [id]);
   let color = "blue"
   if (ticket.Priority > 5) {
      color = "red"
   } else if (ticket.Priority < 3) {
      color = "green"
   }
   return (
      <>
         <center>
            <h1>Your Ticket</h1>
            <div class="card" style={{ border: `solid ${color} 2px` }} >
               <h2>Title : {ticket.title}</h2>
               <h2>Descriptions: {ticket.Description}</h2>
               <h2>Assigned To : {ticket.Assinee}</h2>
               <h2>Status: {ticket.Status}</h2>
               <h2>Priority : {ticket.Priority}</h2>
               <div className="flexbox">
                  <button className="buttoneditdelete" onClick={() => navigate(`/edittickets/${ticket.id}`)} >Edit</button>
                  <br />
                  <button className="buttoneditdelete" onClick={() => deletehandle(ticket.id)} >Delete</button>
               </div>
            </div>
         </center>
      </>
   )
}

export default Ticket