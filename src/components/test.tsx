import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Testimonial {
  id: string;
  name: string;
  message: string;
}

const WriteTest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message cannot exceed 500 characters')
      .required('Message is required'),
  });

  const formik = useFormik<Testimonial>({
    initialValues: {
      id: '',
      name: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert('Testimonial submitted successfully!');
      } catch (err) {
        setError('Failed to submit testimonial. Please try again later.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-input w-full ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
            aria-label="Name"
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="mt-1 text-sm text-red-600" id="name-error">
              {formik.errors.name}
            </p>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={4}
            className={`form-textarea w-full ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
            aria-label="Message"
          />
          {formik.touched.message && formik.errors.message ? (
            <p className="mt-1 text-sm text-red-600" id="message-error">
              {formik.errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition ease-in-out duration-150 ${
            loading ? 'cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>
    </div>
  );
};

export default WriteTest;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Testimonial {
  id: string;
  name: string;
  message: string;
}

const WriteTest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message cannot exceed 500 characters')
      .required('Message is required'),
  });

  const formik = useFormik<Testimonial>({
    initialValues: {
      id: '',
      name: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert('Testimonial submitted successfully!');
      } catch (err) {
        setError('Failed to submit testimonial. Please try again later.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-input w-full ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
            aria-label="Name"
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="mt-1 text-sm text-red-600" id="name-error">
              {formik.errors.name}
            </p>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={4}
            className={`form-textarea w-full ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
            aria-label="Message"
          />
          {formik.touched.message && formik.errors.message ? (
            <p className="mt-1 text-sm text-red-600" id="message-error">
              {formik.errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition ease-in-out duration-150 ${
            loading ? 'cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Submitting...' : 'Submit Testimonial'}
        </button>
      </form>
    </div>
  );
};

export default WriteTest;