"use client";

import { useEffect } from "react";
import { isAuthenticatedClient, redirectToLogin } from "../../lib/auth";

export default function ProtectedLayout({ children }) {
  useEffect(() => {
    if (!isAuthenticatedClient()) {
      redirectToLogin();
    }
  }, []);

  if (!isAuthenticatedClient()) {
    return null; // Prevent rendering until redirect happens
  }

  return <>{children}</>;
}