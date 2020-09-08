//enum, default seperti array dimulai dari 0, 1, dst
enum Gender { Male, Female, Unknown }

//merubah angka default enum
enum Gender2 { Male=1, Female=2, Unknown=99 }

let jenisKelamin: Gender = Gender.Male;
console.log(jenisKelamin);


//merubah angka default enum menjadi string
enum Category {
    Grocery = "Grocery",
    Electronic = "Electronic",
    Handphone = "Handphone"
}

let kagetori: Category = Category.Handphone;
console.log(kagetori);