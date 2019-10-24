const todos = [
    {
        id: 1,
        text: 'Text 1',
        iscompleted: true
    },
    {
        id: 2,
        text: 'Text 2',
        iscompleted: true
    },
    {
        id: 3,
        text: 'Text 3',
        iscompleted: false
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);