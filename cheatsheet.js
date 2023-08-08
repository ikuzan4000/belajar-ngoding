//dasar membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

//variabel bisa menampung data string (text), integet/number, boolean, array, object,

let nama = "ikhsan"; //string
let umur = 21; //number
let apakahBenar = true; //boolean
let uang = 5000.5 //number namun ada koma

//operator matematika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 / angka2);
console.log(angka1 * angka2);
console.log(angka1 % angka2);


//disini belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); //30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); //-10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); //0.5

penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); //200

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika); //10

//string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstname = "ikhsan";
let lastname = "ramadan";
let fullname = firstname + ' ' + lastname;
console.log(fullname)
console.log(firstname + ' ' + lastname)
console.log(firstname - lastname); //NaN

//alur pembacaan code
//untuk membaca code, harus membacanya dari kiri ke kanan, dan atas kebawah
//contoh

let number = 20;
console.log(number + 10);//30
number = 10;
console.log(number + 10);//20
number = false;
console.log(number + 10);//10

//kenapa false + 10 tetap 10? karena false = 0, true = 1;
//contoh
console.log(true + 10); //11

//jangan takut error karena error memudahkan mencari letak masalah, daripada ada bug tanpa indikasi error

//contoh error
const hewan = 'singa';
console.log(hewan);
hewan = 'naga';

//auto komentar bisa dengan tombol ctrl + /

