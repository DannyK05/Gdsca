import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowLeft} from "react-icons/ai"
function ContactPage(){

    return(
        <Card>
            <div className='contact'>
                <h1>Contact me</h1>
                <p>Olubanjo Kolade</p>
                <p>I'm practising react by designing this page.
                    Feel free to contact me by clicking any of these icons
                </p>
                <div className='icons'>
                <Link to='https://github.com/DannyK05'><AiFillGithub size={30}/></Link>
                <Link to='https://www.instagram.com/'><AiFillInstagram size={30}/></Link>
                <Link to='https://www.linkedin.com/'><AiFillLinkedin size={30}/></Link>
                </div>
                <div className="link" style ={{display:'flex', justifyContent:'space-between'}}>
                    <Link to='/about'><AiOutlineArrowLeft className='arrow' size={30} style={{marginTop: '10px'}}/></Link>
                    <Link to="/">Back to Home</Link>
                </div> 
            </div>
        </Card>
    )
}

export default ContactPage