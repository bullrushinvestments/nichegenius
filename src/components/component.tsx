import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specifications, setSpecifications] = useState<BusinessSpec[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecifications = async () => {
      try {
        const response = await axios.get('/api/business-specifications');
        setSpecifications(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load business specifications:', err);
        setError('An error occurred while loading the data.');
        setLoading(false);
      }
    };

    fetchSpecifications();
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className={clsx('p-6', isTabletOrMobile ? 'bg-gray-50' : '')}>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <>
          <h2 className="text-xl font-bold mb-4">Business Specifications</h2>
          <ul role="list" aria-label="List of business specifications">
            {specifications.map((spec) => (
              <li
                key={spec.id}
                className="mb-3 p-3 border rounded bg-white"
                tabIndex={0} // For keyboard navigation
              >
                <h3 className="text-lg font-semibold">{spec.name}</h3>
                <p dangerouslySetInnerHTML={{ __html: spec.description }} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specifications, setSpecifications] = useState<BusinessSpec[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecifications = async () => {
      try {
        const response = await axios.get('/api/business-specifications');
        setSpecifications(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load business specifications:', err);
        setError('An error occurred while loading the data.');
        setLoading(false);
      }
    };

    fetchSpecifications();
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className={clsx('p-6', isTabletOrMobile ? 'bg-gray-50' : '')}>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <>
          <h2 className="text-xl font-bold mb-4">Business Specifications</h2>
          <ul role="list" aria-label="List of business specifications">
            {specifications.map((spec) => (
              <li
                key={spec.id}
                className="mb-3 p-3 border rounded bg-white"
                tabIndex={0} // For keyboard navigation
              >
                <h3 className="text-lg font-semibold">{spec.name}</h3>
                <p dangerouslySetInnerHTML={{ __html: spec.description }} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;