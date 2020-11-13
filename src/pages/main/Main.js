import React from 'react';
import MainBannerSlider from '../../components/main-banner-slider/MainBannerSlider';
import MainProductSlider from '../../components/main-product-slider/MainProductSlider';
import MainProductRankingSliderCard from '../../components/main-product-ranking-slider/MainProductRankingSlider';
const Main = () => {
  return (
    <>
      <MainBannerSlider />
      <MainProductSlider />
      <MainProductRankingSliderCard />
    </>
  );
};

export default Main;
