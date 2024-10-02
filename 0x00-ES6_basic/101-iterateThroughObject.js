export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for (const employee of reportWithIterator) {
    employees.push(employee);
  for (const r of reportWithIterator) {
    employees.push(r);
  }

  return employees.join(' | ');
}
