import React from 'react'
import { useQuery } from 'react-query'
import { IPlace } from '../../interfaces/IPlace'
import { fetchHotelsPictures } from '../../services/ApiClient'
import './HotelCard.css'

interface Props {
  hotel: IPlace
}

const HotelCard: React.FC<Props> = ({ hotel }) => {
  const { data: hotelPictures } = useQuery(
    ['fetchHotelsPictures', hotel.fsq_id],
    () => fetchHotelsPictures(hotel.fsq_id),
  )

  return (
    <div className='HotelCard-container' >
      <div className='HotelCard-details'>
        <h2>{hotel.name}</h2>
        <div>
          <h3>Amenities</h3>
          <ul>
            <li>all pets allowed</li>
            <li>breakfast</li>
            <li>free wifi</li>
            <li>swimming pool</li>
            <li>free parking</li>
            <li>air conditioning</li>
          </ul>
        </div>
        <button className='btn btn-primary HotelCard-button'>Book now</button>
      </div>

      <div className='HotelCard-image'>
        { hotelPictures && <img alt='hotel' src={hotelPictures[0]}/> }
      </div>

    </div>
  )
}

export { HotelCard }
