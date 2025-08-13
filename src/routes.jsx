import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import AddContact from "./pages/AddContact"; 
import EditContact from "./components/editContact";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route path="/" element={<Home />} />
      <Route path="/addcontact" element={<AddContact />} />
      <Route path="/editcontact/:id" element={<EditContact />} />
    </Route>
  )
);