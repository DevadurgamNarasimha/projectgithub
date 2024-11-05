function smartRepeatedLogger(message, interval, duration) {
    let isPaused = false;
    let timerId;
    let elapsed = 0;
    const logMessage = () => {
        if (!isPaused) {
            console.log(message);
        }
    };
    const startLogging = () => {
        timerId = setInterval(() => {
            elapsed += interval;
            logMessage();
            if (elapsed >= duration) {
                clearInterval(timerId);
            }
        }, interval);
    };
    startLogging();
    return {
        pause: () => {
            isPaused = true;
        },
        resume: () => {
            if (isPaused) {
                isPaused = false;
                startLogging();
            }
        }
    };
}
const logger = smartRepeatedLogger("Logging...", 1000, 10000);
setTimeout(() => logger.pause(), 3000);
setTimeout(() => logger.resume(), 6000); 