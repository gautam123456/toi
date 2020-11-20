chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    // alert(1)
    // var ele = document.getElementById("entslider");
    // if (ele) {
    //   ele.style.display = "none";
    // }
    // ele = document.getElementsByClassName("fnews")[0];
    // if (ele) {
    //   ele.style.display = "none";
    // }
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
  }
});
