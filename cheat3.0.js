let search = document.getElementById('search');
let searchTxt;

let i = 0
let card = document.getElementsByClassName('card');
Array.from(card).forEach(function(element){
    element.children[0].setAttribute('id',i++);
});


search.addEventListener('input',searchword);
    
function searchword(){    
    searchTxt = search.value.toLowerCase();

    let card = document.getElementsByClassName('card');
    Array.from(card).forEach(function(element){
        let cardQsn = element.children[0].innerText.toLowerCase();
        if(cardQsn.includes(searchTxt)){
            let xId = element.children[0].id;
            element.style.display = 'block';
            let data = new Mark(document.getElementById(xId));
            data.unmark();
            data.mark(
                searchTxt,{className:"highlight"}
            )
        }
        else{
            element.style.display = 'none';
        }

    });
}


function clearTxt(){
    search.value = "";
    searchword();
}
