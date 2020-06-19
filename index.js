(function(){
    /* FROM START SCREEN TO QUIZ SCREEN */
    var startButton = document.querySelector('[data-click="start"]');
    startButton.addEventListener('click', function(){
        //If clicking start button
        if(event.target.dataset.click === 'start'){
            //Hiding start view elements
            var quizWrapper = document.querySelector('.Bussquiz');
            quizWrapper.classList.add('Bussquiz-quiz');
            quizWrapper.firstElementChild.style.display = 'none';
            quizWrapper.firstElementChild.nextElementSibling.style.display = 'none';

            //Showing quiz view elements
            var quizElements = document.getElementsByClassName('quiz');
            for(let elem of quizElements){
                if(elem.classList[0] === 'Bussquiz__choices'){
                    elem.style.display = 'flex';
                    continue;
                }
                elem.style.display = 'block';
            }

            //Changing action button
            startButton.dataset.click = 'next';
            startButton.textContent = 'Продолжить';
            setQuizQuestion();
            return;
        }//If clicking 'next question' button
        if(event.target.dataset.click === 'next'){
            if(appQuiz.getCurrentQuestion() === 8){
                event.target.dataset.click = 'refresh';
                event.target.textContent = 'Пройти еще раз';
                showResults();
                return;
            }
            appQuiz.nextQuestion();
            updateQuizQuestion();
            return;
        }
        if(event.target.dataset.click === 'refresh'){
            event.target.dataset.click = 'next';
            event.target.textContent = 'Продолжить';
            var images = document.querySelector('.result-bg');
            images.parentNode.removeChild(images);
            var question = document.querySelector('.Bussquiz__question');
            question.classList.toggle('Bussquiz__result');
            var links = document.querySelector('.Bussquiz__link');
            links.parentNode.removeChild(links);
            appQuiz.refresh();
            updateQuizQuestion();
            return;
        }
    });
        

        /* QUIZ SCREEN */

        //Function which handles answer button behavior
        function onAnswerButton(event){
            event.preventDefault();
            //Removing current button listener
            event.target.removeEventListener('click', onAnswerButton);
            event.target.disabled = 'true';
            var parent = event.target.parentNode;
            var children = parent.children;

            //Removing others but current button
            children = Array.prototype.slice.call(children); 
            children.forEach(function(child){
                if(child.dataset.index !== event.target.dataset.index){
                    child.classList.add('hide');
                }
            });

            //Adding class according to result
            if(event.target.dataset.index === appQuestions.getQuestionCorrectAnswer(appQuiz.getCurrentQuestion())){
                event.target.classList.add('success');
                //If answer is right incrementing correct answers counter
                appQuiz.increaseCorrAnswCount();
            }
            else
                event.target.classList.add('error');

            //Showing comment
            var comment = document.createElement('div');
            var choices = document.querySelector('.Bussquiz__choices');
            comment.classList.add('Bussquiz__comment');
            comment.innerHTML = appQuestions.getComment(appQuiz.getCurrentQuestion(), event.target.dataset.index);
            choices.after(comment);

            //Showing next question button
            var nextQuestionButton = document.querySelector('[data-click="next"]');
            nextQuestionButton.style.display = 'block';
        }

        
        function setQuizQuestion(){
            var questionWrapper = document.querySelector('.Bussquiz__question');
            var currentIndex = appQuiz.getCurrentQuestion();
            questionWrapper.textContent = appQuestions.getQuestionByIndex(currentIndex);
    
            var questionCounter = document.querySelector('.Bussquiz__counter');
            questionCounter.textContent = currentIndex + '/8';
    
            var questionButtons = document.getElementsByClassName('Bussquiz__choice-button');
            for(var i = 0; i < questionButtons.length; i++){
                questionButtons[i].textContent = appQuestions.getAnswersByIndex(currentIndex)[i];
                questionButtons[i].addEventListener('click', onAnswerButton);
            }
        }
        
        function createButton(){
            var button = document.createElement('button');
            button.classList.add('Bussquiz__choice-button');
            return button;
        }

        function updateQuizQuestion(){
            //Changing question text
            var questionWrapper = document.querySelector('.Bussquiz__question');
            var currentIndex = appQuiz.getCurrentQuestion();
            questionWrapper.textContent = appQuestions.getQuestionByIndex(currentIndex);
            //Changing questions counter
            var questionCounter = document.querySelector('.Bussquiz__counter');
            questionCounter.textContent = currentIndex + '/8';
            //Removing comment section
            var commentSection = document.querySelector('.Bussquiz__comment');
            var commentParent = commentSection.parentNode;
            commentParent.removeChild(commentSection);
            //Adding listeners to choices buttons
            var questionButtons = document.getElementsByClassName('Bussquiz__choice-button');
            for(var i = 0; i < questionButtons.length; i++){
                questionButtons[i].classList.remove('hide', 'error', 'success');
                questionButtons[i].disabled = false;
                questionButtons[i].textContent = appQuestions.getAnswersByIndex(currentIndex)[i];
                questionButtons[i].addEventListener('click', onAnswerButton);
            }
            //Hiding next question button
            //Showing next question button
            var nextQuestionButton = document.querySelector('[data-click="next"]');
            nextQuestionButton.style.display = 'none';
        }



        /* RESULT SCREEN */
        function showResults(){
            //Hiding buttons
            var questionButtons = document.getElementsByClassName('Bussquiz__choice-button');
            for(var i = 0; i < questionButtons.length; i++){
                questionButtons[i].classList.add('hide');
                questionButtons[i].disabled = true;
            }
            //Showing number of correct answers
            var counter = document.querySelector('.Bussquiz__counter');
            counter.textContent = appQuiz.getCorrAnswCount() + ' из 8 правильных ответов';
            //Hiding comment section
            var comment = document.querySelector('.Bussquiz__comment');
            comment.classList.add('hide');
            //Showing result message
            var question = document.querySelector('.Bussquiz__question');
            question.classList.toggle('Bussquiz__result');
            question.textContent = appResult.getResultComment(appQuiz.getCorrAnswCount());
            //Showing result image
            var resultBg = document.createElement('div');
            resultBg.classList.add(appResult.getImage(appQuiz.getCorrAnswCount()), 'result-bg');
            counter.before(resultBg);
            //Showing links
            question.after(createLinksWrapper());
        }

        function createLink(){
            var link = document.createElement('a');
            return link;
        }

        function createLinksWrapper(){
            var linksWrapper = document.createElement('div');
            linksWrapper.classList.add('Bussquiz__link');
            for(var i = 0; i < 3; i++){
                var link = createLink();
                switch(i){
                    case 0:
                        link.classList.add('Bussquiz__link-facebook');
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        link.href = 'https://youtu.be/dQw4w9WgXcQ'
                        break;
                    case 1:
                        link.classList.add('Bussquiz__link-vk');
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        link.href = 'https://youtu.be/dQw4w9WgXcQ'
                        break;
                    case 2:
                        link.classList.add('Bussquiz__link-twitter');
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        link.href = 'https://youtu.be/dQw4w9WgXcQ'
                        break;
                }
                linksWrapper.append(link);
            }
            return linksWrapper;
        }
})();