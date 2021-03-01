import React from 'react'

const Search = ({getUsers}) => {
    return (
        <div>
            <div className="container searchContainer">
                <div className="search card card-body">
                    <h3>Github Kullanıcılarını Arayın</h3>
                    <p className="lead">
                        Bir kullanıcı adı girin ve kullanıcılarının bilgilerine ulaşın!
                    </p>
                    <form id="github-form">
                        <input type="text" name="githubname" id="githubname" className="form-control" placeholder="Github Kullancı Adı"/>
                        <br/>
                        <br/><br/>
                        <div className="alert alert-danger" role="alert" style={{display:"none"}}>
                            Invalid User
                        </div>
                        <div className="alert alert-success" role="alert" style={{display:"none"}}>
                            You have found a user
                        </div>
                        <button onClick={(e)=>getUsers(e)} type="submit" on className="btn btn-dark">Ara</button>
                    </form>
                    
                    
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Search
