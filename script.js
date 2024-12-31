let score = 0;
        let questionDisabled = [false, false];
        function checkAnswer(questionNumber) {
            if (questionDisabled[questionNumber - 1]) {
                alert('You have already submitted an answer for this question.');
                return;
            }
            const selectedOption = document.querySelector(`input[name="a${questionNumber}"]:checked`);
            if (selectedOption) {
                const answerValue = selectedOption.value;
                if (answerValue === 'correct') {
                    score++;
                    document.getElementById('score').textContent = score;
                }
                const options = document.querySelectorAll(`input[name="a${questionNumber}"]`);
                options.forEach(option => {
                    option.disabled = true;
                });
                questionDisabled[questionNumber - 1] = true;
            } else {
                alert('Please select an option before submitting.');
            }
        }