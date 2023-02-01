import type { LinksFunction } from "@remix-run/node";
import TakeawaySvg from "../svg/TakeawaySvg";

import styles from "./Takeaway.css";

export default function Takeaway() {
  return (
    <>
      <hgroup className="takeaway__header grid--span">
        <p className="takeaway__subheading subheading">Na wynos</p>
        <h2 className="takeaway__heading heading-secondary">
          Dania i garmażerka na wynos
        </h2>
      </hgroup>
      <div className="takeaway__text-group">
        <p className="takeaway__description">
          Czeka Cię spotkanie z rodziną lub znajomymi w Twoim domu, ale nie masz
          czasu, aby coś dla nich ugotować? Nie ma problemu! U nas możesz
          zamówić pyszne dania obiadowe, kolacyjne lub przekąski, a my zajmiemy
          się ich przygotowaniem. Sprawdź nasze menu i zamów już dziś!
        </p>
        <a
          href="tel:+48721473077"
          className="takeaway__button button button--accent-secondary">
          Zadzwoń i zamów
        </a>
      </div>
      <TakeawaySvg />
    </>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
