const initialData = {
    tasks: {
        1 : { id: 1, text: 'Take out the garbage', assigned: "Abir", tags: ["Photography", "travel", "Winter"]},
        2 : { id: 2, text: 'Watch my favorite show', assigned: "Abir", tags: ["Photography", "travel", "Winter"]},
        3 : { id: 3, text: 'Charge my phone', assigned: "Abir", tags: ["Photography", "travel", "Winter"]},
        4 : { id: 4, text: 'Cook dinner', assigned: "Abir", tags: ["Photography", "travel", "Winter"]}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: [1,2,3,4]
        },
        'column-2' : {
            id: 'column-2',
            title: 'On Progress',
            taskIds: []
        },
        'column-3' : {
            id: 'column-3',
            title: 'Testing',
            taskIds: []
        },
        'column-4' : {
            id: 'column-4',
            title: 'Done',
            taskIds: []
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData;