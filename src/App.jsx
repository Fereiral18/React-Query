import React from "react";
import { HomePage } from "./components/HomePage";
import { SuperHeroesPage } from "./components/SuperHeroesPage";
import { RQSuperHeroesPage } from "./components/RQSuperHeroesPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes"> Rq Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
          <Route
            path="/rq-super-heroes"
            element={<RQSuperHeroesPage />}
          ></Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
};
