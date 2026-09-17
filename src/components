import SectionHeading from "./SectionHeading.jsx";
import PartnerCard from "./PartnerCard.jsx";
import { partners } from "../data/siteData.js";

export default function About() {
  return (
    <section id="about" className="section-anchor bg-slate-50 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          title="About us"
          description="Two Virtual University students who've turned four semesters of coursework into a service that helps other students finish theirs."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
