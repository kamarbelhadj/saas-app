import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl ">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#E5D0FF"
          bookmarked={false}
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths        "
          duration={30}
          color="#FFDA6E"
          bookmarked={false}
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="Language "
          duration={30}
          color="#BDE7FF"
          bookmarked={false}
        />
      </section>
      <section className="home-section">
        <CompanionsList
          tiltle="Recently completed sessions "
          companions={recentSessions}
          classeNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
