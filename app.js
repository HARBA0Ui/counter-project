const btns = document.querySelectorAll('.btn')
const value = document.querySelector('.value')

let count = 0;

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        console.log(e.target)
        const style = e.currentTarget.classList
        console.log(style)
        if(style.contains('increase')){
            count++;
        }
        else if(style.contains('decrease')){
            count--;
        }else{
            count = 0;
        }
        if(count<0){
            value.style.color = 'red'
        }
        if(0<count){
            value.style.color = "green"
        }
        if(count==0){
            value.style.color = "#222"
        }
        value.textContent = count;
    })
})

