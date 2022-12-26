import Filter from "./Filter";
import ShowCard from "./ShowCard";
import { useState } from "react";
import FilterButton from "./FilterButton";

const Discover = () => {
    const [ openFilter, setOpenFilter ] = useState(false);

    const clickOutside = () => {
        console.log('hey')
        setOpenFilter(false);
    }

    return(
        <section className="discover">
            <div className="head">
                <h1 className="page-title">観る</h1>
                <p className="page-tagline">Less time searching,</p>
                <p className="page-tagline">More time watching.</p>
            </div>

            <div className={openFilter ? "filter-container" : "filter-container-closed"}>
            <FilterButton openFilter={openFilter} setOpenFilter={setOpenFilter} />
            {openFilter && <Filter />}
            </div>
            
            <div>
                <section className="recommended" onMouseDown={clickOutside}>
                    <h2 className="show-card-section-title">Recommended for you</h2>
                    <div className="show-card-display">
                        <ShowCard name="Blue Lock" desc="After a disastrous defeat at the 2018 World Cup, Japan's team struggles to regroup. But what's missing? An absolute Ace Striker, who can guide them to the win. The Japan Football Union is hell-bent on creating a striker who hungers for goals and thirsts for victory, and who can be the decisive instrument in turning around a losing match...and to do so, they've gathered 300 of Japan's best and brightest youth players. Who will emerge to lead the team...and will they be able to out-muscle and out-ego everyone who stands in their way?" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx137822-4dVWMSHLpGf8.png" />
                        <ShowCard name="Death Note" desc="Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a Death Note, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power?" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-lawCwhzhi96X.jpg" />
                        <ShowCard name="Chainsaw Man" desc="Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses with Pochita. One day, Denji is betrayed and killed. As his consciousness fades, he makes a contract with Pochita and gets revived as 'Chainsaw Man' — a man with a devil's heart." image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png" />
                    </div>
                    <h2 className="show-card-section-title">Resume watching</h2>
                    <div className="show-card-display">
                        <ShowCard name="Fruits Basket: The Final" desc="After last season’s revelations, the Soma family moves forward, but the emotional chains that bind them are not easily broken. Unable to admit why she wants the cure, Tohru wrestles with the truth, aware that time is running out for someone close. And a secret still lurks that could break another’s heart. But hope is not lost—a clue to the curse is found. Could their imprisonment’s end be near?" image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124194-pWfBqp3GgjOx.jpg" />
                        <ShowCard name="HUNTER × HUNTER" desc="A Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him. After becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter." image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-sIpBprNRfzCe.png" />
                        <ShowCard name="Monster" desc="Dr. Kenzo Tenma is a renowned Japanese brain surgeon working at a leading hospital in Germany. One night, Dr. Tenma risks his reputation and career to save the life of a critically wounded young boy over that of the town mayor who had been planning to support the hospital financially. A string of mysterious murders begin to occur soon after the operation, and Dr. Tenma emerges as the primary suspect despite no incriminating evidence. A doctor is taught to believe that all life is equal; however, when another series of murders occur in the surgeon's vicinity, Dr. Tenma's beliefs are shaken as his actions that night are shown to have much broader consequences than he could have imagined. Leaving behind his life as a surgeon he embarks on a journey across the country to unravel the mystery of the boy he saved." image="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19-ham53gnijfiN.jpg" />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Discover;