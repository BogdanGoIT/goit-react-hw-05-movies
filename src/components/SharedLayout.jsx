import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Box } from "./Box";


const StyledLink = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  padding: ${p => p.theme.space[3]}px;

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

export const SharedLayout = () => {
    return(
        <Box pb="10px" as="nav" >
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>

            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Box>
    )
}