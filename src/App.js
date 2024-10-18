import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Login } from './Components/Login';
import { UserTable } from './Components/UserTable';
import { AddUser } from './Components/Add';

function App() {
  const [userData, setUserData] = useState([
    {
      ID: 1,
      FullName: 'Ibrahim Ahmed',
      PhoneNumber: '03431938944',
      Address: 'Malikpura',
    },
    {
      ID: 2,
      FullName: 'Waqar Ahmed',
      PhoneNumber: '03225067420',
      Address: 'USA',
    },
    {
      ID: 3,
      FullName: 'Ahmed Khan',
      PhoneNumber: '03355080815',
      Address: 'Mansehra',
    },
  ]);

  function handleAddUser(newUser) {
    setUserData([...userData, newUser]); // Add the new user to the userData state
  }

  return (
  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/UserTable"
          element={<UserTable userData={userData} setUserData={setUserData} />}
        />
        <Route
          path="/addUser"
          element={<AddUser onAdd={handleAddUser} />}
        />
      </Routes>
   
  );
}

export default App;
