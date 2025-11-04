import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/")({
  component: RouteComponent,
});

function RouteComponent() {
  console.log("PORTFOLIO!");

  return <div>Hello "/portfolio/"!</div>;
}
