document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'async', 'scope', 'hoisting']);
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", async () => {
        const response = await fetch('directions.json') 
        const directions = await response.json()
        //const message = await navigateLabyrinth(directions)
        // 🪲 Bug: Incorrect method
        navigateLabyrinth(directions);                    
    });
});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    let mostRecentDate = new Date('1900-01-01')
    let mostRecentBook
    books.forEach(element => {
        if (mostRecentDate < new Date(element.published)) {
            mostRecentDate = new Date(element.published)
            mostRecentBook = element 
        }
    });
    return mostRecentBook
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = setA.intersection(setB);
    return intersection;
}

async function navigateLabyrinth(directions) {
    let i = 0;
    function navigate() {
        setTimeout(() => {
            console.log(directions[i].step);
            i++;
            if ((i < directions.length)){
                navigate();
            } else {
                document.getElementById("room3Result").textContent = "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
            }
        }, 1000);
    }
    navigate();
}

