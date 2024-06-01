import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Ticket from "../Pages/Ticket";
import AllTickets from "../Pages/Tickets";
import Aboutus from "../Pages/Aboutus";
import Contactus from "../Pages/ContactUs";
import CreateTicket from "../Pages/Ticketcreate";
import EditTicket from "../Pages/EditTicket";
import PrivateRoute from "./privateRoute";

/*
    Home
    About
    Contact
    Tickets
    Ticket View
    Ticket Create
    Ticket Edit
    Login
 */


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/createticket" element={
            <PrivateRoute>
                <CreateTicket/>
            </PrivateRoute>
      }/>
      <Route path="/edittickets/:id" element={
      <PrivateRoute>
          <EditTicket/>    
      </PrivateRoute>
    }/>
      <Route path="/ticket/:id" element={<Ticket/>}/>
      <Route path="/AllTickets" element={<PrivateRoute>
        <AllTickets/>
      </PrivateRoute>}/>
    </Routes>
  );
}

export default AllRoutes;
