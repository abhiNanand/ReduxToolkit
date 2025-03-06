// import React, { useState } from 'react';
// import { 
//   useGetQuotesQuery, 
//   useAddQuoteMutation, 
//   useUpdateQuoteMutation, 
//   useDeleteQuoteMutation 
// } from './apiSlice';

// const App = () => {
//   const { data: quotes, error, isLoading } = useGetQuotesQuery();
//   const [addQuote] = useAddQuoteMutation();
//   const [updateQuote] = useUpdateQuoteMutation();
//   const [deleteQuote] = useDeleteQuoteMutation();

//   const [newQuote, setNewQuote] = useState('');
//   const [newAuthor, setNewAuthor] = useState('');

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching quotes.</p>;

//   const handleAddQuote = async () => {
//     if (!newQuote.trim() || !newAuthor.trim()) {
//       alert("Quote and author cannot be empty.");
//       return;
//     }
//     await addQuote({ quote: newQuote, author: newAuthor }).unwrap();
//     setNewQuote('');
//     setNewAuthor('');
//   };

//   const handleUpdateQuote = async (quote) => {
//     await updateQuote({ id: quote.id, quote: quote.quote + ' (Updated)', author: quote.author }).unwrap();
//   };

//   const handleDeleteQuote = async (id) => {
//     await deleteQuote(id).unwrap();
//   };

//   return (
//     <div>
//       <h1>Quotes</h1>
//       <input 
//         value={newQuote} 
//         onChange={(e) => setNewQuote(e.target.value)} 
//         placeholder="New Quote" 
//       />
//       <input 
//         value={newAuthor} 
//         onChange={(e) => setNewAuthor(e.target.value)} 
//         placeholder="Author" 
//       />
//       <button onClick={handleAddQuote}>Add Quote</button>
      
//       <ul>
//         {quotes?.map((quote) => (
//           <li key={quote.id}>
//             "{quote.quote}" - {quote.author}
//             <button onClick={() => handleUpdateQuote(quote)}>Update</button>
//             <button onClick={() => handleDeleteQuote(quote.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;



//just show authorname
// import React from 'react';
// import { useGetQuotesQuery } from './apiSlice';

// const App = () => {
//   const { data: quotes, error, isLoading } = useGetQuotesQuery();

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching quotes.</p>;

//   return (
//     <div>
//       <h1>Authors</h1>
//       <ul>
//         {quotes?.map((quote) => (
//           <li key={quote.id}>{quote.author}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

 
// import React, { useState } from 'react';
// import { useGetNamesQuery, useAddNameMutation, useDeleteNameMutation } from './apiSlice';

// const App = () => {
//   const { data: names, error, isLoading } = useGetNamesQuery();
//   const [addName] = useAddNameMutation();
//   const [deleteName] = useDeleteNameMutation();
//   const [newName, setNewName] = useState('');

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching names.</p>;

//   const handleAddName = async () => {
//     if (!newName.trim()) return alert('Name cannot be empty!');
//     await addName({ name: newName }).unwrap();
//     setNewName('');
//   };

//   const handleDeleteName = async (id) => {
//     await deleteName(id).unwrap();
//   };

//   return (
//     <div>
//       <h1>Names List</h1>
//       <input 
//         value={newName} 
//         onChange={(e) => setNewName(e.target.value)} 
//         placeholder="Enter Name" 
//       />
//       <button onClick={handleAddName}>Add Name</button>

//       <ul>
//         {names?.map((person) => (
//           <li key={person.id}>
//             {person.name} 
//             <button onClick={() => handleDeleteName(person.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

//id 123 . just show and add name:

// import React,{useState} from 'react';
// import { useGetNamesQuery,useAddNameMutation } from './apiSlice';

// const App = () => {

//   const { data: names, error, isLoading } = useGetNamesQuery();
//   const [addName] =useAddNameMutation();
//   const [name,setName]=useState('');

// const handleSubmit = async(e)=>
// {
   
//   e.preventDefault();
//   await addName({name}).unwrap();
//   setName('');
// }

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching names.</p>;

//   return (
//     <div>
//      <form onSubmit={handleSubmit}>
//       <label htmlFor="fname">Name:</label>
//       <input type="text" id="fname" value={name} name="fname" onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
//       <br/>
     
//       <input type="submit" value="submit"/>
//      </form>



//       <h3>Names List</h3>
//       <ul>
//         {names?.map((person) => (
//           <li key={person.id}>
//             {person.id}. {person.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


// <label for="id">Id:</label>
{/* <input type="text" id="id" name="id"/>
<br/> */}

// e.preventDefault();
// This prevents the default form submission behavior.
// Without this, the form would refresh the page when submitted, which is not what we want in a React app.



 {/* 
    The issue is that after adding a new name, your UI does not update immediately. The data only updates when you refresh because useGetNamesQuery() is fetching stale data from the cache.

Why is this happening?
RTK Query uses caching – When you call useGetNamesQuery(), it caches the fetched data.
Adding a new name does not invalidate the cache – The UI does not refetch the updated list automatically after adding a new name.
You need to trigger a refetch manually – This can be done using refetching or cache invalidation.

How does this fix it?
providesTags: ['Names'] marks the getNames cache with a Names tag.
invalidatesTags: ['Names'] tells RTK Query to refetch the names after a new name is added.
This ensures the UI updates immediately without needing a refresh.

No changes needed in your component. Just make sure apiSlice.js has the above changes.

ye sab ja kr slice me add karna hai. 
tagTypes: ['Names'], // Define a tag for caching
providesTags: ['Names'], // Tags the cache
invalidatesTags: ['Names'], // ✅ This forces a refetch


and we can also use refetch:
  const { data: names, error, isLoading, refetch } = useGetNamesQuery(); // Get refetch function

*/}

//updating UI when name added.

import React, { useState } from 'react';
import { useGetNamesQuery, useAddNameMutation } from './apiSlice';

const App = () => {
  const { data: names, error, isLoading, refetch } = useGetNamesQuery(); // Get refetch function
  const [addName] = useAddNameMutation();
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addName({ name }).unwrap(); // Send request to API
      setName('');
      refetch(); // ✅ Manually trigger a data refetch
    } catch (error) {
      console.error('Error adding name:', error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching names.</p>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Name:</label>
        <input
          type="text"
          id="fname"
          value={name}
          name="fname"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <h3>Names List</h3>
      <ul>
        {names?.map((person) => (
          <li key={person.id}>
            {person.id}. {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
