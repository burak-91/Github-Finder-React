import React, { useState,useEffect } from 'react'
import Ui from "./Ui";
import Search from "./Search"

const App = () => {

  const [users, setUsers] = useState(null);
  const [repos, setRepos] = useState([]);
  const [lastSearch,setLastSearch] = useState([]);

  const url = "https://api.github.com/users/"

  const getUsers = (e) => {

    let userInput = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value.trim()


    if (userInput) {
      fetch(url + userInput)
        .then(res => res.json())
        .then(data =>{ 
          setUsers(data)
          setLastSearch([...lastSearch,data.name])
         
        })
      let succesdiv = e.target.previousElementSibling
      succesdiv.style.display = "block"
      setTimeout(() => {
        succesdiv.style.display = "none"
      }, 1500)

      let repoUrl = url + userInput + "/repos"
      if (repoUrl) {
        fetch(repoUrl)
          .then(res => res.json())
          .then(data => setRepos(data))
          localStorage.setItem("lastSearch",JSON.stringify(lastSearch))
      }
    } else if (!userInput) {
      let errorDiv = e.target.previousElementSibling.previousElementSibling
      errorDiv.style.display = "block"
      setTimeout(() => {
        errorDiv.style.display = "none"
      }, 1500)
    }
    else{
      userInput=""
    }
    
    e.preventDefault()
  }

  const removeUsers = (e)=>{
     let removeUsers=e.target.previousElementSibling.previousElementSibling.previousElementSibling.firstChild
     let removedDiv = e.target.previousElementSibling
     removedDiv.style.display="block"
     removeUsers.remove()
     setTimeout(()=>{
       
        removedDiv.style.display="none"
     },1500)
      e.preventDefault()
  }


  useEffect(() => {
    const newLastSearch = JSON.parse(localStorage.getItem("lastSearch"))
    if(newLastSearch){
      setLastSearch(newLastSearch)
    }
    else{
      setLastSearch([])
    }
    
  }, [])

  return (
    <div>
      <Search getUsers={getUsers} />
      {users ? <Ui removeUsers={removeUsers} lastSearch={lastSearch} repos={repos} getUsers={getUsers} users={users} /> : null}

    </div>
  )
}

export default App
