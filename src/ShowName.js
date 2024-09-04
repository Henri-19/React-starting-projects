import {useState} from "react";

const ShowInfo = () =>{
    const[name,setName]= useState(false);
    const[profession,setProfession]= useState(false);
    const clickOnProfession = () =>{
        setProfession(true);
    }
    const clickOnProfessionToHide = () =>{
        setProfession(false);
    }
    const clickOnHereToHide= ()=>{
        setName(false)
    }
    const clickOnHere= ()=>{
        setName(true);
    }
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
        <button onClick={clickOnHere}>Click here to show your name</button>
        {name && <p>My name is Henri</p>}
        <button onClick={clickOnHereToHide}>Click here to hide your name</button>
        {name && <p>My name is Henri</p>}
        </div>
        <div>
        <button onClick={clickOnProfession}>Click here to show your profession</button>
        {profession && <p>My profession is ...</p>}
        <button onClick={clickOnProfessionToHide}>Click here to hide your profession</button>
        {profession && <p>My profession is ...</p>}
        </div>
        </div>
    )
}
export default ShowInfo;