$(document).ready(function(){

  var myDate = new Date();
  var thisYear = myDate.getFullYear();
  $('footer').find('p:nth-child(2)').append(' '+thisYear);

  var width = $(window).width();
  var height = $(window).height();

//  $('header p').append(width+' x '+height);

  $('.la-suite').click(function(){

    if ($(this).parent().parent().find('.blog-hidden').css('display') == 'none'){
      $(this).parent().parent().css({
                                      'grid-template-rows': 'autofit autofit autofit autofit',
                                      'grid-template-areas': '"title title" "img contS" "contH contH" "footer footer"'
                                    });
      $(this).parent().parent().find('.blog-hidden').show('slow', function(){
        $(this).css({
          'padding-left': '5px',
          'padding-right': '10px'
                    });
      });

      $(this).text('Lire moins...');
      $('.blog-footer').css({'padding-top': '20px'});
    }else{
      $(this).parent().parent().find('.blog-hidden').hide(20);
      $(this).parent().parent().css({
                                      'grid-template-rows': 'autofit autofit autofit',
                                      'grid-template-areas': '"title title" "img contS" "footer footer"'
                                    });
      $('.blog-footer').css({'padding-bottom': '0px'});
      $(this).text('Lire la suite...');
    }

  });

/*==================================================================================
                NAV BAR
===================================================================================*/


  $('#menu_btn').click(function(){
    if ($('nav ul').css('display') == 'none'){

      $('section').css({'margin-top': '150px'});
      $('nav ul').show('slow',function(){
        $('nav ul').css({'display': 'flex'});
      });
    }else{
      $('section').css({'margin-top': '50px'});
      $('nav ul').hide('slow');
    }

  });




  $('nav ul li').click(function () {

    if ($(this).index() == 0){
      $('#section1').siblings().hide('slow');
      $('#section1').show('slow', function(){
          //$(this).css('display','flex');
        });
    }else if ($(this).index() == 1) {
      $('#section2').siblings().hide('slow');
      $('#section2').show('slow', function(){
          $(this).css('display','flex');
      });
    }else if ($(this).index() == 2) {
      $('#section3').siblings().hide('slow');
      $('#section3').show('slow', function(){
          $(this).css('display','grid');
      });
    }else if ($(this).index() == 3) {
      $('#section4').siblings().hide('slow');
      $('#section4').show('slow', function(){
          //$(this).css('display','flex');
      });
    }else if ($(this).index() == 4) {
      $('#section5').siblings().hide('slow');
      $('#section5').show('slow', function(){
          $(this).css('display','flex');
      });
    }
  });


  $('#contactBtn').click(function(){
    $('#section5').siblings().hide('slow');
    $('#section5').show('slow', function(){
        $(this).css('display','flex');
    });
  });


function myPrint(){
  printJS('CV Anastasios ARVANITIS - Développeur web.pdf');
}
$('#printBtn').click(myPrint);

/*==========================================================
                FORM VALIDATION
========================================================*/

  var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var name = $('#name').val();
  var validName = false;
  var lastName = $('#lastname').val();
  var validLastName = false;
  var mail = $('#email').val();
  var validMail = false;
  var formText = $('#form-text').val();
  var validFormText = false;

  //----------------- FIRST NAME ----------------

  $('#name').focusin(function(event){
    event.preventDefault();

    if (!validName) {
      $(this).val('');
      $(this).css({ 'border-color': '#fff',
                    'color': 'black'});
          //  console.log('focus in !validName ');
    }else if (validName && $(this).val().length >= 4) {
      validName = true;
      name = $('#name').val();
      $(this).val(name);
      $(this).css({ 'border-color': '#fff',
                    'color': '#000'});
            //  console.log('focus in validName is ' +validName+ ' name = ' +name)
    }

  });

  $('#name').focusout(function(){

    if ($(this).val().length <= 3) {
      $(this).val('Minimum 4 characters!');
      $(this).css({ 'border-color': '#cc0000',
                    'color': '#cc0000'});
      validName = false;
          //  console.log('focus out validName= ' +validName);
    }else if ($(this).val().length >= 4){
      validName = true;
      name = $('#name').val();
      $(this).val(name);
    //  console.log('focus out validName is ' +validName+ ' name =' +name);

    }
  });

  //----------------- LAST NAME ----------------

  $('#lastname').focusin(function(event){
    event.preventDefault();

    if (!validLastName) {
      $(this).val('');
      $(this).css({ 'border-color': '#fff',
                    'color': 'black'});
          //  console.log('focus in !validLastName ');
    }else if (validLastName && $(this).val().length >= 4) {
      validLastName = true;
      lastName = $('#lastname').val();
      $(this).val(lastName);
      $(this).css({ 'border-color': '#fff',
                    'color': '#000'});
            //  console.log('focus in validLastName is ' +validLastName+ ' name = ' +lastName)
    }

  });

  $('#lastname').focusout(function(){

    if ($(this).val().length <= 3) {
      $(this).val('Minimum 4 characters!');
      $(this).css({ 'border-color': '#cc0000',
                    'color': '#cc0000'});
      validLastName = false;
          //  console.log('focus out validName= ' +validLastName);
    }else if ($(this).val().length >= 4){
      validLastName = true;
      lastName = $('#lastname').val();
      $(this).val(lastName);
      //console.log('focus out validLastName is ' +validLastName+ ' last name =' +lastName);

    }
  });

  //----------------- TEXTAREA ----------------

  $('#form-text').focusin(function(event){
    event.preventDefault();

    if (!validFormText) {
      $(this).val('');
      $(this).css({ 'border-color': '#fff',
                    'color': 'black'});
            //console.log('focus in !validFormText ');
    }else if (validFormText && $(this).val().length >= 4) {
      validFormText = true;
      formText = $('#form-text').val();
      $(this).val(formText);
      $(this).css({ 'border-color': '#fff',
                    'color': '#000'});
              //console.log('focus in validFormText is ' +validFormText+ ' name = ' +formText)
    }

  });

  $('#form-text').focusout(function(){

    if ($(this).val().length <= 3) {
      $(this).val('Minimum 4 characters!');
      $(this).css({ 'border-color': '#cc0000',
                    'color': '#cc0000'});
      validFormText = false;
            //console.log('focus out validFormText= ' +validFormText);
    }else if ($(this).val().length >= 4){
      validFormText = true;
      formText = $('#form-text').val();
      $(this).val(formText);
      //console.log('focus out validFormText is ' +validFormText+ ' last name =' +formText);
    }
  });

  //----------------- EMAIL ----------------

  $('#email').focusin(function(event){
    event.preventDefault();

    if (!validMail) {
      $(this).val('');
      $(this).css({ 'border-color': '#fff',
                    'color': 'black'});
            //console.log('focus in !validMail ');
    }else if (validMail && $(this).val().length >= 4) {
      validMail = true;
      mail = $('#email').val();
      $(this).val(mail);
      $(this).css({ 'border-color': '#fff',
                    'color': '#000'});
              //console.log('focus in validMail is ' +validMail+ ' mail = ' +mail)
    }

  });

  $('#email').focusout(function(){

    if ($(this).val().length <= 3) {
      $(this).val('Minimum 4 characters!');
      $(this).css({ 'border-color': '#cc0000',
                    'color': '#cc0000'});
      validMail = false;
            //console.log('focus out validMail= ' +validMail);
    }else if ($(this).val().length >= 4){
        if (emailReg.test($(this).val())){
        validMail = true;
        mail = $('#email').val();
        $(this).val(mail);
        //console.log('focus out validMail is ' +validMail+ ' mail =' +mail);
      }else {
        $(this).val('Not a valid email!');
        $(this).css({ 'border-color': '#cc0000',
                      'color': '#cc0000'});
        validMail = false;
      }
    }
  });

  $('button').click(function(){

  if (validName && validLastName && validMail && validFormText){
    $('.contactForm').submit();
  }else{
    $('#obligatoire').css({'color': '#cc0000',
                          'font-weight': 'bold'});
  }

  });

  $('button').click(function(){

  if (validName && validLastName && validMail && validFormText){
    $('.commentForm').submit();
  }else{
    $('#obligatoire').css({'color': '#cc0000',
                          'font-weight': 'bold'});
  }

  });







});
