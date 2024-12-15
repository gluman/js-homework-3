
let deads_count = document.getElementById('dead')
let lost_count = document.getElementById('lost')

const hole = [];

for (let index = 0; index < 9; index++) {
    hole[index] = document.getElementById('hole' + String(index + 1))
}

function show_animal(index){
    hole[index].style.backgroundImage = "url('6291127261.jpg')"
    }

    let   min_show_time = 1000 
    let   max_show_time = 2000 
    let   random_interval = Math.floor(Math.random() * (max_show_time - min_show_time + 1)) + min_show_time
    let   random_index = Math.floor(Math.random()*8)
    console.log("random_interval:", random_interval)
    console.log("random_index", random_index)
    setInterval(show_animal(random_index),random_interval)

    for(i = 0; i < 9; i++){
        hole[i].onclick = () => {
            if(i === random_index){
                deads_count.textContent++
            }
            else{
                lost_count.textContent++
            }
        }
    }

    if(lost_count.textContent >= 5){
        window.alert("You lose!")
        deads_count.textContent = 0
        lost_count.textContent = 0
    }
    if(deads_count.textContent >= 10){
        window.alert("YOU WIN!")
        deads_count.textContent = 0
        lost_count.textContent = 0
    }
