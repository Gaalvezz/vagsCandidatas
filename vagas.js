var btn = document.querySelector('#visibily');
var container =document.querySelector('.vermais');


btn.addEventListener('click',function(){

    if(container.style.display == 'block'){
        container.style.display == 'none';
    }
    else {
        container.style.display = 'block';
    }
});