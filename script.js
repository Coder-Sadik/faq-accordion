document.addEventListener("DOMContentLoaded", () => {
	const accordionHeaders = document.querySelectorAll(".accordion-header");

	accordionHeaders.forEach((header) => {
		header.addEventListener("click", () => {
			const accordionItem = header.parentElement;
			const accordionContent = header.nextElementSibling;
			const icon = header.querySelector("img");

			// Close other accordion items
			document.querySelectorAll(".accordion-item").forEach((item) => {
				if (item !== accordionItem && item.classList.contains("active")) {
					item.classList.remove("active");
					item.querySelector(".accordion-content").style.maxHeight = null;
					item.querySelector(".accordion-header img").src =
						"./assets/images/icon-plus.svg";
				}
			});

			// Toggle the current item
			accordionItem.classList.toggle("active");

			if (accordionItem.classList.contains("active")) {
				accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
				icon.src = "./assets/images/icon-minus.svg";
			} else {
				accordionContent.style.maxHeight = null;
				icon.src = "./assets/images/icon-plus.svg";
			}
		});
	});
});
