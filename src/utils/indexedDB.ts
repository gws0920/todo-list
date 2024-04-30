import Dexie, { Table } from 'dexie';

class TaskDataBase extends Dexie {
  public task!: Table<Task, string>; // id is number in this case

  public constructor() {
    super('task');
    this.version(1).stores({
      task: 'id, title, desc, status, priority, attachment, timeline',
    });
  }
}

const db = new TaskDataBase();

export const saveTask = (task: Task) => {
  return db.task.put(task);
};
export const removeTask = (taskId: string) => {
  return db.task.delete(taskId);
};

export const getTaskList = () => {
  return db.task.toArray();
};
