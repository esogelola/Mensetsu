import React from "react";

import { getAuth, onAuthStateChanged } from "@firebase/auth";
function useAuth() {
  const [authUser, setAuthUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return [authUser, setAuthUser, error, setError];
}

export default useAuth;
