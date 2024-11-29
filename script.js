document.addEventListener('DOMContentLoaded', () => {  
    const questionsContainer = document.getElementById('questions-container');  

    // Fetch data from JSON file  
    fetch('questions.json')  
        .then(response => response.json())  
        .then(questions => {  
            questions.forEach((question, index) => {  
                // Create question container  
                const questionElement = document.createElement('div');  
                questionElement.classList.add('question');  

                // Add question title  
                const titleElement = document.createElement('div');  
                titleElement.classList.add('question-title');  
                titleElement.textContent = `Q${index + 1}`;  
                questionElement.appendChild(titleElement);  

                // Add question content  
                const contentElement = document.createElement('div');
                // contentElement.textContent = `Q${index + 1}`;  
                contentElement.classList.add('question-content');  
                contentElement.textContent = question.content;  
                questionElement.appendChild(contentElement);  

                // Add choices  
                const choicesElement = document.createElement('div');  
                choicesElement.classList.add('choices');  

                question.choices.forEach(choice => {  
                    const choiceElement = document.createElement('div');  
                    choiceElement.classList.add('choice');  
                    choiceElement.textContent = choice.content;  

                    // Highlight correct answer  
                    if (choice.is_correct) {  
                        choiceElement.classList.add('correct');  
                    }  

                    choicesElement.appendChild(choiceElement);  
                });  

                questionElement.appendChild(choicesElement);    

                questionsContainer.appendChild(questionElement);  
            });  
        })  
        .catch(error => {  
            console.error('Error fetching questions:', error);  
        });  


            // Fetch data from JSON file  
    fetch('data.json')  
    .then(response => response.json())  
    .then(questions => {  
        questions.forEach((question, index) => {  
            // Create question container  
            const questionElement = document.createElement('div');  
            questionElement.classList.add('question');  

            // Add question title  
            const titleElement = document.createElement('div');  
            titleElement.classList.add('question-title');  
            titleElement.textContent = `Q${index + 1}. ${question.title}`;  
            questionElement.appendChild(titleElement);  

            // Add question content  
            const contentElement = document.createElement('div');  
            contentElement.classList.add('question-content');  
            contentElement.textContent = question.content;  
            questionElement.appendChild(contentElement);  

        });  
    })  
    .catch(error => {  
        console.error('Error fetching questions:', error);  
    });
});