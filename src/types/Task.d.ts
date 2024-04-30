type TaskStatus = 0 | 1; // 0: 未完成，1: 已完成
type TaskPriority = 0 | 1 | 2; // 0: 低，1: 中，2: 高
type TaskTimeline = {
  status: TaskStatus; // 任务状态
  time: number; // 时间
};
interface Task {
  timeline: TaskTimeline[];
  id: string;
  title: string; // 任务标题
  status: TaskStatus; // 任务状态
  children?: Task[]; // 子任务
  desc?: string; // 描述（md）
  priority: TaskPriority; // 优先级
  attachment?: string; // 附件
}
