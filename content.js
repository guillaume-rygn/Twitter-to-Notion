const site = window.location.hostname

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

if(site.includes("twitter.com")){

  Add_Custom_Style(`
		.mycustombookmark-svg{
			padding: 6px;
			border-radius: 50%;
		}

		.mycustombookmark-svg-post{
			padding: 6px;
			border-radius: 50%;
			margin-top: 5px;
		}

        .mycustombookmark-svg:hover, .mycustombookmark-svg-post:hover{
			background-color:#f6ede1;
			cursor:pointer;
		}

		.mycustombookmark-svg:hover .interior-svg{
			fill:#f79511;
		}

		.mycustombookmark-svg:hover{
			stroke:#f79511;
		}

		.loader-svg{
			animation: spin 2s linear infinite;
		}

		@keyframes spin {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}
    `)

	setInterval(() => {
		//post feed
		Array.from(document.getElementsByTagName("article")).map(element => {
			if(element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild?.childElementCount == 5){				
				
				const link = "https://twitter.com" + element.children[0].children[0].lastChild?.lastChild?.firstChild.firstChild.firstChild.firstChild.firstChild.lastChild.firstChild.lastChild.firstChild.getAttribute("href");

				const content = element.children[0].children[0].lastChild.lastChild.children[1].textContent

				const name = element.children[0].children[0].lastChild.lastChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.textContent

				const handleName = "@" + element.children[0].children[0].lastChild.lastChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.getAttribute("href").slice(1)

				const profileLink = "https://twitter.com" + element.children[0].children[0].lastChild.lastChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.getAttribute("href")

				chrome.storage.sync.get(["bookmarkTwitter"]).then((result) => {
					if(result.bookmarkTwitter !== undefined && result.bookmarkTwitter.filter(element => element.link == link).length > 0){
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.insertAdjacentHTML("beforeend",`<svg class="mycustombookmark-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" version="1.1" fill="none" stroke="rgb(83, 100, 113)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<g id="surface1" transform="translate(8,8)">
							<path class="interior-svg" fill="#f79511" style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 4.644531 4.382812 C 5.421875 5.015625 5.714844 4.964844 7.175781 4.867188 L 20.941406 4.042969 C 21.230469 4.042969 20.988281 3.75 20.890625 3.703125 L 18.605469 2.050781 C 18.167969 1.710938 17.582031 1.320312 16.464844 1.417969 L 3.136719 2.390625 C 2.648438 2.4375 2.550781 2.683594 2.746094 2.875 Z M 5.472656 7.589844 L 5.472656 22.074219 C 5.472656 22.851562 5.859375 23.144531 6.734375 23.097656 L 21.863281 22.222656 C 22.738281 22.171875 22.835938 21.636719 22.835938 21.003906 L 22.835938 6.617188 C 22.835938 5.988281 22.59375 5.648438 22.058594 5.695312 L 6.25 6.617188 C 5.664062 6.667969 5.472656 6.960938 5.472656 7.589844 Z M 20.40625 8.367188 C 20.503906 8.804688 20.40625 9.242188 19.96875 9.292969 L 19.238281 9.4375 L 19.238281 20.128906 C 18.605469 20.472656 18.023438 20.664062 17.535156 20.664062 C 16.757812 20.664062 16.5625 20.421875 15.976562 19.695312 L 11.210938 12.207031 L 11.210938 19.449219 L 12.71875 19.792969 C 12.71875 19.792969 12.71875 20.667969 11.503906 20.667969 L 8.144531 20.859375 C 8.050781 20.667969 8.144531 20.179688 8.488281 20.082031 L 9.363281 19.839844 L 9.363281 10.265625 L 8.148438 10.167969 C 8.050781 9.730469 8.292969 9.097656 8.972656 9.050781 L 12.574219 8.804688 L 17.535156 16.386719 L 17.535156 9.679688 L 16.269531 9.535156 C 16.175781 9 16.5625 8.613281 17.050781 8.5625 Z M 2.015625 1.078125 L 15.882812 0.0585938 C 17.582031 -0.0898438 18.023438 0.0078125 19.089844 0.785156 L 23.519531 3.898438 C 24.246094 4.429688 24.492188 4.578125 24.492188 5.160156 L 24.492188 22.222656 C 24.492188 23.289062 24.101562 23.921875 22.742188 24.019531 L 6.636719 24.992188 C 5.617188 25.039062 5.128906 24.894531 4.59375 24.214844 L 1.335938 19.984375 C 0.753906 19.207031 0.507812 18.625 0.507812 17.941406 L 0.507812 2.777344 C 0.507812 1.902344 0.898438 1.175781 2.015625 1.078125 Z M 2.015625 1.078125 "></path>
							</g>
							</svg>`)
						
						
					} else {
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.insertAdjacentHTML("beforeend",`<svg class="mycustombookmark-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" version="1.1" fill="none" stroke="rgb(83, 100, 113)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<g id="surface1" transform="translate(8,8)">
							<path class="interior-svg" fill="rgb(83, 100, 113)" style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 4.644531 4.382812 C 5.421875 5.015625 5.714844 4.964844 7.175781 4.867188 L 20.941406 4.042969 C 21.230469 4.042969 20.988281 3.75 20.890625 3.703125 L 18.605469 2.050781 C 18.167969 1.710938 17.582031 1.320312 16.464844 1.417969 L 3.136719 2.390625 C 2.648438 2.4375 2.550781 2.683594 2.746094 2.875 Z M 5.472656 7.589844 L 5.472656 22.074219 C 5.472656 22.851562 5.859375 23.144531 6.734375 23.097656 L 21.863281 22.222656 C 22.738281 22.171875 22.835938 21.636719 22.835938 21.003906 L 22.835938 6.617188 C 22.835938 5.988281 22.59375 5.648438 22.058594 5.695312 L 6.25 6.617188 C 5.664062 6.667969 5.472656 6.960938 5.472656 7.589844 Z M 20.40625 8.367188 C 20.503906 8.804688 20.40625 9.242188 19.96875 9.292969 L 19.238281 9.4375 L 19.238281 20.128906 C 18.605469 20.472656 18.023438 20.664062 17.535156 20.664062 C 16.757812 20.664062 16.5625 20.421875 15.976562 19.695312 L 11.210938 12.207031 L 11.210938 19.449219 L 12.71875 19.792969 C 12.71875 19.792969 12.71875 20.667969 11.503906 20.667969 L 8.144531 20.859375 C 8.050781 20.667969 8.144531 20.179688 8.488281 20.082031 L 9.363281 19.839844 L 9.363281 10.265625 L 8.148438 10.167969 C 8.050781 9.730469 8.292969 9.097656 8.972656 9.050781 L 12.574219 8.804688 L 17.535156 16.386719 L 17.535156 9.679688 L 16.269531 9.535156 C 16.175781 9 16.5625 8.613281 17.050781 8.5625 Z M 2.015625 1.078125 L 15.882812 0.0585938 C 17.582031 -0.0898438 18.023438 0.0078125 19.089844 0.785156 L 23.519531 3.898438 C 24.246094 4.429688 24.492188 4.578125 24.492188 5.160156 L 24.492188 22.222656 C 24.492188 23.289062 24.101562 23.921875 22.742188 24.019531 L 6.636719 24.992188 C 5.617188 25.039062 5.128906 24.894531 4.59375 24.214844 L 1.335938 19.984375 C 0.753906 19.207031 0.507812 18.625 0.507812 17.941406 L 0.507812 2.777344 C 0.507812 1.902344 0.898438 1.175781 2.015625 1.078125 Z M 2.015625 1.078125 "></path>
							</g>
							</svg>`)
						
						
					}
				


			
				

			
					element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.addEventListener("click", (e) => {
						e.stopPropagation();

						update = true;
						
						if(element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.getAttribute("fill") == "rgb(83, 100, 113)"){

							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.removeAttribute("style")
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.removeAttribute("fill")
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("d","M21 12a9 9 0 11-6.219-8.56");
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.classList.remove("interior-svg")
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.classList.add("loader-svg")
							
							
							chrome.runtime.sendMessage({action: "add", link:link, content:content, name:name, handleName:handleName, profileLink:profileLink}, function(response) {

								chrome.storage.sync.get(["bookmarkTwitter"]).then((result) => {
									if(result.bookmarkTwitter !== undefined){
										let array = result.bookmarkTwitter
										array.push({link:link, id:response.data})
										chrome.storage.sync.set({
											"bookmarkTwitter" : array
										}, function(){});
										element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("style", " stroke:none;fill-rule:nonzero;fill-opacity:1;")
										element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("fill", "#f79511")

										element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.classList.add("interior-svg")
										element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.classList.remove("loader-svg")

										element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("d","M 4.644531 4.382812 C 5.421875 5.015625 5.714844 4.964844 7.175781 4.867188 L 20.941406 4.042969 C 21.230469 4.042969 20.988281 3.75 20.890625 3.703125 L 18.605469 2.050781 C 18.167969 1.710938 17.582031 1.320312 16.464844 1.417969 L 3.136719 2.390625 C 2.648438 2.4375 2.550781 2.683594 2.746094 2.875 Z M 5.472656 7.589844 L 5.472656 22.074219 C 5.472656 22.851562 5.859375 23.144531 6.734375 23.097656 L 21.863281 22.222656 C 22.738281 22.171875 22.835938 21.636719 22.835938 21.003906 L 22.835938 6.617188 C 22.835938 5.988281 22.59375 5.648438 22.058594 5.695312 L 6.25 6.617188 C 5.664062 6.667969 5.472656 6.960938 5.472656 7.589844 Z M 20.40625 8.367188 C 20.503906 8.804688 20.40625 9.242188 19.96875 9.292969 L 19.238281 9.4375 L 19.238281 20.128906 C 18.605469 20.472656 18.023438 20.664062 17.535156 20.664062 C 16.757812 20.664062 16.5625 20.421875 15.976562 19.695312 L 11.210938 12.207031 L 11.210938 19.449219 L 12.71875 19.792969 C 12.71875 19.792969 12.71875 20.667969 11.503906 20.667969 L 8.144531 20.859375 C 8.050781 20.667969 8.144531 20.179688 8.488281 20.082031 L 9.363281 19.839844 L 9.363281 10.265625 L 8.148438 10.167969 C 8.050781 9.730469 8.292969 9.097656 8.972656 9.050781 L 12.574219 8.804688 L 17.535156 16.386719 L 17.535156 9.679688 L 16.269531 9.535156 C 16.175781 9 16.5625 8.613281 17.050781 8.5625 Z M 2.015625 1.078125 L 15.882812 0.0585938 C 17.582031 -0.0898438 18.023438 0.0078125 19.089844 0.785156 L 23.519531 3.898438 C 24.246094 4.429688 24.492188 4.578125 24.492188 5.160156 L 24.492188 22.222656 C 24.492188 23.289062 24.101562 23.921875 22.742188 24.019531 L 6.636719 24.992188 C 5.617188 25.039062 5.128906 24.894531 4.59375 24.214844 L 1.335938 19.984375 C 0.753906 19.207031 0.507812 18.625 0.507812 17.941406 L 0.507812 2.777344 C 0.507812 1.902344 0.898438 1.175781 2.015625 1.078125 Z M 2.015625 1.078125 ");
										return
									} else {
										let array = [{link:link, id:response.data}]
										chrome.storage.sync.set({
											"bookmarkTwitter" : array
										}, function(){});

										element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("style", " stroke:none;fill-rule:nonzero;fill-opacity:1;")
										element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("fill", "#f79511")

										element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.classList.add("interior-svg")
										element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.classList.remove("loader-svg")

										element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("d","M 4.644531 4.382812 C 5.421875 5.015625 5.714844 4.964844 7.175781 4.867188 L 20.941406 4.042969 C 21.230469 4.042969 20.988281 3.75 20.890625 3.703125 L 18.605469 2.050781 C 18.167969 1.710938 17.582031 1.320312 16.464844 1.417969 L 3.136719 2.390625 C 2.648438 2.4375 2.550781 2.683594 2.746094 2.875 Z M 5.472656 7.589844 L 5.472656 22.074219 C 5.472656 22.851562 5.859375 23.144531 6.734375 23.097656 L 21.863281 22.222656 C 22.738281 22.171875 22.835938 21.636719 22.835938 21.003906 L 22.835938 6.617188 C 22.835938 5.988281 22.59375 5.648438 22.058594 5.695312 L 6.25 6.617188 C 5.664062 6.667969 5.472656 6.960938 5.472656 7.589844 Z M 20.40625 8.367188 C 20.503906 8.804688 20.40625 9.242188 19.96875 9.292969 L 19.238281 9.4375 L 19.238281 20.128906 C 18.605469 20.472656 18.023438 20.664062 17.535156 20.664062 C 16.757812 20.664062 16.5625 20.421875 15.976562 19.695312 L 11.210938 12.207031 L 11.210938 19.449219 L 12.71875 19.792969 C 12.71875 19.792969 12.71875 20.667969 11.503906 20.667969 L 8.144531 20.859375 C 8.050781 20.667969 8.144531 20.179688 8.488281 20.082031 L 9.363281 19.839844 L 9.363281 10.265625 L 8.148438 10.167969 C 8.050781 9.730469 8.292969 9.097656 8.972656 9.050781 L 12.574219 8.804688 L 17.535156 16.386719 L 17.535156 9.679688 L 16.269531 9.535156 C 16.175781 9 16.5625 8.613281 17.050781 8.5625 Z M 2.015625 1.078125 L 15.882812 0.0585938 C 17.582031 -0.0898438 18.023438 0.0078125 19.089844 0.785156 L 23.519531 3.898438 C 24.246094 4.429688 24.492188 4.578125 24.492188 5.160156 L 24.492188 22.222656 C 24.492188 23.289062 24.101562 23.921875 22.742188 24.019531 L 6.636719 24.992188 C 5.617188 25.039062 5.128906 24.894531 4.59375 24.214844 L 1.335938 19.984375 C 0.753906 19.207031 0.507812 18.625 0.507812 17.941406 L 0.507812 2.777344 C 0.507812 1.902344 0.898438 1.175781 2.015625 1.078125 Z M 2.015625 1.078125 ");
												}
											})

							  });		
							  

							  

							
						} else {
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.removeAttribute("style")
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.removeAttribute("fill")
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("d","M21 12a9 9 0 11-6.219-8.56");
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.classList.remove("interior-svg")
							element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.classList.add("loader-svg")

							chrome.storage.sync.get(["bookmarkTwitter"]).then((result) => {

								let uuid = result.bookmarkTwitter.find(element => element.link == link).id;

								chrome.runtime.sendMessage({action: "delete", id: uuid}, function(response) {

									let array = result.bookmarkTwitter.filter(element => element.link !== link)
								
									chrome.storage.sync.set({
										"bookmarkTwitter" : array
									}, function(){});
									element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("style", " stroke:none;fill-rule:nonzero;fill-opacity:1;")
									element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("fill", "rgb(83, 100, 113)")

									element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.classList.add("interior-svg")
									element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.classList.remove("loader-svg")

									element.children[0].children[0].lastChild?.lastChild?.lastChild?.firstChild.lastChild.firstElementChild.firstElementChild.setAttribute("d","M 4.644531 4.382812 C 5.421875 5.015625 5.714844 4.964844 7.175781 4.867188 L 20.941406 4.042969 C 21.230469 4.042969 20.988281 3.75 20.890625 3.703125 L 18.605469 2.050781 C 18.167969 1.710938 17.582031 1.320312 16.464844 1.417969 L 3.136719 2.390625 C 2.648438 2.4375 2.550781 2.683594 2.746094 2.875 Z M 5.472656 7.589844 L 5.472656 22.074219 C 5.472656 22.851562 5.859375 23.144531 6.734375 23.097656 L 21.863281 22.222656 C 22.738281 22.171875 22.835938 21.636719 22.835938 21.003906 L 22.835938 6.617188 C 22.835938 5.988281 22.59375 5.648438 22.058594 5.695312 L 6.25 6.617188 C 5.664062 6.667969 5.472656 6.960938 5.472656 7.589844 Z M 20.40625 8.367188 C 20.503906 8.804688 20.40625 9.242188 19.96875 9.292969 L 19.238281 9.4375 L 19.238281 20.128906 C 18.605469 20.472656 18.023438 20.664062 17.535156 20.664062 C 16.757812 20.664062 16.5625 20.421875 15.976562 19.695312 L 11.210938 12.207031 L 11.210938 19.449219 L 12.71875 19.792969 C 12.71875 19.792969 12.71875 20.667969 11.503906 20.667969 L 8.144531 20.859375 C 8.050781 20.667969 8.144531 20.179688 8.488281 20.082031 L 9.363281 19.839844 L 9.363281 10.265625 L 8.148438 10.167969 C 8.050781 9.730469 8.292969 9.097656 8.972656 9.050781 L 12.574219 8.804688 L 17.535156 16.386719 L 17.535156 9.679688 L 16.269531 9.535156 C 16.175781 9 16.5625 8.613281 17.050781 8.5625 Z M 2.015625 1.078125 L 15.882812 0.0585938 C 17.582031 -0.0898438 18.023438 0.0078125 19.089844 0.785156 L 23.519531 3.898438 C 24.246094 4.429688 24.492188 4.578125 24.492188 5.160156 L 24.492188 22.222656 C 24.492188 23.289062 24.101562 23.921875 22.742188 24.019531 L 6.636719 24.992188 C 5.617188 25.039062 5.128906 24.894531 4.59375 24.214844 L 1.335938 19.984375 C 0.753906 19.207031 0.507812 18.625 0.507812 17.941406 L 0.507812 2.777344 C 0.507812 1.902344 0.898438 1.175781 2.015625 1.078125 Z M 2.015625 1.078125 ");
									
								})
									
							})
						
						}
					})
				})
			}
		})
	
	},1000)

}
















