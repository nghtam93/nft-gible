import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Tabs = dynamic(
	import("react-tabs").then((mod) => mod.Tabs),
	{ ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from "react-tabs";
resetIdCounter();
import data from "../../utils/resources";

const AuthorProfileArea = ({ isAuthor }) => {
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
			<div className="author-profile-area pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="author-profile-sidebar  mr-20">
								<div className="author-user">
									<img
										src="../images/author/author-profile.jpg"
										alt="Images"
									/>
									<i className="ri-check-line"></i>
								</div>

								<h3>
									<Link href="/profile">
										<a>Olivia Jenar</a>
									</Link>
								</h3>
								<span>@Jenar</span>
								<p>
									All the Lorem Ipsum generators on the
									Internet tend to repeat predefined chunks as
									necessary
								</p>
								<div className="sp-title">
									0x76669f...a0e9ca52{" "}
									<i className="ri-folders-line"></i>
								</div>
								<div className="author-content">
									<div className="content-left">
										<span>Followers</span>
										<h4>2941</h4>
									</div>

									<div className="content-right">
										Follow
										<ul className="author-social">
											<li>
												<a
													href="https://www.facebook.com/"
													target="_blank"
													rel="noreferrer"
												>
													<i className="ri-facebook-fill"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.instagram.com/"
													target="_blank"
													rel="noreferrer"
												>
													<i className="ri-instagram-fill"></i>
												</a>
											</li>
											<li>
												<a
													href="https://twitter.com/"
													target="_blank"
													rel="noreferrer"
												>
													<i className="ri-twitter-fill"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-9">
							<div className="tab featured-tab-area featured-tab-area-ml author-tab-area">
								<Tabs>
									<div className="col-lg-12">
										<ul className="tabs author-tabs">
											<TabList>
												<Tab>
													<a>All</a>
												</Tab>
												<Tab>
													<a>Art</a>
												</Tab>

												<Tab>
													<a>Virtual Worlds</a>
												</Tab>
												<Tab>
													<a>Collectibles</a>
												</Tab>
												<Tab>
													<a>Music</a>
												</Tab>
											</TabList>
										</ul>
									</div>

									<div className="tab_content author_tab_content pt-45">
										<TabPanel>
											<div className="tabs_item">
												<div className="row justify-content-center">
													{data[4][0].map((item, index) => (
														<div className="col-lg-4 col-md-6">
															<div className="featured-card box-shadow">
																<div className="featured-card-img">
																	<Link href={`/item-details/${item.id}`}>
																		<a>
																			<img
																				src={item.src.src}
																				alt="Images"
																			/>
																		</a>
																	</Link>
																	<p>
																		<i className="ri-heart-line"></i>{" "}
																		{Math.floor(Math.random() * 100)}
																	</p>
																	<button
																		type="button"
																		className="default-btn border-radius-5"
																	>
																		Place Bid
																	</button>
																</div>

																<div className="content">
																	<h3>
																		<Link href={`/item-details/${item.id}`}>
																			<a>
																				Industrial
																				Revolution
																			</a>
																		</Link>
																	</h3>
																	<div className="content-in">
																		<div className="featured-card-left">
																			<span>
																			{item.price}
																				ETH
																				12/14
																			</span>
																			<h4>
																				Bid { item.bid } ETH{" "}
																			</h4>
																		</div>
																		<Link href={`/item-details/${item.id}`}>
																			<a className="featured-content-btn">
																				<i className="ri-arrow-right-line"></i>
																			</a>
																		</Link>
																	</div>
																	<Link href="/author-profile">
																		<a
																			className="featured-user-option"
																		>
																			<img
																				src={item.imgAuthor.src}
																				alt="Images"
																			/>
																			<span>
																				Created
																				by
																				@{item.author}
																			</span>
																		</a>
																	</Link>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</TabPanel>

										<TabPanel>
											<div className="tabs_item">
												<div className="row justify-content-center">
													{data[4][1].map((item, index) => (
														<div className="col-lg-4 col-md-6">
															<div className="featured-card box-shadow">
																<div className="featured-card-img">
																	<Link href={`/item-details/${item.id}`}>
																		<a>
																			<img
																				src={item.src.src}
																				alt="Images"
																			/>
																		</a>
																	</Link>
																	<p>
																		<i className="ri-heart-line"></i>{" "}
																		{Math.floor(Math.random() * 100)}
																	</p>
																	<button
																		type="button"
																		className="default-btn border-radius-5"
																	>
																		Place Bid
																	</button>
																</div>

																<div className="content">
																	<h3>
																		<Link href={`/item-details/${item.id}`}>
																			<a>
																				Industrial
																				Revolution
																			</a>
																		</Link>
																	</h3>
																	<div className="content-in">
																		<div className="featured-card-left">
																			<span>
																			{item.price}
																				ETH
																				12/14
																			</span>
																			<h4>
																				Bid { item.bid } ETH{" "}
																			</h4>
																		</div>
																		<Link href={`/item-details/${item.id}`}>
																			<a className="featured-content-btn">
																				<i className="ri-arrow-right-line"></i>
																			</a>
																		</Link>
																	</div>
																	<Link href="/author-profile">
																		<a
																			className="featured-user-option"
																		>
																			<img
																				src={item.imgAuthor.src}
																				alt="Images"
																			/>
																			<span>
																				Created
																				by
																				@{item.author}
																			</span>
																		</a>
																	</Link>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</TabPanel>

										<TabPanel>
											<div className="tabs_item">
												<div className="row justify-content-center">
													{data[4][1].map((item, index) => (
														<div className="col-lg-4 col-md-6">
															<div className="featured-card box-shadow">
																<div className="featured-card-img">
																	<Link href={`/item-details/${item.id}`}>
																		<a>
																			<img
																				src={item.src.src}
																				alt="Images"
																			/>
																		</a>
																	</Link>
																	<p>
																		<i className="ri-heart-line"></i>{" "}
																		{Math.floor(Math.random() * 100)}
																	</p>
																	<button
																		type="button"
																		className="default-btn border-radius-5"
																	>
																		Place Bid
																	</button>
																</div>

																<div className="content">
																	<h3>
																		<Link href={`/item-details/${item.id}`}>
																			<a>
																				Industrial
																				Revolution
																			</a>
																		</Link>
																	</h3>
																	<div className="content-in">
																		<div className="featured-card-left">
																			<span>
																			{item.price}
																				ETH
																				12/14
																			</span>
																			<h4>
																				Bid { item.bid } ETH{" "}
																			</h4>
																		</div>
																		<Link href={`/item-details/${item.id}`}>
																			<a className="featured-content-btn">
																				<i className="ri-arrow-right-line"></i>
																			</a>
																		</Link>
																	</div>
																	<Link href="/author-profile">
																		<a
																			className="featured-user-option"
																		>
																			<img
																				src={item.imgAuthor.src}
																				alt="Images"
																			/>
																			<span>
																				Created
																				by
																				@{item.author}
																			</span>
																		</a>
																	</Link>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</TabPanel>

										<TabPanel>
											<div className="tabs_item">
												<div className="row justify-content-center">
													{data[4][1].map((item, index) => (
														<div className="col-lg-4 col-md-6">
															<div className="featured-card box-shadow">
																<div className="featured-card-img">
																	<Link href={`/item-details/${item.id}`}>
																		<a>
																			<img
																				src={item.src.src}
																				alt="Images"
																			/>
																		</a>
																	</Link>
																	<p>
																		<i className="ri-heart-line"></i>{" "}
																		{Math.floor(Math.random() * 100)}
																	</p>
																	<button
																		type="button"
																		className="default-btn border-radius-5"
																	>
																		Place Bid
																	</button>
																</div>

																<div className="content">
																	<h3>
																		<Link href={`/item-details/${item.id}`}>
																			<a>
																				Industrial
																				Revolution
																			</a>
																		</Link>
																	</h3>
																	<div className="content-in">
																		<div className="featured-card-left">
																			<span>
																			{item.price}
																				ETH
																				12/14
																			</span>
																			<h4>
																				Bid { item.bid } ETH{" "}
																			</h4>
																		</div>
																		<Link href={`/item-details/${item.id}`}>
																			<a className="featured-content-btn">
																				<i className="ri-arrow-right-line"></i>
																			</a>
																		</Link>
																	</div>
																	<Link href="/author-profile">
																		<a
																			className="featured-user-option"
																		>
																			<img
																				src={item.imgAuthor.src}
																				alt="Images"
																			/>
																			<span>
																				Created
																				by
																				@{item.author}
																			</span>
																		</a>
																	</Link>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</TabPanel>

										<TabPanel>
											<div className="tabs_item">
												<div className="row justify-content-center">
													{data[4][1].map((item, index) => (
														<div className="col-lg-4 col-md-6">
															<div className="featured-card box-shadow">
																<div className="featured-card-img">
																	<Link href={`/item-details/${item.id}`}>
																		<a>
																			<img
																				src={item.src.src}
																				alt="Images"
																			/>
																		</a>
																	</Link>
																	<p>
																		<i className="ri-heart-line"></i>{" "}
																		{Math.floor(Math.random() * 100)}
																	</p>
																	<button
																		type="button"
																		className="default-btn border-radius-5"
																	>
																		Place Bid
																	</button>
																</div>

																<div className="content">
																	<h3>
																		<Link href={`/item-details/${item.id}`}>
																			<a>
																				Industrial
																				Revolution
																			</a>
																		</Link>
																	</h3>
																	<div className="content-in">
																		<div className="featured-card-left">
																			<span>
																			{item.price}
																				ETH
																				12/14
																			</span>
																			<h4>
																				Bid { item.bid } ETH{" "}
																			</h4>
																		</div>
																		<Link href={`/item-details/${item.id}`}>
																			<a className="featured-content-btn">
																				<i className="ri-arrow-right-line"></i>
																			</a>
																		</Link>
																	</div>
																	<Link href="/author-profile">
																		<a
																			className="featured-user-option"
																		>
																			<img
																				src={item.imgAuthor.src}
																				alt="Images"
																			/>
																			<span>
																				Created
																				by
																				@{item.author}
																			</span>
																		</a>
																	</Link>
																</div>
															</div>
														</div>
													))}
												</div>
											</div>
										</TabPanel>
									</div>
								</Tabs>
							</div>

							<div className="col-lg-12 col-md-12">
								<div className="pagination-area">
									<a
										href="#"
										className="prev page-numbers"
									>
										<i className="ri-arrow-left-s-line"></i>
									</a>

									<span
										className="page-numbers current"
										aria-current="page"
									>
										1
									</span>
									<a
										href="#"
										className="page-numbers"
									>
										2
									</a>
									<a
										href="#"
										className="page-numbers"
									>
										3
									</a>

									<a
										href="#"
										className="next page-numbers"
									>
										<i className="ri-arrow-right-s-line"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthorProfileArea;
