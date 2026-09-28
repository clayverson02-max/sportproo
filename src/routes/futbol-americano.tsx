import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/SalesPage";
import { offerHead } from "@/lib/funnel";

export const Route = createFileRoute("/futbol-americano")({
  head: () => offerHead("americano"),
  component: () => <SalesPage id="americano" />,
});
