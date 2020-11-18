import React from 'react';
import MainBannerSlider from '../../components/main-banner-slider/MainBannerSlider';
import MainProductSlider from '../../components/main-product-slider/MainProductSlider';
import MainProductRankingSlider from '../../components/main-product-ranking-slider/MainProductRankingSlider';
import MainNewProductList from '../../components/main-new-product-list/MainNewProductList';
import MainBanner from '../../components/main-banner/MainBanner';
import MainReviewSliderList from '../../components/main-review-slider/MainReviewSlider';
const Main = () => {
  return (
    <>
      <MainBannerSlider />
      <MainProductSlider />
      <MainProductRankingSlider />
      <MainNewProductList />
      <MainBanner />
      <MainReviewSliderList />
    </>
  );
};

export default Main;
