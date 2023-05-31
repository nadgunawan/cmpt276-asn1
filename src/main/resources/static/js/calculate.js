var grades = [];

const lowerBound = [100.00,95.00,90.00,85.00,80.00,75.00,70.00,65.00,60.00,55.00,50.00,0];

const boundChange = (val,index)=> {
    var score = val.value; 
    const lowerBoundInput = document.getElementById("lowerBound");
    if(index==0){
        if(score>100.00){
            alert("100 is the maximum bound"); 
            val.value = lowerBound[index];
            score = element.value; 
        }
        if(lowerBoundInput[index+1].value>=Number(score)){
            alert("Bound is too low"); 
            val.value = lowerBound[index];
            score = val.value;
        }
        else{
            lowerBound[index]=score; 
            newHistogram(); 
        }
    }
    if(index==11){
        if(score<0.00){
            alert("Bound values can not be negative");
            val.value=lowerBound[index];
            score = val.value; 

        }
        else if(lowerBoundInput[index-1].value <= Number(score)){
            alert("Bound is too high");
            val.value= lowerBound[index];
            score=val.value; 
        }
        else{
            lowerBound[index]=score; 
            newHistogram();
        }
    }
    else{
        if(lowerBoundInput[index+1].value >= Number(score)||lowerBoundInput[index-1].value<=Number(score)){
            alert("Bound is incorrect");
            val.value=lowerBound[index];
            score=val.value;
        }
        else{
            lowerBound[index]=score;
            newHistogram();
        }
    }

}
document.addEventListener("DOMContentLoaded", function(){
    const btn = document.getElementById("submit");
    btn.addEventListener('click', func);
 
    function func() {
      //window.alert(document.getElementById("newGrade").value)
        const newgrade = document.getElementById("newGrade").value 
        if (newgrade<0||newgrade>100) {
            alert("Grade is invalid")
        }   
        else{
            grades.push(Number(newgrade));
            histogramScore(newgrade);

        }
    }

    
 });


 const newHistogram = () => {
    const letterGrade = document.getElementsByClassName("letterGrade")
   
	for (let i = 0; i < grades.length; i++) {
		histogramScore(grades[i]);
	}
};


 const histogramScore = (num) =>{
        for (let i = 0; i < 12; i++) {
            if (num < lowerBound[i - 1] && num >= lowerBound[i]) {
                document.getElementsByClassName("letterGrade")[i-1].innerHTML += "  |" ;
            }
        }
      };

   




