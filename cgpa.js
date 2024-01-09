function calculation(){
    var current_cgpa = parseFloat(document.getElementById("current_cgpa").value);
    var course_completed = parseFloat(document.getElementById("course_completed").value);
    var course_taken = Number(document.getElementById("course_taken").value);
    var course_01 = parseFloat(document.getElementById("course_01").value);
    var course_02 = parseFloat(document.getElementById("course_02").value);
    var course_03 = parseFloat(document.getElementById("course_03").value);
    var course_04 = parseFloat(document.getElementById("course_04").value);
    var course_05 = parseFloat(document.getElementById("course_05").value);

    var calc = current_cgpa * course_completed;
    var total_cg = calc;

    if(course_taken == 2){
        total_cg += course_01 + course_02;
    }else if(course_taken == 3){
        total_cg += course_01 + course_02 + course_03;
    }else if(course_taken == 4){
        total_cg += course_01 + course_02 + course_03 + course_04;
    }else if(course_taken === 5){
        total_cg += course_01 + course_02 + course_03 + course_04 + course_05;
    }

    var res = total_cg / (course_taken + course_completed);
    let final = res.toFixed(2);

    if(final >= 3.5){
        window.alert(`Congratulations, your CGPA is ${final}.`);
    }else if(3 <= final < 3.5){
        window.alert(`Your CGPA is ${final}. Give some more effort to get 3.5 or more CGPA.`);
    }else if(2 <= final < 3){
        window.alert(`Your CGPA is ${final}. Your CGPA is not good enough. Work hard!!`);
    }else if(final < 2){
        window.alert(`Your CGPA is ${final}. You are in probation.`)
    }
}