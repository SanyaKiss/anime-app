import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout } from "@/components/Layout/Layout";
import { SearchPage } from "@/pages/SearchPage/SearchPage";
import { FavoritesPage } from "@/pages/FavoritesPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { LandingPage } from "@/pages/LandingPage";
import { DetailsPage } from "@/pages/DetailsPage/DetailsPage";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LandingPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="anime/:id" element={<DetailsPage />} />
      <Route path="genre/:id" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
