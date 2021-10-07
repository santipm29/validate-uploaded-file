
const MAXIMUM_SIZE = 1; //MB
const VALID_FORMATS = ["docx", "xlsx", "png"]

const form = document.getElementById("form-file");

const validateFile = (e) => {
    e.preventDefault();
    const file = document.getElementById("file").files[0];
    const fileName = file.name.split(".");
    
    if (!VALID_FORMATS.includes(fileName[fileName.length - 1])) {
        alert(`The format is not allowed. \n Allowed formats: ${VALID_FORMATS.join(" ")}`);
        return;
    }

    const fileSizeMB = file.size / Math.pow(1024, 2);

    if (fileSizeMB > MAXIMUM_SIZE) {
        alert(`Maximum size ${MAXIMUM_SIZE} MB`);
        return;
    }

    alert("Correct file");

}

form.addEventListener("submit", validateFile);