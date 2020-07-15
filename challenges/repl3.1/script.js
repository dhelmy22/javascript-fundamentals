




document.getElementById(`button`).addEventListener(`click`, event  => {
    let first = document.getElementById(`input1`).value;
    let second = document.getElementById(`input2`).value;
    let third = document.getElementById(`input3`).value;

    console.log(`${first}, ${second}, ${third}`);
    console.log(`I went to ${first}, and I ${second}, three ${third}.`);
});
