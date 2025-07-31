export const HeroSection = ({ imgUrl, title }) => {
  return(
    <section style={{ backgroundImage: `url(${imgUrl})` }} className="bg-cover bg-center rounded-xl px-70 relative">
      <h1 className="font-k2d font-semibold text-ciano text-3xl absolute top-4 left-4">{title}</h1>
    </section>
  );
}