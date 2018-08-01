chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "home.html";
  chrome.tabs.create({ url: newURL });
});


chrome.identity.getProfileUserInfo(
  function(userInfo) {
  console.log(JSON.stringify(userInfo));


    /*document.getElementById("name").innerHTML = returnname();
    function returnname(){
        var name = JSON.stringify(userInfo);
        return name;
    }*/
});
