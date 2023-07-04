const readline = require('readline');
const { json } = require('stream/consumers');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const todos = [
    {
        name: '자바스크립트 공부하기',
        tags: ['programming', 'javascript'],
        status: 'todo',
        id: 1,
    },
    {
        name: '그림 그리기',
        tags: ['picture', 'favorite'],
        status: 'doing',
        id: 2,
    }
]
let curId = todos.length;

const statusId = {
    todo: [],
    doing: [],
    done: [],
}

function currentStatus() {
    console.log(`현재상태 : todo: ${statusId.todo.length}개, doing: ${statusId.doing.length}개, done: ${statusId.done.length}개`);
}

function showStatusList(status) {
    const statusArr = todos.filter(element => {
        return status === element.status
    })
    const elemArr = [];
    statusArr.forEach((element) => {
        elemArr.push(`'${element.name}, ${element.id}번'`);
    })
    const elemStr = elemArr.join(',');
    console.log(`${status}리스트 : 총${statusId[status].length}건 : `, elemStr);
}

function addTodo(addedName, addedTags) {
    curId++;
    statusId.todo.push(curId);
    todos.push({
        name: `${addedName}`,
        tags: addedTags,
        status: 'todo',
        id: curId,
    });
    console.log(`${addedName} 1개가 추가됐습니다. (id : ${curId})`);
    currentStatus();
}

function deleteTodo(deletedId) {
    let deleteName;
    let deleteStatus;
    todos.forEach((element) => {
        if (deletedId === element.id) {
            deleteName = element.name;
            deleteStatus = element.status;
            todos.splice(element, 1);
        }
    })

    const deletedArr = statusId[deleteStatus].filter((element) => {
        return element !== deletedId;
    })

    statusId[deleteStatus] = [...deletedArr];

    console.log(`${deleteName} ${deleteStatus}가 목록에서 삭제됐습니다`);
    currentStatus();
}

function updateTodo(updatedId, updatedStatus){
    let updatedName, originStatus;
    todos.forEach((element) => {
        if (updatedId === element.id) {
            originStatus = element.status;
            element.status = updatedStatus;
            updatedName = element.name;
        }
    })

    const fromArr = statusId[originStatus].filter((element) => {
        return element !== updatedId;
    })
    statusId[originStatus] = [...fromArr];
    statusId[updatedStatus].push(updatedId);

    console.log(`${updatedName} ${updatedStatus}으로 상태가 변경됐습니다`);
    currentStatus();
}

todos.forEach((todo) => {
    if(todo.status === 'todo'){
        statusId.todo.push(todo.id);
    }
    else if(todo.status === 'doing'){
        statusId.doing.push(todo.id);
    }
    else if(todo.status === 'done'){
        statusId.done.push(todo.id);
    }
})

rl.setPrompt("명령하세요 : ");
rl.prompt();
rl.on('line', (answer) => {
    if(answer === 'exit'){
        rl.close();
        process.exit();
    }
    let input = answer.split('$');
                
    switch (input[0]) {
        case "show":
            if (input[1] === "all") {
                currentStatus();
            }
            else if(input[1] === "todo" || input[1] === "doing" || input[1] === "done"){
                showStatusList(input[1]);
            }
            break;
        case "add":
            const addedName = input[1];
            const addedTags = JSON.parse(`${input[2]}`);
            addTodo(addedName, addedTags);
            break;
        case "delete":
            const deletedId = parseInt(input[1]);
            deleteTodo(deletedId);
            break;
        case "update":
            const updatedId = parseInt(input[1]);
            const updatedStatus = input[2];
            updateTodo(updatedId, updatedStatus);
            break;
    }
    rl.prompt();
})


       
     

    
