console.log("            welcome to meraki                  ")
const axios = require('axios');
async function getdata(){
    const resp = await axios.get('http://saral.navgurukul.org/api/courses')
    const data = resp.data;
    // console.log(data)
    let course_list = (data['availableCourses'])
    // console.log(course_list)
    console.log("...id and available course ...")
    let id_of_courses = []
    for(mydata in course_list){
        // let couse_name = (course_list[mydata]["name"])
        // let course_id =  (course_list[mydata]["id"])
        // console.log(couse_name,"...",course_id)
        console.log(mydata,course_list[mydata]["name"],"...",course_list[mydata]["id"])
        id_of_courses.push(course_list[mydata]["id"])
        // console.log(id_of_courses)
    }



    console.log("......................parentExercise........................ ")
    let getData = require("readline-sync").questionInt("select the course u want by selecting cooresponding number:");
    var id = course_list[getData]["id"]
    console.log(id);
    const exercise = await axios.get('http://saral.navgurukul.org/api/courses/'+id+'/exercises')
    // console.log(exercise.data,"...");
    var excise_name = exercise.data;
    // console.log(excise_name);
    var exercise_name = exercise.data
    // console.log(exercise_name.data);
    const exerciseData = exercise_name.data
    // console.log(exerciseData);
    list_of_id = []
    for(var j =0; j< exerciseData.length; j++){
        console.log(j,exerciseData[j]["name"],"....");
        list_of_id.push(j,exerciseData[j]["name"],"....")
    }
    console.log("......................................slug..................................")
    var content1 = require("readline-sync").question('Please enter your content:-')
    var slug = (exerciseData[content1]['slug'])
    console.log(slug,"******");
    const childExcercise = await axios.get('https://saral.navgurukul.org/api/courses/'+id+'/exercise/getBySlug?slug='+slug)
    const check = childExcercise.data
    // console.log(check)
    // console.log(check["slug"],"........")
    // console.log(check["content"])
    for(i in check){
        console.log(check[i])
    }
    // console.log(check,"/////////////////");

    
}getdata();

    

    