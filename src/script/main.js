import "./app-bar.js";
import "./app-title.js";
import {data_set, data_collection} from "./data_set.js";
import DataSource from "./data-source.js";

const main = ()=>{

    const buttonProcess = document.getElementById("run");
    const buttonRubbish = document.getElementById("rubbish");
    const buttonEraser = document.getElementById("eraser");
    const buttonUpload = document.getElementById("upload");
    const buttonSave = document.getElementById("save");
    const buttonResult = document.getElementById("showFix");

    buttonProcess.addEventListener("click", () =>{
        const rawText = document.getElementById("rawText").value;
        const processingText = document.getElementById("processingText");

        if(rawText === ""){
            alert("Teks asli masih kosong!");
        }else{
            const filteringData = DataSource.matchData2(rawText);
            processingText.innerHTML = "";
            processingText.innerHTML = `${filteringData}`;
        }
        const mark = document.querySelectorAll("mark");
        for(let markItem of mark){
            markItem.addEventListener("click", ()=>{
                alert(`${markItem.innerText} : ${data_set[markItem.innerText]}`);
            })
        }
    })

    const renderWrongData = ()=>{
        const rawText = document.getElementById("rawText").value;
        const processingText = document.getElementById("processingText");
        if(rawText !== ""){
            const filteringData = DataSource.matchData2(rawText);
            processingText.innerHTML = "";
            processingText.innerHTML += `${filteringData}`;
        }else{
            processingText.innerHTML = "";
        }
        const mark = document.querySelectorAll("mark");
        for(let markItem of mark){
            markItem.addEventListener("click", ()=>{
                alert(`${markItem.innerText} : ${data_set[markItem.innerText]}`);
            })
        }
    }

    document.getElementById("rawText").addEventListener("input",renderWrongData);

    buttonResult.addEventListener("click", () =>{
        const rawText = document.getElementById("rawText").value;
        const processingText = document.getElementById("processingText");

        if(rawText === ""){
            alert("Teks asli masih kosong!");
        }else{
            const filteringData = DataSource.fixData(rawText);
            processingText.innerHTML = "";
            processingText.innerHTML = `${filteringData}`;
        }
        const mark = document.querySelectorAll("mark");
        for(let markItem of mark){
            markItem.addEventListener("click", ()=>{
                // alert(`${markItem.innerText} : ${data_set[markItem.innerText]}`);
            })
        }
    })

    buttonRubbish.addEventListener("click", ()=>{
        const processingText = document.getElementById("processingText");
        processingText.innerText = "";
    })


    buttonEraser.addEventListener("click", ()=>{
        const rawText = document.getElementById("rawText");
        rawText.value = "";
    })


    buttonUpload.addEventListener("change", ()=> {
        let loadFileFromLocal = new FileReader();
        loadFileFromLocal.readAsText(buttonUpload.files[0]);
        loadFileFromLocal.onload = ()=> {
            const rawText = document.getElementById("rawText");
            rawText.value = loadFileFromLocal.result;
        }
    })


    const saveFile = ()=> {
        const rawText = document.getElementById("rawText").value;
        const filteringData = DataSource.finalData(rawText);
        const file = new Blob([filteringData], {type: "txt"});
        const anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(file);
        let fileSaveName = prompt("Simpan file dengan nama:")
        if(fileSaveName !== null){
            if(fileSaveName === ""){
                let checkFileName = fileSaveName;
                while(checkFileName === ""){
                    alert("Nama file tidak boleh kosong!")
                    fileSaveName = prompt("Simpan file dengan nama:")
                    checkFileName = fileSaveName;
                }
                if(checkFileName != null){
                    anchor.download = fileSaveName;
                    anchor.click();
                }
            }else{
                anchor.download = fileSaveName;
                anchor.click();
            }
        }
    }


    buttonSave.addEventListener("click", saveFile);

    const showFixedText = document.getElementById("showFix");
    showFixedText.addEventListener("click", ()=> {
        const fixText = document.getElementById("fixText");
        const processingText = document.getElementById("processingText");

        if(fixText.style.visibility === "hidden"){
            const rawText = document.getElementById("rawText").value;
            processingText.style.visibility = "hidden";
            fixText.style.visibility = "visible";
            fixText.innerHTML = "";
            fixText.innerHTML += `${DataSource.fixData(rawText)}`;
        }else{
            processingText.style.visibility = "visible";
            fixText.style.visibility = "hidden";
        }
    })

}

export default main;