const expenseHistory =
document.getElementById("expenseHistory");

const totalBalance =
document.getElementById("totalBalance");

let total = 0;

let expenses = [];

function addExpense() {

    const name =
    document.getElementById("expenseName").value;

    const amount =
    document.getElementById("expenseAmount").value;

    const category =
    document.getElementById("expenseCategory").value;

    if (
        name === "" ||
        amount === "" ||
        category === ""
    ) {

        alert("Please fill all fields");

        return;

    }

    const expense = {

        id: Date.now(),

        name,

        amount: Number(amount),

        category

    };

    expenses.push(expense);

    total += Number(amount);

    updateUI();

    clearInputs();

}

function updateUI() {

    expenseHistory.innerHTML = "";

    expenses.forEach(expense => {

        const li =
        document.createElement("li");

        li.innerHTML = `

        <div>

            <strong>${expense.name}</strong>

            <br>

            ₹${expense.amount}
            - ${expense.category}

        </div>

        <button class="delete-btn"
                onclick="deleteExpense(${expense.id})">

            Delete

        </button>

        `;

        expenseHistory.prepend(li);

    });

    totalBalance.innerText =
    `₹${total}`;

}

function deleteExpense(id) {

    const expense =
    expenses.find(item => item.id === id);

    total -= expense.amount;

    expenses =
    expenses.filter(item => item.id !== id);

    updateUI();

}

function clearInputs() {

    document.getElementById("expenseName").value = "";

    document.getElementById("expenseAmount").value = "";

    document.getElementById("expenseCategory").value = "";

}