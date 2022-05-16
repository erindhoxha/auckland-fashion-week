function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    if (document.querySelector(".sidebar").classList.contains("show-menu")) {
        console.log("Its here!");
        TweenMax.to(".sidebar", 1.2, {
            delay: 0,
            left: "-100%",
            ease: Expo.easeInOut
        });
    }
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();
                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});


new hoverEffect({
  parent: document.querySelector('.distortion'),
  intensity: 0.2,
  image1: './images/fashion2.png',
  image2: './images/fashion2.png',
  displacementImage: './images/diss.png',
  imagesRatio: 450 / 400
})


new hoverEffect({
    parent: document.querySelector('h1'),
    intensity: 0.2,
    imagesRatio: 380 / 300,
    text:"hello"
  })

// NAVBAR
TweenMax.staggerFrom(".navbar div", 1.5, {
  delay: 1.5,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut
}, 0.08);

// MEDIA
TweenMax.staggerFrom(".media ul li", 1.5, {
  delay: 1.5,
  opacity: 0,
  x: "-20",
  ease: Expo.easeInOut
}, 0.08);

// TEXT
TweenMax.from(".text h1 .hidetext", 1.5, {
  delay: 1,
  y: "100%",
  ease: Expo.easeInOut
});

TweenMax.from(".text h3 .hidetext", 1.5, {
  delay: 1.2,
  y: "100%",
  ease: Expo.easeInOut
});

TweenMax.from(".text p .hidetext", 1.5, {
  delay: 1.3,
  y: "100%",
  ease: Expo.easeInOut
});

TweenMax.from(".text h2", 1.5, {
  delay: 1.5,
  opacity: 0,
  x: "-10000",
  ease: Expo.easeInOut
});

// SPONSOR
TweenMax.from(".sponsor img", 1.5, {
  delay: 1.5,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut
});

TweenMax.from(".sponsor p", 1.5, {
  delay: 1.6,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut
});

// DISTORTION
TweenMax.from(".distortion", 1.5, {
  delay: 2,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut
});

// DISTORTION
TweenMax.from(".distortion2", 1.5, {
    delay: 2.2,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
  });

// OVERLAY
TweenMax.to(".first", 1.2, {
  delay: .5,
  top: "-100%",
  ease: Expo.easeInOut
});

TweenMax.to(".second", 1.2, {
  delay: .7,
  top: "-100%",
  ease: Expo.easeInOut
});

TweenMax.to(".third", 1.2, {
  delay: .9,
  top: "-100%",
  ease: Expo.easeInOut
});
TweenMax.to(".fourth", 1.2, {
    delay: 1.1,
    top: "-100%",
    ease: Expo.easeInOut
  });
  TweenMax.to(".fifth", 1.2, {
    delay: 1.3,
    top: "-100%",
    ease: Expo.easeInOut
  });

document.getElementById("menu").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.add("show-menu");
    TweenMax.to(".sidebar", 1.2, {
        delay: 0,
        left: "0%",
        ease: Expo.easeInOut
    });
    TweenMax.from("li.first-li", 2.25, {
        delay: .3,
        opacity: 0,
        x: "-150",
        ease: Expo.easeOut
      });
      TweenMax.from("li.second-li", 2.25, {
        delay: .6,
        opacity: 0,
        x: "-150",
        ease: Expo.easeOut
      });
      TweenMax.from("li.third-li", 2.25, {
        delay: .9,
        opacity: 0,
        x: "-150",
        ease: Expo.easeOut
      });
      TweenMax.from("li.fourth-li", 2.25, {
        delay: 1.2,
        opacity: 0,
        x: "-150",
        ease: Expo.easeOut
      });
})
document.getElementById("close").addEventListener("click", function() {
    document.querySelector(".sidebar").classList.remove("show-menu");
    TweenMax.to(".sidebar", 1.2, {
        delay: 0,
        left: "-100%",
        ease: Expo.easeInOut
    });
    TweenMax.from("li.first-li", 0, {
        delay: .3,
        opacity: 1,
        x: "0",
        ease: Expo.easeInOut
      });
      TweenMax.from("li.second-li", 0, {
        delay: .6,
        opacity: 1,
        x: "0",
        ease: Expo.easeInOut
      });
      TweenMax.from("li.third-li", 0, {
        delay: .9,
        opacity: 1,
        x: "0",
        ease: Expo.easeInOut
      });
      TweenMax.from("li.fourth-li", 0, {
        delay: 1.2,
        opacity: 1,
        x: "0",
        ease: Expo.easeInOut
      });
})
