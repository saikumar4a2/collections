import { MdDeleteOutline } from "react-icons/md";
import Popup from 'reactjs-popup'
import './index.css'




const ContentItems=(props)=>{
    const {details,getId}=props
    const {id,name,des}=details
    const selectIdtoDelete=(id)=>{
        getId(id)
        console.log(id)
    }
    return(
        <li className="lists" >
            <div>
            <div className="nameDelete">
                <p>{name}</p>
                <div className="popup-container">
   <Popup
     modal
     trigger={
       <button type="button" className="deleteBtns">
         <MdDeleteOutline />
       </button>
       
     }
   >
     {close => (
       <>
         <div className="deleteContainer">
           <h1>Delete Collection</h1>
           <p>Are you sure would like to delete this collection?</p>
           <button
           type="button"
           className="deleteBtn"
           onClick={()=>selectIdtoDelete(details.id) }
           
         >
           Delete
         </button>
           <button
           type="button"
           className="trigger-button"
           onClick={() => close()}
         >
           Close
         </button>
         </div>
         
       </>
     )}
   </Popup>
 </div>
                
            </div>    
            
            <p>{des}</p>
            </div>
        </li>
    )
}
export default ContentItems