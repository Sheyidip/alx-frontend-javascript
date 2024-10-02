export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
