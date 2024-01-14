document.addEventListener("wheel", (event) => {
    const currentPage = document.querySelector(".page.active");
    const nextPage = event.deltaY > 0
        ? currentPage.nextElementSibling
        : currentPage.previousElementSibling;

    if (nextPage) {
        currentPage.classList.remove("active");
        nextPage.classList.add("active");
    }
});
