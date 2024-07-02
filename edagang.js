// Select elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Event listener for send button
sendBtn.addEventListener('click', () => {
    sendMessage(userInput.value.trim());
    userInput.value = '';
});

// Function to send and receive messages
function sendMessage(message) {
    if (message !== '') {
        // Display user message
        displayMessage(message, 'user-message');

        // Simulate AI response (for demo purpose)
        setTimeout(() => {
            const response = generateBotResponse(message);
            displayMessage(response, 'bot-message');
        }, 500);
    }
}

// Function to display messages
function displayMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', className);
    messageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageElement);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
let cartItems = []; // Array to store cart items

// Function to add item to cart
function addToCart(itemName) {
    cartItems.push(itemName); // Add item to cart array
    updateCartDisplay(); // Update cart display
}

// Function to update cart display
function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');

    // Clear existing cart items
    cartList.innerHTML = '';

    // Add each item to the cart list
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// Function to generate bot response
function generateBotResponse(message) {
    message = message.toLowerCase();
    let response = '';

    if (message.includes('dessert') || message.includes('menu')) {
        response = "Our menu includes a variety of delicious desserts such as macarons, chocolate fondue, and more. Feel free to explore!";
    } else if (message.includes('order')) {
        response = "You can place an order directly through our website. Just browse our menu and select your favorite desserts.";
    } else if (message.includes('contact')) {
        response = "You can reach us at contact@houseofdessert.com or call us at +1-123-456-7890.";
    } else {
        response = "I'm sorry, I don't understand. Please ask another question or visit our FAQ section.";
    }

    return response;
}

