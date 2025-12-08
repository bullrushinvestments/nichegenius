import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw from 'twin.macro';

interface IRequirement {
  name: string;
  description: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      reset();
      setError(null);
    }, 1000).catch((err) => {
      setError(err.message);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div css={tw`mb-4`}>
        <label htmlFor="name" css={tw`block text-sm font-medium text-gray-700`}>Name</label>
        <input
          id="name"
          type="text"
          {...register('requirements.0.name', { required: true })}
          aria-label="Enter requirement name"
          css={tw`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        <p css={tw`text-red-600 text-xs mt-1`}>{errors.requirements?.[0]?.name?.message}</p>
      </div>

      <div css={tw`mb-4`}>
        <label htmlFor="description" css={tw`block text-sm font-medium text-gray-700`}>Description</label>
        <textarea
          id="description"
          {...register('requirements.0.description', { required: true })}
          aria-label="Enter requirement description"
          rows={4}
          css={tw`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        <p css={tw`text-red-600 text-xs mt-1`}>{errors.requirements?.[0]?.description?.message}</p>
      </div>

      {error && (
        <p css={tw`mb-4 text-red-600`}>
          An error occurred: {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        css={[
          tw`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
          loading && tw`opacity-50 cursor-not-allowed`
        ]}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw from 'twin.macro';

interface IRequirement {
  name: string;
  description: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      reset();
      setError(null);
    }, 1000).catch((err) => {
      setError(err.message);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div css={tw`mb-4`}>
        <label htmlFor="name" css={tw`block text-sm font-medium text-gray-700`}>Name</label>
        <input
          id="name"
          type="text"
          {...register('requirements.0.name', { required: true })}
          aria-label="Enter requirement name"
          css={tw`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        <p css={tw`text-red-600 text-xs mt-1`}>{errors.requirements?.[0]?.name?.message}</p>
      </div>

      <div css={tw`mb-4`}>
        <label htmlFor="description" css={tw`block text-sm font-medium text-gray-700`}>Description</label>
        <textarea
          id="description"
          {...register('requirements.0.description', { required: true })}
          aria-label="Enter requirement description"
          rows={4}
          css={tw`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        />
        <p css={tw`text-red-600 text-xs mt-1`}>{errors.requirements?.[0]?.description?.message}</p>
      </div>

      {error && (
        <p css={tw`mb-4 text-red-600`}>
          An error occurred: {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        css={[
          tw`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
          loading && tw`opacity-50 cursor-not-allowed`
        ]}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;