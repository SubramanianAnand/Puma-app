
 const calcScrollValue = () => {
var scrollToTop = document.querySelector(".scrollToTop");

  let pos = document.body.scrollTop;
  let calcHeight =
    document.documentElement.clientHeight - document.body.clientHeight;
  let percentVal = Math.round((Math.floor(pos) * 100) / 100);

  if (pos > 100) {
    scrollToTop.style.display = "flex";
  } else {
    scrollToTop.style.display = "none";
  }
  scrollToTop.style.background = `conic-gradient(red ${percentVal}%, white ${percentVal}%)`
  scrollToTop.addEventListener("click", function(){
    document.body.scrollTop = '0';
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
};



export default calcScrollValue;
