import { Link } from "react-router-dom"
function Home (){
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
           </center>
       </>
    )
   }
   
   export default Home