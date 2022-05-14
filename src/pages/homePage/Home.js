import React, { useState } from 'react'

function Home() {

  const [name , setName] = useState('')
  const [lName , setLName] = useState('')
  const [myClass , setMyClass] = useState('')
  const [roll , setRoll] = useState('')

  const [users ,setUsers] = useState([])
  const [flag ,setFlag] = useState(false)
  const [upDateI , setUpDateI] = useState(0)
  
  let user = {
    name,
    lName,
    myClass,
    roll
  }
  console.log(user)
  const subHandler = () => {
    let newUser = {...user, id : new Date().getTime().toString()}   
     setUsers([...users, newUser])
    //  console.log(users)

     setName('')
     setLName('')
     setMyClass('')
     setRoll('')

   }



    const subUpDateHandler = () => {

      let updateUser = users.map( (stu) => {
         if(upDateI === stu.id){
           return user
         }else{
           return stu
         }
      })

      let newUser = {...user, id : new Date().getTime().toString()}   
      setUsers([...updateUser])
      console.log(users)
 
      setName('')
      setLName('')
      setMyClass('')
      setRoll('')
      setFlag(false)
   }







 const  deletHandlet = (id) => {
   let deleteUser = users.filter((user) => user.id !== id )
   setUsers(deleteUser)
 }

 const allDeletHandlet = (id) => {
   let alldelete = users.filter((el)=> el.id ==! id ) 
   setUsers(alldelete)
 }

const udViewHandler = (element) =>{
  console.log(element)
     setName(element.name)
     setLName(element.lName)
     setMyClass(element.myClass)
     setRoll(element.roll)

}

const upDateHandler  = (element) =>{
  setUpDateI(element.id)
  console.log(element)
     setName(element.name)
     setLName(element.lName)
     setMyClass(element.myClass)
     setRoll(element.roll)
     setFlag(true)

}
 
  
     

  return (
    <div>
      <input type="text" value={user.name} onChange={(e)=> setName(e.target.value)}/>
      <input type="text" value={user.lName} onChange={(e)=> setLName(e.target.value)}/>
      <input type="text" value={user.myClass} onChange={(e)=> setMyClass(e.target.value)}/>
      <input type="text" value={user.roll} onChange={(e)=> setRoll(e.target.value)}/>
      {
        flag ? <button onClick={()=>subUpDateHandler()}>UpData</button>
        :
        <button onClick={subHandler}>Submit</button>
      }

      <table>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Class Name</th>
          <th>Roll No</th>
        </tr>
        <tbody>
          {
            users.map((element,index)=>{
              return(
                <tr>
                  <td>{index + 1}</td>
                  <td>{element.name}</td>
                  <td>{element.lName}</td>
                  <td>{element.myClass}</td>
                  <td>{element.roll}</td>
                  <button onClick={() => deletHandlet(element.id)}>Delete</button>
                  <button onClick={() => allDeletHandlet(element.id)}>All Delete</button>
                      <button onClick={() => udViewHandler(element)}>view</button>
                      <button onClick={() => upDateHandler(element , index)}>Up Data</button>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    
  )
}

export default Home
