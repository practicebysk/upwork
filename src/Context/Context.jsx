import React, { Children } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

function ContextState(props) {
  const host = "http://localhost:3000";

  const [getuser, setGetuser] = useState();
  useEffect(() => {
    const getNote = async () => {
      try {
        const response = await fetch(`${host}/api/auth/client/getuser`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });

        if (response.ok) {
          const json = await response.json();
          setGetuser(json);
        } else {
          console.error("Error fetching user:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getNote();
    // console.log(getuser);
  }, []);

  return (
    <div>
      <Context.Provider value={{getuser}}>{props.children}</Context.Provider>
    </div>
  );
}

export default ContextState;
