'use client';

import ProductCard from '@/app/components/ProductCard';
import Skeleton from 'react-loading-skeleton'; // Import Skeleton component
import { Fragment } from 'react';

const ProductList = (props) => {
  const { product, isLoadingProducts, handleFormWhatsApp } = props;
  return (
    <Fragment>
      {isLoadingProducts ? (
        // Display loading skeleton if data is being fetched
        <div className="recipe-list">
          {Array(6) // Display 6 skeletons as placeholders
            .fill()
            .map((_, idx) => (
              <div key={idx} style={{ marginBottom: '16px' }}>
                <Skeleton height={250} width="100%" /> {/* Placeholder for product card */}
              </div>
            ))}
        </div>
      ) : product && product.length > 0 ? (
        // Render actual products if available
        <div
          className=""
          style={{
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            gap: '2rem 1rem'
          }}
        >
          {product.map((prod, idx) => (
            <ProductCard
              product={prod}
              key={idx}
              styles={{
                flexShrink: '0',
                width: '200px'
              }}
              handleFormWhatsApp={(e, products, varians, quantitys) =>
                handleFormWhatsApp(e, products, varians, quantitys)
              }
            />
          ))}
        </div>
      ) : (
        // Display message if no products found
        <p
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#555',
            padding: '20px'
          }}
        >
          Tidak ada produk
        </p>
      )}
    </Fragment>
  );
};

export default ProductList;
