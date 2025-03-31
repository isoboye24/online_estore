'use client';

import { useState } from 'react';

const SubscribeToNewsletters = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);

    // Add API call or form submission logic here
  };

  return (
    <div>
      <h3 className="font-semibold text-base text-gray-300">
        Subscribe to our newsletter
      </h3>
      <p className="mt-4 text-sm text-gray-400">
        The newest arrival, deals, and seasonal bonuses, sent to your inbox
        weekly.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeToNewsletters;
