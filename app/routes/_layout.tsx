import { Outlet, useOutletContext } from "@remix-run/react";
import type { RefObject } from "react";
import { useRef } from "react";

import Footer from "~/components/layout/Footer";
import Header from "~/components/layout/Header";
import TemporarilyClosedBanner from "~/components/utils/TemporarilyClosedBanner";
import type { optionsType } from "~/hooks/useObserver";
import useObserver from "~/hooks/useObserver";

const navigationLinks = [
  { label: "Na miejscu", href: "/#na-miejscu" },
  { label: "Na wynos", href: "/#na-wynos" },
  { label: "Menu", href: "/#menu" },
  { label: "O nas", href: "/#o-nas" },
  { label: "Kontakt", href: "/#kontakt", highlight: true },
];

type ContextType = { observeRef: RefObject<HTMLElement> };

const options: optionsType = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

export default function Layout() {
  const [containerRef, isVisible] = useObserver(options);
  const headerRef = useRef<HTMLElement>(null);

  let headerHeight = 0;
  if (headerRef.current)
    headerHeight = headerRef.current.getBoundingClientRect().height;

  return (
    <>
      <TemporarilyClosedBanner
        dateStart={new Date("2026-06-27")}
        dateEnd={new Date("2026-08-31")}
        message="W dniach 27.06-31.08.2026 Kociołek będzie zamknięty z powodu przerwy wakacyjnej. W sprawie imprez okolicznościowych prosimy o kontakt pod numerem kom. 721 473 077."
      />
      {/* 
      <p className="info">
        Bilety na Sylwestra 2025/2026 już dostępne! Sprawdź{" "}
        <Link to="/sylwester">naszą ofertę</Link> i nie zwlekaj z rezerwacją!
      </p> */}
      {/* <p className="info">
        <Link to="/wielkanoc">Oferta wielkanocna już dostępna!</Link>
      </p> */}
      <Header
        navigationLinks={navigationLinks}
        sticky={!isVisible}
        headerRef={headerRef}
      />
      <main
        className="main"
        style={{ marginTop: !isVisible ? `${headerHeight}px` : "0" }}
      >
        <Outlet context={{ observeRef: containerRef }} />
      </main>
      <Footer navigationLinks={navigationLinks} />
    </>
  );
}

export const useObserveRef = () => useOutletContext<ContextType>();
