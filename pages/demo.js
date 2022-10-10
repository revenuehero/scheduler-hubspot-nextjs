import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Demo() {
  const [hubspotLoaded, setHubspotLoaded] = useState(false);

  return (
    <div>
      <Script
        id="hubspot-form"
        src="//js-eu1.hsforms.net/forms/embed/v2.js"
        onReady={() => {
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "26188731",
            formId: "8b0732e5-217e-4327-b626-8c8ca9f762cf",
          });

          setHubspotLoaded(true);
        }}
      />

      {hubspotLoaded && (
        <>
          <Script
            id="revenuehero-embed"
            src="https://app.revenuehero.io/scheduler.min.js"
            onReady={() => {
              const embedTarget = document.createElement("div");
              embedTarget.id = "embed-revenuehero";
              embedTarget.style.height = "100vh";
              document.body.appendChild(embedTarget);

              window.hero = new RevenueHero({ routerId: "1" });
              hero.schedule(
                "#8b0732e5-217e-4327-b626-8c8ca9f762cf",
                "#embed-revenuehero"
              );

              window.addEventListener("message", (e) => {
                if (e.data.type === "PAGE_LOADED") {
                  document.querySelector(".hbspt-form").style.display = "none";
                }
              });
            }}
          />
        </>
      )}
    </div>
  );
}
