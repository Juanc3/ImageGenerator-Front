import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/(subcomponents)/Header";
import Home from "../components/(pages)/Home";
import CreatePost from "../components/(pages)/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
