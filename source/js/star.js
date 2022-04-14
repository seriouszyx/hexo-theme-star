$(document).ready(function () {
    Star.utils.pjaxReloadBoot = function () {
        if (CONFIG.fancybox) {
            this.wrapImageWithFancyBox()
        }
    }

    // Initializaiton
    Star.utils.pjaxReloadBoot()
})