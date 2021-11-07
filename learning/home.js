//objects in javascript

let student = {
    first: 'Rafeh',
    last: "Qazi",
    age:25,
    height:170,

    studentInfo: function(){
        return this.first + '\n' + this.last;
    }
};

function Course(title){
    this.title = title,
    this.enroll = function(){
        console.log('you are enrolled');
    }
}

const course = new Course('JS');
