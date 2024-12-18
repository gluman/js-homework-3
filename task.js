
let deads_count = document.getElementById('dead')
let lost_count = document.getElementById('lost')

const hole = [];

for(i = 1; i <= 9; i++){
    hole[i-1] = document.getElementById(`hole${i}`)
}

hole.forEach(onclick = () =>{
    if (this.className.includes('hole_has-mole')){
        lostCount.textContent++
    }
    else{
        deadsCount.textContent++
    }


}, hole)


if (lostCount.textContent >= 5) {
    if (window.confirm("You LOSE! Restart?")) {
        deadsCount.textContent = 0;
        lostCount.textContent = 0;
    }
} else {
    if (++deadsCount.textContent >= 10) {
        if (window.confirm("YOU WIN! Restart?")) {
            deadsCount.textContent = 0;
            lostCount.textContent = 0;
        }
    }
}

// holes.forEach((hole) => {
//     hole.onclick = () => {
//         if (hole.className.includes('hole_has-mole')) {
//             if (lostCount.textContent >= 5) {
//                 if (window.confirm("You LOSE! Restart?")) {
//                     deadsCount.textContent = 0;
//                     lostCount.textContent = 0;
//                 }
//             } else {
//                 if (++deadsCount.textContent >= 10) {
//                     if (window.confirm("YOU WIN! Restart?")) {
//                         deadsCount.textContent = 0;
//                         lostCount.textContent = 0;
//                     }
//                 }
//             }
//         }
//     };
// });

