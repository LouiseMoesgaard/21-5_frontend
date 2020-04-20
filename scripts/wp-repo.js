const endpoint = "http://moesgaard-designs.dk/kea/09_CMS/21-5/wordpress/wp-json/wp/v2/";

async function setPage(id) {
    if (!id) {
        const urlParams = new URLSearchParams(window.location.search);
        id = urlParams.get("id");
    }
    const response = await fetch(endpoint + "posts/" + id);
    var post = await response.json();

    var main = document.querySelector("main");
    main.innerHTML = post.content.rendered;

    customContentListeners();
}

function customContentListeners() {}
