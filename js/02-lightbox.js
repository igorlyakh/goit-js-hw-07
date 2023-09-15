import { galleryItems } from "./gallery-items.js"
// Change code below this line

const container = document.querySelector(".gallery")

const imgs = galleryItems.map(item => {
	const img = `
    <li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>
    `
	return img
})

container.innerHTML = imgs.join("")

new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
})
