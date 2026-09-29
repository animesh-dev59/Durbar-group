function formatAttendanceReport(students) {
    return students.map(student => {
        const percentage = Math.round((student.present / student.total) * 100);
        
        let status = "At Risk";
        if (percentage >= 90) {
            status = "Excellent";
        } else if (percentage >= 75) {
            status = "Good";
        }
        
        return `${student.name}: ${student.present}/${student.total} (${percentage}%) - ${status}`;
    });
} 
//  let students = [{"name":"Lina","present":15,"total":20},{"name":"Sam","present":12,"total":20}];
//  console.log(formatAttendanceReport(students));