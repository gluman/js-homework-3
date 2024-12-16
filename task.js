
let c = document.getElementById('dead')
let lost_count = document.getElementById('lost')




function show_animal(){
    let   random_index = Math.floor(Math.random()*8)
    current_index = random_index
    console.log("random_index", random_index)
    hole[random_index].style.backgroundImage = "url('6291127261.jpg')"
    hole[random_index].style.backgroundColor = "grey"
    
    let   min_show_time = 1000 
    let   max_show_time = 2000 
    let   random_interval = Math.floor(Math.random() * (max_show_time - min_show_time + 1)) + min_show_time
    console.log("random_interval:", random_interval)
    setInterval(show_animal(), random_interval)
}


// const hole = [];
getHole = index => document.getElementById('hole${index}')
for (let index = 0; index < 9; index++) {
    let hole = getHole(index)
    hole.onc
    hole.addEventListener('click', function(){
        if(hole.style.backgroundImage = "url('6291127261.jpg')")
            deads_count.textContent++
        else{
            lost_count.textContent++
        }

    })
}

// function listen_click(){
//     for(i = 0; i < 9; i++){
//         hole[i].onclick = () => {
//             if(i === current_index){
//                 deads_count.textContent++
//             }
//             else{
//                 lost_count.textContent++
//             }
//         }
//     }

    if(lost_count.textContent >= 5){
        window.confirm("You LOSE! Restart?")
        deads_count.textContent = 0
        lost_count.textContent = 0
    }
    if(deads_count.textContent >= 10){
        window.confirm("YOU WIN! Restart?")
        deads_count.textContent = 0
        lost_count.textContent = 0
    }

show_animal()