import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid row">
                    <div className='col-md-3'>
                        <p className="navbar-brand">Rana Mobiles</p>
                    </div>
                    <div className='col-md-7'>
                        <form className="d-flex">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success " type="submit">Search</button>
                        </form>
                    </div>
                    <div className='col-md-2'>
                        <Link to="/Login" className="btn btn-primary btn-sm active" role={"button"}>Login</Link>
                        {/* <a href="#" class="btn btn-primary btn-sm active" role="button" aria-pressed="true">Sign up</a> */}
                    </div>

                </div>
            </nav>
        </div>
    )
}
