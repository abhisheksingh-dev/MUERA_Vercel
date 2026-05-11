import type { Metadata } from "next";
import MirrorsizeConfigurator from "@/components/MirrorsizeConfigurator";

export const metadata: Metadata = {
  title: "3D Configurator Studio",
  description: "Customize your perfect suit with our 3D configurator.",
};

export default function ConfiguratorStudioPage() {
  const merchantId = process.env.merchant_id || "";
  const apiKey = process.env.apiKey || "";
  const sku = process.env.MS_SKU || "test";

  return (
    <main style={{ paddingTop: "80px", backgroundColor: "var(--color-off-white)" }}>
      <MirrorsizeConfigurator merchantId={merchantId} apiKey={apiKey} sku={sku} />
    </main>
  );
}
