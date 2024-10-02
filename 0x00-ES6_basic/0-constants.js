// 0-constants.js
// Use const to declare variables that are not reassigned
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Use const
  return task;
}
// Helper function
export function getLast() {
  return ' is okay';
}
// Use let for variables that may be reassigned
export function taskNext() {
  let combination = 'But sometimes let'; // Use let
  combination += getLast(); // Reassigning combination
    return combination;
}
