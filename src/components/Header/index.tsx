import { useState } from "react";

import { Icons } from "@/assets/icons";
import useIsMobile from "@/hooks/useIsMobile";

import { Container, Items, Menu, MenuItem, Padding } from "./styles";

function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Container>
        <button
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icons.HamburgerMenu />
        </button>
        <Icons.Logo />
        <Icons.BrazilFlag />
      </Container>
      {isMenuOpen && (
        <Menu>
          <button aria-label="Close menu" onClick={() => setIsMenuOpen(false)}>
            <Icons.X />
          </button>
          <ul>
            <MenuItem>
              <a href="#projects">Projetos</a>
            </MenuItem>
            <MenuItem>
              <a href="#about">Sobre mim</a>
            </MenuItem>
            <MenuItem>
              <a href="#contact">Contato</a>
            </MenuItem>
          </ul>
        </Menu>
      )}
    </>
  );
}

function MenuDesktop() {
  return (
    <Container>
      <Icons.Logo />
      <Items>
        <MenuItem>
          <a href="#projects">Projetos</a>
        </MenuItem>
        <MenuItem>
          <a href="#about">Sobre mim</a>
        </MenuItem>
        <MenuItem>
          <a href="#contact">Contato</a>
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
