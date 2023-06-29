import { TeamData } from "../data/TeamData"
import "../css/team.css"
import BlurLoad from "../componetns/BlurLoad"
const TeamCard = ({member}) =>{
    return(
    <div className="team-card">
        <img src={member.image}  alt={member.name} className={`team-img`} />
        <h3>{member.name}</h3>
        <h3>{member.designation}</h3>
    </div>
    )
}
const Team = () => {
  return (
    <article className="container team-section">
        <h2 className="text-underline">{TeamData.heading}</h2>
        <div>
            {TeamData.members.map((member,index)=>{
                return (
                    <TeamCard member={member} key={index} />
                )
            })}
        </div>
    </article>
  )
}

export default Team