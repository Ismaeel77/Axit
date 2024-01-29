// Handle Active Class On Tabs
let tabs = document.querySelectorAll(".tabs li");

tabs.forEach((tab) => {
  tab.addEventListener("click", handleActive);
});

function handleActive() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
    this.classList.add("active");
  });
}
