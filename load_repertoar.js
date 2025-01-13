
//import repertoar from './repertoar.json' assert { type: "json"};

fetch("./repertoar.json")
    .then((res) => res.json())
    .then((repertoar) => {
        // do stuff with the data


        var stranaMuzika = document.getElementById("stranaMuzika");
        var domacaZabavna = document.getElementById("domacaZabavna");
        var starogradskePesme = document.getElementById("starogradskePesme");
        var novokomponovanaMuzika = document.getElementById("novokomponovanaMuzika");
        var narodnaMuzika = document.getElementById("narodnaMuzika");
        var kosovskePesme = document.getElementById("kosovskePesme");

        var countSongs = 0;
        var tempCount = 0;
        //Counts number of songs in STRANA MUZIKA
        for (let i in repertoar.STRANA_MUZIKA) {
            countSongs++;
        }

        for (let i in repertoar.STRANA_MUZIKA) {

            let song = i;
            let author = repertoar.STRANA_MUZIKA[i];
            //This condition puts it in first column on md resolutions
            if (tempCount < countSongs / 2) {
                if (author != "")
                    stranaMuzika.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    stranaMuzika.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                stranaMuzika.children[0].innerHTML += "<div class='dropdown-divider'></div>"
            }
            //This condition puts it in the second column on md resolutions
            else {
                if (author != "")
                    stranaMuzika.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    stranaMuzika.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                stranaMuzika.children[1].innerHTML += "<div class='dropdown-divider'></div>"
            }
            tempCount++;
        }
        //This adds button "GORE" for scrolling all the way up after songs
        stranaMuzika.innerHTML += "<li class='dropdown-item linkUp'><a href='#strana' class='linkUp'>GORE</a></li>";
        //Resets temp variables to count songs and an incrementor in foreach
        tempCount = 0;
        countSongs = 0;
        for (let i in repertoar.DOMACA_ZABAVNA) {
            countSongs++;
        }
        for (let i in repertoar.DOMACA_ZABAVNA) {

            let song = i;
            let author = repertoar.DOMACA_ZABAVNA[i];

            if (tempCount < countSongs / 2) {
                if (author != "")
                    domacaZabavna.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    domacaZabavna.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                domacaZabavna.children[0].innerHTML += "<div class='dropdown-divider'></div>"
            }
            else {
                if (author != "")
                    domacaZabavna.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    domacaZabavna.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                domacaZabavna.children[1].innerHTML += "<div class='dropdown-divider'></div>"
            }
            tempCount++;
        }
        domacaZabavna.innerHTML += "<li class='dropdown-item' href='#'>...</li>";
        domacaZabavna.innerHTML += "<li class='dropdown-item linkUp'><a href='#domaca' class='linkUp'>GORE</a></li>";

        tempCount = 0;
        countSongs = 0;
        for (let i in repertoar.STAROGRADSKE_PESME) {
            countSongs++;
        }
        for (let i in repertoar.STAROGRADSKE_PESME) {

            let song = i;
            let author = repertoar.STAROGRADSKE_PESME[i];
            if (tempCount < countSongs / 2) {
                if (author != "")
                    starogradskePesme.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    starogradskePesme.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                starogradskePesme.children[0].innerHTML += "<div class='dropdown-divider'></div>"
            }
            else {
                if (author != "")
                    starogradskePesme.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    starogradskePesme.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                starogradskePesme.children[1].innerHTML += "<div class='dropdown-divider'></div>"
            }
            tempCount++;
        }
        starogradskePesme.innerHTML += "<li class='dropdown-item' href='#'>...</li>";
        starogradskePesme.innerHTML += "<li class='dropdown-item linkUp'><a href='#starogradske' class='linkUp'>GORE</a></li>";

        tempCount = 0;
        countSongs = 0;
        for (let i in repertoar.NOVOKOMPONOVANA_MUZIKA) {
            countSongs++;
        }
        for (let i in repertoar.NOVOKOMPONOVANA_MUZIKA) {

            let song = i;
            let author = repertoar.NOVOKOMPONOVANA_MUZIKA[i];
            if (tempCount < countSongs / 2) {
                if (author != "")
                    novokomponovanaMuzika.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    novokomponovanaMuzika.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                novokomponovanaMuzika.children[0].innerHTML += "<div class='dropdown-divider'></div>"
            }
            else {
                if (author != "")
                    novokomponovanaMuzika.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    novokomponovanaMuzika.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                novokomponovanaMuzika.children[1].innerHTML += "<div class='dropdown-divider'></div>"
            }
            tempCount++;
        }
        novokomponovanaMuzika.innerHTML += "<li class='dropdown-item' href='#'>...</li>";
        novokomponovanaMuzika.innerHTML += "<li class='dropdown-item linkUp'><a href='#novokomponovana' class='linkUp'>GORE</a></li>";

        tempCount = 0;
        countSongs = 0;
        for (let i in repertoar.NARODNA_MUZIKA) {
            countSongs++;
        }
        for (let i in repertoar.NARODNA_MUZIKA) {

            let song = i;
            let author = repertoar.NARODNA_MUZIKA[i];
            if (tempCount < countSongs / 2) {
                if (author != "")
                    narodnaMuzika.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    narodnaMuzika.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                narodnaMuzika.children[0].innerHTML += "<div class='dropdown-divider'></div>"
            }
            else {
                if (author != "")
                    narodnaMuzika.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    narodnaMuzika.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                narodnaMuzika.children[1].innerHTML += "<div class='dropdown-divider'></div>"
            }
            tempCount++;
        }
        narodnaMuzika.innerHTML += "<li class='dropdown-item' href='#'>...</li>";
        narodnaMuzika.innerHTML += "<li class='dropdown-item linkUp'><a href='#narodna' class='linkUp'>GORE</a></li>";

        tempCount = 0;
        countSongs = 0;
        for (let i in repertoar.KOSOVSKE_PESME) {
            countSongs++;
        }
        for (let i in repertoar.KOSOVSKE_PESME) {

            let song = i;
            let author = repertoar.KOSOVSKE_PESME[i];
            if (tempCount < countSongs / 2) {
                if (author != "")
                    kosovskePesme.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    kosovskePesme.children[0].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                kosovskePesme.children[0].innerHTML += "<div class='dropdown-divider'></div>"
            }
            else {
                if (author != "")
                    kosovskePesme.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + " - " + author + "</li>";
                else
                    kosovskePesme.children[1].innerHTML += "<li class='dropdown-item' href='#'>" + song + "</li>";
                kosovskePesme.children[1].innerHTML += "<div class='dropdown-divider'></div>"
            }
            tempCount++;
        }
        kosovskePesme.innerHTML += "<li class='dropdown-item' href='#'>...</li>";
        kosovskePesme.innerHTML += "<li class='dropdown-item linkUp'><a href='#kosovske' class='linkUp'>GORE</a></li>";

    });
