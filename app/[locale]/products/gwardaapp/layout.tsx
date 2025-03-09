import { Metadata } from "next";
import { getTranslations } from "next-intl/server";


const PRODUCT_KEY:string = "GWARDAAPP";
const PRODUCT_NAME = "GwardaApp"


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  // Load translations for metadata
  const t = await getTranslations({ locale: params.locale, namespace: "" });

  return {
    title: `${PRODUCT_NAME} ${t("global.extension")} – WeblxApplications`,
    description: t(`PRODUCTS.${PRODUCT_KEY}.description`).replace("<br/>", " ").replace("<br>", " "),
  };
}

export default function IgplusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="igplus-container">
      {children}
    </div>
  );
}