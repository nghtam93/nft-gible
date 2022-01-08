import NavbarTwo from '../../components/Layout/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import ItemDetailsArea from '../../components/ItemDetails/cut-image';
import TrendingArea from '../../components/Common/TrendingArea';
import Footer from '../../components/Layout/Footer';
import Copyright from '../../components/Common/Copyright';
import { useRouter } from 'next/router'

const ItemDetails = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <NavbarTwo />
      <PageBanner
        bannerHeading='Discover Item Details'
        parentTitle='Discover'
        pageTitle='Item Details'
        bg='inner-bg12'
      />
      <ItemDetailsArea
        id={id}
      />
      <TrendingArea bg="trending-area-bg-two"/>
      <Footer />
      <Copyright />
    </>
  );
};

export default ItemDetails;
