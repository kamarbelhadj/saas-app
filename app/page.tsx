import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companions.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recenySessionsCompanions = await getRecentSessions(10);
  return (
    <main>
      <h1 className="text-2xl ">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
            id="123"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="science"
            duration={45}
            bookmarked={false}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionsList
          tiltle="Recently completed sessions "
          companions={recenySessionsCompanions}
          classeNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
