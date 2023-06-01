import { NavBar } from "../components/NavBar";
import { MenuButton } from "../components/MenuButton";
import { Logo } from "../components/Logo";
import { BodyMain } from "../components/BodyMain";

export const LayoutPage = () => {

  return (
    <section className="fixed top-0 left-0 right-0 bottom-0">
      <NavBar>
        <>
          <MenuButton/>
          <Logo/>
        </>
      </NavBar>
      <BodyMain/>
    </section>
  );
};
