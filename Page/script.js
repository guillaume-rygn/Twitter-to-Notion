
window.addEventListener("load", () => {
    chrome.storage.sync.get(["bookmarkTwitter"]).then((result) => {
        const tweet = result.bookmarkTwitter;

        tweet.map(element => {
            fetch("https://publish.twitter.com/oembed?url=" + element)
            .then((response) => response.json())
            .then(response => {

                document.getElementById("content").insertAdjacentHTML("afterbegin", `
                <div style="padding:20px; border:1px solid black; margin: 20px 0; flex: 1;">
                    ${response.html}
                </div>
                `)
            })
        })
    })
})
