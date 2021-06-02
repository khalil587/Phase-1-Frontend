// created variable
//const teamFetch = "http://localhost:3000/teams"
// im grabbing the team info

let teamsUl = document.querySelector(".teams-ul")


getAllTeams()
function getAllTeams(){
    fetch("http://localhost:3000/teams")
    .then( res => res.json())
    .then(teamsArray => displayTeams(teamsArray))

}

function displayTeams(teamsArray){
    console.log(teamsArray)
    teamsArray.forEach(team => {

        let teamList = document.createElement('li')
        // teamList === <li></li>

        teamList.textContent = `${team.teamName} || ${team.location}` 
        // teamList === <li>The Bulls</li>

        teamsUl.append(teamList)
    
    })
    for (i = 0; i <= teams.length; i++){
        teams[i].addEventListener("click", function(){
            const moreInfo = document.createElement(li)
            moreInfo.textContent = team.teamLocation 
            moreInfo.textContent= team.teamAbbreviation
            moreInfo.append()
        })
    }
}