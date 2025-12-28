import { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import { scrollReveal } from "./utils/scrollReveal";

function App() {
  useEffect(() => {
    scrollReveal();
  }, []);

  return <AppRouter />;
}

export default App;
