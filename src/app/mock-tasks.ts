import { Task } from "./tasks"

export const TASKS: Task[] = [
    {
        id:1,
        text: "Terminar app to do list",
        day: new Date('March 11, 2022'),
        reminder: true
    },
    {
        id:2,
        text: "Terminar de leer libro",
        day: new Date('March 26, 2022'),
        reminder: false
    },
    {
        id:3,
        text: "Terminar arreglos de la casa",
        day: new Date('March 17, 2022'),
        reminder: true
    },
    {
        id:4,
        text: "Comprar ingredientes para torta",
        day: new Date('March 23, 2022'),
        reminder: true
    }
]