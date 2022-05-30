import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import './style.scss'
import carouselBannersApi from '../../../../apis/carouselBannersApi'
import BannerImage from '../../../../assets/3.png'

function CarouselBanners(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchCarouselBanners = async () => {
      const carouselBanners = await carouselBannersApi.getAll()
      setData(carouselBanners)
    }

    fetchCarouselBanners()
  }, [])

  const settings = {
    className: 'carousel-inner-1',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: true,
    dots: true,
  }

  return (
    <section id='carousel-banners'>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className='carousel-item'>
            <img src={item.src} alt={item.src} />
          </div>
        ))}
      </Slider>
      <div className='carousel-inner-2'>
        <div className='carousel-item'>
          <img className='carousel-item-img' src={BannerImage} alt='banner' />
        </div>

        <div className='carousel-item'>
          <img src={BannerImage} alt='banner' />
        </div>
      </div>
    </section>
  )
}

export default CarouselBanners
