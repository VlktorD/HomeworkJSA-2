fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
  .then(response => response.json()) // Конвертирај ги податоците во JSON формат
  .then(data => {
    // 1. Сите студенти со просечна оценка поголема од 3
    const studentsAboveGrade3 = data.filter(student => student.averageGrade > 3);
    console.log("Студенти со просек над 3:", studentsAboveGrade3);

    // 2. Сите женски студенти со просечна оценка 5
    const femaleStudentsWithGrade5 = data
      .filter(student => student.gender === 'Female' && student.averageGrade === 5)
      .map(student => student.firstName);
    console.log("Женски студенти со просек 5:", femaleStudentsWithGrade5);

    // 3. Сите машки студенти кои живеат во Скопје и се над 18 години
    const maleStudentsInSkopjeOver18 = data
      .filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18)
      .map(student => `${student.firstName} ${student.lastName}`);
    console.log("Машки студенти од Скопје над 18 години:", maleStudentsInSkopjeOver18);

    // 4. Просечната оценка на сите женски студенти над 24 години
    const femaleStudentsOver24 = data
      .filter(student => student.gender === 'Female' && student.age > 24);
    const averageGradeFemalesOver24 = femaleStudentsOver24
      .reduce((sum, student) => sum + student.averageGrade, 0) / femaleStudentsOver24.length;
    console.log("Просек на женски студенти над 24 години:", averageGradeFemalesOver24);

    // 5. Сите машки студенти чие име започнува со Б и имаат просек над 2
    const maleStudentsNameStartsWithB = data
      .filter(student => student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2);
    console.log("Машки студенти со име на Б и просек над 2:", maleStudentsNameStartsWithB);
  })
  .catch(error => console.error("Грешка при вчитување на податоците:", error));