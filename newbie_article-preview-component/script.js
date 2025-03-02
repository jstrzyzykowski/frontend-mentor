const shareButton = document.getElementById("shareButton");
const tooltip = document.getElementById("tooltip");

const toggleTooltip = () => {
  const isVisible = tooltip.classList.contains("active");
  
  if (isVisible) {
    hideTooltip();
  } else {
    showTooltip();
  }
};

const showTooltip = () => {
  tooltip.classList.add("active");
  shareButton.classList.add("active");
  shareButton.setAttribute("aria-expanded", "true");
  tooltip.setAttribute("aria-hidden", "false");
};

const hideTooltip = () => {
  tooltip.classList.remove("active");
  shareButton.classList.remove("active");
  shareButton.setAttribute("aria-expanded", "false");
  tooltip.setAttribute("aria-hidden", "true");
};

const handleShareButtonClick = (event) => {
  event.stopPropagation();
  toggleTooltip();
};

const handleDocumentClick = () => {
  if (tooltip.classList.contains("active")) {
    hideTooltip();
  }
};

const handleWindowResize = () => {
  if (tooltip.classList.contains("active")) {
    hideTooltip();
  }
};

const handleTooltipClick = (event) => {
  event.stopPropagation();
};

shareButton.addEventListener("click", handleShareButtonClick);
tooltip.addEventListener("click", handleTooltipClick);
document.addEventListener("click", handleDocumentClick);
window.addEventListener("resize", handleWindowResize);
