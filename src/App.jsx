import { BrowserRouter, Route , Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";

function App() {

  return(
  <>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/> {/*this will lead to Home */}
        <Route path="*" element={<NotFound/>} /> {/*anything that is not defined will land over here*/}
        <Route/>
      </Routes>
      </BrowserRouter>
  </>
  );
}

export default App
