
import ClientSideRender from "@/components/ClientSideRender";
import StaticRender from "@/components/StaticRender";

export default function Dynamic() {
  return (
    <main className="container">
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

      <ClientSideRender>
        <StaticRender/>
      </ClientSideRender>
    </main>
  );
}
