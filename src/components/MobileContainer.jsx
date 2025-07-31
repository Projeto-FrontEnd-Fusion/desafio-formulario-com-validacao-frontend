import { FormSection } from "./FormSection.jsx";

export const MobileContainer = () => {
  return(
    <article className="bg-darkblue rounded-lg w-7/8 px-2 py-6 flex flex-col items-center gap-12 lg:hidden">
      <div className="group">
        <h1 className="font-k2d font-semibold text-ciano text-4xl">FUSION</h1>
        <div className="h-0.5 w-12 group-hover:w-24 transition-all bg-ciano"></div>
      </div>
      

      <FormSection />
    </article>
  );
}