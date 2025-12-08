import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more assertion methods
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component', () => {
  const mockUseExternalService = (data?: any) => ({
    loading: false,
    error: null,
    data: data || {},
    fetchData: jest.fn().mockResolvedValue(data),
  });

  beforeEach(() => {
    (useExternalService as jest.Mock).mockReturnValue(mockUseExternalService());
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalService as jest.Mock).mockReturnValue(mockUseExternalService({ loading: true }));
    render(<CoreFunctionalityComponent />);

    await waitFor(() => screen.getByTestId('loading-spinner'));
  });

  test('displays error message if fetching data fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalService as jest.Mock).mockReturnValue(mockUseExternalService({ error: new Error(errorMessage) }));
    render(<CoreFunctionalityComponent />);

    await waitFor(() => screen.getByText(errorMessage));
  });

  test('handles user interaction with buttons', () => {
    const mockHandleClick = jest.fn();
    render(<CoreFunctionalityComponent onClick={mockHandleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockHandleClick).toHaveBeenCalled();
  });

  test('validates form inputs and shows error messages for invalid data', async () => {
    render(<CoreFunctionalityComponent />);

    fireEvent.change(screen.getByLabelText(/input label/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button'));
    
    await waitFor(() => screen.getByText(/error message/i));
  });

  test('ensures component is accessible', () => {
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
    expect(screen.getByLabelText(/input label/i)).toBeVisible();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for more assertion methods
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component', () => {
  const mockUseExternalService = (data?: any) => ({
    loading: false,
    error: null,
    data: data || {},
    fetchData: jest.fn().mockResolvedValue(data),
  });

  beforeEach(() => {
    (useExternalService as jest.Mock).mockReturnValue(mockUseExternalService());
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when data is being fetched', async () => {
    (useExternalService as jest.Mock).mockReturnValue(mockUseExternalService({ loading: true }));
    render(<CoreFunctionalityComponent />);

    await waitFor(() => screen.getByTestId('loading-spinner'));
  });

  test('displays error message if fetching data fails', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalService as jest.Mock).mockReturnValue(mockUseExternalService({ error: new Error(errorMessage) }));
    render(<CoreFunctionalityComponent />);

    await waitFor(() => screen.getByText(errorMessage));
  });

  test('handles user interaction with buttons', () => {
    const mockHandleClick = jest.fn();
    render(<CoreFunctionalityComponent onClick={mockHandleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockHandleClick).toHaveBeenCalled();
  });

  test('validates form inputs and shows error messages for invalid data', async () => {
    render(<CoreFunctionalityComponent />);

    fireEvent.change(screen.getByLabelText(/input label/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button'));
    
    await waitFor(() => screen.getByText(/error message/i));
  });

  test('ensures component is accessible', () => {
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
    expect(screen.getByLabelText(/input label/i)).toBeVisible();
  });
});