document.querySelector('.cros').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.slidebar').classList.toggle('slidebarGo');
    if(document.querySelector('.slidebar').classList.contains('slidebarGo')){
        document.querySelector('.cover').style.display = 'inline'
        document.querySelector('.cros').style.display = 'none'
    }
    else{
        document.querySelector('.cover').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cros').style.display = 'inline'  
        }, 300);
    }
})