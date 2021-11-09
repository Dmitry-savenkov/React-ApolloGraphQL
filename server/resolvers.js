import Todo from "./models/Todo.js";

const resolvers = {
    Query: {
        welcome : () => {
            return 'welcome to the secret shope'
        },
        getTodos: async () => {
            const todos = await Todo.find()
            return todos
        },
        getTodo: async (parent, args) => {
            return await Todo.findById(args.id);  
        }
    },
    Mutation:{
        addTodo: async (parent, args) => {
            const newTodo = new Todo({title:args.title,detail:args.detail,date:args.date})
            await newTodo.save();
            return newTodo;
        },
        deleteTodo: async (parent, args) => {
            await Todo.findByIdAndDelete(args.id)
            return "The todo is deleted"
        },
        updateTodo: async (root, args) => {
            const { id, title, detail, date } = args;
            const updatedTodo = {};
            if (title !== undefined) {
            updatedTodo.title = title
            }
            if (detail !== undefined) {
            updatedTodo.detail = detail
            }
            if (date !== undefined) {
            updatedTodo.date = date
            }
            const todo = await Todo.findByIdAndUpdate(
            id,
             updatedTodo ,
            { new: true }
            )
            return todo;
        }
    }
}

export default resolvers;