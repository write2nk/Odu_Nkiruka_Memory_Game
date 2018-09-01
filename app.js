html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    background: #ffffff url('geometry2.png'); /* Background pattern from Subtle Patterns */
    font-family: 'Coda', cursive;
}

header {
    width: 300px;
    text-align: center;
    line-height: 4px;
    border-radius: 10%;
    margin-top: 15px;
    }

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
}

/*
 * Styles for the deck of cards
 */

.deck {
    width: 560px;
    min-height: 550px;
    background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
    padding: 32px;
    border-radius: 10px;
    box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 3em;
}

.deck .card {
    height: 100px;
    width: 100px;
    background: #2e3d49;
    font-size: 0;
    color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
}

.deck .card.open {
    transform: rotateY(0);
    background: #02b3e4;
    cursor: default;
}

.deck .card.show {
    font-size: 33px;
}

.deck .card.match {
    cursor: default;
    background: #02ccba;
    font-size: 33px;
}

/*
 * Styles for the Score Panel
 */

.score-panel {
    text-align: left;
    width: 345px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.score-panel .stars {
    margin: 0;
    padding: 0;
    display: inline-block;
    margin: 0 5px;
}

.score-panel .stars li {
    list-style: none;
    display: inline-block;
}

.score-panel .restart {
    float: right;
    cursor: pointer;
}
.modal_background{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.438);


}
.modal_body{
    position: relative;
    width: 400px;
    top: 50%;
    left: 50%;
    background: #fff;
    transform: translate(-50%, -70%);
    border-radius: 5px;
    }

    .modal_heading{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 1.5rem;
        border-bottom: 1px solid gray;
    }
    .modal_close{
        font-size: 2rem;
        font-weight: bold;
    }

    .modal_status{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        padding: 1rem;
    }

    .modal_buttons{
        display: flex;
        justify-content: space-around;
        padding: 1rem;
    }
    .hide{
        display: none;
    }

    button{
        width: 70px;
        height: 30px;
    }

@media screen and (max-width: 385px) {
    body {
        width: 100%;
        height: 70%;
    }

    .container {
        width: 100%;
        
        margin: 0 auto;
    }

    .deck {
        width: 90%;
        height: 80%;
    }

    .deck .card {
        width: 15vw;
        height: 30vw;
    }

    
    .modalBody {
        width: 80%;
    }
}

@media screen and (min-width: 386px) and (max-width: 600px) {
    body {
        width: 100%;
        height: 100%;
    }

    .container {
        width: 100%;
        margin: 0 auto;
    }

    .deck {
        width: 90%;
    }

    .deck .card {
        width: 16vw;
        height: 20vw;
    }

    .modalBody {
        width: 80%;
    }
}


html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

body {
    background: #ffffff url('geometry2.png'); /* Background pattern from Subtle Patterns */
    font-family: 'Coda', cursive;
}

header {
    width: 300px;
    text-align: center;
    line-height: 4px;
    border-radius: 10%;
    margin-top: 15px;
    }

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
}

/*
 * Styles for the deck of cards
 */

.deck {
    width: 560px;
    min-height: 550px;
    background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
    padding: 32px;
    border-radius: 10px;
    box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 3em;
}

.deck .card {
    height: 100px;
    width: 100px;
    background: #2e3d49;
    font-size: 0;
    color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
}

.deck .card.open {
    transform: rotateY(0);
    background: #02b3e4;
    cursor: default;
}

.deck .card.show {
    font-size: 33px;
}

.deck .card.match {
    cursor: default;
    background: #02ccba;
    font-size: 33px;
}

/*
 * Styles for the Score Panel
 */

.score-panel {
    text-align: left;
    width: 345px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.score-panel .stars {
    margin: 0;
    padding: 0;
    display: inline-block;
    margin: 0 5px;
}

.score-panel .stars li {
    list-style: none;
    display: inline-block;
}

.score-panel .restart {
    float: right;
    cursor: pointer;
}
.modal_background{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.438);


}
.modal_body{
    position: relative;
    width: 400px;
    top: 50%;
    left: 50%;
    background: #fff;
    transform: translate(-50%, -70%);
    border-radius: 5px;
    }

    .modal_heading{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 1.5rem;
        border-bottom: 1px solid gray;
    }
    .modal_close{
        font-size: 2rem;
        font-weight: bold;
    }

    .modal_status{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        padding: 1rem;
    }

    .modal_buttons{
        display: flex;
        justify-content: space-around;
        padding: 1rem;
    }
    .hide{
        display: none;
    }

    button{
        width: 70px;
        height: 30px;
    }

@media screen and (max-width: 385px) {
    body {
        width: 100%;
        height: 70%;
    }

    .container {
        width: 100%;
        margin: 0 auto;
    }

    .deck {
        width: 90%;
        height: 80%;
    }

    .deck .card {
        width: 15vw;
        height: 30vw;
    }

    
    .modal_body {
        width: 80%;
    }
}

@media screen and (min-width: 386px) and (max-width: 600px) {
    body {
        width: 100%;
        height: 100%;
    }

    .container {
        width: 100%;
        margin: 0 auto;
    }

    .deck {
        width: 90%;
    }

    .deck .card {
        width: 16vw;
        height: 20vw;
    }

    .modal_body {
        width: 80%;
    }
}


