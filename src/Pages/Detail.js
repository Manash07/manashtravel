import React from 'react'
import { useParams } from 'react-router-dom'
import { travplan } from '../Data/Data';
import { popdest } from '../Data/Data';
import { sinc } from '../Data/Data';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { spack } from '../Data/Data';

import { Link } from "react-router-dom";

export default function Detail() {

  const { cid } = useParams();

  var getdata = popdest.filter((e) => e.id == cid)
  var travdata = travplan.filter((e) => e.cat == cid)
  var sincdata = sinc.filter((e) => e.cat == cid)

  return (
    <>

      <section className='detail-one'>

        <div className='container'>



          <div className='row'>

            {getdata.map((e) =>
              <div className='container det'>
                <h1 className='text-center mt-5 mb-5'>{e.title}</h1>
                <div className='row'>
                  <div className='col-md-8'>
                    <img src={e.img} class="img-fluid mb-5" alt="..."></img>
                  </div>

                  <div className='col-md-4 mt-5'>
                    <div class="card-footer mt-5">
                      <h5 className='mt-3'><i class="bi bi-geo-alt mx-3"></i>{e.loc}</h5>
                      <h5><i class="bi bi-watch mx-3"></i>{e.travdays}</h5>
                      <h5><i class="bi bi-coin mx-3"></i>{e.money}</h5>

                    </div>
                  </div>
                </div>
                <p className='mb-5'>{e.p}</p>
              </div>
            )}


            <div className='col-md-6'>

              <h3 className='text-center mb-3'> Travel info </h3>
              <h5 className='mb-3'><i class="bi bi-truck-front trc px-3"></i> Overall travel plan </h5>

              <ul class="list-group mb-4">
                {travdata.map((e) =>
                  <li class="list-group-item py-3"><i class="bi bi-pencil-fill mx-2"></i>{e.p}</li>
                )}
              </ul>


            </div>


            <div className='col-md-6'>

              <h3 className='text-center mb-3'> Our Services </h3>
              <h5 className='mb-3'><i class="bi bi-bookmark-check-fill si px-3"></i> Services included </h5>
              <ul class="list-group mb-4">
                {sincdata.map((e) =>
                  <li class="list-group-item py-3"><i class="bi bi-pencil-fill mx-2"></i>{e.p}</li>
                )}
              </ul>

            </div>
          </div>
        </div>



      </section>

      <section className='detail-two'>
        <h3 className='text-center py-4 mb-0'> <i class="bi bi-train-front mx-3"></i> View our other packages <i class="bi bi-train-front mx-3"></i> </h3>


        <div className='container-fluid d-first py-4'>
          <div className='row'>

            {popdest.slice(0,5).map((e) =>

              <div className='col-md-4'>


                <div className="card mb-4 mx-5" style={{ width: "16rem" }}>
                  <div className="row">
                    <Link to={`/details/${e.id}`}> <img src={e.img} className="img-fluid rounded-start" alt="..." /></Link>
                    <div class="card-footer mx-2 cf">
                      <small class="text-muted"> <h5 className="card-title text-center">{e.title}</h5></small>
                    </div>
                  </div>
                </div>


              </div>

            )}


          </div>
        </div>

        <div className='container-fluid d-sec py-4'>
          <div className='row'>



          {spack.map((e) =>

              <div className='col-md-4'>

              

                  
                    <div className="card mb-4 mx-5" style={{ width: "16rem" }}>
                      <div className="row">

                      <Link to={`/details/${e.id}`}><img src={e.img} className="img-fluid rounded-start" alt="..." /></Link>
                        <div class="card-footer mx-2 cf">
                          <small class="text-muted"> <h5 className="card-title text-center">{e.place}</h5></small>
                        </div>

                      </div>

                    </div>

                 

               

              </div>
   
   )}

          </div>
        </div>

      </section>

    </>
  )
}
