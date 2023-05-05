import PageBuilder from "./components/pagebuilder";

export default function App() {
  return (
    <>
      <PageBuilder />
      <dummyContent/>
    </>
  );
}

function dummyContent() {
  return <h1>Hello world</h1>;
}
