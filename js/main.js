$(function() {

  // SIVUJEN LIIKKUMINEN PYSTYSUORAAN

  $('a').click(function() {

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 550, 'linear');
  });

  // PIILOTETAAN TEHTÄVÄT

  const mediakohde = $('#media');
  const webkohde = $('#webbi');

  mediakohde.hide();
  webkohde.hide();

  // LISÄTÄÄN WEB-TEHTÄVÄT NÄKYVIIN

  $('#webnappi').click(function() {

    mediakohde.hide();
    webkohde.show();

  });

  // LISÄTÄÄN MEDIAN TEHTÄVÄT NÄKYVIIN

  $('#medianappi').click(function() {

    webkohde.hide();
    mediakohde.show();

  });


  // NAVBAR

  // Valkoinen navbar kun scrollataan

  $(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
  });

  // Vaihdetaan navbarin tekstit mustaksi kun scrollataan > pois kun ollaan taas ylhäällä

  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.nav_items_varinvaihto').addClass('ncol');

    } else {
      $('.nav_items_varinvaihto').removeClass('ncol');

    }
  });

  // Kun ollaan navbarin yllä, vaihdetaan tekstit mustaksi

  $('.navbar').hover(function() {
    $('.nav_items_varinvaihto').addClass('ncol');
  }, function() {
    $('.nav_items_varinvaihto').removeClass('ncol');
  });


  // VIDEO MODALIT, jokaisessa sama rakenne

  // Haetaan elementit, estetään bodyn scrollaus ja navbarin näyttö, kun modal on auki
  const navi = $('nav');
  const body = $('body');

  // Haetaan modal-elementti
  const modal = document.getElementById('myModal');
  const video_modal = document.getElementById("video1");


  // VIDEOSPRINTTI MODAL

  // Haetaan näytettävän videon tiedot
  const videosprintti = document.getElementById('videosprintti_img');
  const videosprintti_src = videosprintti.alt;
  const videosprintti_linkki = document.getElementById('videosprintti_link');

  // lisätään tiedot klikattaessa linkkiä ja näytetään modal. Lisäksi estetään bodyn scrollaus takana
  videosprintti_linkki.onclick = function(){
    modal.style.display = "block";
    video_modal.src = videosprintti_src;
    body.addClass('no-scroll');
    navi.removeClass('fixed-top');
  };


  // PROMOVIDEO MODAL

  const promovideo = document.getElementById('promovideo_img');
  const promovideo_src = promovideo.alt;
  const promovideo_linkki = document.getElementById('promovideo_link');

  promovideo_linkki.onclick = function(){
    modal.style.display = "block";
    video_modal.src = promovideo_src;
    body.addClass('no-scroll');
    navi.removeClass('fixed-top');
  };


  // VIDEOEDITOINTI MODAL

  const videoeditointi = document.getElementById('videoeditointi_img');
  const videoeditointi_src = videoeditointi.alt;
  const videoeditointi_linkki = document.getElementById('videoeditointi_link');

  videoeditointi_linkki.onclick = function(){
    modal.style.display = "block";
    video_modal.src = videoeditointi_src;
    body.addClass('no-scroll');
    navi.removeClass('fixed-top');
  };


  // MONIRAITA MODAL

  const moniraita = document.getElementById('moniraita_img');
  const moniraita_src = moniraita.alt;
  const moniraita_linkki = document.getElementById('moniraita_link');

  moniraita_linkki.onclick = function(){
    modal.style.display = "block";
    video_modal.src = moniraita_src;
    body.addClass('no-scroll');
    navi.removeClass('fixed-top');
  };


  // AFTER EFFECTS MODAL

  const aftereffects = document.getElementById('after_img');
  const after_src = aftereffects.alt;
  const after_linkki = document.getElementById('after_link');

  // Luodaan ja lisätään teksti modal-videon alle
  const captionText = $('#caption');
  const linkki_parempaan = $(
    `<a href="http://users.metropolia.fi/~jennatur/Digitaalisen%20median%20perusteet/After%20effects/" target="_blank">Jos teksti näyttää pätkivän, parempi versio ladattavissa täältä. Itsellä VLC oli ainoa joka toisti videon kunnolla muunnettuani tiedoston avi -> mp4.</a>`
  );

  after_linkki.onclick = function(){
    modal.style.display = "block";
    video_modal.src = after_src;
    captionText.append(linkki_parempaan);
    body.addClass('no-scroll');
    navi.removeClass('fixed-top');
  };


  // VIDEO-MODALIN SULKEMINEN

  // Haetaan raksinkuva ja sitä klikattaessa suljetaan modal ja poistetaan no-scroll bodysta ja lisätään nav näkyviin
  const videospan = document.getElementById('video_raksi');

  videospan.onclick = function() {
    modal.style.display = "none";
    body.removeClass('no-scroll');
    navi.addClass('fixed-top');
    captionText.empty();
  };


  // IMAGE MODALS, samat toiminnot kuin videomodalissa

  const imgModal = document.getElementById('imageModal');
  const image_modal = document.getElementById("imgModal");


  // VEKTORIKUVA MODAL

  const vektorikuva = document.getElementById('vektori_img');
  const vektori_src = vektorikuva.alt;
  const vektori_linkki = document.getElementById('vektori_link');

  vektori_linkki.onclick = function(){
    imgModal.style.display = "block";
    image_modal.src = vektori_src;
    body.addClass('no-scroll');
    navi.removeClass('fixed-top');
  };


  // MIKROFONI MODAL

  const mikrofoni = document.getElementById('mikki_img');
  const mikki_src = mikrofoni.alt;
  const mikki_linkki = document.getElementById('mikki_link');

  mikki_linkki.onclick = function(){
    imgModal.style.display = "block";
    image_modal.src = mikki_src;
    body.addClass('no-scroll');
    navi.removeClass('fixed-top');
  };


  // IMAGE-MODALIN SULKEMINEN

  // Haetaan raksinkuva ja sitä klikattaessa suljetaan modal sekä poistetaan no-scroll bodysta ja nav näkyviin
  const imgspan = document.getElementById('img_raksi');

  imgspan.onclick = function() {
    imgModal.style.display = "none";
    body.removeClass('no-scroll');
    navi.addClass('fixed-top');
  };

});
