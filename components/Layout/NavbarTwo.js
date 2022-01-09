import { useState } from "react";
import SearchModal from "./SearchModal";
import Link from "../../utils/ActiveLink";
import { connect } from "react-redux";
import {
  openWallet,
  disconnectWallet,
} from "../../redux/actions/walletActions";

const NavbarTwo = ({ wallet, openWallet, disconnectWallet }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleWallet = () => {
    setShowWallet(!showWallet);
  };

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }
  const handleDisconnectWallet = () => {
    window.localStorage.removeItem("connectorIdv2");
    disconnectWallet();
  };
  return (
    <>
      <div className={sticky ? "is-sticky navbar-area two" : "navbar-area"}>
        <div className="mobile-responsive-nav">
          <div className="container-fluid">
            <div className="mobile-responsive-menu">
              <div
                onClick={() => toggleMenu()}
                className="hamburger-menu hamburger-two"
              >
                {showMenu ? (
                  <i className="ri-close-line"></i>
                ) : (
                  <i className="ri-menu-line"></i>
                )}
              </div>
              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="../images/logo-2.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            showMenu ? "show desktop-nav nav-area" : "desktop-nav nav-area"
          }
        >
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light ">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="../images/logo-2.png" alt="Logo" />
                </a>
              </Link>

              <div className="nav-widget-form nav-widget-form-bg">
                <form className="search-form">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search items, Creators "
                  />
                  <button type="submit">
                    <i className="ri-search-line"></i>
                  </button>
                </form>
              </div>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav custom-header">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">Home</a>
                    </Link>

                    {/* <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link href='/' activeClassName='active'>
                          <a className='nav-link'>Home One</a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href='/index-2' activeClassName='active'>
                          <a className='nav-link'>Home Two</a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href='/index-3' activeClassName='active'>
                          <a className='nav-link'>Home Three</a>
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      Discover
                      <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/auction" activeClassName="active">
                          <a className="nav-link">Live Auction</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/discover" activeClassName="active">
                          <a className="nav-link">Discover</a>
                        </Link>
                      </li>
                      {/* <li className='nav-item'>
                        <Link href='/discover-2' activeClassName='active'>
                          <a className='nav-link'>Discover Style Two</a>
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link href="/item-details" activeClassName="active">
                          <a className="nav-link">Item Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/activity" activeClassName="active">
                      <a className="nav-link">Activity</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/item-details-multi/1">
                      <a className="nav-link">Fragmentation image</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages
                      <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/drops" activeClassName="active">
                          <a className="nav-link">Drops</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/mint" activeClassName="active">
                          <a className="nav-link">Mint</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/authors" activeClassName="active">
                          <a className="nav-link">Authors</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/profile" activeClassName="active">
                          <a className="nav-link">Profile</a>
                        </Link>
                      </li>

                      {/* <li className='nav-item'>
                        <Link href='/team' activeClassName='active'>
                          <a className='nav-link'>Team</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link href='/testimonials' activeClassName='active'>
                          <a className='nav-link'>Testimonials</a>
                        </Link>
                      </li> */}
                      {/*
                      <li className='nav-item'>
                        <a href='#' className='nav-link'>
                          User
                          <i className='ri-arrow-down-s-line'></i>
                        </a>
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link href='/login' activeClassName='active'>
                              <a className='nav-link'>Log In</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link href='/register' activeClassName='active'>
                              <a className='nav-link'>Register</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link
                              href='/forgot-password'
                              activeClassName='active'
                            >
                              <a className='nav-link'>Forgot Password</a>
                            </Link>
                          </li>
                        </ul>
                      </li> */}

                      {/* <li className='nav-item'>
                        <Link href='/terms-condition' activeClassName='active'>
                          <a className='nav-link'>Terms & Conditions</a>
                        </Link>
                      </li> */}

                      {/* <li className='nav-item'>
                        <Link href='/privacy-policy' activeClassName='active'>
                          <a className='nav-link'>Privacy Policy</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link href='/404' activeClassName='active'>
                          <a className='nav-link'>404 Page</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link href='/coming-soon' activeClassName='active'>
                          <a className='nav-link'>Coming Soon</a>
                        </Link>
                      </li> */}
                    </ul>
                  </li>

                  {/* <li className='nav-item'>
                    <a href='#' className='nav-link'>
                      Community
                      <i className='ri-arrow-down-s-line'></i>
                    </a>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link href='/about' activeClassName='active'>
                          <a className='nav-link'>About Us</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link href='/add-wallet' activeClassName='active'>
                          <a className='nav-link'>Add Wallet</a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <a href='#' className='nav-link'>
                          Blog
                          <i className='ri-arrow-down-s-line'></i>
                        </a>
                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link href='/blog-1' activeClassName='active'>
                              <a className='nav-link'>Blog Grid</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link href='/blog-2' activeClassName='active'>
                              <a className='nav-link'>Blog Left Sidebar</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link href='/blog-3' activeClassName='active'>
                              <a className='nav-link'>Blog Right Sidebar</a>
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link href='/blog-details' activeClassName='active'>
                              <a className='nav-link'>Blog Details</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/categories' activeClassName='active'>
                              <a className='nav-link'>Categories</a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/tags' activeClassName='active'>
                              <a className='nav-link'>Tags</a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className='nav-item'>
                        <Link href='/help-center' activeClassName='active'>
                          <a className='nav-link'>Help Center</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className='nav-item'>
                    <Link href='/contact' activeClassName='active'>
                      <a className='nav-link'>Contact Us</a>
                    </Link>
                  </li> */}
                </ul>
                <div className="d-flex align-items-center">
                  <div className="others-options">
                    <ul className="optional-item-list">
                      <li>
                        <Link href="/mint" activeClassName="active">
                          <a>Create</a>
                        </Link>
                      </li>
                      {!wallet.is_connect && (
                        <li>
                          <a
                            className="active global-pointer"
                            onClick={openWallet}
                          >
                            Connect Wallet
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ul className="navbar-nav m-auto hide">
                    {wallet.is_connect && (
                      <li className="nav-item">
                        <a href="#" className="nav-link wallet-address">
                          0x90e49D0...a78E
                          <i className="ri-arrow-down-s-line"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a
                              className="nav-link active global-pointer"
                              onClick={handleDisconnectWallet}
                            >
                              Disconnect
                            </a>
                          </li>
                        </ul>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="mobile-nav">
          <div
            className="search-btn global-pointer"
            onClick={() => toggleSearchModal()}
          >
            <a data-bs-toggle="modal" data-bs-target="#searchmodal">
              <i className="ri-search-line"></i>
            </a>
          </div>
        </div>

        <div className="side-nav-responsive">
          <div className="container-max">
            <div className="dot-menu" onClick={() => toggleWallet()}>
              <div className="circle-inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className={showWallet ? "container active" : "container"}>
              <div className="side-nav-inner">
                <div className="side-nav justify-content-center align-items-center">
                  <div className="side-nav-item">
                    <ul className="optional-item-list">
                      <li>
                        <Link href="/mint" activeClassName="active">
                          <a>Create</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/add-wallet" activeClassName="active">
                          <a className="active">Connect Wallet</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchModal
        showSearchModal={showSearchModal}
        toggleSearchModal={toggleSearchModal}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = {
  openWallet: openWallet,
  disconnectWallet: disconnectWallet,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTwo);
