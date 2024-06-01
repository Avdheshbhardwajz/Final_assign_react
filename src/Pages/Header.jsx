import { Link, useNavigate } from "react-router-dom"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    RadioGroup,
    Stack,
    Button,

    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContextprovider"

function Header() {
    const {isAuth,setAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    return (
        <>
            <div className="headerbox">
                <div className="logobox" >
                    <Link to="/"><b>Get Your Tickets</b></Link>
                </div>
                <div className="otherlinkbox">
                    <Link to="/AllTickets"><b>Tickets</b></Link>
                    <Link to="/createticket"><b>Create-Tickets</b></Link>
                    <Link to="/aboutus"><b>About-us</b></Link>
                    <Link to="/contactus"><b>Contact-us</b></Link>
                    <div>
                    {isAuth.isAuth ?
                    (
                        <div onClick={()=> setAuth({isAuth:false,token:""} , navigate("/login"))}>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="40" height="25"><path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z"/><circle cx="12" cy="6" r="6"/></svg>
                        </div>
                    ):
                    (<Link to="/Login"><b>Login</b></Link>)
                    }
                    </div>
                    
                </div>
                <div onClick={()=> onOpen()} className="burgurbutton">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="50" height="25"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
                </div>

            </div>

            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Get YOUR TICKET</DrawerHeader>
                    <DrawerBody>
                        <Link to="/createticket"><b>Create-Tickets</b></Link>
                        <br />
                        <Link to="/AllTickets"><b>Tickets</b></Link>
                        <br />
                        <Link to="/aboutus"><b>About-us</b></Link>
                        <br />
                        <Link to="/contactus"><b>Contact-us</b></Link>
                        <br />
                        <Link to="/Login"><b>Login</b></Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header