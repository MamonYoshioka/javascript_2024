function maxNumber(z1, z2) {
    if (z1 > z2) {
        return z1;
    }
    return z2;
}

let num_1 = 20;
let num_2 = 35;

let z = maxNumber(num1, num2);
document.write("<p>" + num1 + "と" + num2 + "は" + z + "の方が大きい" + "</p>");