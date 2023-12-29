// my own bullshit implementation of a logger

class MyLog {
    source;

    constructor(source) {
        this.source = source || 'Default';
    }

    log(message) {
        console.log(`[${this.source}]`, message);
    }
    
    error(message){
        console.error(`[${this.source}]`, message);
    }
}

export default MyLog;