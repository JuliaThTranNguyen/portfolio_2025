/*This is the navigator function used in the entire app*/
export const useScrollToSection = (id: string) => {
  const scrollToSection = () => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(id); // Get the section by its ID
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    }
  };

  return scrollToSection;
};
