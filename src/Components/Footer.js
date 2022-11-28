import React from 'react'

export default function Footer() {
    return (
        <>

            <footer>

                <div className='container-fluid affiliation'>

                    <div className='row'>

                        <h3 className='mt-3'> Our Affiliation </h3>

                        <marquee className='py-4 mq'>
                            <img src="https://broadwayinfosys.com/uploads/logo/1667276403.new_broadway_logo.svg" class="img-fluid mx-5" alt="..."></img>
                            <img src="https://heraldcollege.edu.np/images/header/herald-white-logo.svg" alt="..."></img>
                            <img src="https://islington.edu.np/images/islington-white-logo.svg" class="img-fluid mx-5" alt="..."></img>
                            <img src="https://bicnepal.edu.np/images/biratnagar-normal-logo.svg" class="img-fluid mx-5" alt="..."></img>

                        </marquee>
                    </div>
                </div>


            </footer>

            <section className='second-footer'>

                <div className='container-fluid sfo py-4'>

                    <div className='row'>

                        <div className='col-md-3'>
                            <p> <i class="bi bi-arrow-bar-right mx-2"></i>Home </p>
                            <p> <i class="bi bi-arrow-bar-right mx-2"></i>Travel Info</p>
                            <p> <i class="bi bi-arrow-bar-right mx-2"></i>Nepal</p>
                            <p> <i class="bi bi-arrow-bar-right mx-2"></i>Company Profile</p>
                            <p> <i class="bi bi-arrow-bar-right mx-2"></i>Trekking In Nepal</p>
                        </div>
                        <div className='col-md-3'>
                            <p><i class="bi bi-arrow-bar-right mx-2"></i>Day Tours In Nepal </p>
                            <p><i class="bi bi-arrow-bar-right mx-2"></i>Read Reviews</p>
                            <p> <i class="bi bi-arrow-bar-right mx-2"></i> Write A Review</p>
                            <p> <i class="bi bi-arrow-bar-right mx-2"></i> Blog </p>
                            <p> <i class="bi bi-arrow-bar-right mx-2"></i> FAQs</p>
                        </div>
                        <div className='col-md-3'>
                            <h5> Subscribe Newsletter</h5>
                            <input type="text" className="form-control mb-4" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" />
                            <input type="text" className="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className='col-md-3'>

                            <p> CONTACT US</p>
                            <p className='trn'> Lovely Nepal Tours and Travels </p>
                            <p> <i class="bi bi-geo-alt-fill"></i> Post Box: 6845, Nayabazar-16, Kathmandu, Nepal </p>
                            <p> <i class="bi bi-telephone"></i> +977 1 4381707 </p>
                            <p> <i class="bi bi-envelope"></i> info@lovelynepaltours.com </p>
                            <p> <i class="bi bi-globe"></i> www.lovelynepaltours.com </p>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
