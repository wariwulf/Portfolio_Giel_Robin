import { useState, useEffect } from 'react';
import { getAuthenticatedUser } from './api/api';

export function useUser() {
    const [connectedUser, setConnectedUser] = useState(null);
    const [auth, setAuth] = useState(false);
    const [userLoading, setUserLoading] = useState(true);
  
    useEffect(() => {
      async function getUserDetails() {
        const { authenticated, user } = await getAuthenticatedUser();
        setConnectedUser(user);
        setAuth(authenticated);
        setUserLoading(false);
      }
      getUserDetails();
    }, []);
  
    // Return an array instead of an object
    return [connectedUser, auth, userLoading, setConnectedUser, setAuth];
}

  export function useFilePreview(file) {
    const fileInput = file[0] ?? [];
    const [imgSrc, setImgSrc] = useState(null);
  
    useEffect(() => {
      if (file && file[0]?.length > 0) {
        const newUrl = URL.createObjectURL(file[0][0]);
  
        if (newUrl !== imgSrc) {
          setImgSrc(newUrl);
        }
      }
    }, [fileInput[0]?.name]);
  
    return [imgSrc, setImgSrc];
  }
  