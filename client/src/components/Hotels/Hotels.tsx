import React from 'react'
import { useQuery } from 'react-query'
import useGeolocation  from 'react-hook-geolocation'
import { IPlace } from '../../interfaces/IPlace';
import { fetchHotels } from '../../services/ApiClient';
import { Loader } from '../Loader/Loader';
import { HotelCard } from '../HotelCard/HotelCard';
import './Hotels.css'

// Swiper imports
import { Pagination, Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';

const Hotels: React.FC = () => {

  const { latitude, longitude } = useGeolocation();
  const { data: hotels, isLoading } = useQuery<IPlace[]>(
    ['fetchHotels', latitude, longitude], 
    () => fetchHotels(latitude, longitude),
    {
      enabled: !!latitude && !!longitude,
    } 
  )
  
  if (isLoading || !hotels) return <Loader />

  return (
    <div className='Hotels-root'>
      <div className='Hotels-titles'>
        <h2> Pet Friendly Hotels </h2>
        <h3> Book a stay at the top rated pet friendly hotels </h3>
      </div>
      <Swiper
        className='Hotels-Cards-container'       
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={true}
      >
          <div className='Hotels-Cards-container'>
            {
              hotels.length > 0 ?
              (hotels.map((hotel)=> (
                <SwiperSlide className='swiper-slide bullet'>
                  <HotelCard hotel={hotel} key={hotel.fsq_id}/>
                </SwiperSlide>
              )))
              :
              <h3>Not hotels found on the area</h3>
            }
          </div>
      </Swiper>
    </div>
  )
}

export { Hotels }