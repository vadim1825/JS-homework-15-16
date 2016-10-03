function Human() {
    this.name = 'Vasiliy';
    this.age = 30;
    this.sex = 'male';
    this.height = 180;
    this.weight = 80;
};

function Worker(mn, s) {
	this.middleName = mn
	this.company = 'SteelInvest';
	this.salary = s;
	this.doWork = function() {
        alert('Я месяц тяжело работал и стал богаче на 200 баксов!');
	};
};

function Student(sn, g) {
    this.surname = sn
	this.university = 'state University';
	this.grant = g;
	this.watchTV = function() {
		alert('Я всегда вкурсе всех новых сериалов!')
	};
};

Worker.prototype = new Human();

var workerPetrovich = new Worker('Petrovich', 200);

console.log('workerPetrovich', workerPetrovich);

var workerIvanovich = new Worker('Ivanovich', 300);

console.log('workerIvanovich', workerIvanovich);



Student.prototype = new Human();

var studentIvanov = new Student('Ivanov', 100);

console.log('studentIvanov', studentIvanov);

var studentPetrov = new Student('Petrov', 80);

console.log('studentPetrov', studentPetrov);