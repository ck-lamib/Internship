import React from 'react'

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid row">
                    <div className='col-md-2'>
                    <p className="navbar-brand">Rana Mobiles</p>
                    </div>
                    <div className='col-md-10'>
                    <form className="d-flex">
                        <input className="form-control me-2 "  type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success "  type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
