import { removeTask, saveTask } from '@/utils';
export type TaskAction =
  | {
      type: 'ADD_TASK' | 'REMOVE_TASK' | 'UPDATE_TASK';
      task: Task;
    }
  | {
      type: 'SET_TASKS';
      tasks: Task[];
    };

export default function (tasks: Task[], action: TaskAction) {
  switch (action.type) {
    case 'UPDATE_TASK': {
      const index = tasks.findIndex((t) => t.id === action.task.id);
      if (index !== -1) {
        tasks[index] = action.task;
        saveTask(action.task);
      }
      return tasks;
    }
    case 'ADD_TASK': {
      tasks.push(action.task);
      saveTask(action.task);
      return tasks;
    }
    case 'REMOVE_TASK': {
      const index = tasks.findIndex((t) => t.id === action.task.id);
      if (index !== -1) {
        tasks.splice(index, 1);
        removeTask(action.task.id);
      }
      return tasks;
    }
    case 'SET_TASKS': {
      tasks = action.tasks;
      return tasks;
    }
    default:
      break;
  }
}
