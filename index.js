/*when the booking button is clicked a form will pop up for the user to
pick a day and time of the appointment once appt is set user will then => click the
next button so they may pick a payment option(in person cash or cashapp payment) 
dendending on which box the user clicks "in person" payments will ask user how much cash will they be bring so that
i will have their change will have a box for ppl who will bring exact amount, will have a blank for couponds codes will 
once thats done user must click the 'book my appt button` that will have a pop 
up of an overveiw of the booking details, once the user comfimers everything user must click submit 
*/

//creates&adds the Event-Listener
addEventListener(`DOMContentLoaded`, () => {

    document.getElementById(`about-btn`).addEventListener(`click`, (e) => {

        alert(`i was clicked`)
        //info popup
    });

    document.getElementById(`review-btn`).addEventListener(`click`, (e) => {
        alert(`i was clicked`)
        //review subbmitter pops up
    });

    //when button is clicked opensMemberForm function will run
    const membersBtn = document.getElementById(`members-btn`).addEventListener(`click`, (e) => {

        // e.preventDefault()
        //e.target.value
        opensMemberSignup()
    });
    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content")
    const closeModalButton = document.getElementsByClassName("close")[0];
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });
    //Member Form Content
    function opensMemberSignup() {
        modal.style.display = "block";
        const submitBtn = document.createElement(`input`)
        submitBtn.type = "submit"
        submitBtn.value = "create account"
       
        const memberForm = document.createElement(`form`)
        const emailInput = document.createElement(`input`)
        emailInput.style.display = "block"
        emailInput.type = ("text")
        emailInput.style.marginBottom = "10px"
        emailInput.placeholder = "email"
        const passwordInput = document.createElement(`input`)
        passwordInput.type = ('text')
        passwordInput.style.display = "block"
        passwordInput.placeholder = "password   "
        memberForm.append(emailInput, passwordInput, submitBtn)
        modalContent.append(memberForm)
        //console.log(memberForm)
        // let formm;
        //const memberForm = document.createElement(`form`).id = `member-form`
        //const memberInfoSignIn = document.createElement(`input-type`).append(memberInfoSignIn);
        memberForm.addEventListener("submit",(e)=>{
            e.preventDefault()
            console.log(`clicked`)
        })

        //memberInfoSignIn.innerText = document.querySelector(`member-form`
    }

   
})





//annoymous function passes in the navbtn objs and does a for-each loop


/* (navbtn)=> navbtn.forEach(btn => {
   addEventListener(`click`,(btn)=>{
       alert(b`hi`)
   })
 });
*/



