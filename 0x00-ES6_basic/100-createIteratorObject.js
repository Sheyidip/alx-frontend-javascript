export default function createIteratorObject(report) {
  function* iterator() {
    const departments = Object.values(report.allEmployees);
    const flattenedEmployees = departments.flat();
  let iterable = [];

    for (const employee of flattenedEmployees) {
      yield employee;
    }
  if (!report.allEmployees || typeof report.allEmployees !== 'object') {
    return iterable;
  }

  return iterator();
}
  //   for (const r of Object.values(report.allEmployees)) {
  //     iterable.push(...r);
  //   }
  iterable = {
    * [Symbol.iterator]() {
      for (const value of Object.values(report.allEmployees)) {
        for (const i of value) {
          yield i;
        }
      }
    },
  };

  return iterable;
}
