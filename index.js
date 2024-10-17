'use strict'
console.log("HELLO TASOS !!!");
//
//
///////////////////////////////////////////
// READ LOCAL FILE 
///////////////////////////////////////////
async function read_file(params) {
    console.log('Try to FETCH The data from FILE...');
    let file = "users.txt" ;
    fetch(file)
    .then((res) => res.text())
    .then((text) => {
      console.log('OPEN file successfully !!!');
      // do something with "text"
      // SHOW CONTENTS ON THE Console.    
      console.log(text);
      // return file;
      return text;    
     })
    .catch((e) => console.error(e));
}
//
//
///////////////////////////////////////////////////////
//
///////////////////////////////////////////////////////
//
async function saveFile() {
    try {
        // create a new handle
        const newHandle = await window.showSaveFilePicker();

        // create a FileSystemWritableFileStream to write to
        const writableStream = await newHandle.createWritable();

        // write our file
        await writableStream.write("This is my file content");

        // close the file and write the contents to disk.
        await writableStream.close();
    } catch (err) {
        console.error(err.name, err.message);
    }
}
// 
//
////////////////////////////////////////////////
//
async function getFile() {
    
    // let path =_hostingEnvirounment.WebRootPath ;   // FAIL 
    let path = window.location.pathname ;    
    console.log("CURRENT SYSTEM PATH = " + path );
    
    // Open file picker and destructure the result the first handle
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    console.log('Open file PHASE_1');

    const contents = await file.text();
    // textArea.value = contents;
  
    // return file;
    return contents;
}
//
//
/////////////////////////////////////////////////////////
//
window.addEventListener("DOMContentLoaded", (event) => {
    //    
    Initialize_DOM_EVENTs();
    //
});
//
//

function  Initialize_DOM_EVENTs() {
    //
    //-- EVENT to READ File contents USING File Selector  WORKS OK on github --//
    // IN THAT WAY I am using a function to do the JOB.
    let  btnFileRead = document.getElementById('btnOpenRead');
    if (btnFileRead) {
        console.log('SETUP READ Button Event OK.');
        btnFileRead.addEventListener('click', function() {
            console.log('trying to Open a file');          
            
            getFile().then((fileText) => {
                console.log('ANTE GIA !!! FILE TEXT IS --> ' + fileText);   
                const result = document.getElementById("lblReadResult");
                result.innerText = fileText ;
            });            
            console.log('Open file PHASE_2');
        });
    } else {
        console.log('DOM not loaded yet. As result the READ Button Event did not WORK.');
    }
    //
    //
    // 2nd WAY to READ FILE From local or root path
    // WORKS - OK     BUT take care OF THE BELOW 
    // SOS - SOS - SOS 
    // The code FLOW goes back and forth. OBSERVE the SEQUENCE OF the printed console.log info.
    let  btnFileRead2 = document.getElementById('btnRead2');
    if (btnFileRead2) {
        console.log('SETUP READ-2 Button Event OK.');
        btnFileRead2.addEventListener('click', function() {
            console.log('trying to Open a file');          
            
            read_file().then((fileText) => {
                console.log('ANTE GIA !!! FILE TEXT IS --> ' + fileText);   
                const result = document.getElementById("lblResultRead2");
                result.innerText = fileText ;
            });            
            console.log('Open file PHASE_2');
        });
    } else {
        console.log('DOM not loaded yet. As result the READ Button Event did not WORK.');
    }

    //
    //-- EVENT to READ File contents USING File Selector  WORKs BUT see below SOS --//
    const fileSelector = document.getElementById('file-selector');
    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;        
        if ( fileList.length > 0 ) {
            console.log('At least 1 File Selected. ->' + fileList[0].name );
            console.log(fileList);
            // SOS
            // SOS Running on github returns a PROMISE Object and not the file-text-contents.
            // SOS 
            console.log('FILE Contents --> ' + fileList[0].text());
        } else {
            console.log('No one File Selected......');
        }            
    });
    //
    //-- SAVE FILE EVENT --//
    let  btnFileWrite = document.getElementById('btnWriteFile');
    if (btnFileWrite) {
        console.log('SETUP WRITE Button Event OK.');
        btnFileWrite.addEventListener('click', function() {
            console.log('trying to Write the file');          

            saveFile().then((fileText) => {
                console.log('ANTE GIA !!! FILE TEXT IS --> ' + fileText);                              
            });

        });
    } else {
        console.log('DOM not loaded yet. As result the WRITE Button Event did not WORK.');
    }


}
//
//
function processFileData(data) {
    console.log('Now Processing File Contents....');
}






    // readTextFile('foo.txt');     FAIL 

    // saveFile();    FAIL 
    
    // getFile();



/*     FAIL
async function getNewFileHandle() {
    const opts = {
      types: [
        {
          description: "Text file",
          accept: { "text/plain": [".txt"] },
        },
      ],
    };
    return await window.showSaveFilePicker(opts);
}
*/



/*
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4)  {
        if(rawFile.status === 200 || rawFile.status == 0) {
            var allText = rawFile.responseText;
            console.log(allText);
            }
        }
    }
    rawFile.send(null);
}
*/



        // fs.readFile(file.name)

        // .then(data => processFileData(data))

        // get file contents
        // const fileData = await fileHandle.getFile();


/*     fetch(file.name)
       .then((res) => res.text())
       .then((text) => {
         // do something with "text"
         console.log('FILE CONTENTS: ' + text );
        })
       .catch((e) => console.error(e));   */




/*
var client = new XMLHttpRequest();
client.open('GET', '/foo.txt');
client.onreadystatechange = function() {
alert(client.responseText);
}
client.send();
*/



/*
let btnClearBox = document.getElementById('btnOpenRead');
if (btnClearBox) {
    btnClearBox.addEventListener('click', function () {
        console.log("Execute click");
        txxBox.value = "";
    
    });    
}
*/

            /*
            const p1 = new Promise((resolve, reject) => {
                resolve("Success!");
                // or
                // reject(new Error("Error!"));
            });
            */
            
/*          const fetchPromise = fetch(
                "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
              );
              
            console.log(fetchPromise);

            fetchPromise.then((response) => {
            console.log(`Received response: ${response.status}`);
            });
            
            console.log("Started request…");
*/            



            /*
            getFile.then((value) => {
                console.log('ANTE GIA !!!  -> ' + value);
                // Expected output: "Success!"
            });
            */
