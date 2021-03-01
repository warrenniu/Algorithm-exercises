// {/* <script type="text/javascript"> */}

function convert2HHMMSS(seconds) {
    var hours   = Math.floor(seconds/ 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var seconds = seconds - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

function getDisplayFromExercise(lastExercise, exerciseType) {
    let exerciseValue = lastExercise.value;
    const exerciseBest = lastExercise.best
    const exerciseGoal = lastExercise.goal
        
    if (exerciseType === 'Run Time') {
        return `${lastExercise.date} | ${exerciseType} TOTAL: ${convert2HHMMSS(exerciseValue)} | PR: ${convert2HHMMSS(exerciseBest)} | GOAL: ${convert2HHMMSS(exerciseGoal)}`
    }

    const displayText = `${lastExercise.date} | ${exerciseType} TOTAL: ${exerciseValue} reps | PR: ${exerciseBest} reps | GOAL: ${exerciseGoal}`

    return displayText; 
};

jQuery(document).ready(function($) {
  wp.ajax.post( "get_day_stats", {} )
  .done(function(response) {
   
    const lastPushup = response.pushup
    const lastSitup = response.situp
    const lastPullup = response.pullup
    const lastRuntime = response.run

    $("#displayPushups").text(getDisplayFromExercise(lastPushup, "Push-up"));
    $("#displaySitups").text(getDisplayFromExercise(lastSitup, "Sit-up"));
    $("#displayPullups").text(getDisplayFromExercise(lastPullup, "Pull-up"));
    $("#displayRuntime").text(getDisplayFromExercise(lastRuntime, "Run Time"));

    })
  });
// </script>




