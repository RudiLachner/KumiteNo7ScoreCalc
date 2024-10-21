let genders = {
    1: 'female',  // Initially set Participant 1 as female
    2: 'male'     // Initially set Participant 2 as male
};

// Set initial icons on page load
window.onload = function() {
    document.getElementById('genderIcon1').src = 'png/female.png';   // Participant 1 starts as female
    document.getElementById('genderIcon2').src = 'png/male.png';     // Participant 2 starts as male
};

function selectGender(participant) {
    // Toggle gender between male and female
    if (genders[participant] === 'female') {
        document.getElementById(`genderIcon${participant}`).src = 'png/male.png';
        genders[participant] = 'male';
    } else {
        document.getElementById(`genderIcon${participant}`).src = 'png/female.png';
        genders[participant] = 'female';
    }
}

function calculateScore() {
    let reps1 = parseInt(document.getElementById('reps1').value);
    let weight1 = parseInt(document.getElementById('weight1').value);
    let reps2 = parseInt(document.getElementById('reps2').value);
    let weight2 = parseInt(document.getElementById('weight2').value);

    if (isNaN(reps1) || isNaN(weight1) || isNaN(reps2) || isNaN(weight2)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Calculate common reps and additional reps
    let commonReps = Math.min(reps1, reps2);
    let extraReps1 = reps1 > reps2 ? reps1 - reps2 : 0;
    let extraReps2 = reps2 > reps1 ? reps2 - reps1 : 0;

    // Calculate the score for common reps
    let combinedWeight = weight1 + weight2;
    let commonScore = 2 * commonReps * combinedWeight;

    // Calculate the score for extra reps (if any)
    let extraScore1 = extraReps1 * weight1;
    let extraScore2 = extraReps2 * weight2;

    // Total score
    let totalScore = commonScore + extraScore1 + extraScore2;

    // Check if both participants are male and apply the multiplier if true
    if (genders[1] === 'male' && genders[2] === 'male') {
        totalScore *= 0.667;
    }

    // Display the result
    document.getElementById('result').textContent = `Final Score: ${totalScore.toFixed(2)}`;
}
