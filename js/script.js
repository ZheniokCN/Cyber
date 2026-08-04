const dark = document.querySelector(".dark-bgc"),
    grey = document.querySelector(".greybg"),
    burger = document.querySelector(".for-menu-header"),
    filter = document.querySelector(".relative-filter"),
    filters = document.querySelector(".filter"),
    menu = document.querySelector(".list-header"),
    cancel = document.querySelector(".cancel"),
    canfilter = document.querySelector(".cancel-filter"),
    list = document.querySelector(".phones-hover"),
    item = document.querySelector(".item-header-relative"),
    search = document.querySelector(".search-mobile"),
    photoBtn = document.querySelectorAll(".buttons-for-img-change"),
    buttons = document.querySelectorAll(".button-switch"),
    blocks = document.querySelectorAll(".block-reg"),
    popup = document.querySelector(".main-div-in-popup"),
    summonpopup = document.querySelector(".svg-log-in"),
    closepopup = document.querySelector(".closepopup")

if (popup) {
    function cancelPopup() {
        popup.style.left = "-200%";
        dark.style.display = "none";
    }
    
    summonpopup.addEventListener("click", function () {
        popup.style.left = "50%"
        dark.style.display = "block"
    })
}

if (filter) {
    filter.addEventListener("click", function () {
        filters.style.left = "0"
        filters.style.opacity = "1"
        dark.style.display = "block"
    })

    function cancelFilter() {
        filters.style.left = "-200%";
        dark.style.display = "none";
    }
    canfilter.addEventListener("click", cancelFilter)
}

buttons.forEach(button => {
    button.onclick = (e) => {
        buttons.forEach(b => b.classList.remove("active"))
        console.log(e.target)
        e.target.classList.add("active")
        blocks.forEach(block => {
            block.classList.remove("active")
            if (block.classList.contains(button.dataset.reg)) {
                if (!block.classList.contains("active")) {
                    block.classList.add("active")
                }
            }
        })
    }
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

photoBtn.forEach(item => {
    item.onclick = () => {
        let imgSrc = item.getAttribute("data-img")
        imgContBig.setAttribute("src", imgSrc)
        imgConFirst.setAttribute("src", imgSrc)
        imgContSecond.setAttribute("src", imgSrc)
    }
})


function cancelBurger() {
    menu.style.left = "-100%";
    dark.style.display = "none"
}

cancel.addEventListener("click", cancelBurger);
dark.addEventListener("click", cancelBurger);
dark.addEventListener("click", cancelFilter);
dark.addEventListener("click", cancelPopup);
closepopup.addEventListener("click", cancelPopup);