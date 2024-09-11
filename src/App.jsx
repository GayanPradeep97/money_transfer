import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Blog from "./components/Blog/Blog";
import TermAndConditions from "./components/terms-conditions/TermAndConditions";
import Disclaimer from "./components/disclaimer/Disclaimer";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route index path="blog" element={<Blog />} />
        <Route index path="term-condition" element={<TermAndConditions />} />
        <Route index path="disclaimer" element={<Disclaimer />} />
        <Route index path="aboutUs" element={<AboutUs />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
