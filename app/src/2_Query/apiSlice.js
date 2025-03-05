import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Creating an API slice using RTK Query
export const apiSlice = createApi({
  reducerPath: 'api', // This defines the slice name in the Redux store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }), // Base URL for all API requests
  endpoints: (builder) => ({
    
    // Endpoint to get all users
    getUsers: builder.query({
      query: () => '/users', // API call: GET https://jsonplaceholder.typicode.com/users
    }),

    // Endpoint to get a user by ID
    getUserById: builder.query({
      query: (id) => `/users/${id}`, // API call: GET https://jsonplaceholder.typicode.com/users/:id
    }),

    // Endpoint to create a new user
    createUser: builder.mutation({
      query: (newUser) => ({
        url: '/users', // API call: POST https://jsonplaceholder.typicode.com/users
        method: 'POST',
        body: newUser, // Sending new user data in request body
      }),
    }),
  }),
});

// Exporting auto-generated hooks for use in React components
export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation } = apiSlice;
