import Header from "@/shared/components/header";
import React from "react";
import Card from "./card";
import { getTranslations } from "next-intl/server";
import freebieService from "../services/freebie.service";

export async function getData() {
  const firebaseData = await freebieService.getDataFirebase();

  return firebaseData;
}

const FreebiesPage = async () => {
  const dataFreebies = await getData();

  const t = await getTranslations("freebies.hero");
  return (
    <>
      <Header />
      <main className="max-w-7xl py-12 px-6 mx-auto xl:px-0 w-full h-full">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataFreebies.map((freebie, index) => (
            <Card key={index} {...freebie} />
          ))}
        </div>
      </main>
    </>
  );
};

export default FreebiesPage;
