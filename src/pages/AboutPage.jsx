import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

const linkStyle = {

}
function AboutPage() {
  return (
    <Card>
     <div className="about">
        <h1>About this Project</h1>
        <p>This is a React app to leave feedback for my product and services if You Like them</p>
        <p>Version: 1.0.0</p>
        <div className='link' style ={{display:'flex', justifyContent:'space-between'}}>
        <Link to="/">Back to Home</Link>
        <Link to="/contact">Contact me</Link>
        </div>
     </div>
    </Card>
  )
}

export default AboutPage
