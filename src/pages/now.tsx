import { PrimaryLayout } from "../layouts/Primary";

export default function Index() {
  const hero = (
    <h1 className="index__h1">
      Hi, I'm <strong>Will Hackett</strong>. I'm a software engineer based in
      Australia at <strong>Blinq</strong> where our team is building the best
      way to share your identity.
    </h1>
  );

  return <PrimaryLayout headerProps={{ children: hero }}>Test</PrimaryLayout>;
}
