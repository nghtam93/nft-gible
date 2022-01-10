import React, { useState, useEffect } from 'react';
import Pagination from '../Common/Pagination';
import DiscoverSidebar from './DiscoverSidebar';
import Link from 'next/link'
import data from "../../utils/resources";

const DiscoverArea = () => {

  //counter calculation
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const comingSoonTime = () => {
    let endTime = new Date('December 23, 2021 17:00:00 PDT');
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let countdays = Math.floor(timeLeft / 86400);
    let counthours = Math.floor((timeLeft - countdays * 86400) / 3600);
    let countminutes = Math.floor(
      (timeLeft - countdays * 86400 - counthours * 3600) / 60
    );
    let countseconds = Math.floor(
      timeLeft - countdays * 86400 - counthours * 3600 - countminutes * 60
    );
    if (counthours < '10') {
      counthours = '0' + counthours;
    }
    if (countminutes < '10') {
      countminutes = '0' + countminutes;
    }
    if (countseconds < '10') {
      countseconds = '0' + countseconds;
    }

    setDays(countdays);
    setHours(counthours);
    setMinutes(countminutes);
    setSeconds(countseconds);
  };

  useEffect(() => {
    setInterval(() => {
      comingSoonTime();
    }, 1000);
  }, []);

  return (
    <>
      <div className='discover-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Discover Assets</h2>
          </div>

          <div className='row pt-45'>
            <div className='col-lg-9'>
              <div className='row justify-content-center'>
                {data[4][1].map((item, index) => (
                  <div className='col-lg-4 col-md-6'>
                  <div className='featured-card box-shadow'>
                    <div className='featured-card-img'>
                      <Link href='item-details'>
                        <a>
                          <img
                            src={item.src.src}
                            alt='Images'
                          />
                        </a>
                      </Link>
                      <p>
                        <i className='ri-heart-line'></i>
                        {Math.floor(Math.random() * 100)}
                      </p>
                      {index == 5 &&
                        <div
                          className="featured-card-clock"
                          data-countdown="2022/10/10"
                        >
                          {days}:
                          {hours}:
                          {minutes}:
                          {seconds}
                        </div>
                      }
                      <button type='button' className='default-btn border-radius-5'>
                        Place Bid
                      </button>
                    </div>

                    <div className='content'>
                      <h3>
                        <Link href='item-details'>
                          <a>Industrial Revolution</a>
                        </Link>
                      </h3>
                      <div className='content-in'>
                        <div className='featured-card-left'>
                          <span>{item.price} ETH 12/14</span>
                          <h4>Bid {item.bid} ETH </h4>
                        </div>

                        <Link href='/item-details'>
                          <a
                            className='featured-content-btn'
                          >
                            <i className='ri-arrow-right-line'></i>
                          </a>
                        </Link>
                      </div>

                      <Link href='/profile'>
                        <a
                          className='featured-user-option'
                        >
                          <img
                            src={item.imgAuthor.src}
                            alt='Images'
                          />
                          <span>Created by @{item.author}</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  </div>
                ))}
                <Pagination />
              </div>
            </div>

            <div className='col-lg-3'>
              <DiscoverSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverArea;
