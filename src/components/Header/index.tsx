import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Icons } from "@/assets/icons";
import useIsMobile from "@/hooks/useIsMobile";
import { PATHS } from "@/routes";

import { Container, Items, Menu, MenuItem, Padding } from "./styles";

function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <button
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icons.HamburgerMenu />
        </button>
        <button aria-label="Home" onClick={() => navigate(PATHS.HOME)}>
          <Icons.Logo />
        </button>
        <Icons.BrazilFlag />
      </Container>
      {isMenuOpen && (
        <Menu>
          <button aria-label="Close menu" onClick={() => setIsMenuOpen(false)}>
            <Icons.X />
          </button>
          <ul>
            <MenuItem>
              <HashLink to="/#projects">Projetos</HashLink>
            </MenuItem>
            <MenuItem>
              <HashLink to="/#about">Sobre mim</HashLink>
            </MenuItem>
            <MenuItem>
              <HashLink to="/#contact">Contato</HashLink>
            </MenuItem>
          </ul>
        </Menu>
      )}
    </>
  );
}

function MenuDesktop() {
  const navigate = useNavigate();
  return (
    <Container>
      <button aria-label="Home" onClick={() => navigate(PATHS.HOME)}>
        <Icons.Logo />
      </button>
      <Items>
        <MenuItem>
          <HashLink to="/#projects">Projetos</HashLink>
        </MenuItem>
        <MenuItem>
          <HashLink to="/#about">Sobre mim</HashLink>
        </MenuItem>
        <MenuItem>
          <HashLink to="/#contact">Contato</HashLink>
        </MenuItem>
      </Items>
      <Icons.BrazilFlag />
    </Container>
  );
}

function Header() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
      <Padding />
    </>
  );
}

export default Header;
