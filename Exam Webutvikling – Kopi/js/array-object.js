/*
**** Array with object literals ****
**** This data is kept in a separate document, which makes it easier to reuse the data in other js files ****
*/

let caseArray = [
    {
        title: "Bombe på t-banen",
        imageUrl: "bomb.jpg",
        imageUrl1: "bomb1.jpg",
        imageUrl2: "bomb2.jpg",
        describtion: "Politiet i Oslo fikk melding fra Oslo Sporveier klokken 17.20 om den mistenkelig esken som ble funnet om bord i en av t-banevognene som da var ankommet Sognsvann stasjon.",
        caseSolved: false,
        typeOfCase: "Terror",
        startDate: "01.10.2019",
        personResponsible: "Arthur Koen"
        
    },
    {
        title: "Terrortrussel på Holmlia",
        imageUrl: "holmlia.jpg",
        imageUrl1: "holmlia1.jpg",
        imageUrl2: "holmlia2.jpg",
        describtion: "Politiet i Oslo ble varslet om en mulig terror handling på Holmlia. Saken har blitt overtatt av PST. Trusselen skal være rettet mot en barneskole.",
        caseSolved: true,
        typeOfCase: "Terror",
        startDate: "05.2.2019",
        personResponsible: "Bård Bendiksen"
    },
    {
        title: "Rusisk spionasje",
        imageUrl: "spionasje.jpg",
        imageUrl1: "spionasje1.jpg",
        imageUrl2: "spionasje2.png",
        describtion: "PST fikk en kryptert melding som beskrev en mulig spionasje. Det påstås at det skal være en russisk spion som er ute etter identiteten til nordmenn",
        caseSolved: true,
        typeOfCase: "Spionasje",
        startDate: "31.09.2018",
        personResponsible: "Line Andersen"
    },
    {
        title: "Amulanse tyveriet",
        imageUrl: "ambulanse.jpg",
        imageUrl1: "ambulanse2.jpg",
        imageUrl2: "ambulanse1.jpg",
        describtion: "Det var en Torsdag ettermiddag hvor en mann i 30-årene og en kvinne i 20-årene stjal en ambulanse som var på utrykning. Når ambulansen skulle stoppes måtte polities i Oslo krasje inn i dem. Dette førte til flere skader på bygninger rundt.",
        caseSolved: false,
        typeOfCase: "Tyveri",
        startDate: "20.10.2019",
        personResponsible: "Mathias Leirvik"
    },
    {
        title: "Anne-Elisabeth Hagen",
        imageUrl: "anne-elisabeth-hagen.jpg",
        imageUrl1: "anne-elisabeth-hagen1.jpg",
        imageUrl2: "anne-elisabeth-hagen2.jpg",
        describtion: "Anne-Elisabeth Hagen forsvant fra sitt hjem 31.10.2018. Mannen hennes kom hjem og fant blod spor og ett brev som krevde penger for at han skulle få tilbake kona si. Ingen naboer skal ha hørt noe, og det er mangel på spor i saken",
        caseSolved: false,
        typeOfCase: "Kidnapping",
        startDate: "31.10.2018",
        personResponsible: "Martin Haukaas"
    },
    {
        title: "Spredning av sensitiv data",
        imageUrl: "spredning-data.jpg",
        imageUrl1: "spredning-data1.jpg",
        imageUrl2: "spredning-data2.jpg",
        describtion: "Politiet i Oslo har blitt vaslet om at Facebook skal ha spredt sensitiv data til Russland",
        caseSolved: true,
        typeOfCase: "GDPR",
        startDate: "20.05.2016",
        personResponsible: "Mina Riis Vik"
    },
    {
        title: "Brexit",
        imageUrl: "brexit.jpg",
        imageUrl1: "brexit1.jpg",
        imageUrl2: "brexit2.jpg",
        describtion: "Storbritania skal melde seg ut av EU. Oppgaven er å finne ut hvordan dette påvriker oss i Norge",
        caseSolved: true,
        typeOfCase: "Utenriks",
        startDate: "14.10.2015",
        personResponsible: "Georg Hoffmann"
    }
];


/*** The code commented out is used when in need for the original data ***/
/*
let JSONCaseArray = JSON.stringify(caseArray);
    localStorage.setItem("caseArray", JSONCaseArray);
*/

/*
**** If localstorage is not defined, then make new localStorage. Else recall data ****
*/

let JSONCaseArray = JSON.stringify(caseArray);
if(localStorage.getItem("caseArray") === null){
    localStorage.setItem("caseArray", JSONCaseArray);
} else {
    caseArray = JSON.parse(localStorage.getItem("caseArray"));
}
