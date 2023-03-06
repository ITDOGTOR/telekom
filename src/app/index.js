import {Pages, PAGES_COUNT} from 'entities/page/model';
import Company from 'pages/company';
import Contacts from 'pages/contacts';
import Home from 'pages/home';
import MapOffices from 'pages/map-offices';
import Partners from 'pages/partners';
import ProjectsFour from 'pages/projects-four';
import ProjectsOne from 'pages/projects-one';
import ProjectsThree from 'pages/projects-three';
import ProjectsTwo from 'pages/projects-two';
import {useRef} from 'react';
import Layout from 'shared/ui/layout';
import Footer from 'widgets/footer';
import Header from 'widgets/header';
import Points from 'widgets/points';

import {useFullPageScroll} from './lib/useFullPageScroll';

export default function App() {
  const footerRef = useRef(null);
  const {touchEnd, touchStart, wheel, setPageNumber, pageNumber} = useFullPageScroll();

  const position =
    pageNumber === PAGES_COUNT
      ? -window.innerHeight * (pageNumber - 1) - footerRef.current.offsetHeight
      : -window.innerHeight * pageNumber;

  const isPointsVisible = pageNumber >= Pages.COMPANY && pageNumber < Pages.MAP_OFFICES;

  return (
    <div className="page" onWheel={wheel} onTouchEnd={touchEnd} onTouchStart={touchStart}>
      <Header pageNumber={pageNumber} setPage={setPageNumber} />
      {isPointsVisible && <Points setPage={setPageNumber} pageNumber={pageNumber} />}

      <Layout style={{transform: `translateY(${position}px)`}} footer={<Footer currentRef={footerRef} />}>
        <Home />
        <Company isActive={pageNumber === Pages.COMPANY} />
        <ProjectsOne isActive={pageNumber === Pages.PROJECTS_ONE} />
        <ProjectsTwo isActive={pageNumber === Pages.PROJECTS_TWO} />
        <ProjectsThree isActive={pageNumber === Pages.PROJECTS_THREE} />
        <ProjectsFour />
        <Partners isActive={pageNumber === Pages.PARTNERS} />
        <Contacts isActive={pageNumber === Pages.CONTACTS} />
        <MapOffices />
      </Layout>
    </div>
  );
}
