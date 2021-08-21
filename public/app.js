var inp = document.getElementById('rollNumber')
var displayName =document.getElementById('displayName')
var displayRes = document.getElementById('displayRes')
var result = document.getElementById('result')


var students = [
    {
        name: 'Sara',
        age : 20,
        institute: 'Adam Ji',
        contactNo : '03215469875',
        result : 0
    },
    {
        name: 'Zara',
        age : 21,
        institute: 'Adam Ji',
        contactNo : '03215469875',
        result : 1
    },
    {
        name: 'Tara',
        age : 19,
        institute: 'Adam Ji',
        contactNo : '03215469875',
        result : 0
    },
    {
        name: 'Maryam',
        age : 20,
        institute: 'Adam Ji',
        contactNo : '03215469875',
        result : 1
    },
    {
        name: 'Maria',
        age : 18,
        institute: 'Adam Ji',
        contactNo : '03215469875',
        result : 1
    },
    {
        name: 'Meeram',
        age : 20,
        institute: 'Adam Ji',
        contactNo : '03215469875',
        result : 0
    },
    {
        name: 'Areesha',
        age : 19,
        institute: 'Adam Ji',
        contactNo : '03215469875',
        result : 1
    },
    {
        name: 'Mirha',
        age : 18,
        institute: 'Adam Ji',
        contactNo : '03215469875',
        result : 1
    },
    {
        name: 'Amna',
        age : 21,
        institute: 'Adam Ji',
        contactNo : '03215469875',
        result : 1
    },
    {
        name: 'Faiza',
        age : 20,
        institute: 'Adam Ji',
        contactNo : '03215469875',
        result : 0
    }
]
for(var i=0; i<students.length; i++){
    students[i].rollNumber = i
}


// console.log(students)


// for (var j=0; j<students.length; j++){
//     if(students[j].result == 1){
//         console.log('Pass')
//     }else{
//         console.log('Fail')
//     }
// }

var inp = document.getElementById('rollNumber')
function searchRes(){
    // console.log(inp.value)
    for(var j=0; j<students.length; j++){
        if(students[j].rollNumber == inp.value){
            if(students[j].result == 1){
                displayName.innerHTML = students[j].name
                displayRes.innerHTML = ('Pass')
            }else{
                displayName.innerHTML = students[j].name
                displayRes.innerHTML = ('Fail')
            
        }
    }
}
}
