import React from 'react'
import navitems, { logo } from '../Data/Data'
import { Link } from 'react-router-dom'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Detail from '../Pages/Detail';
import Midsection from '../Pages/Midsection';

export default function Header() {
    return (
        <>

            <header>


                <nav className="navbar navbar-expand-lg ">
                    <div className="container ">
                        <a className="navbar-brand" href="#">

                            {logo.map((e) =>
                                <img src={e.img} alt="Bootstrap" width={300} height={100} />
                            )}

                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search trip" aria-label="Search" />
                                <button className="btn btn-outline-success mx-3" type="submit">Search</button>
                            </form>
                            <li>
                                <i class="bi bi-facebook fb"></i>
                                <i class="bi bi-google gog"></i>
                                <i class="bi bi-linkedin lk"></i>
                                <i class="bi bi-twitter tw"></i>
                                <i class="bi bi-youtube yt"></i>
                            </li>
                        </div>
                    </div>
                </nav>


            </header>

            <section className='navigation-second sticky-lg-top'>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <Link className="navbar-brand" to="/"> <i class="bi bi-house"></i> </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {navitems.map((e) =>
                                    <li className="nav-item">

                                        <a className="nav-link mx-2" href="#">{e.p}</a>

                                    </li>
                                )}
                            </ul>

                        </div>
                    </div>
                </nav>
            </section>
            <Routes>

                <Route path='/details/:cid' element={<Detail />}> </Route>
                <Route path='/' element={<Midsection/>}> </Route>

            </Routes>
        </>
    )
}
