import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Link from 'next/link';
import data from '../../utils/resources'
import { useRouter } from 'next/router'

const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  dots: false,
  autoplay: true,
  smartSpeed: 500,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const TrendingArea = () => {
  const router = useRouter()
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
  }, []);

  return (
    <>
      <div className='trending-area pt-100 pb-70'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-7'>
              <div className='section-title'>
                <h2>Trending Artwork</h2>
              </div>
            </div>

            <div className='col-lg-4 col-md-5'>
              <div className='trending-btn text-end'>
                <Link href='/discover'>
                  <a className='default-btn border-radius-5'>Explore More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='trending-slider  pt-45'>
            {display ? (
              <OwlCarousel {...options}>
                {data[0].map((item, index) => (
                  <div
                    className='trending-item'
                    key={index}
                    onClick={() => router.push(`/item-details/${item.id}`)}
                  >
                    <div className='trending-img'>
                      <Link href={`/item-details/${item.id}`}>
                        <a>
                          <img
                            src={item.src.src}
                            alt='Images'
                          />
                        </a>
                      </Link>

                      <div className='trending-user'>
                        <Link href='/profile'>
                          <a className='trending-user-option'>
                            <img
                              src={item.imgAuthor.src}
                              alt='Images'
                            />
                            <span>Created by @{item.author}</span>
                          </a>
                        </Link>
                      </div>
                      <button
                        type='button'
                        className='default-btn border-radius-5'
                      >
                        Place Bid
                      </button>
                      <div className='trending-title'>
                        <span>{item.price} ETH 12/14</span>
                        <h3>Bid {item.bid} ETH</h3>
                      </div>
                    </div>

                    <div className='content'>
                      <h3>
                        <Link href='/item-details'>
                          <a>Les Immortal's</a>
                        </Link>
                      </h3>
                      <span>
                        <i className='ri-heart-line'></i> 340
                      </span>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingArea;
