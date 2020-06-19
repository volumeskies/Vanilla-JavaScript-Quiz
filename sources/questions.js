var questionsHandling = (function(){
    var questionsObj = {
        first: {
            question: 'На какую сумму Роспотребнадзор оштрафовал продуктовую сеть «Вкусвилл»?',
            '1': {
                value: '6,3 млн рублей',
                comment: '<span><b>Верно.</b> Проверка <a href="https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley">обнаружила</a> просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.</span>'
            },
            '2': {
                value: '1 млн рублей',
                comment: '<span><b>Нет, немного больше: 6,3 млн рублей.</b> Проверка <a href="https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley">обнаружила</a> просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.</span>'
            },
            '3': {
                value: '50 млн рублей',
                comment: '<span><b>Нет, гораздо меньше: 6,3 млн рублей.</b> Проверка <a href="https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley">обнаружила</a> просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.</span>'
            },
            '4': {
                value: 'Не оштрафовал, а объявил выговор',
                comment: '<span><b>Нет, всё же оштрафовал на 6,3 млн рублей.</b> Проверка <a href="https://vc.ru/39208-rospotrebnadzor-oshtrafoval-produktovuyu-set-vkusvill-na-6-3-mln-rubley">обнаружила</a> просроченные продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.</span>'
            },
            correctAnsw: '1'
        },

        second: {
            question: 'Почему бутылку воды «Святой источник» в форме футбольного мяча сняли с продажи?',
            '1': {
                value: 'Она оказалась огнеопасной',
                comment: '<span>Да, бутылка благодаря своей форме призмы фокусировала свет так, что он <a href="https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha">воспламенял</a> окружающие предметы.</span>'
            },
            '2': {
                value: 'Дети играли ею в футбол и разбивали окна',
                comment: '<span>Нет, дело в её форме призмы — она фокусировала свет так, что он <a href="https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha">воспламенял</a> окружающие предметы.</span>'
            },
            '3': {
                value: 'Она постоянно скатывалась с полок',
                comment: '<span>Бутылка была довольно устойчивая, но благодаря своей форме призмы фокусировала свет так, что он <a href="https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha">воспламенял</a> окружающие предметы.</span>'
            },
            '4': {
                value: 'Её никто не покупал',
                comment: '<span>Её покупали, но бутылка благодаря своей форме призмы фокусировала свет так, что он <a href="https://vc.ru/39121-proizvoditel-vody-svyatoy-istochnik-vypustil-neozhidanno-ogneopasnuyu-butylku-v-forme-myacha">воспламенял</a> окружающие предметы.</span>'
            },
            correctAnsw: '1'
        },

        third: {
            question: 'Сколько денег потеряли основатели WhatsApp после ухода из  Facebook?',
            '1': {
                value: 'Они лишились акций на $1,3 млрд',
                comment: '<span>Ян Кум и Брайан Эктон действительно могли получить акции на эту сумму, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href="https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii">конфликта</a> с руководством.</span>'
            },
            '2': {
                value: 'Они не только лишились акций на $1,3 млрд и выплатили штрафы на $100 млн',
                comment: '<span>Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href="https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii">конфликта</a> с руководством, но штрафы никто не выплачивал.</span>'
            },
            '3': {
                value: 'Ничего не лишились, к моменту ухода они уже получили всё вознаграждение',
                comment: '<span>Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href="https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii">конфликта</a> с руководством.</span>'
            },
            '4': {
                value: 'Ничего не лишились, но получили иски за нарушение коммерческой тайны',
                comment: '<span>Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года. Они ушли досрочно из-за <a href="https://vc.ru/39509-wsj-osnovateli-whatsapp-lishilis-akciy-facebook-na-1-3-mlrd-posle-uhoda-iz-kompanii">конфликта</a> с руководством — но коммерческую тайну пока никто не нарушил.</span>'
            },
            correctAnsw: '1'
        },
        
        fourth: {
            question: 'В какой скандал угодила компания «Газелькин» в июне 2018 года?',
            '1': {
                value: 'Предложила клиентам вызвать «водителей-славян» за дополнительную плату',
                comment: '<span>Компания дала клиентам <a href="https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu">возможность</a> выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».</span>'
            },
            '2': {
                value: 'Её «Газели» постоянно застревали под мостом с надписью «Газель не проедет»',
                comment: '<span>Было пару раз, <a href="https://twitter.com/foolsbridge/status/986935782287003649">но не в июне</a>. На самом деле компания дала клиентам <a href="https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu">возможность</a> выбрать водителя славянской внешности и российского гражданства. После она переименовала услугу в «идеальный русский язык».</span>'
            },
            '3': {
                value: 'Грузчики разбили антикварный шкаф стоимостью 163 млн рублей',
                comment: '<span>О таком случае не сообщалось, но зато компания дала клиентам <a href="https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu">возможность</a> выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».</span>'
            },
            '4': {
                value: 'Выложила персональные данные клиентов — телефоны, адреса, почты — в открытый доступ',
                comment: '<span>О таком случае не сообщалось, но зато компания дала клиентам <a href="https://vc.ru/39346-gruzovaya-kompaniya-gazelkin-predlozhila-klientam-voditeley-slavyan-za-dopolnitelnuyu-platu">возможность</a> выбрать водителя славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».</span>'
            },
            correctAnsw: '1'
        },

        fifth: {
            question: 'Простой вопрос для передышки. До какого порога правительство собирается повысить НДС?',
            '1': {
                value: '20%',
                comment: '<span>Да, НДС <a href="https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20">собираются</a> повысить с 18% до 20%. Кстати, <a href="https://vc.ru/38891-nds-20">вот чем</a> это грозит</span>'
            },
            '2': {
                value: '19%',
                comment: '<span>Нет, всё же именно НДС <a href="https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20">собираются</a> повысить с 18% до 20%. Кстати, <a href="https://vc.ru/38891-nds-20">вот чем</a> это грозит</span>'
            },
            '3': {
                value: '21%',
                comment: '<span>Нет, НДС <a href="https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20">собираются</a> повысить с 18% до 20%. Кстати, <a href="https://vc.ru/38891-nds-20">вот чем</a> это грозит</span>'
            },
            '4': {
                value: 'Никто не собирается повышать НДС, зато повысят НДФЛ',
                comment: '<span>Нет, всё же именно НДС <a href="https://vc.ru/40001-medvedev-anonsiroval-povyshenie-nds-do-20">собираются</a> повысить с 18% до 20%. Кстати, <a href="https://vc.ru/38891-nds-20">вот чем</a> это грозит</span>'
            },
            correctAnsw: '1'
        },

        sixth: {
            question: 'Чем займётся Герман Клименко после ухода с поста советника президента по интернету?',
            '1': {
                value: 'Проектами в сфере цифровой медицины',
                comment: '<span><a href="https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu">Верно</a></span>'
            },
            '2': {
                value: 'Станет разрабатывать собственный мессенджер',
                comment: '<span>Это вполне возможно, но сперва он <a href="https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu">планирует</a> заниматься проектами в сфере цифровой медицины.</span>'
            },
            '3': {
                value: 'Будет советником по медицине',
                comment: '<span>Нет, он <a href="https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu">планирует</a> заниматься собственными проектами в сфере цифровой медицины.</span>'
            },
            '4': {
                value: 'Отправится в кругосветное путешествие',
                comment: '<span>Он <a href="https://vc.ru/39908-putin-osvobodil-germana-klimenko-ot-dolzhnosti-sovetnika-prezidenta-po-internetu">планирует</a> заниматься собственными проектами в сфере цифровой медицины.</span>'
            },
            correctAnsw: '1'
        },

        seventh: {
            question: 'Какую услугу запустила «Студия Артемия Лебедева» на волне успеха «Экспресс-дизайна»? ',
            '1': {
                value: 'Экспресс-дизайн не логотипов, а предметов — за 300 тысяч рублей',
                comment: '<span>Да, и заказчик точно так же <a href="https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley">обязан</a> принять первый предложенный вариант.</span>'
            },
            '2': {
                value: 'Сервис экспресс-маркетинга: за 500 тысяч рублей Артемий Лебедев лично весь месяц будет вести ваш блог',
                comment: '<span>Речь об экспресс-дизайне предметов, и заказчик точно так же <a href="https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley">обязан</a> принять первый предложенный вариант.</span>'
            },
            '3': {
                value: 'Экспресс-доставку обедов в офис',
                comment: '<span>Речь об экспресс-дизайне предметов, и заказчик точно так же <a href="https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley">обязан</a> принять первый предложенный вариант.</span>'
            },
            '4': {
                value: 'Создание визиток за 50 тысяч рублей',
                comment: '<span>Речь об экспресс-дизайне предметов, и заказчик точно так же <a href="https://vc.ru/39869-studiya-artemiya-lebedeva-predlozhila-startapam-ekspress-dizayn-lyubogo-predmeta-za-300-tysyach-rubley">обязан</a> принять первый предложенный вариант.</span>'
            },
            correctAnsw: '1'
        },

        eighth: {
            question: 'Что сказал Олег Тиньков в интервью Владимиру Познеру в рамках ПМЭФ-2018?',
            '1': {
                value: 'Это стыдно — нанимать людей, которыми нужно управлять',
                comment: '<span>Вопрос был с подвохом: все эти фразы прозвучали в <a href="https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat">интервью</a>.</span>'
            },
            '2': {
                value: 'Я бы хотел, чтобы на моей гробовой доске было написано слово «Предприниматель»',
                comment: '<span>Вопрос был с подвохом: все эти фразы прозвучали в <a href="https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat">интервью</a>.</span>'
            },
            '3': {
                value: 'Чтобы быть предпринимателем, не нужно никакого образования',
                comment: '<span>Вопрос был с подвохом: все эти фразы прозвучали в <a href="https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat">интервью</a>.</span>'
            },
            '4': {
                value: 'Предприниматели должны быть звёздами и элитой общества',
                comment: '<span>Вопрос был с подвохом: все эти фразы прозвучали в <a href="https://vc.ru/38748-eto-stydno-nanimat-lyudey-kotorymi-nuzhno-upravlyat">интервью</a>.</span>'
            },
            correctAnsw: '1'
        },
    }
    
    function Questions(){
        this.constructor(questionsObj);
    }
    
    Questions.prototype = {
        questions: undefined,
    
        constructor: function(questions){
            this.questions = JSON.parse(JSON.stringify(questions));
        },

        getQuestions: function(){
            return this.questions;
        },

        //Getting number of correct answer
        getQuestionCorrectAnswer: function(index){
            var cnt = 1;
            for(var key of Object.keys(this.questions)){
                var elem = this.questions[key];
                if(cnt === index)
                    return elem.correctAnsw;
                cnt++;
            }
            return undefined;
        },

        //Getting answer choices (for buttons)
        getAnswersByIndex: function(index){
            var cnt = 1;
            for(var key of Object.keys(this.questions)){
                var elem = this.questions[key];
                if(cnt === index)
                    return [elem['1'].value, elem['2'].value, elem['3'].value, elem['4'].value];
                cnt++;
            }
            return undefined;
        },

        //Getting question's description by its index
        getQuestionByIndex: function(index){
            var cnt = 1;
            for(var key of Object.keys(this.questions)){
                var elem = this.questions[key];
                if(cnt === index)
                    return elem.question;
                cnt++;
            }
            return undefined;
        },

        //Getting comment for answer
        getComment: function(questionIndex, answerIndex){
            var cnt = 1;
            for(var key of Object.keys(this.questions)){
                var elem = this.questions[key];
                if(cnt === questionIndex){
                    return elem[answerIndex].comment;
                }
                cnt++;
            }
            return undefined;
        }
    }

    return Questions;
})();

var appQuestions = new questionsHandling();
