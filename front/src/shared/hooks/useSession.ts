"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export interface IUserProfile {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  username: string;
}

interface SessionHook {
  user: IUserProfile | null;
  isAuthorized: boolean;
}

const useSession = () => {
  const [user, setUser] = useState<IUserProfile | null>(null);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("", {
          headers: {
            Authorization: `Token`,
          },
        });
        if (response.status === 200) {
          setIsAuthorized(true);
          setUser(response.data.results);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return {
    user,
    isAuthorized,
  };
};

export default useSession;
