//DOM
addEventListener(`DOMContentLoaded`, () => {
    const couponBtn = document.getElementById("coupon-btn").addEventListener("click", couponBtnWasClicked)

    function couponBtnWasClicked(e) {
        alert("Use TAKE25 for $25 off!")
    };

      function formWasSubmitted(e){
            e.preventDefault()
            const submittedForm = e.target;

          //console.log(`is this our input`, e.target.querySelector('.first-name'));
           let firstName = e.target.querySelector(".first-name").value
           let lastName = e.target.querySelector(".last-name").value
           let emailInfo = e.target.querySelector(".email").value
           let phoneNum =e.target.querySelector(".phone-num").value
           let discountCode = e.target.querySelector(".discount-code").value
           let aptDate = e.target.querySelector(".apt-date").value
        
           let userInput ={
            "firstname" : firstName,
            "lastName" : lastName,
            "email" : emailInfo,
            "phonenumber" : phoneNum,
            "discount" : discountCode,
            "aptdate" : aptDate
           }
           
           //gets the user input
           fetch("http://localhost:3004/userInput", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInput),
        })
     }

    let allforms = document.getElementsByTagName("form") //grabs all of the forms ofn the webpage
     allforms = Array.from(allforms)//turns everything into an array
    allforms.forEach(eachForm => {
        eachForm.addEventListener("submit",formWasSubmitted)
    });
    

   












    /* OLD CODE
    const updoForm = document.getElementById(`updoForm`).addEventListener("submit", updoFormWasSubmitted)
    function updoFormWasSubmitted(e) {
        e.preventDefault()

        const upDoInfoFirstName = document.getElementById("updo-info-first-name").value
        const upDoInfoLastName = document.getElementById("updo-info-last-name").value
        const upDoInfoEmail = document.getElementById("updo-info-email").value;
        const upDoInfoPhoneNum = document.getElementById("updo-info-phone-number").value
        const updoCoupondCodeEntered = document.getElementById("upodo-coupond-code").value
        const updoHairApptDate = document.getElementById("updo-formdate").value

        let newAppt = {
            "firstName": upDoInfoFirstName,
            "lastName": upDoInfoLastName,
            "email": upDoInfoEmail,
            "phoneNum": upDoInfoPhoneNum,
            "couponCode": updoCoupondCodeEntered,
            "updoDate": updoHairApptDate,
        }

        if (newAppt.couponCode !== "TAKE25") {
            alert("Incorrect Coupon Code")
        }
        // console.log(newAppt)
        fetch("http://localhost:3004/updoAptt", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAppt),
        })
    }

    const braidedPonyForm = document.getElementById("braided-ponytail-form").addEventListener("submit", braidedonytailFormWasSubmitted)
    function braidedonytailFormWasSubmitted(e) {
        e.preventDefault()
        const braidedponyInfoFirstName = document.getElementById("braided-ponytail-form-first-name").value
        const braidedponyInfoLastName = document.getElementById("braidedonytailF-form-last-name").value
        const braidedponyInfoEmail = document.getElementById("braided-ponytail-form-email-address").value;
        const braidedponyInfoPhoneNum = document.getElementById("braidedponytail-form-phone-number").value
        const braidedponyCoupondCodeEntered = document.getElementById("braidedpony-coupond-code").value
        const braidedponyHairApptDate = document.getElementById("braidedpony-form-date").value

        let newAppt = {
            "firstName": braidedponyInfoFirstName,
            "lastName": braidedponyInfoLastName,
            "email": braidedponyInfoEmail,
            "phoneNum": braidedponyInfoPhoneNum,
            "couponCode": braidedponyCoupondCodeEntered,
            "braidedPonyDate": braidedponyHairApptDate,
        }

        if (newAppt.couponCode !== "TAKE25") {
            alert("Incorrect Coupon Code")
        }

       // console.log(newAppt)
        fetch("http://localhost:3004/braidPonyAptt", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAppt),
        })
    }


    const heartBunForm = document.getElementById("heart-bun-form");
    heartBunForm.addEventListener("submit", heartBunFormWasSubbitted)

    function heartBunFormWasSubbitted(e) {
        e.preventDefault()
        const heartBunInfoFirstName = document.getElementById("heart-bun-form-first-name").value
        const heartBunInfoLastName = document.getElementById("heart-bun-form-last-name").value
        const heartBunInfoEmail = document.getElementById("heart-bun-form-email-address").value;
        const heartBunInfoPhoneNum = document.getElementById("heart-bun-form-phone-number").value
        const heartBunCoupondCodeEntered = document.getElementById("heart-bun-coupond-code").value
        const heartBunHairApptDate = document.getElementById("heart-bun-form-date").value

        let newAppt = {
            "firstName": heartBunInfoFirstName,
            "lastName": heartBunInfoLastName,
            "email": heartBunInfoEmail,
            "phoneNum": heartBunInfoPhoneNum,
            "couponCode": heartBunCoupondCodeEntered,
            "heartBunDate": heartBunHairApptDate,
        }
        if(newAppt.couponCode !== "TAKE25"){
            alert("Incorrect Coupon Code")
        }
        //console.log(newAppt)
        fetch("http://localhost:3004/heartBunAptt", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAppt),
        })
    }

    const pigtailsForm = document.getElementById("pigtails-form").addEventListener("submit", pigtailsFormWasSubbmitted)

    function pigtailsFormWasSubbmitted(e) {
        e.preventDefault()
        const pigtailsInfoFirstName = document.getElementById("pigtails-form-first-name").value
        const pigtailsInfoLastName = document.getElementById("pigtails-formlast-name").value
        const pigtailsInfoEmail = document.getElementById("pigtails-form-email-address").value;
        const pigtailsInfoPhoneNum = document.getElementById("pigtails-form-email-address").value
        const pigtailsCoupondCodeEntered = document.getElementById("pigtails-form-coupond-code").value
        const pigtailsHairApptDate = document.getElementById("pigtails-form-date").value

        let newAppt = {
            "firstName": pigtailsInfoFirstName,
            "lastName": pigtailsInfoLastName,
            "email": pigtailsInfoEmail,
            "phoneNum": pigtailsInfoPhoneNum,
            "couponCode": pigtailsCoupondCodeEntered,
            "pigTailDate": pigtailsHairApptDate,
        }
        //console.log(newAppt)
        fetch("http://localhost:3004/pigTailsAptt", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAppt),
        })

    }
    */
})

