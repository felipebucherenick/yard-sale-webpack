import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductsList.scss';

const ProductsList = () => {
    return (
        <section className="ProductsList">
        <div className="cards-container">
            <ProductItem/>
        </div>
        </section>
    );
}

export default ProductsList;