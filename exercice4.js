let pairs = [
[0, ""],
[0, "0"],
[0, false],
["", false],
[null, undefined],
[null, false],
[NaN, NaN],
[1, "1"],
[" \t\n ", 0]
]

let compteur = 0

for (let i = 0; i < pairs.length; i++) {

let a = pairs[i][0]
let b = pairs[i][1]

let eq = (a == b)
let seq = (a === b)

console.log(`${a} == ${b} -> ${eq} | ${a} === ${b} -> ${seq}`)

if (eq === true && seq === false) {
compteur++
}

}

console.log("-----")
console.log(`${compteur} paire(s) où == et === donnent des résultats différents`)