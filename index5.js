function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function delayedMultiGreeting(messages) {
    for (const { message, delay: ms } of messages) {
        await delay(ms); 
        console.log(message); 
    }
}
const messages = [
    { message: "Hello, world!", delay: 2000 },
    { message: "How are you?", delay: 1000 },
    { message: "Goodbye!", delay: 3000 }
];
delayedMultiGreeting(messages);