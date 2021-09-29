import { useWindowSize } from "../";

export default function DummyComponent(): JSX.Element {
  const [width, height] = useWindowSize();
  return (
    <>
      <div role="presentation" aria-label="Width">
        {width}
      </div>
      <div aria-label="Height">{height}</div>
    </>
  );
}
