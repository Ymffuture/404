const statusMessage = document.getElementById("statusMessage");
const retryBtn = document.getElementById("retryBtn");
const icon= document.getElementById("icon");
const link = document.getElementById("link");
const loader = document.getElementById("loader");
const mybtn = document.getElementById("mybtn");
const test = document.getElementById("test");
const hide = document.getElementById('hide')
function redirectToQuorvex() {
     window.location.href = "https://quorvexinstitute.vercel.app";
        }

        function checkConnection() {

            if (navigator.onLine) {
                statusMessage.innerHTML = "Connected! Redirecting you to Quorvex Institute...";
                retryBtn.style.display = "none";
                link.style.display = "block";
                setTimeout(redirectToQuorvex, 8000); 
            } else {
                statusMessage.innerHTML = "No Internet Connection. Please check your connection.";
                retryBtn.style.display = "block";
            }

        }
        setInterval(checkConnection(),1000)
        
    
const load = () =>{
    location.reload()

}

window.addEventListener("online", checkConnection);
window.addEventListener("offline", checkConnection);
setInterval(()=>{

    const time = new Date()
    hr=time.getHours() 
    min=time.getMinutes()
    sec=time.getSeconds()
    
    const htmlTime = document.getElementById('time');
    
    // htmlTime.textContent = `${hr}:${min}:${sec} `
     htmlTime.textContent = `${time} `
},1000)


let attemptCount = 0;
const maxCountAttempt =3;


retryBtn.addEventListener('click',()=>{
    attemptCount++;
    if(attemptCount>=maxCountAttempt){
        let countdown = 30
        const intervalid = setInterval(()=>{
            countdown--;
            test.textContent = `Too many attempts please wait ${countdown} seconds...`
test.style.opacity = '1'
window.onbeforeunload =()=>{
    return "Not Allowed"
}

            if(countdown<=10){
                // test.style.color = '#fd9797'
                test.style.color = '#01c901'
                  test.style.transition='2s all'
            }
            if(countdown<=1){
                test.style.opacity = '0'
                test.style.transition = '.6s all'
                
            }
            if(countdown===0){
                clearInterval(intervalid)
                retryBtn.style.display = 'block'
                test.style.display = 'none'
                
            }
        },1000)

    retryBtn.style.display = "none";
    test.style.display = 'block'
    test.style.opacity = '1'
    setTimeout(()=>{
    test.style.transform = 'translateY(0)'
    test.style.transition='3s all'
    },1000)

    }
    })

    setInterval(()=>{
        setTimeout(()=>{
            hide.classList.add('adds')
        },4000)
    
        setTimeout(()=>{
            hide.classList.remove('adds')
        },8000)
    },4000)
   