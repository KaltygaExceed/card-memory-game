import LeaderCard from "./LeaderCard";
import {Container, NoGamesText, Button} from "./leaderPage.styles"


const LeaderPage = () => {
        function refreshPage() {
            localStorage.clear()
            window.location.href = "/"
        }

        const leaders = JSON.parse(localStorage.getItem("leaders") || "[]").slice(1).sort(function (a, b) {
            return b.count - a.count
        })
    console.log(leaders)

        return (
            <Container>
                {
                    leaders.length === 0 ?
                        <NoGamesText>Play more games to get leaderboard!</NoGamesText> :
                        leaders.slice(0, 10).map((player, index) => {
                            return <LeaderCard key={index} name={player.name} count={player.count} index={index + 1}/>
                        })

                }
                {
                    leaders.length > 0 && <Button onClick={refreshPage}>Delete all progress</Button>
                }
            </Container>
        )
    }

export default LeaderPage;