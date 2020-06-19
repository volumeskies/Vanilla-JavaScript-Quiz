var resultHandling = (function(){
    var resultObj = {
        '0':{
            comment: 'Мне больше<br>интересен футбол',
            image: 'imgAnswer1'
        },
        '3':{
            comment: 'Читаю vc.ru<br>с экрана попутчика в метро',
            image: 'imgAnswer2'
        },
        '5':{
            comment: 'Бизнес это интересно,<br> но где взять столько времени?',
            image: 'imgAnswer3'
        },
        '7':{
            comment: 'Читаю vc.ru каждый<br> день, но работать тоже нужно',
            image: 'imgAnswer4'
        },
        '8':{
            comment: 'Я работаю<br> в редакции vc.ru',
            image: 'imgAnswer5'
        }
    }

    function Result(){
        this.constructor(resultObj);
    }

    Result.prototype = {
        results: undefined,

        constructor: function(){
            this.results = JSON.parse(JSON.stringify(resultObj));
        },

        getResultComment: function(number){
            if(number === 0)
                return this.results['0'].comment;
            if(number > 0 && number <= 3)
                return this.results['3'].comment;
            if(number > 3 && number <= 5)
                return this.results['5'].comment;
            if(number > 5 && number <= 7)
                return this.results['7'].comment;
            if(number === 8)
                return this.results['8'].comment;
        },

        getImage: function(number){
            if(number === 0)
                return this.results['0'].image;
            if(number > 0 && number <= 3)
                return this.results['3'].image;
            if(number > 3 && number <= 5)
                return this.results['5'].image;
            if(number > 5 && number <= 7)
                return this.results['7'].image;
            if(number === 8)
                return this.results['8'].image;
        }
    }
    
    return Result;
})();

var appResult = new resultHandling();

