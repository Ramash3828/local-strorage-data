// const addToCart = () => {
//     const inputField = document.getElementById("product-name");
//     const name = inputField.value;
//     if (!name) {
//         return;
//     }
//     // Set item
//     setItem(name);

//     // Save localStora
//     addToProduct(name);

//     inputField.value = "";
// };

// const setItem = (name) => {
//     const ul = document.getElementById("list");
//     let li = document.createElement("li");
//     li.innerText = name;
//     ul.appendChild(li);
// };

// const getCart = () => {
//     const cart = localStorage.getItem("cart");

//     let cartObj;
//     if (cart) {
//         cartObj = JSON.parse(cart);
//     } else {
//         cartObj = {};
//     }
//     return cartObj;
// };

// const addToProduct = (name) => {
//     const cart = getCart();
//     if (cart[name]) {
//         cart[name] = cart[name] + 1;
//     } else {
//         cart[name] = 1;
//     }
//     const cartStringified = JSON.stringify(cart);
//     localStorage.setItem("cart", cartStringified);
// };

// const getLocalStorageData = () => {
//     const item = getCart();
//     for (let name in item) {
//         setItem(name);
//     }
// };

// getLocalStorageData();

const getValue = (ID) => {
    const value = document.getElementById(ID).value;
    return value;
};

const getData = () => {
    const name = getValue("name");
    const email = getValue("email");
    const pass = getValue("pass");

    if (!name || !email || !pass) {
        return;
    }
    let user_rec = [];

    user_rec = JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))
        : [];
    const checkEmail = user_rec.find((v) => v.email === email);
    if (checkEmail) {
        alert("Duplicate Data!!!");
    } else {
        user_rec.push({
            name: name,
            email: email,
            pass: pass,
        });
    }
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    //
    localStorage.setItem("user", JSON.stringify(user_rec));
};
