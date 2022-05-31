function odd(numbers) {
    const oddNumbs = numbers.filter((v, i) => i%2 == 1);
    const doubled = oddNumbs.map(x => x*2);
    doubled.reverse();
    console.log(doubled.join(" "));
}