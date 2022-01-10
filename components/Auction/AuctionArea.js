import React, { useState, useEffect } from "react";
import Pagination from "../Common/Pagination";
import Link from "next/link";
import data from "../../utils/resources";

const AuctionArea = () => {
	//counter calculation
	const [days, setDays] = useState("");
	const [hours, setHours] = useState("");
	const [minutes, setMinutes] = useState("");
	const [seconds, setSeconds] = useState("");

	const comingSoonTime = () => {
		let endTime = new Date("December 23, 2021 17:00:00 PDT");
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
		if (counthours < "10") {
			counthours = "0" + counthours;
		}
		if (countminutes < "10") {
			countminutes = "0" + countminutes;
		}
		if (countseconds < "10") {
			countseconds = "0" + countseconds;
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
			<div className="auctions-area-three pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<h2>Live Auctions</h2>
					</div>

					<div className="row justify-content-center pt-45">
					{data[4][2].map((item, index) => (
						<div className="col-lg-4 col-md-6">
							<div className="auction-card">
								<div className="auction-card-img">
									<Link href={`/item-details/${item.id}`}>
										<a className="painting">
											<img
												src={item.src.src}
												alt="Images"
											/>
										</a>
									</Link>
									<div className="auction-card-user">
										<Link href="/profile">
											<a className="auction-card-user-option">
												<img
													src={item.imgAuthor.src}
													alt="Images"
												/>
												<span>Created by @{item.author}</span>
											</a>
										</Link>
									</div>
									{index == 2  &&
										<div className="auction-card-into">
											<h3>Remaining Time</h3>
											<div className="auction-timer">
												<div
													className="auction-title"
													data-countdown="2021/10/10"
												>
													{days}:{hours}:{minutes}:
													{seconds}
												</div>
											</div>
										</div>
									}
									</div>

								<div className="content">
									<h3>
										{" "}
										<Link href="/auction">
											<a>To Infinity And Beyond</a>
										</Link>
									</h3>
									<p>
										<i className="ri-heart-line"></i>
										{Math.floor(Math.random() * 100)}
									</p>
									<div className="auction-card-content">
										<div className="card-left">
											<span>Start Bid</span>
											<h4>{item.price} ETH</h4>
										</div>
										<div className="card-right">
											<span>Highest Bid</span>
											<h4>{item.bid} ETH</h4>
										</div>
									</div>
									<Link href={`/item-detail/${item.id}`}>
										<a className="place-btn">Place Bid</a>
									</Link>
								</div>
							</div>
						</div>
					))}
						<Pagination />
					</div>
				</div>
			</div>
		</>
	);
};

export default AuctionArea;
