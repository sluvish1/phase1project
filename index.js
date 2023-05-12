/*when the booking button is clicked a form will pop up for the user to
pick a day and time of the appointment once appt is set user will then => click the
next button so they may pick a payment option(in person cash or cashapp payment) 
dendending on which box the user clicks "in person" payments will ask user how much cash will they be bring so that
i will have their change will have a box for ppl who will bring exact amount, will have a blank for couponds codes will 
once thats done user must click the 'book my appt button` that will have a pop 
up of an overveiw of the booking details, once the user comfimers everything user must click submit 
*/

//creates&adds the Event-Listener
addEventListener(`DOMContentLoaded`,()=>{
    
   document.getElementById(`about-btn`).addEventListener(`click`,(e)=>{
    alert(`i was clicked`)
    //info popup
   });

   document.getElementById(`review-btn`).addEventListener(`click`,(e)=>{
    alert(`i was clicked`)
    //review subbmitter pops up
   });

    document.getElementById(`login-btn`).addEventListener(`click`,(e)=>{
       
        const memberForm = document.createElement(`form`)
        const memberInput = document.createElement(`input`)
       
     
        memberForm.append(memberInput)
        e.target.memberForm.value

       
       console.log(memberForm)
    //signup and logins
 });

//adding events listenters to hairstyle scetion
console.log(document.getElementById(`updo-form`))

})





//annoymous function passes in the navbtn objs and does a for-each loop


 /* (navbtn)=> navbtn.forEach(btn => {
    addEventListener(`click`,(btn)=>{
        alert(b`hi`)
    })
  });
*/
    


