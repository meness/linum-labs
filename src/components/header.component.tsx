import { Link } from '@nextui-org/link';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { appConst } from '~common/consts';
import { WalletButton } from '~components';
import { ThemeSwitch } from './theme-switch.component';

export const Header = () => {
  const navbarItems: Record<'label' | 'path', string>[] = [
    { label: 'Repository', path: appConst.appRepositoryLink },
    { label: 'My GitHub', path: appConst.developerGithubLink }
  ];
  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      maxWidth="full">
      <NavbarBrand
        className="select-none gap-2 font-display text-3xl text-foreground-500"
        as={Link}
        href="/">
        👋 <span className="text-large font-bold">Linum Labs</span>
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center">
        {navbarItems.map(({ label, path }) => {
          return (
            <NavbarItem key={path}>
              <Link
                color="foreground"
                href={path}
                isExternal
                showAnchorIcon>
                {label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <WalletButton />
        </NavbarItem>
        <ThemeSwitch />
      </NavbarContent>
    </Navbar>
  );
};
