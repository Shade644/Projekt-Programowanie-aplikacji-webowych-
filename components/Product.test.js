/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';

describe('Product component', () => {
  const product = {
    image: 'product-image.jpg',
    name: 'Test Product',
    slug: 'test-product',
    price: 10.99,
  };

  test('renders product details correctly', () => {
    const { getByText, getByAltText } = render(<Product product={product} />);

    const productName = getByText('Test Product');
    const productPrice = getByText('10.99zł');
    const productImage = getByAltText('Test Product');

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productImage.src).toContain('product-image.jpg');
    expect(productImage.width).toBe('250');
    expect(productImage.height).toBe('250');
  });
});





