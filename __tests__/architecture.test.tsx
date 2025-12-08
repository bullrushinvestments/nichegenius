import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitecture from './DesignArchitecture';

jest.mock('./api', () => ({
  fetchProducts: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockFetchProducts = require('./api').fetchProducts;

  beforeEach(() => {
    mockFetchProducts.mockClear();
  });

  test('renders loading state when data is being fetched', async () => {
    render(<DesignArchitecture />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching products fails', async () => {
    mockFetchProducts.mockRejectedValue(new Error('Failed to fetch'));
    render(<DesignArchitecture />);

    await waitFor(() => {
      expect(screen.getByText(/error: failed to fetch/i)).toBeInTheDocument();
    });
  });

  test('renders product list with fetched data', async () => {
    const products = [
      { id: '1', name: 'Product A' },
      { id: '2', name: 'Product B' },
    ];
    mockFetchProducts.mockResolvedValue(products);
    render(<DesignArchitecture />);

    await waitFor(() => {
      expect(screen.getAllByText(/product a/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/product b/i)[0]).toBeInTheDocument();
    });
  });

  test('filters products based on search input', async () => {
    const products = [
      { id: '1', name: 'Product A' },
      { id: '2', name: 'Product B' },
    ];
    mockFetchProducts.mockResolvedValue(products);
    render(<DesignArchitecture />);

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText(/search/i), {
        target: { value: 'A' },
      });
      expect(screen.getAllByText(/product a/i)[0]).toBeInTheDocument();
      expect(screen.queryAllByText(/product b/i).length).toBe(0);
    });
  });

  test('displays no results message when search returns empty', async () => {
    const products = [
      { id: '1', name: 'Product A' },
      { id: '2', name: 'Product B' },
    ];
    mockFetchProducts.mockResolvedValue(products);
    render(<DesignArchitecture />);

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText(/search/i), {
        target: { value: 'C' },
      });
      expect(
        screen.getByText(/no results for your search query/i)
      ).toBeInTheDocument();
    });
  });

  test('component is accessible', async () => {
    const products = [
      { id: '1', name: 'Product A' },
      { id: '2', name: 'Product B' },
    ];
    mockFetchProducts.mockResolvedValue(products);
    render(<DesignArchitecture />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/search/i)).toHaveAttribute(
        'aria-label',
        /search products/i
      );
      const searchInput = screen.getByRole('combobox');
      fireEvent.change(searchInput, { target: { value: 'A' } });
      const productLink = screen.getByRole('link', {
        name: /product a/i,
      });
      expect(productLink).toHaveAttribute('href', `/products/1`);
    });
  });

  test('handles edge cases such as empty data and undefined values', async () => {
    mockFetchProducts.mockResolvedValue([]);
    render(<DesignArchitecture />);

    await waitFor(() => {
      expect(
        screen.getByText(/no products available at the moment/i)
      ).toBeInTheDocument();
    });
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitecture from './DesignArchitecture';

jest.mock('./api', () => ({
  fetchProducts: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  const mockFetchProducts = require('./api').fetchProducts;

  beforeEach(() => {
    mockFetchProducts.mockClear();
  });

  test('renders loading state when data is being fetched', async () => {
    render(<DesignArchitecture />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when fetching products fails', async () => {
    mockFetchProducts.mockRejectedValue(new Error('Failed to fetch'));
    render(<DesignArchitecture />);

    await waitFor(() => {
      expect(screen.getByText(/error: failed to fetch/i)).toBeInTheDocument();
    });
  });

  test('renders product list with fetched data', async () => {
    const products = [
      { id: '1', name: 'Product A' },
      { id: '2', name: 'Product B' },
    ];
    mockFetchProducts.mockResolvedValue(products);
    render(<DesignArchitecture />);

    await waitFor(() => {
      expect(screen.getAllByText(/product a/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/product b/i)[0]).toBeInTheDocument();
    });
  });

  test('filters products based on search input', async () => {
    const products = [
      { id: '1', name: 'Product A' },
      { id: '2', name: 'Product B' },
    ];
    mockFetchProducts.mockResolvedValue(products);
    render(<DesignArchitecture />);

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText(/search/i), {
        target: { value: 'A' },
      });
      expect(screen.getAllByText(/product a/i)[0]).toBeInTheDocument();
      expect(screen.queryAllByText(/product b/i).length).toBe(0);
    });
  });

  test('displays no results message when search returns empty', async () => {
    const products = [
      { id: '1', name: 'Product A' },
      { id: '2', name: 'Product B' },
    ];
    mockFetchProducts.mockResolvedValue(products);
    render(<DesignArchitecture />);

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText(/search/i), {
        target: { value: 'C' },
      });
      expect(
        screen.getByText(/no results for your search query/i)
      ).toBeInTheDocument();
    });
  });

  test('component is accessible', async () => {
    const products = [
      { id: '1', name: 'Product A' },
      { id: '2', name: 'Product B' },
    ];
    mockFetchProducts.mockResolvedValue(products);
    render(<DesignArchitecture />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/search/i)).toHaveAttribute(
        'aria-label',
        /search products/i
      );
      const searchInput = screen.getByRole('combobox');
      fireEvent.change(searchInput, { target: { value: 'A' } });
      const productLink = screen.getByRole('link', {
        name: /product a/i,
      });
      expect(productLink).toHaveAttribute('href', `/products/1`);
    });
  });

  test('handles edge cases such as empty data and undefined values', async () => {
    mockFetchProducts.mockResolvedValue([]);
    render(<DesignArchitecture />);

    await waitFor(() => {
      expect(
        screen.getByText(/no products available at the moment/i)
      ).toBeInTheDocument();
    });
  });
});