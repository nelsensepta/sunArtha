// 1. Test Data Structur.

class Cars {
  // this._mobile tipe data array
  constructor() {
    this._mobil = [];
  }

  // Get untuk menganbil data
  get vehicle() {
    return this._mobil;
  }

  //  Set untuk mengubah data / manambah data
  set vehicle({ ...rest }) {
    this._mobil.push({ ...rest });
  }
}

const cars = new Cars();

// penambahan data
cars.vehicle = {
  IDRegistrasi: 0001,
  tipe: "Sedan",
  merk: "Toyota",
  varian: "FT86",
};

cars.vehicle = {
  IDRegistrasi: 0002,
  tipe: "SUV",
  merk: "Toyota",
  varian: "RAV4",
};
cars.vehicle = {
  IDRegistrasi: 0003,
  tipe: "Sedan",
  merk: "Honda",
  varian: "Accord",
};
cars.vehicle = {
  IDRegistrasi: 0004,
  tipe: "SUV",
  merk: "Honda",
  varian: "CRV",
};
cars.vehicle = {
  IDRegistrasi: 0005,
  tipe: "Sedan",
  merk: "Honda",
  varian: "City",
};

// 1. Tampilkan data pertama yang memiliki merk "Honda"
const arr1 = [];
cars.vehicle.map((car) => {
  if (car.merk === "Honda") {
    return arr1.push(car);
  }
});
console.log("========== Soal Nomor 1 ==========");
console.log(arr1.shift());

// 2. Tampilkan data terakhir yang memiliki merk "Honda" dan bertipe "Sedan"
const arr2 = [];
cars.vehicle.map((car) => {
  if (car.merk === "Honda" && car.tipe === "Sedan") {
    return arr2.push(car);
  }
});
console.log("========== Soal Nomor 2 ==========");
console.log(arr2.pop());

// 3. Tampilkan data terakhir yang memiliki merk "Honda" dan bertipe "Sedan"
const arr3 = [];
cars.vehicle.map((car) => {
  if (car.merk === "Honda" && car.varian === "City") {
    return arr3.push(car);
  }
});
console.log("========== Soal Nomor 3 ==========");
console.log(arr3[0]);

// 4. Tampilkan data default yang memiliki merk "Toyota"
const arr4 = [];
cars.vehicle.map((car) => {
  if (car.merk === "Toyota") {
    return arr4.push(car);
  }
});
console.log("========== Soal Nomor 4 ==========");
console.log(arr4);

// 5. Tampilkan 3 data apa saja

console.log("========== Soal Nomor 5 ==========");
console.log(cars.vehicle.splice(0, 3));
