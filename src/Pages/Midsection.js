import React from 'react'
import { popdest } from '../Data/Data'
import { spack } from '../Data/Data';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

  import { Link } from "react-router-dom";

  import Detail from './Detail';

export default function Midsection() {
    return (
        <>
            <section className='midfirst'>

                <div className='container-fluid-expand-lg mdf'>

                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://www.lovelynepaltours.com/uploads/banner/Eve.jpg" className="img-fluid" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Mount Everest </h5>
                                    <p> Head of the world </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.lovelynepaltours.com/uploads/banner/Jungle-Safari.jpg" className="img-fluid" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.lovelynepaltours.com/uploads/banner/upper-mustang.jpg" className="img-fluid" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>



                </div>

            </section>

            <section className='midsecond'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-7 '>
                            <marquee direction="right">
                                <h5 className='mt-4 mb-4 mx-3'>Plan Your Trip With Lovely Nepal Tours and Travels</h5>

                            </marquee>
                            <p className='mx-3'>Lovely Nepal tours Pvt.Ltd is the leading travel company in providing leisure holidays and adventure activities in Nepal. Lovely Nepal tours is Government certified travel and trekking company registered with the Office of the Company Register ,Nepal government and active members of Trekking Agents Association of Nepal (TAAN) and Nepal Tourism Board (NTB),established in Nayabazzar , Kathmandu. We organize tours and treks for groups and individuals of all ages. We can tailor-make any program or package to suit your interest, schedule, fitness level and budget. Offering probably the best and most personalized services with expert staffs in their field. They are also pioneers in guiding tourists to such exotic destinations.

                                We offer carefully planned itineraries to suit each and every tourist with diverse range of tastes, budget and schedule with an objective of having you with us on our trips. Our mission is to provide our clients unforgettable travel experiences through our wide range of high quality yet good value packages. We assure you of our most competitive prices with utmost attention and best services at all times.

                            </p>
                        </div>
                        <div className='col-md-5 ca'>
                            <marquee direction="down"><h4 className='mt-4 mb-4 text-center'> Choose Activity </h4></marquee>
                            <div className='row chact'>

                                <div className='col-md-6'>

                                    <div class="card">
                                        <div class="card-body">
                                            <img src="https://www.shutterstock.com/image-vector/vector-illustration-silhouette-rafting-team-600w-451671763.jpg" className="img-fluid" alt="..." />

                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>

                                    <div class="card">
                                        <div class="card-body">
                                            <img src="https://imgs.search.brave.com/W08dEBWKXIL6iQ_8IDeRrWIn-xE6s3ZT_Gy5z-KEfL4/rs:fit:1200:903:1/g:ce/aHR0cHM6Ly9zdmdz/aWxoLmNvbS9zdmdf/djIvNDY3MjUuc3Zn.svg" className="img-fluid" alt="..." />

                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>

                                    <div class="card">
                                        <div class="card-body">
                                            <img src="https://imgs.search.brave.com/mYrQ-4B03Bde7T0Fc-7bxTdlwIMiDuvqFNg_AmXiJcU/rs:fit:1200:1104:1/g:ce/aHR0cDovL2NsaXBh/cnQtbGlicmFyeS5j/b20vaW1nMS8xNTYx/MjA4LnBuZw" className="img-fluid" alt="..." />

                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>

                                    <div class="card">
                                        <div class="card-body">
                                            <img src="https://imgs.search.brave.com/rvhGi7_SU38YKxhCuSH6rjId2KK9Fvf46N0uj2liWq8/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZXhwbG9yZXIt/MS8zNjAvZXhwbG9y/ZXItMDA1LTUxMi5w/bmc" className="img-fluid" alt="..." />

                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>
                </div>
            </section>

            <section className='midthird'>

            <div className='container-fluid py-4'>
                    <h3 className='text-center mb-5 py-4'> Our best seller trips </h3>
                    <div className='row'>



                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            scrollbar
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 80 },
                                480: { slidesPerView: 1, spaceBetween: 150 },
                                768: { slidesPerView: 2, spaceBetween: 50 },
                                1024: { slidesPerView: 3, spaceBetween: 10 },
                            }}
                        >

                            <div className='col-md-4 mx-5'>

                                {popdest.slice(0,5).map((e) =>

                                    <SwiperSlide>
                                        <div className="card mb-4 mx-5" style={{ width: "16rem" }}>
                                            <div className="row">

                                            <Link to={`/details/${e.id}`}> <img src={e.img} className="img-fluid rounded-start" alt="..." /></Link>
                                                <div class="card-footer mx-2 cf">
                                                    <small class="text-muted"> <h5 className="card-title text-center">{e.title}</h5></small>
                                                </div>

                                            </div>

                                        </div>

                                    </SwiperSlide>

                                )}

                            </div>
                        </Swiper>


                    </div>
                </div>
                
                  
           


            </section>

            <section className='midfourth py-4'>


                <div className='container-fluid'>
                    <h3 className='text-center mb-5 py-4'> Special Packages </h3>
                    <div className='row'>



                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            navigation
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 80 },
                                480: { slidesPerView: 1, spaceBetween: 150 },
                                768: { slidesPerView: 2, spaceBetween: 50 },
                                1024: { slidesPerView: 3, spaceBetween: 10 },
                            }}
                        >

                            <div className='col-md-4 mx-5'>

                                {spack.map((e) =>

                                    <SwiperSlide>
                                        <div className="card mb-4 mx-5" style={{ width: "16rem" }}>
                                            <div className="row">

                                            <Link to={`/details/${e.id}`}> <img src={e.img} className="img-fluid rounded-start" alt="..." /></Link>
                                                <div class="card-footer mx-2 cf">
                                                  <small class="text-muted"> <h5 className="card-title text-center">{e.place}</h5></small>
                                                </div>

                                            </div>

                                        </div>

                                    </SwiperSlide>

                                )}

                            </div>
                        </Swiper>


                    </div>
                </div>


            </section>


          
        </>
    )
}
