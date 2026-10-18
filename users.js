
const loadButton = document.getElementById("load-users");
const filterInput = document.getElementById("filter-input");
const statusMessage = document.getElementById("status");
const usersList = document.getElementById("users-list");

const API_URL = "https://jsonplaceholder.typicode.com/users";

let users = [];
let hasLoadedUsers = false;

// Display a list of users on the page.
function renderUsers(list) {
    usersList.replaceChildren();

    if (list.length === 0 && hasLoadedUsers) {
        const message = document.createElement("li");
        message.textContent = "No users match your filter.";
        usersList.appendChild(message);
        return;
    }

    list.forEach((user) => {
        const listItem = document.createElement("li");

        const name = document.createElement("h3");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;

        const city = document.createElement("p");
        city.textContent = `City: ${user.address.city}`;

        const company = document.createElement("p");
        company.textContent = `Company: ${user.company.name}`;

        listItem.append(name, email, city, company);
        usersList.appendChild(listItem);
    });
}

// Fetch users from the API.
async function loadUsers() {
    loadButton.disabled = true;
    statusMessage.textContent = "Loading users...";
    usersList.replaceChildren();

    try {
        const response = await fetch(API_URL);

        // fetch() does not automatically reject HTTP error responses.
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        users = data;
        hasLoadedUsers = true;

        // Apply the current filter to the newly loaded data.
        filterUsers();

        statusMessage.textContent =
            `Successfully loaded ${users.length} users.`;

    } catch (error) {
        console.error("Unable to load users:", error);

        users = [];
        hasLoadedUsers = false;
        usersList.replaceChildren();

        statusMessage.textContent =
            "Could not load users. Please check your connection and try again.";

    } finally {
        loadButton.disabled = false;
    }
}

// Filter the already-loaded users by name.
function filterUsers() {
    const searchTerm = filterInput.value.trim().toLowerCase();

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
    );

    renderUsers(filteredUsers);
}

// Event listeners.
loadButton.addEventListener("click", loadUsers);
filterInput.addEventListener("input", filterUsers);
