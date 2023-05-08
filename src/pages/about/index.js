import { PathAbout } from "../../components/path";
import { UnderFooter } from "../../components/underFooter";
import "./style.css";
export function About() {
  return (
    <>
      <PathAbout />
      <section className="p-5">
        <div className="site-content container">
          <div className="elementor-element elementor-widget">
            <div className="elementor-widget-container">
              <h1 className="text-uppercase fw-bold mb-4 konte-heading-title">
                About us
              </h1>
            </div>
          </div>

          <div className="elementor-widget-container">
            <h4 className="konte-heading-title konte-heading-title--default">
              Med Zeecycled skal det være nemt
              <br />- we put sustainable thinking at the center of our work
            </h4>
          </div>

          <div className="elementor-element elementor-widget">
            <p className="p1 mb-4">
              Zeecycled er en platform der er skabt med ønsket om at ændre den
              nuværende brug-og-smid-væk kultur for at skabe et mere bæredygtigt
              mindset hos den enkelte forbruger. Vores mission er at gøre det
              nemmere for folk at købe og sælge overskydende- og genbrugstøj,
              både for privatpersoner og virksomheder.
            </p>
            <p className="p1 mb-4">
              Zeecycled er en platform der er skabt med ønsket om at ændre den
              nuværende brug-og-smid-væk kultur for at skabe et mere bæredygtigt
              mindset hos den enkelte forbruger. Vores mission er at gøre det
              nemmere for folk at købe og sælge overskydende- og genbrugstøj,
              både for privatpersoner og virksomheder.
            </p>
            <p className="p1 mb-4">
              Zeecycled er en platform der er skabt med ønsket om at ændre den
              nuværende brug-og-smid-væk kultur for at skabe et mere bæredygtigt
              mindset hos den enkelte forbruger. Vores mission er at gøre det
              nemmere for folk at købe og sælge overskydende- og genbrugstøj,
              både for privatpersoner og virksomheder.
            </p>
            <p className="p1 mb-4">
              Zeecycled er en platform der er skabt med ønsket om at ændre den
              nuværende brug-og-smid-væk kultur for at skabe et mere bæredygtigt
              mindset hos den enkelte forbruger. Vores mission er at gøre det
              nemmere for folk at købe og sælge overskydende- og genbrugstøj,
              både for privatpersoner og virksomheder.
            </p>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-element p-5">
        <div className="container site-content">
          <div className="elementor-column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-widget-container">
                <h1 className="konte-heading-title">Mission</h1>
              </div>
              <div className="elementor-element elementor-widget">
                <p className="p1 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  officiis reiciendis repellat deserunt. Recusandae corrupti
                  assumenda nihil? Repellat, labore error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-element p-5">
        <div className="container site-content">
          <div className="elementor-column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-widget-container">
                <h1 className="konte-heading-title">Vision</h1>
              </div>
              <div className="elementor-element elementor-widget">
                <p className="p1 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  officiis reiciendis repellat deserunt. Recusandae corrupti
                  assumenda nihil? Repellat, labore error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-element p-5">
        <div className="container site-content">
          <div className="row align-items-center justify-content-between">
            <div className="col-md hover01">
              <figure>
                <img
                  decoding="async"
                  width="100%"
                  height="100%"
                  src="./zahra.jpg"
                  alt=""
                  loading="lazy"
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-md p-5">
              <h4>About Founder</h4>
              <p className="">
                <span className="span-b">
                  <b>Founder, Zahra Haidari</b>
                </span>
              </p>
              <p className="p2">
                Zeecycled blev startet i 2021 med ambitionen om at det skal være
                nemmere at sælge sit brugte tøj.
                <i>
                  “Jeg har selv en hverdag, hvor jeg er udfordret på tid og
                  overskud, og jeg synes der manglede et alternativ til de
                  nuværende markedspladser, genbrugsbutikker og loppemarkeder.
                  Derfor skabte jeg Zeecycled.”&nbsp;
                </i>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <UnderFooter />
      </section>
    </>
  );
}
