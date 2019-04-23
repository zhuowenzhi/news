    // 点击显示个人中心
    var headerInfo = document.getElementById('header-info')
    var headerInfoUl = document.getElementById('header-info-ul')
    function displayElement(element) {
        console.log(element.style.display)
        element.style.display = element.style.display == "block" ? "none" : "block"
    }
    headerInfo.onclick = function () {
        displayElement( headerInfoUl)
    }