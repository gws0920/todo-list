import TaskEditor from '@/components/TaskEditor';
import TaskList from '@/components/TaskList';
import { saveTask } from '@/utils';
const Home = () => {
  return (
    <div className="flex flex-1 w-full">
      <TaskList />
      <TaskEditor onSubmit={saveTask} />
    </div>
  );
};
export default Home;
