import { galleryItems } from "./gallery-items.js"
// Change code below this line

const container = document.querySelector(".gallery")

const imgs = galleryItems.map(item => {
	const img = `<li class="gallery__item">
                    <a href="${item.original}" class="gallery__link" >
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-original=${item.original} loading="lazy" />
                    </a>
                </li>`
	return img
})

container.innerHTML = imgs.join("")

const clickHandler = e => {
	e.preventDefault()
	if (e.target === e.currentTarget) return
	const instance = basicLightbox.create(`
        <div class="modal">
        <img src="${e.target.dataset.original}" />
        </div>
    `)
	instance.show()
}

container.addEventListener("click", clickHandler)
