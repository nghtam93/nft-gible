import React from "react";
import Link from "next/link";
import shape1 from "../../public/images/inner-banner/inner-shape1.png"
import shape2 from "../../public/images/inner-banner/inner-shape2.png"

const PageBanner = ({ bannerHeading, parentTitle, pageTitle, bg }) => {
  return (
    <>
      <div className={`inner-banner ${bg}`}>
        <div className="container">
          <div className="inner-title">
            <h3>{bannerHeading}</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>

              <li>{parentTitle}</li>
              {pageTitle && <li>{pageTitle}</li>}
            </ul>

            <div className="inner-shape">
              <img src={shape1.src} alt="Images" />
              <img src={shape2.src} alt="Images" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
