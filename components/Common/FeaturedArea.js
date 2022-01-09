import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from "react-tabs";
import Pagination from "./Pagination";
import data from "../../utils/resources";
import { useRouter } from "next/router";
resetIdCounter();

const FeaturedArea = ({ title, pagination }) => {
  const router = useRouter();
  //counter calculation
  const [listDays, setListDays] = useState([]);
  const comingSoonTime = (endTime = new Date("August 23, 2022 17:00:00 PDT")) => {
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

    return { countdays, counthours, countminutes, countseconds }
  };

  const setState = () => {
    let time = comingSoonTime();
    let time1 = comingSoonTime(new Date("July 20, 2022 17:00:00 PDT"));
    let time2 = comingSoonTime(new Date("March 20, 2022 17:00:00 PDT"));
    let time3 = comingSoonTime(new Date("May 2, 2022 17:00:00 PDT"));
    let time4 = comingSoonTime(new Date("December 2, 2022 17:00:00 PDT"));
    let time5 = comingSoonTime(new Date("January 2, 2023 17:00:00 PDT"));
    let time6 = comingSoonTime(new Date("October 2, 2022 17:00:00 PDT"));
    let time7 = comingSoonTime(new Date("November 2, 2022 17:00:00 PDT"));

    setListDays([time, time1, time2, time3, time4, time5, time6, time7])
  }

  useEffect(() => {
    setInterval(() => {
      setState();
    }, 1000);
  }, []);

  const getTextTime = (index) => {
    if(!listDays[index]) { return '' }

    return `${listDays[index].countdays}:${listDays[index].countdays}:${listDays[index].countminutes}:${listDays[index].countseconds}`
  }

  return (
    <>
      <div className="featured-area pt-100 pb-70">
        <div className="container">
          <div className="tab featured-tab-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-4">
                <div className="section-title">
                  <h2>{title}</h2>
                </div>
              </div>
            </div>

            <Tabs>
              <div className="col-lg-6 col-md-8">
                <ul className="tabs">
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

              <div className="tab_content pt-45">
                <TabPanel>
                  <div className="tabs_item">
                    <div className="row justify-content-center">
                      {data[2].map((item, index) => (
                        <div
                          className="col-lg-3 col-md-6"
                          key={index}
                          onClick={() =>
                            router.push(`/item-details/${item.id}`)
                          }
                        >
                          <div className="featured-item">
                            <div className="featured-item-img">
                              <Link href="/item-details">
                                <a>
                                  <img src={item.src.src} alt="Images" />
                                </a>
                              </Link>
                              <div className="featured-user">
                                <Link href="/profile">
                                  <a className="featured-user-option">
                                    <img
                                      src={item.imgAuthor.src}
                                      alt="Images"
                                    />
                                    <span>Created by @{item.author}</span>
                                  </a>
                                </Link>
                              </div>
                              <button
                                type="button"
                                className="default-btn border-radius-5"
                              >
                                Place Bid
                              </button>
                              <div
                                className="featured-item-clock"
                                data-countdown="2021/09/09"
                              > {getTextTime(index)}
                              </div>
                            </div>

                            <div className="content">
                              <h3>
                                <Link href="/profile">
                                  <a>Industrial Revolution</a>
                                </Link>
                              </h3>
                              <div className="content-in">
                                <span>{item.startBid} ETH 12/14</span>
                                <h4>Bid {item.bid} ETH </h4>
                              </div>
                              <div className="featured-content-list">
                                <ul>
                                  <li>
                                    <img
                                      src="../images/featured/featured-user1.jpg"
                                      alt="Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../images/featured/featured-user2.jpg"
                                      alt="Images"
                                    />
                                  </li>
                                  <li className="title">
                                    {Math.floor(Math.random() * 100)}+ People Placed Bid
                                  </li>
                                </ul>
                                <p>
                                  <i className="ri-heart-line"></i> {Math.floor(Math.random() * 1000)}
                                </p>
                              </div>
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
                      {data[2].map((item, index) => (
                        <div
                          className="col-lg-3 col-md-6"
                          key={index}
                          onClick={() =>
                            router.push(`/item-details/${item.id}`)
                          }
                        >
                          <div className="featured-item">
                            <div className="featured-item-img">
                              <Link href="/item-details">
                                <a>
                                  <img src={item.src.src} alt="Images" />
                                </a>
                              </Link>
                              <div className="featured-user">
                                <Link href="/profile">
                                  <a className="featured-user-option">
                                    <img
                                      src={item.imgAuthor.src}
                                      alt="Images"
                                    />
                                    <span>Created by @{item.author}</span>
                                  </a>
                                </Link>
                              </div>
                              <button
                                type="button"
                                className="default-btn border-radius-5"
                              >
                                Place Bid
                              </button>
                              <div
                                className="featured-item-clock"
                                data-countdown="2021/09/09"
                              >
                                {getTextTime(index)}
                              </div>
                            </div>

                            <div className="content">
                              <h3>
                                <Link href="/profile">
                                  <a>Industrial Revolution</a>
                                </Link>
                              </h3>
                              <div className="content-in">
                                <span>100 ETH 12/14</span>
                                <h4>Bid 80 ETH </h4>
                              </div>
                              <div className="featured-content-list">
                                <ul>
                                  <li>
                                    <img
                                      src="../images/featured/featured-user1.jpg"
                                      alt="Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../images/featured/featured-user2.jpg"
                                      alt="Images"
                                    />
                                  </li>
                                  <li className="title">
                                  {Math.floor(Math.random() * 100)}+ People Placed Bid
                                  </li>
                                </ul>
                                <p>
                                  <i className="ri-heart-line"></i> {Math.floor(Math.random() * 1000)}
                                </p>
                              </div>
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
                      {data[2].map((item, index) => (
                        <div
                          className="col-lg-3 col-md-6"
                          key={index}
                          onClick={() =>
                            router.push(`/item-details/${item.id}`)
                          }
                        >
                          <div className="featured-item">
                            <div className="featured-item-img">
                              <Link href="/item-details">
                                <a>
                                  <img src={item.src.src} alt="Images" />
                                </a>
                              </Link>
                              <div className="featured-user">
                                <Link href="/profile">
                                  <a className="featured-user-option">
                                    <img
                                      src={item.imgAuthor.src}
                                      alt="Images"
                                    />
                                    <span>Created by @{item.author}</span>
                                  </a>
                                </Link>
                              </div>
                              <button
                                type="button"
                                className="default-btn border-radius-5"
                              >
                                Place Bid
                              </button>
                              <div
                                className="featured-item-clock"
                                data-countdown="2021/09/09"
                              >
                                {getTextTime(index)}
                              </div>
                            </div>

                            <div className="content">
                              <h3>
                                <Link href="/profile">
                                  <a>{item.position}</a>
                                </Link>
                              </h3>
                              <div className="content-in">
                                <span>{item.startBid} ETH 12/14</span>
                                <h4>Bid {item.bid} ETH </h4>
                              </div>
                              <div className="featured-content-list">
                                <ul>
                                  <li>
                                    <img
                                      src="../images/featured/featured-user1.jpg"
                                      alt="Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../images/featured/featured-user2.jpg"
                                      alt="Images"
                                    />
                                  </li>
                                  <li className="title">
                                  {Math.floor(Math.random() * 100)}+ People Placed Bid
                                  </li>
                                </ul>
                                <p>
                                  <i className="ri-heart-line"></i> {Math.floor(Math.random() * 1000)}
                                </p>
                              </div>
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
                      {data[2].map((item, index) => (
                        <div
                          className="col-lg-3 col-md-6"
                          key={index}
                          onClick={() =>
                            router.push(`/item-details/${item.id}`)
                          }
                        >
                          <div className="featured-item">
                            <div className="featured-item-img">
                              <Link href="/item-details">
                                <a>
                                  <img src={item.src.src} alt="Images" />
                                </a>
                              </Link>
                              <div className="featured-user">
                                <Link href="/profile">
                                  <a className="featured-user-option">
                                    <img
                                      src={item.imgAuthor.src}
                                      alt="Images"
                                    />
                                    <span>Created by @{item.author}</span>
                                  </a>
                                </Link>
                              </div>
                              <button
                                type="button"
                                className="default-btn border-radius-5"
                              >
                                Place Bid
                              </button>
                              <div
                                className="featured-item-clock"
                                data-countdown="2021/09/09"
                              >
                                {getTextTime(index)}
                              </div>
                            </div>

                            <div className="content">
                              <h3>
                                <Link href="/profile">
                                  <a>Industrial Revolution</a>
                                </Link>
                              </h3>
                              <div className="content-in">
                                <span>100 ETH 12/14</span>
                                <h4>Bid 80 ETH </h4>
                              </div>
                              <div className="featured-content-list">
                                <ul>
                                  <li>
                                    <img
                                      src="../images/featured/featured-user1.jpg"
                                      alt="Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../images/featured/featured-user2.jpg"
                                      alt="Images"
                                    />
                                  </li>
                                  <li className="title">
                                  {Math.floor(Math.random() * 100)}+ People Placed Bid
                                  </li>
                                </ul>
                                <p>
                                  <i className="ri-heart-line"></i> {Math.floor(Math.random() * 1000)}
                                </p>
                              </div>
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
                      {data[2].map((item, index) => (
                        <div
                          className="col-lg-3 col-md-6"
                          key={index}
                          onClick={() =>
                            router.push(`/item-details/${item.id}`)
                          }
                        >
                          <div className="featured-item">
                            <div className="featured-item-img">
                              <Link href="/item-details">
                                <a>
                                  <img src={item.src.src} alt="Images" />
                                </a>
                              </Link>
                              <div className="featured-user">
                                <Link href="/profile">
                                  <a className="featured-user-option">
                                    <img
                                      src={item.imgAuthor.src}
                                      alt="Images"
                                    />
                                    <span>Created by @{item.author}</span>
                                  </a>
                                </Link>
                              </div>
                              <button
                                type="button"
                                className="default-btn border-radius-5"
                              >
                                Place Bid
                              </button>
                              <div
                                className="featured-item-clock"
                                data-countdown="2021/09/09"
                              >
                                {getTextTime(index)}
                              </div>
                            </div>

                            <div className="content">
                              <h3>
                                <Link href="/profile">
                                  <a>Industrial Revolution</a>
                                </Link>
                              </h3>
                              <div className="content-in">
                                <span>100 ETH 12/14</span>
                                <h4>Bid 80 ETH </h4>
                              </div>
                              <div className="featured-content-list">
                                <ul>
                                  <li>
                                    <img
                                      src="../images/featured/featured-user1.jpg"
                                      alt="Images"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="../images/featured/featured-user2.jpg"
                                      alt="Images"
                                    />
                                  </li>
                                  <li className="title">
                                  {Math.floor(Math.random() * 100)}+ People Placed Bid
                                  </li>
                                </ul>
                                <p>
                                  <i className="ri-heart-line"></i> {Math.floor(Math.random() * 1000)}
                                </p>
                              </div>
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
        </div>
        {pagination && <Pagination />}
      </div>
    </>
  );
};

export default FeaturedArea;
