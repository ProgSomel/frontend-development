
const user = {
    id: 339,
    name: "Sumit",
    age: 42,
    education: {
        degree: "Graduate",
        school: {
            name: "Rangpur Zilla School"
        }
    }
}

const {education:{school:{name:naam}}={}} = user
console.log(naam);