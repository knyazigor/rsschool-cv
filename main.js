const getAge = () => {
    const birthDate = new Date('1984-08-09')
    const today = new Date();    
    const age = today.getUTCFullYear() - birthDate.getUTCFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
}

document.querySelector('.age').textContent = getAge();
