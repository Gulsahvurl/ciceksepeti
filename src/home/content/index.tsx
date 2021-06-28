import * as React from 'react';
import BreadCrumbCustom from '../../components/bread-crumb';
import Banner from './banner';
import Categories from './categories';
import Products from './products';
import './style.scss';

interface IContentProps {}

const Content: React.FunctionComponent<IContentProps> = () => {
  return (
    <>
      <BreadCrumbCustom></BreadCrumbCustom>
      <Categories></Categories>
      <Products></Products>
      <Banner></Banner>
    </>
  );
};

export default Content;
