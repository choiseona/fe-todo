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

while(1){
    rl.question('명령하세요 : ', (answer) => {
        const input = answer.split('$');
        rl.close();
        
    })
}