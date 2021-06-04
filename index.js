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
        
        let likesP = document.createElement('p')
        likesP.textContent = team.likes


        let btn = document.createElement("button")
        // btn = <button>Like</button>
        btn.textContent = "Like"
        btn.dataset.teamId = team.id

        btn.addEventListener("click", function(e){
            // grab number of likes from dom
            let likesNumber = parseInt(e.target.parentElement.textContent[0])
            likesNumber++

            let teamId = e.target.dataset.teamId

            fetch(`http://localhost:3000/teams/${teamId}`, {
             method: 'PATCH', // or 'PUT'
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({likes: likesNumber}),
            })
            .then(response => response.json())
        })
        
        likesP.append(btn)
        
        
        // teamList === <li>The Bulls</li>

       // let btn = document.createElement("button")
       //  btn.innerHTML = "Like"
       //  document.ul.appendChild(btn);
        teamsUl.append(teamList)
        teamsUl.append(likesP)
        let teamInfo = document.createElement("ul")
        let abbreviation = document.createElement("li")
        abbreviation.innerText = team.abbreviation
        let location = document.createElement("li")
        location.innerText = team.location
        let simpleName = document.createElement("li")
        simpleName.innerText = team.simpleName
        teamInfo.append(simpleName)
        teamInfo.append (location)
        teamInfo.append(abbreviation)
        teamInfo.hidden = true
        teamList.append(teamInfo)
        teamList.addEventListener("click",function(){
            teamInfo.hidden = !teamInfo.hidden
            console.log(team)
        })
    
    })
   
}
