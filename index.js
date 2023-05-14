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
    const updoForm = document.getElementById(`updoForm`);
    updoForm.addEventListener("submit",function(e){
       e.preventDefault()
        const upDoInfoFirstName = document.getElementById("updo-info-first-name").value
        const upDoInfoLastName = document.getElementById("updo-info-last-name").value
        const upDoInfoEmail = document.getElementById("updo-info-email").value;
        const upDoInfoPhoneNum = document.getElementById("updo-info-phone-number").value
        const updoCoupondCodeEntered = document.getElementById("updo-coupond-code").value
        const hairApptDate = document.getElementById("updo-formdate").value 
    });


    const heartBunform = document.getElementById();
    updoForm.addEventListener("submit",function(e){
       e.preventDefault()
        const braidedponyInfoFirstName = document.getElementById("braided-ponytail-form-first-name").value
        const braidedponyInfoLastName = document.getElementById("braidedonytailF-form-last-name").value
        const braidedponyInfoEmail = document.getElementById("braided-ponytail-form-email-address").value;
        const braidedponyInfoPhoneNum = document.getElementById("braidedponytail-form-phone-number").value
        const braidedponyCoupondCodeEntered = document.getElementById("braidedpony-coupond-code").value
        const braidedponyHairApptDate = document.getElementById("braidedpony-form-date").value 
    })


    const braidedPonytailForm = document.getElementById();
    updoForm.addEventListener("submit",function(e){
       e.preventDefault()
        const braidedponyInfoFirstName = document.getElementById("braided-ponytail-form-first-name").value
        const braidedponyInfoLastName = document.getElementById("braidedonytailF-form-last-name").value
        const braidedponyInfoEmail = document.getElementById("braided-ponytail-form-email-address").value;
        const braidedponyInfoPhoneNum = document.getElementById("braidedponytail-form-phone-number").value
        const braidedponyCoupondCodeEntered = document.getElementById("braidedpony-coupond-code").value
        const braidedponyHairApptDate = document.getElementById("braidedpony-form-date").value 
    })
    
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