$(function () {
  // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse("hide");
    }
  });
});

(function (global) {
  var dc = {};

  var homeHtmlUrl = "snippet/index-snippet.html";
  var homeHtmlUrl2 = "snippet/index-snippet2.html";
  var homeHtmlUrl3 = "snippet/index-snippet3.html";
  var homeHtmlurlFooter = "snippet/index-footer.html";

  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };

  var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string.replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  };

  var switchMenuToActive = function () {
    var classes = document.querySelector("#navHomeButton").className;
    classes = classes.replace(new RegExp("active", "g"), "");
    document.querySelector("#navHomeButton").className = classes;

    classes = document.querySelector("#navMenuButton").className;
    if (classes.indexOf("active") === -1) {
      classes += " active";
      document.querySelector("#navMenuButton").className = classes;
    }
  };

  // On page load (before images or CSS)
  document.addEventListener("DOMContentLoaded", function (event) {
    showLoading("#main-content1");
    $ajaxUtils.sendGetRequest(
      homeHtmlUrl,
      function (responseText) {
        document.querySelector("#main-content1").innerHTML = responseText;
      },
      false
    );

    $ajaxUtils.sendGetRequest(
      homeHtmlUrl2,
      function (responseText) {
        document.querySelector("#main-content2").innerHTML = responseText;
      },
      false
    );

    $ajaxUtils.sendGetRequest(
      homeHtmlUrl3,
      function (responseText) {
        document.querySelector("#main-content3").innerHTML = responseText;
      },
      false
    );
    $ajaxUtils.sendGetRequest(
      homeHtmlurlFooter,
      function (responseText) {
        document.querySelector("#IndexFooter").innerHTML = responseText;
      },
      false
    );
  });

  dc.loadAboutUs = function (event) {
    aboutUsUrl = "snippet/aboutus.html";
    aboutUsUrlBlank = "snippet/blankPage.html";

    $ajaxUtils.sendGetRequest(
      aboutUsUrl,
      function (responseText) {
        document.querySelector("#main-content1").innerHTML = responseText;
      },
      false
    );

    $ajaxUtils.sendGetRequest(
      aboutUsUrlBlank,
      function (responseText) {
        document.querySelector("#main-content2").innerHTML = responseText;
      },
      false
    );

    $ajaxUtils.sendGetRequest(
      aboutUsUrlBlank,
      function (responseText) {
        document.querySelector("#main-content3").innerHTML = responseText;
      },
      false
    );
  };

  global.$dc = dc;
})(window);
