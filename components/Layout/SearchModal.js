import React from 'react';

const SearchModal = ({showSearchModal,toggleSearchModal}) => {
  return (
    <>
          <div className="modal fade wl__modal -connect" id="connectWallet" tabIndex={-1} aria-labelledby="connectWalletTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header -border -border__bottom">
              <h3 className="modal-title" id="connectWalletTitle">Connect wallet</h3>
              <button type="button" className="-close" data-bs-dismiss="modal" aria-label="Close"><i className="icon-close" /></button>
            </div>
            <div className="modal-body">
              <form action="#" method="post" className="wl__form js-attr-disable">
                <div className="form-group scroll__wrap">
                  <ul className="wallet-list scroll__wrap__content d-flex flex-wrap justify-content-between">
                    <li className="tk__item d-flex flex-column flex-md-row align-items-between align-items-md-center justify-content-between">
                      <input type="radio" name="token" id="wl__metamask" className="-check js-attr-checkbox" />
                      <label htmlFor="wl__metamask" className="-name order-last order-md-first"><span>Metamask</span></label>
                      <div className="-logo d-flex align-items-center justify-content-start justify-content-md-center mb-3 mb-md-0"><img src="./assets/img/pages/logo-metamask.png" alt="" /></div>
                    </li>{/* end tk__item */}
                    <li className="tk__item d-flex flex-column flex-md-row align-items-between align-items-md-center justify-content-between">
                      <input type="radio" name="token" id="wl__bnb" className="-check js-attr-checkbox" />
                      <label htmlFor="wl__bnb" className="-name order-last order-md-first"><span>Binance Smart Chain</span></label>
                      <div className="-logo d-flex align-items-center justify-content-start justify-content-md-center mb-3 mb-md-0"><img src="./assets/img/pages/logo-bnb-light.png" alt="" /></div>
                    </li>{/* end tk__item */}
                    <li className="tk__item d-flex flex-column flex-md-row align-items-between align-items-md-center justify-content-between">
                      <input type="radio" name="token" id="wl__eth" className="-check js-attr-checkbox" />
                      <label htmlFor="wl__eth" className="-name order-last order-md-first"><span>Ethereum</span></label>
                      <div className="-logo d-flex align-items-center justify-content-start justify-content-md-center mb-3 mb-md-0"><img src="./assets/img/pages/logo-eth.png" alt="" /></div>
                    </li>{/* end tk__item */}
                    <li className="tk__item d-flex flex-column flex-md-row align-items-between align-items-md-center justify-content-between">
                      <input type="radio" name="token" id="wl__usdt" className="-check js-attr-checkbox" />
                      <label htmlFor="wl__usdt" className="-name order-last order-md-first"><span>Deff</span></label>
                      <div className="-logo d-flex align-items-center justify-content-start justify-content-md-center mb-3 mb-md-0"><img src="./assets/img/pages/logo-deffzone.png" alt="" /></div>
                    </li>{/* end tk__item */}
                  </ul>
                </div>{/* end form-group */}
                <button className="btn -wallet -submit -disabled js-attr-button" disabled type="submit"><span>Connect wallet</span></button>
                <div className="-note text-center">No wallet found. Make sure extension is installed.</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
