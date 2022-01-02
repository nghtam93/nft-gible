import NavbarTwo from '../components/Layout/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ActivityArea from '../components/Activity/ActivityArea';
import TrendingArea from '../components/Common/TrendingArea';
import Footer from '../components/Layout/Footer';
import Copyright from '../components/Common/Copyright';

const Drops = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Recent Activity'
        parentTitle='Activity'
        pageTitle=''
        bg='inner-bg8'
      />
      <ActivityArea/>
      <TrendingArea bg="trending-area-bg-two"/>
      <Footer />
      <Copyright />
    </>
  );
};

export default Drops;
