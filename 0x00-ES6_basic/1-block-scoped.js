export default function taskBlock(trueOrFalse)
{
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true; // Block-scoped
    let task2 = false; // Block-scoped
  }

  return [task, task2];
}
