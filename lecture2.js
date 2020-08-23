/**
 * Navigate to https://www.futurice.com/careers 
 * 1.Programmatically, find out how many jobs they are having on offer
 * 2.List all jobs on offer that contains the text Developer 
 * 3. Change the color of offer that do not contain the text Developer to Red
 */

 //part1
 document.getElementsByClassName('css-1nzk6w7 e8mreo03').length


  //part2
  var jobs = document.getElementsByClassName('css-1nzk6w7 e8mreo03')
  var i = 0

 while(i < jobs.length){
    if(jobs[i].innerText.includes("Developer")){
        console.log(jobs[i].innerText);
    }
    i++;
}


//part3
while(i < jobs.length){
    if(jobs[i].innerText.includes("Developer")){
        jobs[i].style.color = "red"
        
    }
    i++; 
}