const addToCart = () => {
    const inputField = document.getElementById("product-name");
    const name = inputField.value;
    // Set item
    setItem(name);

    // Save localStora

    inputField.value = "";
};

const setItem = (name) => {
    const ul = document.getElementById("list");
    let li = document.createElement("li");
    li.innerText = name;
    ul.appendChild(li);
};
