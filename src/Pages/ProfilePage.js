import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import AddUserForm from "../Components/AddUserForm/AddUserForm";

const ProfilePage = (props) => {
  const { isAuthenticated, user } = useAuth0();

  if (!user) {
    return null;
  }

  const formInfoHandler = (formData) => {
    console.log(formData);
  }

  const userSub = user.sub;
  const getUserID = userSub.split("|");
  const userID = getUserID[1];

  console.log(userID);

  return (
    <div>
        <AddUserForm onFormInfo={formInfoHandler} />
    </div>
  );
};

export default ProfilePage;
