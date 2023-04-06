import Head from "next/head";

import Layout from "../../../components/Layout";

export default function Services({}) {
  return (
    <>
      <Head>
        <title>Privacybeleid - Fit Notities</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className="container mt-10 mb-24 max-w-4xl mx-auto relative">
          <h5 className="text-blue text-xl font-inter font-bold mt-8 mb-3">
            Privacybeleid - Fit Notities
          </h5>
          <p className="mb-3">
            Dit privacybeleid beschrijft hoe de app &quot;Fit Notities&quot; uw
            persoonlijke informatie behandelt. De app &quot;Fit Notities&quot;
            verzamelt geen gebruikersgegevens en respecteert de privacy van de
            gebruikers.
          </p>
          <h5 className="text-blue text-xl font-inter font-bold mt-8 mb-3">
            Welke informatie wordt verzameld?
          </h5>
          <p>
            De app &quot;Fit Notities&quot; verzamelt geen persoonlijke
            informatie van de gebruikers. We slaan geen gegevens op die kunnen
            worden gebruikt om u te identificeren, inclusief uw naam,
            e-mailadres, telefoonnummer, locatie, apparaat-ID of enige andere
            informatie.
          </p>
          <h5 className="text-blue text-xl font-inter font-bold mt-8 mb-3">
            Hoe gebruiken we deze informatie?
          </h5>
          <p>
            Aangezien er geen informatie wordt verzameld, worden er ook geen
            gegevens gebruikt. De app &quot;Fit Notities&quot; is volledig
            gratis en is ontwikkeld om gebruikers te helpen bij het bijhouden
            van hun fitnessdoelen. Er worden geen gegevens gebruikt om
            advertenties te tonen of voor andere commerciële doeleinden.
          </p>
          <h5 className="text-blue text-xl font-inter font-bold mt-8 mb-3">
            Worden er cookies gebruikt?
          </h5>
          <p>
            De app &quot;Fit Notities&quot; maakt geen gebruik van cookies. Er
            worden geen gegevens opgeslagen op uw apparaat wanneer u de app
            gebruikt.
          </p>
          <h5 className="text-blue text-xl font-inter font-bold mt-8 mb-3">
            Beveiliging
          </h5>
          <p>
            De app &quot;Fit Notities&quot; heeft passende technische en
            organisatorische maatregelen getroffen om uw persoonlijke informatie
            te beschermen. Omdat er geen gegevens worden verzameld, hoeft u zich
            geen zorgen te maken over de veiligheid van uw gegevens.
          </p>
          <h5 className="text-blue text-xl font-inter font-bold mt-8 mb-3">
            Contact
          </h5>
          Als u vragen heeft over dit privacybeleid of als u wilt dat wij uw
          persoonlijke informatie verwijderen, kunt u contact met ons opnemen
          via e-mail op{" "}
          <span className="font-bold text-blue">service@websidesign.nl</span>
          <h5 className="text-blue text-xl font-inter font-bold mt-8 mb-3">
            Wijzigingen in dit privacybeleid
          </h5>
          <p>
            We kunnen dit privacybeleid van tijd tot tijd wijzigen. We raden u
            aan dit privacybeleid regelmatig te raadplegen om op de hoogte te
            blijven van eventuele wijzigingen.
          </p>
        </div>
      </Layout>
    </>
  );
}
