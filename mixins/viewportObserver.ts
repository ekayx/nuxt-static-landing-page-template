const inViewportMixin = {
  mounted() {
    // Funktion, die aufgerufen wird, wenn Elemente in den Viewport gelangen
    const inViewport = (
      entries: any[],
      observer: { unobserve: (arg0: any) => void }
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inViewport");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(inViewport);

    // Füge den Observer zu jedem Element mit dem Attribut [data-inviewport] hinzu
    document.querySelectorAll("[data-inviewport]").forEach((el) => {
      observer.observe(el);
    });
  },
};

export default inViewportMixin;
