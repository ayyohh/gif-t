import { useAuth0 } from "@auth0/auth0-react";
import { useState, useCallback, useEffect } from "react";

import AddUserForm from "../Components/AddUserForm/AddUserForm";

const ProfilePage = (props) => {
  const { user } = useAuth0();
  const [id, setId] = useState("");
  const [showForm, setShowForm] = useState(true);



  const fetchUserData = useCallback(async () => {
    try {
      if (!user) {
        return null;
      } else {
        //user.sub is id from auth0, first part is google or auth so split at | and access just the number
        // which we'll use as id for user profile in our database
        const getUserID = user.sub.split("|");
        const userID = getUserID[1];
        setId(userID);

        const response = await fetch(`http://localhost:5001/users/${userID}`);

        if (!response.ok) {
          throw new Error("Something not good jah feel");
        }

        const data = await response.json();

        if (data === null) {
          setShowForm(true);
        } else {
          setShowForm(false);
        }
        
      }
      
    } catch (error) {
      //setError(error.message);
      console.log(error);
    }
    //setIsLoading(false);
  }, [user]);


  
  const formInfoHandler = useCallback(
    (formData) => {
      //deconstructs the formData object we get from the AddUserForm and inserts the id we get from Auth0
      const userPostInfo = {
        ...formData,
        userID: id,
      };
      console.log(userPostInfo);

      fetch("http://localhost:5001/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...userPostInfo,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.log("Error"));
      setShowForm(false);
    },
    [id]
  );

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData, formInfoHandler]);

  return (
    <div>
      {!showForm && <p>this is where user data can go</p>}
      {showForm && <AddUserForm onFormInfo={formInfoHandler} />}
    </div>
  );
};

export default ProfilePage;
