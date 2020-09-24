const json = {
  a: { b: { c: { d: 1 } } },
  e: { f: {} },
};

const path = ["a", "b"];

let p = json;

path.forEach((k) => {
  p = p[k];
});

console.log(p);
