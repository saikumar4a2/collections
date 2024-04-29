import { CiFolderOn } from "react-icons/ci";
import './index.css'

const LeftContentsList=props=>{
    const {details}=props
    

    return(
        <ul>
            {details.map(eachOne=>(
                <li className='liItems'>
                    <div className="litot">
                        <button type='button' className="folderbtn"><CiFolderOn /></button>
                        <p>{eachOne.name}</p>
                        
                    </div>
                    </li>
            ))}
        </ul>
    )

}
export default LeftContentsList