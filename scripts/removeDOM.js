function removeElement(selectors) {
  const observer = new MutationObserver(() => {
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.remove());
    });
  });

  const startObserver = () => {
    if (!document.body) return;
    observer.observe(document.body, { childList: true, subtree: true });
  };

    startObserver();

  return observer;
}

removeElement(['aside[data-testid="sidebar__container"]']);
removeElement(['div[data-testid="map__gradient-bg"]']);
removeElement(['div[data-v-84923089]']);
removeElement(['#pb-slot-fr24-airplane']);
removeElement(['#pb-slot-fr24-airport']);
removeElement(['div.relative.left-0.top-0.flex.size-full.max-h-\\[11\\.8125rem\\].overflow-hidden']);
removeElement(['div.relative.h-\\[11\\.75rem\\].shrink-0']);


function clickData(aircraftData) {

  const observer = new MutationObserver(() => {

      const data = document.querySelectorAll(aircraftData)
      data.forEach(d => {
        d.addEventListener("click", () => {
        navigator.clipboard.writeText(d.innerText);
        const toast = document.createElement("div")
        toast.id = "toast-copied"
        toast.innerText = "Copied!"
        toast.style.padding = "8px"
        toast.style.backgroundColor = "#327DB6"
        toast.style.marginTop = "4px"
        toast.style.marginBottom = "4px"
        toast.style.marginLeft = "8px"
        toast.style.marginRight = "8px"
        toast.style.fontSize = "13px"
        toast.style.color = "white"
        toast.style.position = "absolute"
        toast.style.left = "185px"
        toast.style.top = "25px"
        toast.style.textAlign = "center"
        toast.style.zIndex = "399"
        toast.style.animation = "ease"
        toast.style.animationDelay = "0.2s"
        toast.style.borderRadius = "8px"
        document.body.style.position = "relative";
        document.body.appendChild(toast);
        setTimeout(() => {
          toast.remove()
        }, 2000)
        })
      })
  })

  const startObserver = () => {
    if (!document.body) return;
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  };

    startObserver();

  return observer;
}

clickData(['p[data-testid="aircraft-panel__hex'])
clickData(['span[data-testid="aircraft-panel__header__callsign"]'])

