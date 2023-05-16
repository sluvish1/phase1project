//DOM
addEventListener(`DOMContentLoaded`, () => {
/*
    document.getElementById(`about-btn`).addEventListener(`click`, (e) => {
        alert(`i was clicked`)
    });
    document.getElementById(`review-btn`).addEventListener(`click`, (e) => {
        alert(`i was clicked`)
        //review subbmitter pops up
    });
    */
    const coupon = document.getElementById("coupon-btn")
        coupon.addEventListener("click",(e)=>{
            let code = "TAKE$25"
            alert("Use code TAKE$25 for $25 off!")
            e.preventDefault()
        })

    


    const updoForm = document.getElementById(`updoForm`);

    updoForm.addEventListener("submit",function(e){
       e.preventDefault()

        const upDoInfoFirstName = document.getElementById("updo-info-first-name").value
        const upDoInfoLastName = document.getElementById("updo-info-last-name").value
        const upDoInfoEmail = document.getElementById("updo-info-email").value;
        const upDoInfoPhoneNum = document.getElementById("updo-info-phone-number").value
        const updoCoupondCodeEntered = document.getElementById("upodo-coupond-code").value
        const updoHairApptDate = document.getElementById("updo-formdate").value 

      let newAppt = {
            "firstName" : upDoInfoFirstName,
            "lastName": upDoInfoLastName,
            "email": upDoInfoEmail,
            "phoneNum": upDoInfoPhoneNum,
            "couponCode": updoCoupondCodeEntered,
            "updoDate" : updoHairApptDate,
         }
         console.log(newAppt)
         fetch("http://localhost:3004/updoAptt", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newAppt),
          })
    }

    
    );

    const braidedPonyForm = document.getElementById("braided-ponytail-form");
    updoForm.addEventListener("submit",function(e){
       e.preventDefault()
        const braidedponyInfoFirstName = document.getElementById("braided-ponytail-form-first-name").value
        const braidedponyInfoLastName = document.getElementById("braidedonytailF-form-last-name").value
        const braidedponyInfoEmail = document.getElementById("braided-ponytail-form-email-address").value;
        const braidedponyInfoPhoneNum = document.getElementById("braidedponytail-form-phone-number").value
        const braidedponyCoupondCodeEntered = document.getElementById("braidedpony-coupond-code").value
        const braidedponyHairApptDate = document.getElementById("braidedpony-form-date").value 
    });

    const heartBunForm = document.getElementById("heart-bun-form");
    updoForm.addEventListener("submit",function(e){
       e.preventDefault()
        const braidedponyInfoFirstName = document.getElementById("heart-bun-form-first-name").value
        const braidedponyInfoLastName = document.getElementById("heart-bun-form-last-name").value
        const braidedponyInfoEmail = document.getElementById("heart-bun-form-email-address").value;
        const braidedponyInfoPhoneNum = document.getElementById("heart-bun-form-phone-number").value
        const braidedponyCoupondCodeEntered = document.getElementById("heart-bun-coupond-code").value
        const braidedponyHairApptDate = document.getElementById("heart-bun-form-date").value 
    });

    const pigtailsForm = document.getElementById("pigtails-form");
    updoForm.addEventListener("submit",function(e){
       e.preventDefault()
        const braidedponyInfoFirstName = document.getElementById("pigtails-form-first-name").value
        const braidedponyInfoLastName = document.getElementById("pigtails-formlast-name").value
        const braidedponyInfoEmail = document.getElementById("pigtails-form-email-address").value;
        const braidedponyInfoPhoneNum = document.getElementById("pigtails-form-email-address").value
        const braidedponyCoupondCodeEntered = document.getElementById("pigtails-form-coupond-code").value
        const braidedponyHairApptDate = document.getElementById("pigtails-form-date").value 
    });
})



    /* const modal = document.getElementById("modal");
     const modalContent = document.querySelector(".modal-content")
     const closeModalButton = document.getElementsByClassName("close")[0];
     closeModalButton.addEventListener("click", function () {
         modal.style.display = "none";
     });
 
     // STEP : Member Form Content
     function opensMemberSignup() {
        / modal.style.display = "block";
         const submitBtn = document.createElement(`input`)
         submitBtn.type = "submit"
         submitBtn.value = "Create Account"
 
         const memberForm = document.createElement(`form`)
         const emailInput = document.createElement(`input`)
         emailInput.style.display = "block"
         emailInput.type = ("text")
         emailInput.style.marginBottom = "10px"
         emailInput.placeholder = "email"
         const passwordInput = document.createElement(`input`)
         passwordInput.type = ('text')
         passwordInput.style.display = "block"
         passwordInput.placeholder = "password"
         memberForm.append(emailInput, passwordInput, submitBtn)
         modalContent.append(memberForm)
 
 
  
 
         memberForm.addEventListener("submit", (e) => {
             e.preventDefault()
             console.log(`clicked`)
         })
         //END OF OLD CODE
         
 
         //memberInfoSignIn.innerText = document.querySelector(`member-form`
     }
 

}
 */




//annoymous function passes in the navbtn objs and does a for-each loop


/* (navbtn)=> navbtn.forEach(btn => {
   addEventListener(`click`,(btn)=>{
       alert(b`hi`)
   })
 });
*/