import React from 'react';
import AddUserForm from '../Components/AddUserForm/AddUserForm';

const AdminPage = () => {



    const formInfoHandler = (formData) => {
        const id = 123;
        const userPostInfo = {
            ...formData,
            id: id,
        };
        console.log(userPostInfo);
      }

    return (
        <div>
            <h1>AdminPage</h1>

            <AddUserForm onFormSubmit={formInfoHandler} />
        </div>
    );
};

export default AdminPage;