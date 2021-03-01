import React, { Fragment } from 'react'

import company from "./img/company.png"
import location from "./img/location.png"
import mail from "./img/mail.png"

const Ui = ({ users, repos, lastSearch, removeUsers }) => {
    return (
        <Fragment>
            <div className="container">
                <div id="profile">
                    <div className="card card-body mb-3 container">
                        <div className="row">
                            <div className="col-md-4">
                                <a href={users.html_url}>
                                    <img className="img-fluid mb-2" src={users.avatar_url} alt="" />
                                </a>
                                <hr />
                                <div id="fullName"><strong>{users.name}</strong></div>
                                <hr />
                                <div id="bio">{users.bio}</div>
                            </div>
                            <div className="col-md-8">
                                <button className="btn btn-secondary">
                                    Takipçi <span className="badge badge-light">{users.followers}</span>
                                </button>
                                <button className="btn btn-info">
                                    Takip Edilen <span className="badge badge-light">{users.following}</span>
                                </button>
                                <button className="btn btn-danger">
                                    Repolar <span className="badge badge-light">{users.public_repos}</span>
                                </button>
                                <hr />
                                <li className="list-group">
                                    <li className="list-group-item borderzero">
                                        <img src={company} alt="#" width="30px" /> <span id="company">{users.company}</span>
                                    </li>
                                    <li className="list-group-item borderzero">
                                        <img src={location} alt="#" width="30px" /> <span id="location">{users.location}</span>
                                    </li>
                                    <li className="list-group-item borderzero">
                                        <img src={mail} alt="#" width="30px" /> <span id="company">{users.email}</span>
                                    </li>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>


                <h3 className="page-heading mb-3">En son repolar</h3>

                {repos.map(repo => (
                    <div key={repo.id} id="repos">
                        <div className="mb-2 card-body">
                            <div className="row">
                                <div className="col-md-2">
                                    <span></span>
                                    <a href={repo.html_url} alt="#" id="repoName">{repo.name}</a>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-secondary">
                                        Starlar  <span className="badge badge-light" id="repoStar">{repo.stargazers_count}</span>
                                    </button>

                                    <button className="btn btn-info">
                                        Forklar  <span className="badge badge-light" id="repoFork">{repo.forks_count}</span>
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                ))}




                <h3 className="page-heading mb-3">Son Aramalar</h3>

                <div id="lastSearch">
                    <ul className="list-group" id="last-users">
                        {lastSearch.map(search=>(
                            <li className="list-group-item">{search}</li>
                        ))}
                        
                    </ul>
                    <hr />
                    <div className="alert alert-success" role="alert" style={{ display: "none" }}>
                        You have removed a search
                        </div>
                    <button onClick={(e) => removeUsers(e)} id="clear-last-users" className="btn btn-dark">Son Arananları Temizle</button>
                    <br /> <br />
                </div>
            </div>
        </Fragment>
    )
}

export default Ui
