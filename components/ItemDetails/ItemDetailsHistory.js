import React from 'react';
import img1 from '../../public/images/Item-details/Item-details2.jpg'
import img2 from '../../public/images/Item-details/Item-details3.jpg'
import img3 from '../../public/images/Item-details/Item-details4.jpg'
import img4 from '../../public/images/Item-details/Item-details5.jpg'
import img5 from '../../public/images/Item-details/Item-details6.jpg'

const ItemDetailsHistory = () => {
  return (
    <>
      <div className='item-details-content'>
        <h3>History</h3>
        <div className='item-details-into'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='item-details-card'>
                <div className='item-details-card-img'>
                  <img
                    src={img1.src}
                    alt='Images'
                  />
                  <i className='ri-check-line'></i>
                </div>
                <div className='item-details-card-content'>
                  <h3>
                    Bid Placed For <b>235 ETH</b>
                  </h3>
                  <span>@Jack</span>
                </div>
                <div className='work-hours'>4 Hours Ago</div>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='item-details-card'>
                <div className='item-details-card-img'>
                  <img
                    src={img2.src}
                    alt='Images'
                  />
                  <i className='ri-check-line'></i>
                </div>
                <div className='item-details-card-content'>
                  <h3>
                    Bid Placed For <b>245 ETH</b>
                  </h3>
                  <span>@Henry</span>
                </div>
                <div className='work-hours'>2 Hours Ago</div>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='item-details-card'>
                <div className='item-details-card-img'>
                  <img
                    src={img3.src}
                    alt='Images'
                  />
                  <i className='ri-check-line'></i>
                </div>
                <div className='item-details-card-content'>
                  <h3>
                    Bid Placed For <b>215 ETH</b>
                  </h3>
                  <span>@Martina</span>
                </div>
                <div className='work-hours'>2 Hours Ago</div>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='item-details-card'>
                <div className='item-details-card-img'>
                  <img
                    src={img4.src}
                    alt='Images'
                  />
                  <i className='ri-check-line'></i>
                </div>
                <div className='item-details-card-content'>
                  <h3>
                    Bid Placed For <b>265 ETH</b>
                  </h3>
                  <span>@Martina</span>
                </div>
                <div className='work-hours'>10 Hours Ago</div>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='item-details-card'>
                <div className='item-details-card-img'>
                  <img
                    src={img5.src}
                    alt='Images'
                  />
                  <i className='ri-check-line'></i>
                </div>
                <div className='item-details-card-content'>
                  <h3>
                    Bid Placed For <b>235 ETH</b>
                  </h3>
                  <span>@Martina</span>
                </div>
                <div className='work-hours'>8 Hours Ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsHistory;
