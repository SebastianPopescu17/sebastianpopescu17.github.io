document.addEventListener("DOMContentLoaded", function () {
    let tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let tabsContainer = button.closest(".tabs-container");
            let buttons = tabsContainer.querySelectorAll(".tab-button");
            let contents = tabsContainer.querySelectorAll(".tab-content");
            buttons.forEach((btn) => btn.classList.remove("active"));
            contents.forEach((content) => content.classList.remove("active"));
            let tabId = button.getAttribute("data-tab");
            let activeContent = tabsContainer.querySelector(`#${tabId}`);
            button.classList.add("active");
            if (activeContent) {
                activeContent.classList.add("active");
            }
        });
    });
});
