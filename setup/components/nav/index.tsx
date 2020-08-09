import { useState, useEffect } from 'react';
import { ChevronDown } from 'react-feather';
import Link from 'next/link';
import { Logo } from '../content/logo';
import { SimpleButton } from '../input/simpleButton';
import { NavWrapper, NavInner, NavLeft, LogoButton, NavRight, MobileMenu } from './styled';
import { useSize } from '../../hooks/useSize';

export let Navbar = () => {
  let [open, setOpen] = useState(false);
  let { width } = useSize();

  useEffect(() => {
    if (width > 870 && open) setOpen(false);
  }, [width, open]);

  let isMobile = width <= 870;

  return (
    <NavWrapper scrolled={isMobile}>
      <NavInner>
        <NavLeft>
          <Link href="/">
            <LogoButton>
              <Logo noText={isMobile} />
            </LogoButton>
          </Link>
        </NavLeft>

        <NavRight>
          <div className="inner mobile">
            <SimpleButton onClick={() => setOpen(!open)}>
              <div className="icon">
                <ChevronDown />
              </div>
            </SimpleButton>
          </div>

          <div className="inner desktop">
            <Link href="/about" as="/about">
              <SimpleButton>About</SimpleButton>
            </Link>

            <a
              href="https://github.com/varld/fontless"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SimpleButton>Source</SimpleButton>
            </a>

            <a href="https://varld.co" target="_blank" rel="noopener noreferrer">
              <SimpleButton>Varld</SimpleButton>
            </a>
          </div>
        </NavRight>
      </NavInner>

      {isMobile && (
        <MobileMenu open={open}>
          <Link href="/about" as="/about">
            <SimpleButton>About</SimpleButton>
          </Link>

          <a
            href="https://github.com/varld/fontless"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SimpleButton>Source</SimpleButton>
          </a>

          <a href="https://varld.co" target="_blank" rel="noopener noreferrer">
            <SimpleButton>Varld</SimpleButton>
          </a>
        </MobileMenu>
      )}
    </NavWrapper>
  );
};
