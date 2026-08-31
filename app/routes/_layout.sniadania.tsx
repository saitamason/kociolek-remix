import type { LinksFunction, MetaFunction } from "@remix-run/node";

import sniadaniaStyles from "~/styles/menu-page.css?url";

export const meta: MetaFunction = () => [
  { title: "Dania dnia – Śniadania" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/sniadania" },
  { property: "og:title", content: "Dania dnia – Śniadania" },
];

export default function Sniadania() {
  return (
    <>
      <header className="menu-header">
        <h1 className="menu-header__heading container container--default">
          Menu śniadaniowe
        </h1>
      </header>
      <section className="menu-section container container--default">
        <img
          className="menu-img"
          src="/img/menu/sniadania-2026-09.jpg"
          alt="Menu"
        />
        <p className="menu-info">
          Śniadania serwujemy od poniedziałku do soboty w godzinach 8-11.
        </p>
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: sniadaniaStyles },
];
