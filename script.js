// 1. For the given JSON iterate over all for loops (for, for in, for of, forEach)

let data = [
    {
        name: "Mohan",
        age: 20,
        email: "mohan@gmail.com"
    },
    {
        name: "Bhanu",
        age: 19,
        email: "bhanu@gmail.com" 
    },
    {
        name: "Saikumar",
        age: 21,
        email: "saikumar@gmail.com"
    }
];

// for loop 
for(let i = 0; i < data.length; i++){
    let user = data[i];
    // console.log(`
    // Name:${user.name}
    // Age:${user.age}
    // Email:${user.email}
    // `);
    // console.log(user);
}
// output: 
// Name:Mohan
// Age:20
// Email:mohan@gmail.com


// Name:Bhanu
// Age:19
// Email:bhanu@gmail.com


// Name:Saikumar
// Age:21
// Email:saikumar@gmail.com

// forEach loop 
data.forEach((user) => {
    // console.log(user);
})

// output: 
// { name: 'Mohan', age: 20, email: 'mohan@gmail.com' }
// { name: 'Bhanu', age: 19, email: 'bhanu@gmail.com' }
// { name: 'Saikumar', age: 21, email: 'saikumar@gmail.com' }


//for in loop
for(var index in data){
    var user = data[index];
    // console.log(user);
}

// output:
// { name: 'Mohan', age: 20, email: 'mohan@gmail.com' }
// { name: 'Bhanu', age: 19, email: 'bhanu@gmail.com' }
// { name: 'Saikumar', age: 21, email: 'saikumar@gmail.com' }

// for of loop
for(var key of data){
    console.log(key);
}

// output:
// { name: 'Mohan', age: 20, email: 'mohan@gmail.com' }
// { name: 'Bhanu', age: 19, email: 'bhanu@gmail.com' }
// { name: 'Saikumar', age: 21, email: 'saikumar@gmail.com' }
