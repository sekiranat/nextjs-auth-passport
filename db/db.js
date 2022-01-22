const LOGIN_DB = process.env.LOGIN_DB
const PASS_DB = process.env.PASS_DB
const NANE_DB = process.env.NANE_DB

const pgp = require('pg-promise')();

const connectionString = `postgres://${LOGIN_DB}:${PASS_DB}@localhost:5432/${NANE_DB}`

export const getDB = () => {
    return createSingleton('db-space', () => {
        return {
            db: pgp(connectionString),
            pgp
        };
    });
}


// for fix problem - https://stackoverflow.com/questions/34382796/where-should-i-initialize-pg-promise 

// generic singleton creator:
function createSingleton(name, create) {
    const s = Symbol.for(name);
    let scope = (global)[s];
    if (!scope) {
        scope = {
            ...create()
        };
        (global)[s] = scope;
    }
    return scope;
}