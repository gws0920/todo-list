import type { FormProps } from 'antd';
import { Button, Form, Input, Radio } from 'antd';
import React from 'react';

import { formatTask } from '@/utils';

const DefaultTask = {
  title: '',
  desc: '',
  status: 0,
  priority: 1,
  timeline: [],
};

const TaskEditor: React.FC<{ task?: Task; onSubmit?: (task: Task) => void }> = ({
  task,
  onSubmit,
}) => {
  const onFinish: FormProps<Task>['onFinish'] = (values) => {
    onSubmit?.(formatTask(values));
  };

  return (
    <Form
      name="basic"
      labelCol={{ xl: { span: 2 }, lg: { span: 4 } }}
      wrapperCol={{ xl: { span: 22 }, lg: { span: 20 } }}
      // style={{ maxWidth: 600 }}
      initialValues={task || DefaultTask}
      onFinish={onFinish}
      autoComplete="off"
      className="flex-1"
    >
      <Form.Item<Task>
        label="标题"
        name="title"
        rules={[{ required: true, message: '请输入' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<Task>
        label="描述"
        name="desc"
        rules={[{ required: false, message: '请输入' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item<Task>
        label="任务状态"
        name="status"
        rules={[{ required: true, message: '请选择任务状态' }]}
      >
        <Radio.Group>
          <Radio value={0}> 未开始 </Radio>
          <Radio value={1}> 已完成 </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item<Task>
        label="优先级"
        name="priority"
        rules={[{ required: true, message: '请选择优先级' }]}
      >
        <Radio.Group>
          <Radio value={0}> 低 </Radio>
          <Radio value={1}> 中 </Radio>
          <Radio value={2}> 高 </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {task?.id ? '保存' : '创建'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskEditor;
