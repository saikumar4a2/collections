import { useState } from 'react';
import {v4 as uuidv4 } from 'uuid'
import Popup from 'reactjs-popup'
import Header from '../Header'
import ContentItems from '../ContentItems'
import LeftContentsList from '../LeftContentsList'
import './index.css'
import { AiOutlineFolderAdd } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const Collections=()=>{
    const [name,setName]=useState('')
    const [des,setDes]=useState('')
   const [lists,setLists]=useState([])
   const [isShow,setIsShow]=useState(false)
   const onClickingAdd=(e)=>{
    e.preventDefault()    
    const newList = {
        id: uuidv4(),
        name,
        des,
      };
      setLists((prevList) => [...prevList, newList]);
      console.log(lists)
      setName('')
      setDes('')
    
   }
   const onTitleChange=(e)=>{
    const newName =e.target.value
    setName(newName)
   }

   const onChangeDes=(e)=>{
    const newDes=e.target.value
    setDes(newDes)
   }
   let value=''

   const getId=(value)=>{
    const shortListed= lists.filter(eachOne=>(
        eachOne.id!==value    
    ))
    setLists(shortListed)
   }

   
   const onClickingIsShow=()=>{
    setIsShow(!isShow)
   }

   return (<div className='collectionsContainer'>
    <Header />
    <div className='secContainer'>
      <div className='leftContainer'>
        <div className='listContainer'>
        <div className='arrowsList'>
           <div className='firstListCont'>
            <p>Collections</p>
            {isShow? (<button type='button' className='leftArrow' onClick={onClickingIsShow}><FaAngleDown /></button>) : (<button type='button' className='leftArrow' onClick={onClickingIsShow}><FaAngleLeft /></button>)
            
            }
            </div>
            <div className='scrollingItems'>
              {isShow && 
              
              (<LeftContentsList details={lists} />)}
            
            </div>
            
            
            </div>
            <hr />
            <div>
            <Popup
      modal
      trigger={
        <button type="button" className="newcollectionBtn">
          <AiOutlineFolderAdd /><span className='btnName'>New Collection</span>
        </button>
      }
    >
      {(close) => (
        <>
          <form className='popuContainer' onSubmit={onClickingAdd}>
            <h1>New Collection</h1>
            <label htmlFor='name'>Collection Name<span className='mandatory'>*</span></label>
            <input type='text' maxLength="40" value={name} onChange={onTitleChange} id='name' className='title' placeholder='collection title' />
            <p className='limit'>0/40</p>
            <label htmlFor='des'>Description<span className='mandatory'>*</span></label>
            <textarea maxLength="140" value={des} onChange={onChangeDes} id='des' rows="4" cols="50" className='desc'  />
            <p className='limit'>0/140</p>
            <div>
            <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button> 
          <button
            
            className="createBtn"
            type='submit'
            
          >
            Create Collection
          </button>
          </div>
          </form>
          
        </>
      )}
    </Popup>
            </div>
            
        </div>
        </div>
        <div className='rightContainer'>
            
            <h1>My Collections</h1>
            <p>Introducing collections: the ability to organize your materials, your way</p>

            <div className='listAndAddbtnContainer'>
            <ul className='ulLists'>
            {lists.map(eachOne=> (
            <ContentItems details={eachOne} getId={getId} key={eachOne.id} />
            ))}
            </ul>
            <div>

            <Popup
      modal
      trigger={
        <button type="button" className="addCollectionBtn">
          <IoIosAddCircleOutline />
        </button>
        
      }
    >
      {(close) => (
        <>
          <form className='popuContainer' onSubmit={onClickingAdd}>
            <h1>New Collection</h1>
            <label htmlFor='name'>Collection Name<span className='mandatory'>*</span></label>
            <input type='text' maxLength="40" value={name} onChange={onTitleChange} id='name' className='title' placeholder='collection title' />
            <p className='limit'>0/40</p>
            <label htmlFor='des'>Description<span className='mandatory'>*</span></label>
            <textarea maxLength="140" value={des} onChange={onChangeDes} id='des' rows="4" cols="50" className='desc'  />
            <p className='limit'>0/140</p>
            <div>
            <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button> 
          <button
            
            className="createBtn"
            type='submit'
            
          >
            Create Collection
          </button>
          </div>
          </form>
          
        </>
      )}
    </Popup>


              
            </div>
        </div>
        </div>
        
    
    
        </div>
    </div>)
}
export default Collections