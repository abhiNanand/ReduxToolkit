//for just showing name:

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }), 
//   endpoints: (builder) => ({
//     getNames: builder.query({
//       query: () => 'names',
//     }),
//   }),
// });

// export const { useGetNamesQuery } = apiSlice;



//for showing and adding name: id:123
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }), 
  endpoints: (builder) => ({
    getNames: builder.query({
      query: () => 'names',
    }),
    addName:builder.mutation({query:(newName)=>({url:'names',method:'POST',body:newName,}),}),
  }),
});

export const { useGetNamesQuery, useAddNameMutation } = apiSlice;

//'POST' is used to create new data on the server.

// //url: 'names'
// Specifies the endpoint where the request should be sent.
// This means the request will be sent to https://your-api-base-url/names (assuming names is appended to the base URL).









//https://www.freecodecamp.org/news/how-to-integrate-rtk-query-with-redux-toolkit/#:~:text=At%20the%20core%20of%20RTK,each%20of%20the%20defined%20endpoints. check this link how to use db.json.

//json-server --watch data\db.json --port 8080