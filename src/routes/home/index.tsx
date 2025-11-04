import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="bg-amber-200 w-1000 h-1000">Hello "/home/"!</div>;
}
