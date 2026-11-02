/* ==========================================================================
   BOAKY — Landingpage Script
   Accordion "Das ist BOAKY": immer höchstens ein Punkt geöffnet.
   ========================================================================== */

document.querySelectorAll(".accordion").forEach((accordion) => {
  const triggers = accordion.querySelectorAll(".accordion-trigger");

  const setOpen = (trigger, open) => {
    trigger.setAttribute("aria-expanded", String(open));
    document.getElementById(trigger.getAttribute("aria-controls")).hidden = !open;
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") !== "true";
      triggers.forEach((other) => {
        if (other !== trigger) setOpen(other, false);
      });
      setOpen(trigger, open);
    });
  });
});
