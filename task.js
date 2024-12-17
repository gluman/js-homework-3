
let deads_count = document.getElementById('dead')
let lost_count = document.getElementById('lost')


function show_animal(timeout){
    let   random_index = Math.floor(Math.random()*8)
    current_index = random_index
    console.log("random_index", random_index)
    hole[random_index].style.backgroundImage = "url('6291127261.jpg')"
    // hole[random_index].style.backgroundColor = "grey"
    setTimeout(skip_animal(random_index),timeout)
}

function skip_animal(index){
        hole[random_index].style.backgroundColor = "grey"
} 

const hole = [];

for(i = 0; i < 9; i++){
    hole[i] = document.getElementById('hole${i}')
    
    hole[i].onclick = () => {
        if(i === current_index){
            deads_count.textContent++
        }
        else{
            lost_count.textContent++
        }
    }

}


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


let   min_show_time = 1000 
let   max_show_time = 2000 
let   random_interval = Math.floor(Math.random() * (max_show_time - min_show_time + 1)) + min_show_time
setInterval(show_animal(random_interval), random_interval)
console.log("random_interval:", random_interval)