import { PI_CONFIG } from "./pi-config";

// Initialize Pi Network SDK
export const initializePi = async () => {
  try {
    if (typeof window !== "undefined" && window.Pi) {
      await window.Pi.init({
        version: PI_CONFIG.version,
        sandbox: PI_CONFIG.sandbox,
      });
      console.log("Pi Network SDK initialized successfully");
    }
  } catch (error) {
    console.error("Failed to initialize Pi Network SDK:", error);
    throw error;
  }
};

// Authenticate user
export const authenticateUser = async () => {
  try {
    if (typeof window !== "undefined" && window.Pi) {
      const auth = await window.Pi.authenticate(
        ["payments"],
        onIncompletePaymentFound
      );
      return auth;
    }
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
};

// Handle incomplete payments
const onIncompletePaymentFound = (payment: any) => {
  console.log("Incomplete payment found:", payment);
  // Handle incomplete payment here
};
