$(function () {
  // $('.multiple-items').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // });
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })
});

// основы ввода данных
// let inputIn = document.querySelector('.input-in');
// let btn = document.querySelector('button');
// let div = document.querySelector('.out');



// btn.onclick = function () {
//   console.log('work!!!');
//   console.log(inputIn.value);
//   let a = inputIn.value;
//   div.innerHTML = a;
//   inputIn.value = '';
// }

// // let a = 6;

// // // >= <= == === !=(не равно)
// // if (a > 9) {
// //   console.log(a);
// // } else {
// //  console.log('else')
// // }


// const button2 = document.querySelector('button');
// const input = document.querySelector('.age');

// // && - можно задавать диапазон, когда правливы обе части 
// button2.onclick = () => {
//   let num = +input.value;
//   if (num >= 16 && num <= 60) {
//     console.log('welcome');
//   } else if (num >= 60) {
//     console.log('ты точно сюда?')
//   } else {
//     console.log('ты не пройдешь');
//   }
//   switch (num) {
//     case 15:
//       console.log('ты не пройдешь');
//       break;
//     case 16:
//       console.log('пройдешь');
//       break;
//     default:
//       console.log('ok')
//   }
// }

// let b = 5;

// console.log(b < 3 && b > 7); // && - оператов и;
// console.log (b == 3 || b == 7) // || - оператов или ;



// document.querySelector('.btn').onclick = 

// document.querySelector('button').onclick = () => {
//   console.log(document.querySelector('#one').value);
// }




// jQuery 
// $('a');
// $('.h2');
// $('#recieve');
// $('nam menu li') // вложенные элем
// $('.icons > div') // дочурные элем
// $('.icons img + h4') //соседные элем

// по атрибутам 
// $('img[height=150]')
// $('img[srcˆ=img/]')  // 
// $('img[src$=.png]') //ко всем картинкам png
// $('a[href*=#]') //ко всем ссылкам # 

// фильтрация 
// $('menu li:even');
// $('menu li:odd');
// $('img:not(logo img)');
// $('li:has(a)');
// $('p:contains(client)');
// $('li:last');
// $('li:first');
// $('div:hidden');
// $('div:visibility');


// $(function () {
//   // методы text 
//   let tagP = $('.mainText p').text('новый текст для тега p');
//   tagP = $('.mainText p').hide(2000, function(){

//   });
//   $('.mainText p').show(2000);

// });

// цепные функции 
// $(function () {
//   let tagP = $('.mainText p');
//   tagP.hide().text('новый текст').show(1000);
// })
// $('.mainText p').hide(2000).show(2000);

// павтоматические циклы 

// $(function(){
//   $('.icons > div').hide(3000);
// });

// изменение вывсоты и ширины 

// $(function () {
//   // let a = $('.btn').width();
//   // let b = $('.btn').height();
//   // let c = $('.maintext').height(700);
//   function widthAndHeight(elem) {
//     let clsName = '.' + elem; // .btn
//     let w = $(clsName).width();// $('.btn')
//     let h = $(clsName).height();
//     $('.mainText p').text('ширина: ' + w + '; высота: ' + h);
//   }
//   widthAndHeight('btn');
// });

// метод html позволяет менять содержимое кода 

// $(function(){
// let a = $('.mainText').html('<b>новый текст</b>');
// alert(a)
// });

// плавная анимация fadeout fadeIn 

// $(function () {
//   //  $('.mainText').fadeOut(2000).fadeIn(3000);
//   function elemOut(elem, time) {
//     if (time > 5000 || time < 1000 || isNaN(time)) {
//       return false;
//     } else {
//       let clsName = '.' + elem;
//       $(clsName).fadeOut(time);
//     }
//   }
//   elemOut('mainText', 800);
// });

// прозрачность fadeTo()
// $(function () {
//   function newFunc (){

//   };
//   $('.mainText').fadeTo(4000, 0.2, newFunc ()).fadeTo(2000, 1);
// });

// свернуть и развернуть элем 
// $(function(){
//   // $('.mainText').slideUp(2000).slideDown(1000);
//   $('.mainText').slideToggle(3000).slideDown(2000);

// });

// Добавление атрибутов и удаление attr removeAttr()
// $(function () {
//   // let a = $('.logo img').attr('src', 'images/icon1.png');
//   // $('.logo img').attr('title', 'подсказка');
//   // $('.logo img').removeAttr('src');
//   function changeAttr(elem, newAttr, newValue) {
//     let clsName = '.' + elem;
//     $(clsName).attr(newAttr, newValue);
//   }
//   changeAttr('logo', 'title', 'новый текст');
// });

//добавление и удаление классов 
// $(function(){
//   // $('nav menu').addClass('border').removeClass('border');
//   $('mav menu').removeClass('border');
// })

// работа с CSS стилями 
// $(function(){
//   // $('nav menu li a').css('font-size', '28px').css('color', '#000');
//   $('nav menu li a').css({
//     'color':'#000',
//     'font-size':'28px',
//     'padding':'10px'
//   })
// });

// Анимция стилей 
// $(function () {
//   $('nav menu li a').animate({
//     'color': '#000', // не работает 
//     'font-size': '28px',
//     'padding': '10px'
//   }, 3000, function(){
//     alert('успешная анимация')
//   });
// })

// Добавить HTML код 
// $(function(){
//   $('.mainText').before('<span>новый блок</span>');
//   $('.mainText').after('<span>новый блок</span>');
//   $('.mainText').append('<span>новый блок</span>');
//   $('.mainText').prepend('<span>новый блок</span>');
// });

//Ручные циклы Each() $(this)
// $(function(){
//   $('.icons img').each(function(){
//     if ($(this).attr('src')=='images/icon3.png') {
//       $(this).fadeOut(1000);
//     }
//   })
// })


// асщциативный массив 