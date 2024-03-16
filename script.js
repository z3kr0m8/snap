document.addEventListener("scroll", function() {
    console.log("Scrolling detected!");
    var worldSuicidePreventionSection = document.getElementById("world-suicide-prevention-section");
    var mythsSection = document.getElementById("myths-section");

    var worldSuicidePreventionSectionTop = worldSuicidePreventionSection.getBoundingClientRect().top;

    if (worldSuicidePreventionSectionTop <= 0) {
        mythsSection.classList.remove("hidden");
    } else {
        mythsSection.classList.add("hidden");
    }
});


