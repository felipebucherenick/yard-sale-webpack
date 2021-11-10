import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductsList.scss';
import useGetProducts from '@hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductsList = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-conatiner">
      <div className="ProductsList">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
