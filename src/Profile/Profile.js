import React from 'react'
const Profile=(props)=> {
    
    const handleName=(e)=>{
        alert(props.x.fullname)
    }
    return (
        <table>
        
            {props.x.map((el,i)=>
             
               
                    <tr>
                <th>FullName: {el.fullname}</th>
                <th>Bio: {el.bio}</th>
                <th>Profession: {el.profession}</th>
                            </tr>
                             )}
                            <button onClick={handleName()}>alert </button> 
                 </table>
    )
}

export default Profile