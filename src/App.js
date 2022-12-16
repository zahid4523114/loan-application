import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="min-h-screen p-10">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
