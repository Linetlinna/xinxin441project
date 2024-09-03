/*Linet(Linna)*/
let cart = [];  
  
function renderCart709() {  
    const cartElement = document.getElementById('items');  
    cartElement.innerHTML = ''; //Clear #items
    let totalPrice = 0;  
  
    cart.forEach(item => {  
        const itemElement = document.createElement('li');  
  
        // Sets the text in the shopping cart item
        itemElement.classList.add('item');  
        itemElement.textContent = `${item.name} - AUD ${item.price}`;  
          
        // Set the remove button in the shopping cart item
        const removeButton = document.createElement('button');  
        removeButton.textContent = 'Remove';  
        removeButton.onclick = () => removeItem709(item);  
        itemElement.appendChild(removeButton);  
  
        // Add shopping cart items to #items
        cartElement.appendChild(itemElement);  
  
        // Cumulative price  
        totalPrice += item.price;  
    });  
  
    // Update total price text in real time  
    document.getElementById('total').textContent = `Total: AUD ${totalPrice.toFixed(2)}`; 
}  
  
function addItem709(itemName, itemPrice) {  
    if (itemName && itemPrice) {  
        cart.push({ name: itemName, price: parseFloat(itemPrice) }); 
        renderCart709();  
    }   
}  
  //A function to remove the specified item from the cart
function removeItem709(item) {  
    // Find the index position of the item in the shopping cart array
    const index = cart.indexOf(item);  
    if (index !== -1) {  
        cart.splice(index, 1); 
        // Re-render the shopping cart interface 
        renderCart709();  
    }  
}  
  
function checkout709() {  
    alert(`Thank you for your purchase! Total: AUD ${document.getElementById('total').textContent}`);  
    clearCart709();  
}  
  
function clearCart709() {  
    cart = [];  
    renderCart709();  
} 
  
// A function to set cookies 
function setCookie(name, value, days) {  
    var expires = "";  
    if (days) {  
        var date = new Date();  
        date.setTime(date.getTime() + (days*24*60*60*1000));  
        expires = "; expires=" + date.toUTCString();  
    }  
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";  
}  
  
// A function to get a cookie
function getCookie(name) {  
    var nameEQ = name + "=";  
    var ca = document.cookie.split(';');  
    for(var i=0;i < ca.length;i++) {  
        var c = ca[i];  
        while (c.charAt(0)==' ') c = c.substring(1,c.length);  
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);  
    }  
    return null;  
}  
function signup709() {
    const usernameinput = document.getElementById('usernameinput').value.trim();
    const passwordinput = document.getElementById('passwordinput').value.trim();
    if (usernameinput !== '' && passwordinput !== '') {
        setCookie('username', usernameinput,7);
        setCookie('password', passwordinput, 7);
        alert(`"${usernameinput}" has been set in the cookie.`);
        location.assign("login.html");
    } else {
        alert('Please enter valid information.');
    }
}
function login709() {  
    try {  
        const storedUsername = getCookie('username') || '';  
        const storedPassword = getCookie('password') || '';  
        const usernameInput = document.getElementById('usernameinput').value;  
        const passwordInput = document.getElementById('passwordinput').value;  
  
        if (usernameInput === storedUsername && passwordInput === storedPassword) {  
            location.assign("shopping.html");
        } else {  
             
            alert('The user name or password is incorrect.');  
        }  
    } catch (error) {  
        console.error('An error occurred during login:', error);  
      
    }  
}

