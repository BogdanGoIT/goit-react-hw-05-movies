import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { NotFound } from "pages/NotFound";
import { MovieDetails } from "pages/MovieDetails";
import { Box } from "./Box";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";


const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[3]}px;

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

export const App = () => {
  return (
    <div>
      <Box pb="10px" as="nav" >
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
