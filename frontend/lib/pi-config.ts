export const PI_CONFIG = {
  sandbox: true, // Set to false for production
  version: "2.0",
  // Add your app's domain for OAuth redirect
  redirectUri:
    process.env.NEXT_PUBLIC_PI_REDIRECT_URI || "http://localhost:3000",
};

// Declare Pi global type
declare global {
  interface Window {
    Pi?: {
      init: (config: { version: string; sandbox?: boolean }) => Promise<void>;
      authenticate: (
        scopes: string[],
        onIncompletePaymentFound?: any
      ) => Promise<any>;
      createPayment: (payment: any) => Promise<any>;
    };
  }
}
