fetch("nav.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("nav-placeholder").innerHTML = data;
                setActiveTab();
            });

fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("footer-placeholder").innerHTML = data;
            });



function setActiveTab() {
    // Get the current page's filename
    const currentPage = window.location.pathname.split("/").pop();
  
    // Map the filename to the corresponding tab ID
    const tabMap = {
      "index.html": "home-tab",
      "about.html": "about-tab",
      "oph.html": "oph-tab",
      "": "home-tab", // For index.html when the path is just "/"
    };
  
    // Get the corresponding tab ID
    const activeTabId = tabMap[currentPage];
  
    // If a matching tab is found, add the 'tab-active' class
    if (activeTabId) document.getElementById(activeTabId)?.classList.add("tab-active");
}
  
