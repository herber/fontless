import { useState, useEffect } from 'react';
import { ChevronDown } from 'react-feather';
import Link from 'next/link';
import {
  NavWrapper,
  NavInner,
  NavLeft,
  LogoButton,
  NavRight,
  MobileMenu,
  Logo,
  SimpleButton
} from '@varld/fontless-components';
import { useSize } from '@varld/fontless-hooks';
import { ProductSwitcher } from '../productSwitcher';

export let Navbar = () => {
  let [open, setOpen] = useState(false);
  let { width } = useSize();

  useEffect(() => {
    if (width > 870 && open) setOpen(false);
  }, [width, open]);

  let isMobile = width <= 870;

  return (
    <>
      <ProductSwitcher />
      <NavWrapper scrolled={isMobile} style={{ position: 'sticky' }}>
        <NavInner style={{ width: 1060, margin: '0px auto' }}>
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
              <Link href="/">
                <SimpleButton>About</SimpleButton>
              </Link>

              <a
                href="https://github.com/varld/fontless"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SimpleButton>Source</SimpleButton>
              </a>
            </div>
          </NavRight>
        </NavInner>

        {isMobile && (
          <MobileMenu open={open}>
            <Link href="/">
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
    </>
  );
};
