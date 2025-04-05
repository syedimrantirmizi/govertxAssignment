import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage/index";
import Analytics from "./Pages/Analytics/index";
function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <Routes>
          <Route path="/" element = {<HomePage />}  />
          <Route path="/analytics" element = {<Analytics />}  />
        </Routes>
      </div>
    </>
  );
}

export default App;
