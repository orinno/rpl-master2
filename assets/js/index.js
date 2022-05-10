$(".galeri-foto-carousel").owlCarousel({
  loop: true,
  dots: true,
  autoplay: true,
  margin: 20,
  autoplayTimeout: 5000,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      margin: 10,
    },
    500: {
      items: 2,
      margin: 250,
    },
    750: {
      items: 2,
      margin: 60,
    },
    900: {
      items: 3,
      margin: 350,
    },
    930: {
      items: 3,
      margin: 400,
    },
    990: {
      items: 3,
      margin: 200,
    },
    1200: {
      items: 4,
      margin: 220,
    },
  },
});
