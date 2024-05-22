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

// steps for this game
// 1) sabse phle hume pata lagana hai ki ky humara box mouse touch pe work krra hai to uske lie mousemove ko event listner me daal ke check krege 
// 2) second steps me hum box ki location pta krege to uske lie hume getBoundingClientRect() ko use krna hai ye hume box ki location btaega
// 3) third step me hum box ki details check krege client x hume btaega ki box ke ander hum jab mouse se move krege to kitna krege 
// 4) fourth steps ye hai ki ab hum only box ke ander kitna move krre hai ye pta lagaege jiske lie hume clientx se getBoundingClientRect wale ko minus krna hoga 
// 5) fifth step me hum box ko left and right part me differentiate krte hai if condition ka use krke 
// 6) sixth step me hum box ke ander dekhte hai ki agr hum left me bhi jaare hai to kitna jaare hai (for intensity of color purpose) iske lie hum "gsap" use krte hai taaki mapping bhi ho sake gsp ki mdn reference me script ko paste krege html me
// 7) seventh step me mapping krwane ke baad hum gsap.to ki mdd se color change krege 

