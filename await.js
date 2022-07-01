console.log("person1 : shwos ticket");
console.log("person2 : shwos ticket");

const premMovie = async() => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ticket");

        }, 2000);
    });

    const getPopcorn = new Promise((resolve, reject) =>
        resolve(`popcorn `));
    const addButter = new Promise((resolve, reject) =>
        resolve(`butter `));
    let ticket = await promiseWifeBringingTicks;
    console.log(`G F : I have the ${ticket}`);
    console.log("B F : We should go in ");
    console.log("G F : no I am hungary");


    let popcorn = await getPopcorn;
    console.log(`B F : I got some ${popcorn}`);
    console.log("B F : We should go in ");
    console.log("G F : I need butter on my popcorn");
    // return new Promise((resolve, reject) =>
    //     resolve(`${t} butter `));


    let butter = await addButter;
    console.log(`B F : I got some ${butter}`);
    console.log(`B F : Anything else Darling ?`);
    console.log(`G F : lets go we are getting late `);
    console.log(`B F : thank you darling for the reminder *grind* `);
    return ticket;
}

premMovie().then((m) => console.log(`person3: shows ${m}`));

// getButter.then((t) =>
//     console.log(t));

// getPopcorn.then((t) =>
//     console.log(t));


const preMovie = async() => 'premMoie';
premMovie().then((m) => console.log(m));

console.log("person4 : shows tickets");
console.log("person5 : shows tickets");