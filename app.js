function calculateScore() {
    let reps1 = parseInt(document.getElementById('reps1').value);
    let weight1 = parseInt(document.getElementById('weight1').value);
    let reps2 = parseInt(document.getElementById('reps2').value);
    let weight2 = parseInt(document.getElementById('weight2').value);
    let isKettleBoys = document.getElementById('isKettleBoys').checked;

    if (isNaN(reps1) || isNaN(weight1) || isNaN(reps2) || isNaN(weight2)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate the common reps and the extra reps
    let commonReps = Math.min(reps1, reps2);
    let extraReps = Math.abs(reps1 - reps2);
    let extraWeight = reps1 > reps2 ? weight1 : weight2;

    // Calculate the score
    let score = (commonReps * (weight1 + weight2)) + (extraReps * extraWeight);

    // Apply the Kettle-boy multiplier if both are Kettle-boys
    if (isKettleBoys) {
        score *= 0.667;
    }

    // Display the result
    document.getElementById('result').textContent = `Final Score: ${score.toFixed(2)}`;
}
