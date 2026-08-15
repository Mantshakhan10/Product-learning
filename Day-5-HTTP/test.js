async function getUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/wrong-url"
    );

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();

    console.log(users);
}

getUsers();