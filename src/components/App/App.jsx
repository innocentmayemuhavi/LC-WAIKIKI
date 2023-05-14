import { BrowserRouter } from "react-router-dom";
import { RoutesComponent } from "../Routes/index.jsx";
import "./App.css";
import { AuthProvider } from "../Context/index";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
