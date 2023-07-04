const readline = require('readline');
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
            break;
        case "delete":
            break;
        case "update":
            break;
    }
    rl.prompt();
})


       
     

    
