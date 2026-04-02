import React, { useEffect } from 'react';
import NoticeTickerBand from '../components/ui/NoticeTickerBand';
import HeroSlider from '../components/sections/HeroSlider';
import StatsBar from '../components/sections/StatsBar';
import CitizenServices from '../components/sections/CitizenServices';
import Leadership from '../components/sections/Leadership';
import NewsAndNotices from '../components/sections/NewsAndNotices';
import DepartmentsGrid from '../components/sections/DepartmentsGrid';
import BalochistanGlance from '../components/sections/BalochistanGlance';
import Gallery from '../components/sections/Gallery';
import ImportantLinks from '../components/sections/ImportantLinks';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Government of Balochistan | Official Portal';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <NoticeTickerBand />
      <HeroSlider />
      <StatsBar />
      <CitizenServices />
      <Leadership />
      <NewsAndNotices />
      <DepartmentsGrid />
      <BalochistanGlance />
      <Gallery />
      <ImportantLinks />
    </div>
  );
}
