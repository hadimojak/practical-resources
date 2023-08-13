function island(matrix) {
  let island1 = [];
  let island0 = [];

  if (
    matrix.length === matrix[0].length &&
    matrix.length <= 100 &&
    matrix.length >= 2
  ) {
    for (let i = 0; i < matrix.length; i++) {
      let row = "";
      for (let j = 0; j < matrix[i].length; j++) {
        row += `|${matrix[i][j]}|`;
        if (matrix[i][j] === 1){
            
        }
      }
      console.log(row);
    }
  }
}

island([
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
]);

[
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 1],
];


db.movie.aggregate([{$match:{runtime :{$gt: 170}}},{$count:"myCount"}])
