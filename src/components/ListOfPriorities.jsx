import MiniSectionHeader from "./MiniSectionHeader";

function ListOfPriorities({miniTitle}) {
  const tasks = [
    { id: "task1", placeholder: "Write your first task" },
    { id: "task2", placeholder: "" },
    { id: "task3", placeholder: "" },
    { id: "task4", placeholder: "" },
    { id: "task5", placeholder: "" },
    { id: "task6", placeholder: "" },
    { id: "task7", placeholder: "" },
    { id: "task8", placeholder: "" },
    { id: "task9", placeholder: "" },
    { id: "task10", placeholder: "" },
  ];

  return (
    <>
    <div className="col-span-1 row-span-2 h-full sm:col-span-1 col-span-2">
      <MiniSectionHeader miniTitle="List of priorities" />
      <ul className=" mx-2 my-2  rounded-sm bg-tertiary  flex flex-col">
        {tasks.map((task) => (
          <li className="w-full px-4 flex py-3" key={task.id}>
            <label htmlFor={task.id} className="w-full flex pb-2 items-center">
              <input type="checkbox" id={task.id} className="ml-1" />
              <input
                type="text"
                id={`${task.id}text`}
                placeholder={task.placeholder}
                className="flex-grow ml-3 bg-tertiary font-sans border-b-2 border-dotted border-white tracking-wider italic"
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default ListOfPriorities;
