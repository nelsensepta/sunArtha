// Test Algoritma – Uji tes kemampuan algoritma dalam menampilkan output yang
// diminta.

// Jadi ini var a,b,c adalah ibaratkan adalah anak
var a = 3;
var b = 5;
var c = 7;

function solution(number) {
  // Perulangan 1 - number
  for (var i = 0; i < number; i++) {
    if (i % a == 0) {
      // jika angka merukakan kelipatan 3
      console.log("tik");
    } else if (i % b == 0) {
      // jika angka merukakan kelipatan 5
      console.log("tek");
    } else if (i % c == 0) {
      // jika angka merukakan kelipatan 7
      console.log("tok");
    }
  }
}

// 500 bisa diubah angka berapa saja
solution(500);
