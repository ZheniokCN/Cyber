const dark = document.querySelector(".dark-bgc"),
    grey = document.querySelector(".greybg"),
    burger = document.querySelector(".for-menu-header"),
    filter = document.querySelector(".relative-filter"),
    filters = document.querySelector(".filter"),
    menu = document.querySelector(".list-header"),
    cancel = document.querySelector(".cancel"),
    canfilter = document.querySelector(".cancel-filter"),
    list = document.querySelector(".phones-hover"),
    SearchPhone = document.querySelector(".search-phone"),
    item = document.querySelector(".item-header-relative")
    search = document.querySelector(".search-bl"),

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

SearchPhone.addEventListener("click", function () {
    search.style.left = "0"
})

item.addEventListener("click", function () {
    list.style.top = "100%"
    list.style.opacity = "1"
    grey.style.display = "block"
})


burger.addEventListener("click", function () {
    menu.style.left = "0";
    dark.style.display = "block"
})

function cancelBurger() {
    menu.style.left = "-100%";
    dark.style.display = "none"
}

function cancelSearch() {
    filters.style.left = "-200%";
    dark.style.display = "none"
}

function cancelFilter() {
    search.style.left = "-350%"
}

cancel.addEventListener("click", cancelBurger)
canfilter.addEventListener("click", cancelFilter)
dark.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelFilter)
SearchPhone.addEventListener("click", cancelSearch)