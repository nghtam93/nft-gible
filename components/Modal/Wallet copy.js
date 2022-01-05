import React, { useState, useEffect } from "react";
import Pagination from "../Common/Pagination";
import Link from "next/link";
import { Modal } from 'react-bootstrap'

const Wallet = ({ isShow = true }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const [connectorId, setConnectorId] = useState(null)
  const [indexWallet, setIndexWallet] = useState(null)
  const [classNone, setClassNone] = useState('')

  useEffect(() => {
    const updateClassNone = () => {
      if (isShow === false) {
        setClassNone('d-none')
      }
    }

    updateClassNone()
  }, [isShow])

  const walletData = [
    {
      name: 'Metamask',
      logoUrl: '/img/pages/logo-metamask.png',
      connectorId: 'injected',
      address: '',
    },
    {
      name: 'Binance Smart Chain',
      logoUrl: '/img/pages/logo-bnb-light.png',
      connectorId: 'bsc',
      address: '',
    },
    {
      name: 'Trust',
      logoUrl: '/img/pages/trust.png',
      connectorId: 'injected',
      address: '',
    },
    {
      name: 'SafePal',
      logoUrl: '/img/pages/safepal.png',
      connectorId: 'injected',
      address: '',
    },
  ]

  const connectWallet = () => {
    window.localStorage.setItem('connectorIdv2', connectorId)
  }

  const chooseWallet = (name, index) => {
    setConnectorId(name)
    setIndexWallet(index)
  }
	return (
		<>
			<button className={`${classNone} btn -wallet wow fadeInUp d-lg-inline-block`} type="button" onClick={handleShow}>
				<span>Connect wallet</span>
			</button>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="modal-90w"
				aria-labelledby="connectWalletTitle"
				centered
				className="modal fade wl__modal -connect"
			>
				<div className="modal-header -border -border__bottom">
					<h3 className="modal-title" id="connectWalletTitle">
						Connect wallet
					</h3>
					<button
						type="button"
						className="-close"
						data-bs-dismiss="modal"
						aria-label="Close"
						onClick={() => setShow(false)}
					>
						<i className="icon-close" />
					</button>
				</div>
				<Modal.Body>
					<div className="wl__form js-attr-disable">
						<div className="form-group">
							<ul className="wallet-list d-flex flex-wrap justify-content-between">
								{walletData.map((item, index) => (
									<li
										key={index.toString()}
										className={
											index === indexWallet
												? 'tk__item d-flex flex-column flex-md-row align-items-between align-items-md-center justify-content-between active-wallet'
												: 'tk__item d-flex flex-column flex-md-row align-items-between align-items-md-center justify-content-between'
										}
										onClick={() => chooseWallet(item.connectorId, index)}
										role="presentation"
									>
										<label htmlFor="wl__metamask" className="-name order-last order-md-first">
											<span>{item.name}</span>
										</label>
										<div className="-logo d-flex align-items-center justify-content-start justify-content-md-center mb-3 mb-md-0">
											<img src={item.logoUrl} alt="" />
										</div>
									</li>
								))}
							</ul>
						</div>

						{indexWallet !== null ? (
							<button className="btn -wallet -submit js-attr-button" type="submit" onClick={connectWallet}>
								<span>Connect wallet</span>
							</button>
						) : (
							<button className="btn -wallet -submit -disabled js-attr-button" disabled type="submit">
								<span>Connect wallet</span>
							</button>
						)}

						<div className="-note text-center">No wallet found. Make sure extension is installed.</div>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Wallet;
