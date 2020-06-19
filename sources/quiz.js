var quizHandling = (function(){
    function Quiz(){
        this.constructor();
    }
    
    Quiz.prototype = {
        correctAnswersCount: undefined,
        currentQuestion: undefined,
    
        constructor: function(){
            this.correctAnswersCount = 0;
            this.currentQuestion = 1;
        },
    
        increaseCorrAnswCount: function(){
            this.correctAnswersCount++;
        },

        nextQuestion: function(){
            this.currentQuestion++;
        },

        getCurrentQuestion: function(){
            return this.currentQuestion;
        },

        getCorrAnswCount: function(){
            return this.correctAnswersCount;
        },

        refresh: function(){
            this.correctAnswersCount = 0;
            this.currentQuestion = 1;
        }
    }

    return Quiz;
})();

var appQuiz = new quizHandling();
