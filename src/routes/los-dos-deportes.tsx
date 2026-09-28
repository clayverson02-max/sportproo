import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/SalesPage";
import { offerHead } from "@/lib/funnel";

export const Route = createFileRoute("/los-dos-deportes")({
  head: () => offerHead("ambos"),
  component: () => <SalesPage id="ambos" />,
});
