import React from 'react';
import img1 from '../../public/images/Item-details/Item-details-user4.jpg'
import img2 from '../../public/images/Item-details/Item-details-user5.jpg'
import img3 from '../../public/images/Item-details/Item-details-user6.jpg'
import img4 from '../../public/images/Item-details/Item-details-user7.jpg'

const ItemDetailsUser = () => {
  return (
    <>
      <div className='item-details-user-area'>
        <h3>Latest Bids </h3>

        <div className='item-details-user-into'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='item-details-user-card'>
                <div className='item-details-card-img'>
                  <img
                    src={img1.src}
                    alt='Images'
                  />
                </div>
                <div className='item-details-card-content'>
                  <h3>
                    By <b>Wodee-nel</b>
                  </h3>
                  <span>
                    Bid <b> At 244 ETH</b>
                  </span>
                </div>
                <div className='item-details-card-right'>
                  <h3>246 ETH</h3>
                  <span>11.49 AM</span>
                </div>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='item-details-user-card'>
                <div className='item-details-card-img'>
                  <img
                    src={img2.src}
                    alt='Images'
                  />
                </div>
                <div className='item-details-card-content'>
                  <h3>
                    By <b>Wodee-nel</b>
                  </h3>
                  <span>
                    Bid <b> At 274 ETH</b>
                  </span>
                </div>
                <div className='item-details-card-right'>
                  <h3>266 ETH</h3>
                  <span>07.49 AM</span>
                </div>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='item-details-user-card'>
                <div className='item-details-card-img'>
                  <img
                    src={img3.src}
                    alt='Images'
                  />
                </div>
                <div className='item-details-card-content'>
                  <h3>
                    By <b>Wodee-nel</b>
                  </h3>
                  <span>
                    Bid <b> At 244 ETH</b>
                  </span>
                </div>
                <div className='item-details-card-right'>
                  <h3>256 ETH</h3>
                  <span>09.49 AM</span>
                </div>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className='item-details-user-card'>
                <div className='item-details-card-img'>
                  <img
                    src={img4.src}
                    alt='Images'
                  />
                </div>
                <div className='item-details-card-content'>
                  <h3>
                    By <b>Wodee-nel</b>
                  </h3>
                  <span>
                    Bid <b> At 234 ETH</b>
                  </span>
                </div>
                <div className='item-details-card-right'>
                  <h3>246 ETH</h3>
                  <span>10.49 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsUser;
