const loadButton = document.getElementById("loadUsers");
const userList = document.getElementById("userList");
const status = document.getElementById("status");

loadButton.addEventListener("click", async function () {

    status.textContent = "Loading...";
    userList.innerHTML = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        status.textContent = "Users loaded successfully.";

        users.forEach(function (user) {

            const listItem = document.createElement("li");

            listItem.textContent =
                `${user.name} - ${user.email}`;

            userList.appendChild(listItem);

        });

    } catch (error) {

        status.textContent =
            "Error: " + error.message;

        status.style.color = "red";

        console.error(error);
    }

});