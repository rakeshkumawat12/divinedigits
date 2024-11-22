import DateInput from "./pages/DateInput";
import Home from "./pages/Home";
import Main from "./pages/Main";
import SignatureInsights from "./pages/SignatureInsights";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dateinput" element={<DateInput />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signatureinsights" element={<SignatureInsights />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
