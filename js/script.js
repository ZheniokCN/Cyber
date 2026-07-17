const dark = document.querySelector(".dark-bgc"),
    grey = document.querySelector(".greybg"),
    burger = document.querySelector(".for-menu-header"),
    filter = document.querySelector(".relative-filter"),
    filters = document.querySelector(".filter"),
    menu = document.querySelector(".list-header"),
    cancel = document.querySelector(".cancel"),
    canfilter = document.querySelector(".cancel-filter"),
    list = document.querySelector(".phones-hover"),
    item = document.querySelector(".item-header-relative")

item.addEventListener("click", function () {
    list.style.top = "100%"
    list.style.opacity = "1"
    grey.style.display = "block"
})
filter.addEventListener("click", function () {
    filters.style.left = "0"
    filters.style.opacity = "1"
    dark.style.display = "block"
})


burger.addEventListener("click", function () {
    menu.style.left = "0";
    dark.style.display = "block"
})

function cancelBurger() {
    menu.style.left = "-100%";
    dark.style.display = "none"
}

function cancelFilter() {
    filters.style.left = "-200%";
    dark.style.display = "none"
}

cancel.addEventListener("click", cancelBurger)
canfilter.addEventListener("click", cancelFilter)
dark.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelFilter)