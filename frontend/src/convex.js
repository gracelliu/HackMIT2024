import { ConvexProvider, ConvexReactClient } from "convex/react";

// Use the CONVEX_URL from the .env.local file created in your backend setup
const convex = new ConvexReactClient(process.env.REACT_APP_CONVEX_URL);

export { convex, ConvexProvider };
