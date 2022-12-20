var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

var side = document.getElementById("sidemenu");
function openmenu(){
    side.style.right="0";
}
function closemenu(){
    side.style.right="-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxd6FDzIES8ZC6z2jHFpWROg7CW3qrMRZZk37-hDB74_9KnFfDKdvsB97dtzOpEgViA0w/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent succefully!!";
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })