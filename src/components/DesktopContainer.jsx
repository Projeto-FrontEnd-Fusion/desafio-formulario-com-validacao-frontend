import { HeroSection } from "./HeroSection"
import { FormSection } from "./FormSection"

export const DesktopContainer = () => {
  return(
    <article className="grid grid-cols-2 invisible lg:visible">
      <HeroSection 
        imgUrl="/assets/images/background-image.png"
        title="FUSION"
      />

      <div className="p-12">
        <FormSection />
      </div>
    </article>
  );
}