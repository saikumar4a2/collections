import {Link} from 'react-router-dom'
import { FaUserTie } from "react-icons/fa";
import { IoLogoDribbble } from "react-icons/io";
import './index.css'

const Header =()=>{
    return(
        <div className='headContaier'>
            <div className='allContents'>
            <div className='logo'>
                <IoLogoDribbble size={30}/>
                </div>
                
            <div className='secCon'>
            <Link to='/materials' className='linkItem'><p >Materials</p></Link>
            <Link to='/' className='linkItem'><p>Collections</p></Link>
            </div>
            <div className='logo'>
                <FaUserTie size={20} />
                </div>
            </div>
        </div>
        
    )
}
export default Header