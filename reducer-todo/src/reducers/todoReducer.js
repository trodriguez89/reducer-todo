export const initialState = {
    todos: [
        {
            item: "Learn about reducers",
            completed: false,
            id: 1
        }
    ]
}

export const toDoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            return {
                todos: [
                    ...state.todos,
                    {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                    }
                ]
            }
        case "TOGGLE_COMPLETED":
            return {
                todos: state.todos.map(todos => {
                    if (todos.id === action.payload) {
                        return {
                            ...todos,
                            completed: !todos.completed
                        }
                    } else {
                        return todos;
                    }
                })
            }
        case "FILTER":
            return {
                todos: state.todos.filter(todos => !todos.completed)
            }
            default:
                return state;
    }

}

