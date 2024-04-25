function countdown() {
    let i = 10;
    const intervalId = setInterval(() => {
        if (i > 0) {
            document.body.innerHTML = i--;
        } else {
            clearInterval(intervalId);
            document.body.innerHTML = "Happy Independence Day";
        }
    }, 1000);
}

countdown();
