import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

// Check if we're hydrating pre-rendered content (for react-snap)
if (container.hasChildNodes()) {
    hydrateRoot(container, <App />);
} else {
    createRoot(container).render(<App />);
}
