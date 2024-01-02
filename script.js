document.getElementById('startButton').addEventListener('click', startBreathingExercise);

function startBreathingExercise() {
    let duration = parseInt(document.getElementById('durationInput').value);
    if (!duration) {
        alert("Please enter a valid duration in minutes.");
        return;
    }

    let totalTime = duration * 60; // Convert minutes to seconds
    let breathCycle = 10; // 5 seconds in, 5 seconds out
    let chime = document.getElementById('chime');

    let interval = setInterval(() => {
        chime.play();
        totalTime -= breathCycle;

        if (totalTime <= 0) {
            clearInterval(interval);
            alert("Exercise completed!");
        }
    }, breathCycle * 1000);
}
