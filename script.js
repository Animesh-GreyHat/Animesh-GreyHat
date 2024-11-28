let balance = 1000;  // Initial balance
let currentUser = ""; // Store the logged-in user

// User data (PIN and Name)
const users = [
    { pin: 1234, name: "Rohit" },
    { pin: 5678, name: "Anita" },
    { pin: 91011, name: "Vikas" }
];

function validatePIN() {
    const enteredPIN = document.getElementById('pinInput').value;
    const user = users.find(u => u.pin === parseInt(enteredPIN));

    if (user) {
        currentUser = user.name;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('atm-menu').style.display = 'block';
        document.getElementById('balance').textContent = balance;
      
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function logout() {
    currentUser = "";
    document.getElementById('atm-menu').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('pinInput').value = '';
}

function checkBalance() {
    alert('Your balance is: $' + balance);
}

function showDeposit() {
    document.getElementById('deposit-form').style.display = 'block';
    document.getElementById('atm-menu').style.display = 'none';
}

function depositMoney() {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    if (amount > 0) {
        balance += amount;
        document.getElementById('balance').textContent = balance;
        
    } else {
        alert('Please enter a valid amount.');
    }
    cancelDeposit();
}

function cancelDeposit() {
    document.getElementById('deposit-form').style.display = 'none';
    document.getElementById('atm-menu').style.display = 'block';
}

function showWithdraw() {
    document.getElementById('withdraw-form').style.display = 'block';
    document.getElementById('atm-menu').style.display = 'none';
}

function withdrawMoney() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById('balance').textContent = balance;
        
    } else {
        alert('Insufficient balance or invalid amount.');
    }
    cancelWithdraw();
}

function cancelWithdraw() {
    document.getElementById('withdraw-form').style.display = 'none';
    document.getElementById('atm-menu').style.display = 'block';
}
