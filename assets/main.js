// Function to render your items
const renderItems = (data) => {
	// The `ul` where the items will be inserted
	const dataList = document.getElementById('data-list')

	// Loop through each item in the data array
	data.forEach((item) => {
		// Make a “template literal” as we have before, inserting your data
		let listItem =
			`
				<li>
					<h2>${item.title}</h2>
					<img src="${item.posterImage}">
					<p>Released in <time>${item.year}</time></p>
					<p><em>${item.runTime}</em></p>
					<a href="${item.imdbLink}">
						<p>${item.imdbRating} / 10 →</p>
					</a>
				</li>
			`

		// This magic will turn the “template literal” into proper DOM nodes (…don’t worry about it!)
		listItem = new DOMParser().parseFromString(listItem, "text/html").body.firstChild

		// …which will let us treat it like it any other element in our page
		if (!item.alsoWriter) { // Conditional logic, if this is `false`
			listItem.classList.add('faded') // Add this class to the whole `li`
		}

		dataList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



// Fetch gets your (local) JSON file…
fetch('assets/data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		renderItems(data)
	})
