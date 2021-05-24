 const selectId = document.querySelectorAll("h2");
console.log(`В списке ${selectId.length} категории`);

selectId.forEach((el) => {
    console.log("Категория:", el.textContent);
    console.log("Количество элементов:", el.nextElementSibling.children.length);
});




