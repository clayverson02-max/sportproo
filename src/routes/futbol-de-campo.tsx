import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/SalesPage";
import { offerHead } from "@/lib/funnel";

export const Route = createFileRoute("/futbol-de-campo")({
  head: () => offerHead("campo"),
  component: () => <SalesPage id="campo" />,
});
