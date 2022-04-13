import LeaderCard from "./LeaderCard";
import style from "./leaderPage.module.css"


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
            <div className={style.container}>
                {
                    leaders.length === 0 ?
                        <div className={style.noGamesText}>Play more games to get leaderboard!</div> :
                        leaders.slice(0, 10).map((player, index) => {
                            return <LeaderCard key={index} name={player.name} count={player.count} index={index + 1}/>
                        })

                }
                {
                    leaders.length > 0 && <button className={style.button} onClick={refreshPage}>Delete all progress</button>
                }
            </div>
        );
    }
;

export default LeaderPage;