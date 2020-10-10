console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
	
	const getImgs = () => {
		const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
		fetch(imgUrl)
		.then(response => response.json())
		.then (img => {
			renderImgs(img)
		})
	}

	const renderImgs = (img) => {
		const dogImgDiv = document.getElementById("dog-image-container")
		img.message.forEach(i => {
			const imgDiv = document.createElement('img')
			imgDiv.src = i
			dogImgDiv.append(imgDiv)
		});
	}

	const getBreeds = () => {
		const breedUrl = 'https://dog.ceo/api/breeds/list/all'
		fetch(breedUrl)
			.then(res => res.json())
			.then(breeds => {
				renderBreeds(breeds)
			});
	}

	const renderBreeds = (breeds) => {
		let dogUl = document.querySelector('#dog-breeds')
		bKeys = Object.keys(breeds.message).forEach(breed => {
			let breedLi = document.createElement('li')
			breedLi.innerText = breed 
			dogUl.appendChild(breedLi)
			breedLi.addEventListener('click', breedClickColor)
		});
	}

	const breedClickColor = (event) => {
		event.target.style.color = "red"
	}
	
	

	
	getBreeds()
	getImgs()
})