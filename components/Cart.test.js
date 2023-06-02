/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';
import { StateContext } from '../context/StateContext';

// Mock danych kontekstu
const mockContext = {
  totalPrice: 100,
  totalQuantities: 2,
  cartItems: [
    {
      _id: '1',
      name: 'Produkt 1',
      price: 50,
      quantity: 1,
      image: ['image1.jpg'],
    },
    {
      _id: '2',
      name: 'Produkt 2',
      price: 50,
      quantity: 1,
      image: ['image2.jpg'],
    },
  ],
  setShowCart: jest.fn(),
  toggleCartItemQuanitity: jest.fn(),
  onRemove: jest.fn(),
};

// Mock funkcji zewnętrznych
jest.mock('../lib/client', () => ({
  urlFor: jest.fn(),
}));
jest.mock('../lib/getStripe', () => jest.fn());

describe('Cart component', () => {
  beforeEach(() => {
    render(
      <StateContext.Provider value={mockContext}>
        <Cart />
      </StateContext.Provider>
    );
  });

  test('renders cart items correctly', () => {
    const product1Name = screen.getByText(/Produkt 1/i);
    const product2Name = screen.getByText(/Produkt 2/i);
    const totalPrice = screen.getByText('100.00zł');

    expect(product1Name).toBeInTheDocument();
    expect(product2Name).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
  });

  test('calls toggleCartItemQuantity on minus button click', () => {
    const minusButton = screen.getByTestId('minus-button-1');

    fireEvent.click(minusButton);

    expect(mockContext.toggleCartItemQuanitity).toHaveBeenCalledWith('1', 'dec');
  });

  test('calls onRemove on remove button click', () => {
    const removeButton = screen.getByTestId('remove-button-2');

    fireEvent.click(removeButton);

    expect(mockContext.onRemove).toHaveBeenCalledWith(mockContext.cartItems[1]);
  });

  test('calls handleCheckout on checkout button click', () => {
    const checkoutButton = screen.getByText(/Zapłać/i);

    fireEvent.click(checkoutButton);

    // Dodać oczekiwane asercje dla funkcji handleCheckout
  });
});
