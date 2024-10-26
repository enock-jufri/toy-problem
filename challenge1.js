const students = {}
process.stdout.write('Enter stduent\'s name and their marks in the format of name marks, enter done to exit: ');

process.stdin.on('data', (data)=>{
    const input = data.toString().trim()

    if(input.toLowerCase() === 'done'){
        process.stdin.pause()
        return
    }
    
    const [name, marksStr]= input.split(' ')

    let  marks = parseInt(marksStr)

    if(isNaN(marks) || marks < 0 || marks > 100){
        console.log('invalid number.Enter name and marks again');
        return;
    }

    students[name] = marks
})
