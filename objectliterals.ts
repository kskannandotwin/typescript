var student: any = {
    studentID: 101,
    studentName: 'Scott',
    marks: 80,
    // getResult: function() {} // old method
    // getResult: () => {} // new es method
    getResult: function () {
        if (this.marks >= 35) {
            return 'Pass';
        } else {
            return 'Fail';
        }
    }
};

student.email = 'scott@dummy.com';
console.log(student.studentID);
console.log(student.studentName);
console.log(student.marks);
console.log(student.getResult());
console.log(student.email);

