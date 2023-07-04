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
        return status == element.status
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

todos.forEach((todo) => {
    if(todo.status == 'todo'){
        statusId.todo.push(todo.id);
    }
    else if(todo.status == 'doing'){
        statusId.doing.push(todo.id);
    }
    else if(todo.status == 'done'){
        statusId.done.push(todo.id);
    }
})

rl.setPrompt("명령하세요 : ");
rl.prompt();
rl.on('line', (answer) => {
    if(answer == 'exit'){
        rl.close();
        process.exit();
    }
    let input = answer.split('$');
                
    switch (input[0]) {
        case "show":
            if (input[1] == "all") {
                currentStatus();
            }
            else if(input[1] == "todo" || input[1] == "doing" || input[1] == "done"){
                showStatusList(input[1]);
            }
            break;
        case "add":
            const addedName = input[1];
            const addedTags = JSON.parse(`${input[2]}`);
            addTodo(addedName, addedTags);
            break;
        case "delete":
            break;
        case "update":
            break;
    }
    rl.prompt();
})


       
     

    
