import Tags from "./components/tags/tags";
import Videos from "./components/videos/videos";

const Home = () => {
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <Tags />
      <Videos />
    </section>
  );
};

export default Home;
