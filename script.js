/**
 * The code uses the Locomotive Scroll library to create smooth scrolling effects and ScrollTrigger to
 * synchronize animations with scrolling. It also uses GSAP (GreenSock Animation Platform) to create
 * timeline animations for various elements on the page.
 * @returns The code snippet does not have a return statement, so nothing is being returned.
 */

 function loco(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

 }
 loco();





var tl = gsap.timeline();
tl.to("#right-4 h3", {
    transform: "translateY(0)",
    // duration:1,
    ease:Expo,
    opacity:1,
    stagger:.1,
})


tl.to("#right-4 h3", {
    transform: "translateY(-100%)",
    duration:1,
    // stagger:.1,
})


tl.to("#right-3 h3", {
    transform: "translateY(0)",
    // duration:1,
    ease:Expo,
    opacity:1,
    stagger:.1,
})


tl.to("#right-3 h3", {
    transform: "translateY(-100%)",
    duration:1,
    // stagger:.1,
})




tl.to("#right-2 h3", {
    transform: "translateY(0)",
    // duration:1,
    ease:Expo,
    opacity:1,
    stagger:.1,
    
})


tl.to("#right-2 h3", {
    transform: "translateY(-100%)",
    duration:1,
})




tl.to("#right-1 h3", {
    transform: "translateY(0)",
    // duration:1,
    ease:Expo,
    opacity:1,
    stagger:.1,
 } )



tl.to("#left-heading h3", {
    opacity: 0,
    duration:1,
    ease:Power3,
} )


tl.to("#right-1 h3", {
    opacity:0,
    duration:1,
    ease:Power1,
})

tl.to("#loaderpage", {
    y: "-100vh",
    duration: 2,
    // delay: 2,
    ease: Expo.easeInOut,
} , 'a')


tl.to("#homepage", {
    marginTop : "-100vh",
    duration:1,
    delay:.2,
} , 'a')



tl.from("#homepage #top", {
    y: -40,
    opacity:0,
    duration:1,
    ease:Power3,
    delay: .5,
} , 'b')


tl.to("#homepage #firsthead h1", {
    transform: "translateY(0)",
    stagger:.1,
    ease:Power3,
    duration:.4,
} , 'b')


tl.to("#homepage #secondhead h1", {
    transform: "translateY(0)",
    stagger:.1,
    duration:.4,
    ease:Power3,

} , 'b')



tl.to("#homepage #image-div img", {
    height: "100%",
    duration:1,
}, 'b')



tl.to("#homepage #text", {
    opacity:1,
    ease:Power1.easeInOut,
    y:30,
    stagger:.1,
}, "b")


tl.to("#homepage #text2", {
    opacity:1,
    ease:Power1,
    
})

tl.to(" #text2 #right .para h3", {
    transform: "translateY(0)",
    duration:1,
    ease:Power1.easeInOut,
    opacity:1,
})


tl.to(" #homepage #text3 ", {
    opacity:1,
    ease:Power1,
    // backgroundColor :"red",
})



tl.to("#homepage #text3  #right #line", {
      width: "37%",
      opacity:1,
      duration:1,
      ease:Power1.easeInOut,
})



tl.from("#page2 #tophead  h3", {
    opacity:0,
    y:20,
    stagger:.1,
    ease:Power1, 
    
    scrollTrigger: {
        trigger: "#page2 #tophead",
        scroller : "#main",
        scrub:1,

    }
})
 var tl2 = gsap.timeline(
    {
        scrollTrigger:{
            trigger :"#text-with-image #first",
            scroller : "#main",
            // scrub: 2,
        }
    }
 );
 

 
 tl2.to ("#text-with-image #first .one h2", {
    opacity:1,
    transform:"translateY(0)",
    ease:Power4,
    stagger:.1,
 } , 'comman')


 tl2.to ("#text-with-image #first .two h2", {
    opacity:1,
    transform:"translateY(0)",
    ease:Power4,
    stagger:.1,
 } ,'comman')



 tl2.to("#text-with-image #first .line", {
    width : "40vw",
     ease:Power4,
 })

 tl2.to("#text-with-image #first .line after", {
    left: "100%",
    duration:1,
 })


tl2.from("#text-with-image #first p", {
    y:30,
    opacity:0,
    ease:Expo.Power1,
    delay:-.5,
}, 'cm')

tl2.to("#text-with-image #second", {
    opacity:1,
    duration:1,
    ease:Power3,
    filter:blur(0),

}, 'cm')


tl2.to ("#text-with-image2 #first .intelia  h2", {
    opacity:1,
    transform:"translateY(0)",
    ease:Power4,
    stagger:.1,
 } ,'comman')



 tl2.to("#text-with-image2 #first .line", {
    width : "31vw",
     ease:Power4,
 })

 tl2.to("#text-with-image2 #first .line after", {
    left: "100%",
    duration:1,
 })


tl2.from("#text-with-image2 #first p", {
    y:30,
    opacity:0,
    ease:Expo.Power1,
    delay:-.5,
}, 'cm2')



tl2.to("#text-with-image2 #second", {
    opacity:1,
    duration:1,
    ease:Power3,
    filter:blur(0),

}, 'cm2')





var tl3 =  gsap.timeline( {
    scrollTrigger: {
        trigger : "#page3 ",
        scroller: "#main",
        // markers :true,
    }
});




tl3.from("#page3 #top  p ", {
    y: 30,
    duration:1,
    opacity:0,
} , 'cont')


tl3.to("#page3 #top .football h2 ", {
    opacity:1,
    transform:"translateY(0)",
    ease:Power4,
    stagger:.1,
} , 'cont')


tl3.to(" #page3 #centerhead .center h4", {
    transform: "translateY(0)",
    stagger:.1,
    ease:Power1,
} , 'and')

tl3.to(" #page3 #centerhead .center2 h4", {
    transform: "translateY(0)",
    stagger:.1,
    ease:Power1,
} , 'and') 


tl3.from("#page3  #about-text #left", {
    y : 50,
    duration:1,
    ease:Power1,
} , 'not')


tl3.from("#page3 #about-text #right ", {
    y : 50,
    duration:1,
    ease:Power1,
}, 'not')


var tl4 = gsap.timeline( {
    
    scrollTrigger: {
        trigger : "#page4 ",
        scroller : "#main",
        // markers :true,
        // scrub:true,/
    }
});

tl4.from("#page4 #top", {
    y: -20,
    duration:1,
    ease:Power1.ease,
})

tl4.to("#page4 #email .part1 h1", {
    transform: "translateY(0)",
    stagger:.1,
    ease:Power1,
    opacity:1,
})



tl4.to("#page4 #email .part2 h1", {
    transform: "translateY(0)",
    stagger:.1,
    ease:Power1,
    opacity:1,
} , 'mail')



tl4.from("#page4 #footer ", {
      y:30,
      opacity:0,
      duration:1,
      ease:Power1.easeInOut,
} , 'same2')


