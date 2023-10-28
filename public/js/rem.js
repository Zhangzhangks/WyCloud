
function resize() {
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 750) return deviceWidth = 750 + 'px'
    if (deviceWidth < 375) return deviceWidth = 375 + 'px'
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    document.body.style.fontSize = 0.3 + 'rem'


}
resize()
window.onresize = function () {
    resize()
    console.log(222);
}