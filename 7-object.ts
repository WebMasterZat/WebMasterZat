// Типизация объекта
const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: "John"
}

function logBirthdayData(data: {
    isBirthdayData: boolean,
    ageData: number,
    userNameData: string
}) {
    if (data.isBirthdayData) {
        console.log(`Happy Birthday, ${data.userNameData}! You are now ${data.ageData} years old.`);
    }
}
