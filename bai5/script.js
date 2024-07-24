// bai 6
// function dienTichHinhVuongNho (r) {
//     return 2*r*r;
// }
// function dienTichHinhVuongLon (r) {
//     return 2*r * 2*r;
// }
// function ketQua(r1,r2) {
//     return r1- r2;
// }

// console.log(ketQua(dienTichHinhVuongLon(5),dienTichHinhVuongNho(5)));
// console.log(ketQua(dienTichHinhVuongLon(6),dienTichHinhVuongNho(6)));
// console.log(ketQua(dienTichHinhVuongLon(7),dienTichHinhVuongNho(7)));


// bai 7
// function palindrome (s) {
//     var s1 = s.split("").reverse().join('');
//     console.log(s1);
//     return s1 === s;
// }

// console.log(palindrome("hello"))
// console.log(palindrome("warraw"))

// var s1 = "html, java, javascript";
// console.log(s1.length)
// console.log(s1.split(','))
// console.log(s1.slice())
// console.log(s1.substring())
// console.log(s1.)
// console.log(s1.length)


// bai 8
// console.log(typeof "Le Van A");
// console.log(typeof 5000);
// console.log(typeof 5000.99);
// console.log(typeof [10, 15, 17]);
// console.log(typeof { name: "Le Van A", age: 18, country: "Viet Nam" });
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);


// bai 9
// var img = "<https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png>";
// console.log(typeof img)
// var title = "JS TIPS - Một số cách viết JS ngắn gọn hơn";
// var desc = "Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả...";
// var url = "<https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon>";


// var string = `
//   <div class="article">
//     <a href="${url}">
//     <div class="inner-image">
//       <img src="${img}" />
//     </div>
//     <div class="inner-content">
//       <h2 class="inner-title">${title}</h2>
//       <p class="inner-desc">${desc}</p>
//     </div>
//     </a>
//   </div>
// `;


// console.log(string)
// console.log(typeof title)
// console.log(typeof desc)
// console.log(typeof url)
// console.log(typeof string)


// bai 12
// var a = 10;
// var b = "20";
// var c = 80;


// var test1 = ++a + +b++ + +c++ - +a++;

// console.log(test1);
// console.log(a, b, c);
// console.log("------------");
// // 12 21 81
// var test2 = ++a + -b + +c++ - -a++ + +a;
// //           13 +(-21) +81  - -13 + 14
// //            14 21 82
// console.log(test2);
// console.log(a, b, c);
// console.log("------------");
// var test3 = --c + +b + --a * +b++ - +b * a + --a - +true;
// //           81 + 21 + 13 * 21 - 22 * 13 + 12 - 1
// //   
// console.log(test3);
// console.log(a, b, c);
// console.log("------------");


// cau 13
// console.log(Math.round(99.2));
// console.log(Math.round(99.5))
// console.log(Math.ceil(99.2))
// console.log(Math.floor(99.7))
// console.log(Math.min(10, 20, 100, -100, 90))
// console.log(Math.max(10, 20, 100, -100, 90));
// console.log(Math.pow(2,4))
// console.log(Math.random())
// console.log(Math.trunc(99.5))

// cau 14
// var theName = "  28Tech  ";


// console.log(theName);
// console.log(theName[1]);
// console.log(theName[5]);


// console.log(theName.charAt(1));
// console.log(theName.charAt(5));
// console.log(theName.indexOf('h'))


// console.log(theName.length);


// console.log(theName.trim());


// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());


// console.log(theName.trim().charAt(5).toUpperCase());
// cau 15
// var a = "Daca.vn - Professional Web Design Services.";
// console.log(a.indexOf("Web"))
// console.log(a.indexOf("Web",24))
// console.log(a.lastIndexOf("a"))
// console.log(a.slice(10))
// console.log(a.slice(-16, -10))
// console.log(a.split(' ', 3))

// cau 18
// const myFriends = ["Le Van A", "Nguyen Thi B", "Do Van C", "Dao Thi D"];

// console.log(myFriends.pop())
// console.log(myFriends.push('Nguyen thi thao'))
// console.log(myFriends)
// console.log(myFriends.shift())
// console.log(myFriends.unshift('Duc hieu'))
// console.log(myFriends)