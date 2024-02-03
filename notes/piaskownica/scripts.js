function kolorki(){
    let divs = document.getElementsByTagName('div');
    for(let i = 0; i < divs.length; i++){
        divs[i].style.backgroundColor = divs[i].id;
    }

}
function toggleDisplay(){
    let p = document.getElementById("magia");
    if (p.style.display === 'none'){
        p.style.display = 'block';
    }else{
        p.style.display = 'none';
    }
}