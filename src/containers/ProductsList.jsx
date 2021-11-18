import React from 'react';
import useGetProducts from '@hooks/useGetProducts';

import ProductItem from '@components/ProductItem';
import NavBarMobile from '@components/NavBarMobile';

import downArrow from '@icons/down-arrow.png';

import '@styles/ProductsList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductsList = () => {
  const products = useGetProducts(API);
  return (
    <section className="ProductsList">
      <div className="ProductsList__top">
        <input type="text" className="search-bar" placeholder="Search product" />
        <NavBarMobile />
        <div className="order-by">
          <p>Order: </p>
          <p>Most Recent</p>
          <img src={downArrow} alt="" />
        </div>
      </div>
      <div className="Products-container">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
