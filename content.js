chrome.runtime.onMessage.addListener(function (req) {
  document.body.classList.remove("noScroll");
  var ele = document.getElementsByClassName("_1qy-q")[0];
  if (ele) {
    ele.classList.remove("_1qy-q");
  }
  var ele = document.getElementById("entslider");
  if (ele) {
    ele.style.display = "none";
  }
  ele = document.getElementsByClassName("fnews")[0];
  if (ele) {
    ele.style.display = "none";
  }

  //NY times
  ele = document.getElementsByClassName("css-mcm29f")[0];
  if (ele) {
    ele.style.overflow = "scroll";
  }
  ele = document.getElementById("gateway-content");
  if (ele) {
    ele.remove();
  }
  ele = document.getElementsByClassName("css-1bd8bfl")[0];
  if (ele) {
    ele.remove();
  }


  // The Hindu
  ele = document.getElementsByClassName("trial_popup_message")[0];
  if (ele) {
    ele.remove();
  }
  ele = document.getElementsByClassName("ui-widget-overlay")[0];
  alert(ele.length)
  if (ele) {
    ele.remove();
    ele.style.opacity = 0;
  }
});
