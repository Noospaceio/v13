import dynamic from "next/dynamic";
const Noospace = dynamic(() => import("../MinimalNoosphere"), { ssr: false });

export default function Home() {
  return <Noospace />;
}
