import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import * as worker from "pdfjs-dist/build/pdf.worker.entry";
pdfjsLib.GlobalWorkerOptions.workerSrc = worker;

const getRoster = async () => {
  const initializePdf = async () => {
    const pdf = await pdfjsLib.getDocument("Juli_25.pdf").promise;

    let allPages = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const pages = await pdf.getPage(i);
      const text = await pages.getTextContent().then((page) => page.items);

      text?.sort((a, b) => {
        if (a.transform[5] > b.transform[5]) {
          return -1;
        }
        if (
          a.transform[4] < b.transform[4] &&
          a.transform[5] === b.transform[5]
        ) {
          return -1;
        }
        return 1;
      });

      allPages = [...allPages, ...text];
    }

    return allPages;
  };
  const pages = await initializePdf();

  const sortPeople = () => {
    //save all ppl and relevant data
    let month;
    let year;
    const sortedPeople = [];
    let currentCluster;
    let newPerson = true;
    let secondLine = false;
    //clean arr from empty strings
    const cleanArr = pages?.filter(
      (item) => item.str !== "" && item.str !== " "
    );

    cleanArr?.map((item, index) => {
      if (item.str.includes("für den Monat")) {
        const getMonthAndYear = item.str.split("für den Monat")?.[1].split(" ");
        month = getMonthAndYear[1];
        year = getMonthAndYear[2];
        return;
      }
      if (item.str.match(/([\p{L}\p{N}_]+,?\s?[\p{L}\p{N}_]+,)/gu)) {
        //check if the current entry is a person
        sortedPeople.push({
          name: item.str,
          firstLine: [],
          secondLine: [],
          title: "",
          cluster: currentCluster,
        });
        newPerson = false;
        secondLine = false;
        return;
      }

      //check if the current entry is a title
      if (item.str.match(/.+ - .,/g)) {
        sortedPeople[sortedPeople.length - 1]["title"] = item.str;
        if (
          cleanArr[index + 1] !== "Auswertungszeitraum" ||
          isNaN(parseInt(item.str))
        ) {
          secondLine = true;
        }
        return;
      }

      if (item.str === "Auswertungszeitraum" || !isNaN(parseInt(item.str))) {
        newPerson = true;
        secondLine = false;
      }

      //check if the current entry is part of the roster
      if (!newPerson) {
        if (secondLine) {
          sortedPeople[sortedPeople.length - 1]["secondLine"].push(item);
          return;
        }
        sortedPeople[sortedPeople.length - 1]["firstLine"].push(item);
        return;
      }

      //find position of the current cluster name and save it
      if (
        !isNaN(parseInt(cleanArr[index - 1]?.str)) &&
        cleanArr[index + 1]?.str.match(/Mo|Di|Mi|Do|Fr|Sa|So/g) &&
        isNaN(parseInt(item.str)) &&
        !item.str.match(/Mo|Di|Mi|Do|Fr|Sa|So/g)
      ) {
<<<<<<< Updated upstream
        currentCluster = item.str;
=======
        clusters.push(item.str);
>>>>>>> Stashed changes
        return;
      }
      return;
    });
<<<<<<< Updated upstream
    return sortedPeople;
=======
    return { cluster: clusters, employee: sortedPeople, month, year };
>>>>>>> Stashed changes
  };
  const result = sortPeople();
  return result;
};

export default getRoster;
