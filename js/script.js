$(function () {
    "use strict";

    // typed js start
    var typed = new Typed('.typed', {
        strings: [
            'Web Designer',
            'Web Developer',
            'Freelncer'
            
        ],
        typeSpeed: 80,
        backSpeed: 85,
        loop: true
    });


    // Menu fix js start
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 100) {
            $('.main_menu').addClass('menu_fix');
        }
        else {
            $('.main_menu').removeClass('menu_fix');
        }


    });


    // back to top js start
    $('.backtop').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.backtop').fadeIn();
        }
        else {
            $('.backtop').fadeOut();
        }


    });


        // text-sliding effect js
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('show');

                }else{
                    entry.target.classList.remove('show');
                }
              
            });
        });

    const hiddenElements = document.querySelectorAll('.hidden');
    const hidden2Elements = document.querySelectorAll('.hidden2');
    hiddenElements.forEach((el) => observer.observe(el));
    hidden2Elements.forEach((el) => observer.observe(el));




    // Pre loader js
     $(window).on('load', function () {
         $('.pre_loader').delay(600).fadeOut();
     });

    
//////////////////////////////////////// protfolio pop images////////////////////////////////////////////////
     
    // protfolio 1 images
    $('#click',).on('click', function () {
        Swal.fire({
            imageUrl: 'images/prot_1.png', 
            imageHeight: 2000,
            
        
        })
    })
    // protfolio 2 images
    $('#click1').on('click', function () {
        Swal.fire({
            imageUrl: 'images/prot_2.png',
            imageHeight: 2000,
    
        })
    })
    // protfolio 3 images
    $('#click2').on('click', function () {
        Swal.fire({
            imageUrl: 'images/prot_3.png',
            imageHeight: 2000,

        })
    })
    // protfolio 4 images
    $('#click3').on('click', function () {
        Swal.fire({
            imageUrl: 'images/prot_4.png',
            imageHeight: 2000,

        })
    })
    // protfolio 5 images
    $('#click4').on('click', function () {
        Swal.fire({
            imageUrl: 'images/prot_5.png',
            imageHeight: 2000,

        })
    })
    // protfolio 6 images
    $('#click5').on('click', function () {
        Swal.fire({
            imageUrl: 'images/prot_6.png',
            imageHeight: 2000,

        })
    })
//////////////////////////////////////// protfolio pop images////////////////////////////////////////////////
});