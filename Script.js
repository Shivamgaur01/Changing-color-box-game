let rect = document.querySelector("#center")

rect.addEventListener("mousemove", function(details)  {
    var rect_location = rect.getBoundingClientRect()
    var inside_rect_value = (Math.ceil(details.clientX - rect_location.left))

    if (inside_rect_value < rect_location.width / 2) {
        var redcolor = Math.ceil (gsap.utils.mapRange(0, rect_location.width / 2, 255, 0, inside_rect_value))

        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        })
    }

    else {
      let bluecolor = Math.ceil(gsap.utils.mapRange(rect_location.width/2,rect_location.width, 0, 255, inside_rect_value))

       gsap.to(rect, {
        backgroundColor: `rgb(0,0,${bluecolor})`,
        ease: Power4,
       })
    }


})
