import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { getWeek } from "date-fns";
import daniaDniaStyles from "~/styles/menu-page.css?url";

export const meta: MetaFunction = () => [
  { title: "Dania dnia – Kociołek" },
  { property: "og:url", content: "https://kociolekbydgoszcz.pl/dania-dnia" },
  { property: "og:title", content: "Dania dnia – Kociołek" },
];

export default function DaniaDnia() {
  const currWeek = getWeek(new Date());
  let menuNum = ((currWeek + 1) % 3) + 1;
  console.log("Aktualny tydzień", currWeek);
  console.log("Dania dnia na ten tydzień (do soboty włącznie)", menuNum);

  const today = new Date();
  const startDate = new Date("2026-06-21");
  const endDate = new Date("2026-08-31");
  let special = "";
  if (today >= startDate && today <= endDate) {
    console.log("Przerwa wakacyjna");
    special = "dania-dnia-1-2026-bez-soboty.jpg";
  }

  return (
    <>
      <header className="menu-header menu-header--orange">
        <h1 className="menu-header__heading container container--default">
          Dania dnia na bieżący tydzień
        </h1>
      </header>
      <section className="menu-section container container--default">
        <p className="margin-top">
          <strong>Uwaga!</strong> Przerwa wakacyjna od 27 czerwca. Zapraszamy od
          września. W sprawie imprez okolicznościowych prosimy o kontakt pod
          numerem kom. 721 473 077.
        </p>
        <img
          className="menu-img"
          src={
            special
              ? `/img/menu/${special}`
              : `/img/menu/dania-dnia-${menuNum}-2026-01.jpg`
          }
          alt="Menu"
        />
        <p className="menu-info">
          Ponadto w dni otwarte serwujemy również stałe dania:
        </p>
        <img
          className="menu-img"
          src="/img/menu/menu-stale-2025-09.jpg"
          alt="Menu"
        />
        <p className="menu-info">
          Obiady serwujemy od poniedziałku do soboty w godzinach 12-17.
        </p>
      </section>
    </>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: daniaDniaStyles },
];
