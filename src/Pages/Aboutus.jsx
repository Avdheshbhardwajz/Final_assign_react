import { Link } from "react-router-dom"
import Contactus from "./ContactUs"
function Aboutus() {
   return (
      <>
         <center>
            <div className="homeimg">
               <div className="textinimage">

                  <Link to="/createticket">
                     <h1 className="textin">Create Tickets With Us
                     </h1>
                  </Link>
               </div>
            </div>
            <p className="paraabout">
               <b>About Us : </b>

               Welcome to our Learning Management System (LMS), a dynamic and collaborative platform designed to enhance the educational experience for both students and teachers.

               Our LMS serves as a comprehensive solution for managing and resolving educational issues efficiently. We believe in creating an environment where students can seamlessly report issues and teachers can effectively manage and resolve them. Here's how our platform works:
               For Students:

               Create Issue Tickets: Students can easily create issue tickets to report any problems or challenges they encounter in their learning journey. Whether it's a technical issue, a question about coursework, or a request for additional resources, our platform ensures that every concern is documented and addressed.
               Track Progress: Students can track the status of their issue tickets in real-time, keeping them informed about the progress and actions being taken by their teachers.

               For Teachers:

               View and Manage Tickets: Teachers have access to all issue tickets created by students. They can view, edit, and update the tickets, ensuring that every student’s concern is handled promptly and effectively.
               Delete Tickets: In cases where an issue is resolved or deemed unnecessary, teachers can delete tickets to keep the system organized and clutter-free.
               Update Status: Teachers can update the status of tickets to indicate the progress of each issue. Statuses such as "Pending," "In Progress," and "Completed" help in maintaining clear communication and transparency between students and teachers.
               Collaborative Resolution: Our platform encourages teachers to collaborate, allowing multiple educators to work together to resolve issues, share insights, and provide the best possible solutions for students.

               Our mission is to foster an interactive and supportive educational environment where students feel heard and teachers have the tools they need to provide timely assistance. By streamlining communication and issue resolution, we aim to enhance the overall learning experience and ensure that every student has the support they need to succeed.

               Join us in our commitment to excellence in education. Together, we can make learning more effective, responsive, and engaging
            </p>
         </center>
         <Contactus/>
      </>
   )
}

export default Aboutus