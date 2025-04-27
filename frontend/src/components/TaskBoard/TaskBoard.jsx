import React, { useState } from 'react';

const sectionsData = [
  { title: "Backlog", color: "bg-blue-400", tasks: ["Create tasks here by clicking the + below", "Use checklists to split tasks", "Use tags to prioritize and filter tasks"] },
  { title: "To Do", color: "bg-purple-400", tasks: ["Assign tasks to team members", "Drag tasks from section to section as they move along your workflow"] },
  { title: "Doing", color: "bg-blue-300", tasks: [] },
  { title: "Review", color: "bg-yellow-400", tasks: ["Sections provide structure and give stakeholders a simple overview of the status of each task", "Adapt sections to match the specifics of your workflows"] },
  { title: "Done", color: "bg-green-400", tasks: ["Move tasks to 'Completed' when they are done"] },
];

const TaskBoard = () => {
  const [sections, setSections] = useState(sectionsData);

  const addTask = (sectionIndex) => {
    const task = prompt("Enter task description:");
    if (task) {
      const updatedSections = [...sections];
      updatedSections[sectionIndex].tasks.push(task);
      setSections(updatedSections);
    }
  };

  return (
    <div className="flex h-screen justify-center overflow-x-auto bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <div className="flex space-x-6 max-w-7xl w-full">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col w-64 bg-white rounded-2xl shadow-lg">
            {/* Section Header */}
            <div className={`${section.color} text-white text-center font-bold py-2 rounded-t-2xl`}>
              {section.title}
            </div>

            {/* Section Tasks */}
            <div className="flex-1 p-2 space-y-2 overflow-y-auto">
              {section.tasks.length > 0 ? (
                section.tasks.map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className="bg-gray-100 p-3 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-200 cursor-pointer"
                  >
                    {task}
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 text-sm p-4">
                  <div className="text-2xl mb-2">✅</div>
                  No Tasks
                </div>
              )}
            </div>

            {/* Add Task Button */}
            <button
              onClick={() => addTask(sectionIndex)}
              className="m-2 py-1 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition"
            >
              ＋ Add Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
