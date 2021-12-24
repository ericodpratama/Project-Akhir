import {data_collection, data_set} from "./data_set.js";

class DataSource{

    static matchData(sentence){
        sentence = sentence.toLowerCase();

        for (const data of data_collection){
            if(sentence.includes(data.toLowerCase())){
                sentence = sentence.replaceAll(data,`<mark class="red-mark">${data}</mark>`);
            }
        }
        return sentence;
    }

    static matchData2(sentence){
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789]/g;
        let stringToArray = sentence.toLowerCase().split(" ");
        let stringToArray2 = sentence.split(" ");

        for (let i=0 ; i<stringToArray.length; i++){
            for (const data of data_collection){
                if(stringToArray[i].includes(data.toLowerCase())){
                    stringToArray2[i] = stringToArray2[i].replace(
                        stringToArray2[i].replace(regex, '').replace(/\s+/g, ' '),
                        `<mark class="red-mark">${stringToArray2[i].replace(regex, '').replace(/\s+/g, ' ')}</mark>`
                    );
                }
            }
        }
        return stringToArray2.join(" ");
    }

    static fixData(sentence){
        sentence = sentence.toLowerCase();
        for (let data of data_collection){
            if(sentence.includes(data.toLowerCase())){
                sentence = sentence.replaceAll(data,`<mark class="green-mark">${data_set[data]}</mark>`);
            }
        }
        return sentence;
    }

    static finalData(sentence){
        sentence = sentence.toLowerCase();
        for (let data of data_collection){
            if(sentence.includes(data.toLowerCase())){
                sentence = sentence.replaceAll(data,`${data_set[data]}`);
            }
        }
        return sentence;
    }

    static removePunctuation(sentence){
        const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789]/g;
        return sentence.replace(regex, '').replace(/\s+/g, ' ').trim();
    }
}

export default DataSource;