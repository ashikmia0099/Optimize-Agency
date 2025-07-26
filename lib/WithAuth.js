"use client";

import React, { useEffect } from "react"; // ✅ Add useEffect here
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation"; // ✅ use next/navigation for App Router

function WithAuth(Component) {
  return function AuthWrapper(props) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user?.email) {
        router.push("/Auth"); // Redirect to login page
      }
    }, [user, loading]);

    if (loading || !user?.email) {
      return (
        <div className=" flex items-center justify-center mx-auto min-h-screen pt-40">
          <span className="loading loading-spinner loading-xs"></span>
          <span className="loading loading-spinner loading-sm"></span>
          <span className="loading loading-spinner loading-md"></span>
          <span className="loading loading-spinner loading-lg"></span>
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      );
    }

    return <Component {...props} />;
  };
}

export default WithAuth;
