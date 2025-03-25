"use client";

import { initializePi } from "@/lib/pi-util";
import { useEffect, useState } from "react";
// import { initializePi } from "../utils/pi";

export default function PiTest() {
  const [authData, setAuthData] = useState<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    initializePi().catch((err) => {
      setError("Failed to initialize Pi SDK");
      console.error(err);
    });
  }, []);

  const handleAuthenticate = async () => {
    try {
      if (typeof window !== "undefined" && window.Pi) {
        const auth = await window.Pi.authenticate(
          ["payments"],
          onIncompletePaymentFound
        );
        setAuthData(auth);
        console.log("Authentication successful:", auth);
      }
    } catch (err) {
      setError("Authentication failed");
      console.error(err);
    }
  };

  const onIncompletePaymentFound = (payment: any) => {
    console.log("Incomplete payment found:", payment);
    // Handle incomplete payment here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pi Network Test</h1>

      <button
        onClick={handleAuthenticate}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Authenticate with Pi
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {authData && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          <h2 className="font-bold">Authentication Successful!</h2>
          <pre className="mt-2 whitespace-pre-wrap">
            {JSON.stringify(authData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
