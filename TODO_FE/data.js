async function getToDoList() {
    let list = [];
    await fetch(`http://localhost:8080/getToDoList`, {
            // mode: 'no-cors' // 'cors' by default
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(json => {
            list = json;
        });
    return list;
}

const status1 = [
    "Done",
    "To Do",
]