import { FC, useEffect, useState } from 'react';
import { useImmerReducer } from 'use-immer';

import { getTaskList } from '@/utils';

import TaskItem from './TaskItem';
import taskReducer, { TaskAction } from './taskReducer';
const TaskList: FC = () => {
  const [tasks, dispatch] = useImmerReducer<Task[], TaskAction>(taskReducer, []);

  useEffect(() => {
    // 在组件挂载时加载任务列表
    getTaskList().then((list) => {
      dispatch({ type: 'SET_TASKS', tasks: list });
    });
  }, []);
  return (
    <ul className="flex-1">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={(task) => dispatch({ type: 'UPDATE_TASK', task })}
        />
      ))}
    </ul>
  );
};

export default TaskList;
