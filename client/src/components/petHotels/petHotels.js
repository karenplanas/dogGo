import React, { useEffect, useState, useCallback } from "react";
import { BiCheck } from "react-icons/bi";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './petHotels.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { BsFillSquareFill } from "react-icons/bs";
// current mission find hotel api to make slider dynamic
const PetHotels = () => {
  const [hotels, setHotels] = useState([]);

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "fsq3qx9qlhqnNGwk86iRqQd7xt0tH9hVD5fk+5VhNkjbt7E=",
    },
  };

  const fetchHotels = useCallback(async () => {
    const response = await fetch(
      "https://api.foursquare.com/v3/places/nearby?ll=52.24%2C0.71&query=hotels&limit=10",
      options
    );
    const json = await response.json();
    console.log(json.results);
    setHotels(json.results);
  });

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <section id="petHotels">
      <h2> Pet Friendly Hotels </h2>
      <h5> Book a stay at the top rated pet friendly hotels </h5>
      <Swiper
        className="container hotel_container"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={true}
      >
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <SwiperSlide className="hotel" key={hotel.fsq_id}>
              <div className="hotel_head">
                <h3> {hotel.name} </h3>
              </div>
              <ul className="service_list">
                <li>
                  <BiCheck className="service_list-icon" />
                  <p> all pets allowed </p>
                </li>
                <li>
                  <BiCheck className="service_list-icon" />
                  <p> breakfast </p>
                </li>
                <li>
                  <BiCheck className="service_list-icon" />
                  <p> free wifi </p>
                </li>
                <li>
                  <BiCheck className="service_list-icon" />
                  <p> swimming pool </p>
                </li>
                <li>
                  <BiCheck className="service_list-icon" />
                  <p> free parking </p>
                </li>
                <li>
                  <BiCheck className="service_list-icon" />
                  <p> air conditioning </p>
                </li>
              </ul>
              <div className="book">
                <a
                  href="https://uk.hotels.com/?locale=en_GB&pos=HCOM_UK&rffrid=sem.hcom.UK.google.003.00.03.GT.s.kwrd%3Dc.541524848336.126078543763.14410409729..kwd-28172750.1006589..hotel%20bookings.CjwKCAiAsYyRBhACEiwAkJFKornDqM4CoJGZGsbih-6dSz6WnXAC29Z9fkJlino7HGWTUX-GvnkjbhoCybQQAvD_BwE.aw.ds&PSRC=&gclid=CjwKCAiAsYyRBhACEiwAkJFKornDqM4CoJGZGsbih-6dSz6WnXAC29Z9fkJlino7HGWTUX-GvnkjbhoCybQQAvD_BwE"
                  className="btn btn-primary"
                >
                  {" "}
                  Book now!{" "}
                </a>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide></SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

export default PetHotels;
