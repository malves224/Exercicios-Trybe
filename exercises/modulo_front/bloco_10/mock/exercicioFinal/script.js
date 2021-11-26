const randownNumber = () => {
    return Math.trunc(Math.random() * 100)
};

const upCaseString = (string) => string.toUpperCase();
const primeiraLetra = (string) => string[0];
const concString = (string1, string2) => string1 + string2;

module.exports = {
    randownNumber,
    primeiraLetra,
    concString,
    upCaseString,
};