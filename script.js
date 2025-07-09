let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function updateUI() {
    const transactionList = document.getElementById("transactions");
    const balanceEl = document.getElementById("balance");
    transactionList.innerHTML = "";
    let balance = 0;

    transactions.forEach((transaction, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${transaction.desc}: $${transaction.amount} <button onclick="deleteTransaction(${index})">X</button>`;
        transactionList.appendChild(li);
        balance += parseFloat(transaction.amount);
    });

    balanceEl.innerText = balance;
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function addTransaction() {
    const desc = document.getElementById("desc").value;
    const amount = document.getElementById("amount").value;
    if (desc && amount) {
        transactions.push({ desc, amount });
        updateUI();
        document.getElementById("desc").value = "";
        document.getElementById("amount").value = "";
    }
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}

updateUI();