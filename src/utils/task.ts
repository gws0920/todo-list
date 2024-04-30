import { nanoid } from 'nanoid';

export const formatTask = (task: Task) => {
  const { timeline, status } = task;
  task.id = task.id || nanoid();
  if (!timeline?.length) {
    task.timeline = [{ time: Date.now(), status: status }];
  }
  return task;
};
