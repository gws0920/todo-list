import { Checkbox, CheckboxProps } from 'antd';
import { FC } from 'react';

interface Props {
  task: Task;
  onUpdate?: (task: Task) => void;
}

const TaskItem: FC<Props> = ({ task, onUpdate }) => {
  const onChange: CheckboxProps['onChange'] = (e) => {
    onUpdate?.({
      ...task,
      status: e.target.checked ? 1 : 0,
    });
  };
  return (
    <li>
      <Checkbox checked={task.status === 1} onChange={onChange}>
        {task.title}
      </Checkbox>
      <span>{task.title}</span>
    </li>
  );
};

export default TaskItem;
