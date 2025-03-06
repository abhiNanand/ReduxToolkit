import React from 'react';
import { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation } from './apiSlice';

const App = () =>{
 // Fetching all users
const { data: users, error, isLoading } = useGetUsersQuery();

// Fetching a single user by ID
const { data: user } = useGetUserByIdQuery(1); // Fetch user with ID 1

// Mutation to create a new user
const [createUser] = useCreateUserMutation();

const handleAddUser = async () => {
  await createUser({ name: 'John Doe', email: 'john@example.com' });
};

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error fetching users</p>;

return (
  <div>
    <h2>Users List</h2>
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>

    <h2>Single User</h2>
    {user && <p>{user.name}</p>}

    <button onClick={handleAddUser}>Add User</button>
  </div>
);
};

export default App;