const hash = "076a8133735eb5d7552dc195b125a454";

function hexToBytes(hex) {
  let bytes = [];
  for (let c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

const result = hexToBytes(hash);

const code = 9207;


const cund = result.reduce((res, val) => {
  res += val;
  return res;
}, 0);


console.log(code - cund);
