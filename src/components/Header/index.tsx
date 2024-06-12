import { useState } from "react";

import { Icons } from "@/assets/icons";

import { Container, Menu, MenuItem } from "./styles";

function Header() {
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

export default Header;
