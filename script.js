document.addEventListener("DOMContentLoaded", () => {
    let count=0;
    const counterValueEl=document.getElementById("counter-value");
    const btnIncrease=document.getElementById("btn-increase");
    const btnDecrease=document.getElementById("btn-decrease");
    const btnReset=document.getElementById("btn-reset");
    function updateCounterDisplay(){
        counterValueEl.textContent=count;
    }
    btnIncrease.addEventListener("click", () => {
        count++;
        updateCounterDisplay();
    });
    btnDecrease.addEventListener("click", () => {
        if (count>0) {
            count--;
            updateCounterDisplay();
        }
    });
    btnReset.addEventListener("click", () => {
        count=0;
        updateCounterDisplay();
    });


    const textInput=document.getElementById("text-input");
    const textPreview=document.getElementById("text-preview");
    const charCount=document.getElementById("char-count");
    const btnClearText=document.getElementById("btn-clear-text");
    const defaultPlaceholder="Your text will appear here";
    textInput.addEventListener("input", (e) => {
        const val=e.target.value;
        charCount.textContent=val.length;
        if (val.trim()==="") {
            textPreview.textContent = defaultPlaceholder;
        } else {
            textPreview.textContent = val;
        }
    });
    btnClearText.addEventListener("click", () => {
        textInput.value="";
        textPreview.textContent=defaultPlaceholder;
        charCount.textContent="0";
        textInput.focus();
    });


    const imageSelect=document.getElementById("image-select");
    const displayImage=document.getElementById("display-image");
    const imageCaption=document.getElementById("image-caption");
    const imageData={
        img1: {
            src: "lilyy.jpg",
            alt: "Flower lily :)",
            caption: "Lily is a large, trumpet-shaped flower that symbolizes purity"
        },
        img2: {
            src: "images.jpg",
            alt: "Flower rose ;>",
            caption: "Rose is a thorny flower that symbolizes love"
        },
        img3: {
            src: "momoko.jpg",
            alt: "Flower momoko :^",
            caption: "Momoko is a premium flower variety from Japan that looks like fluffy pom-pom"
        }
    };
    function updateImage(key) {
        const selected=imageData[key];
        if (selected){
            displayImage.src=selected.src;
            displayImage.alt=selected.alt;
            imageCaption.textContent=selected.caption;
        }
    }
    updateImage(imageSelect.value);

    imageSelect.addEventListener("change", (e) => {
        updateImage(e.target.value);
    });

  
    const keyInput=document.getElementById("key-input");
    const keyStatus=document.getElementById("key-status");
    const resultText=document.getElementById("result-text");
    const keyboardForm=document.getElementById("keyboard-form");
    keyboardForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    keyInput.addEventListener("keydown", (e) => {
        keyStatus.textContent = e.key;

        if (e.key === "Enter") {
            e.preventDefault();
            resultText.textContent = keyInput.value;
        } else if (e.key === "Escape") {
            keyInput.value = "";
            resultText.textContent = "None";
            keyStatus.textContent = "None";
        }
    });


    const interactiveCard=document.getElementById("interactive-card");
    const instructionText=document.getElementById("instruction-text");
    const defaultInstruction="Hover over the card or focus on it using the Tab key";
    const activeInstruction="Card is currently active!";
    interactiveCard.addEventListener("mouseenter", () => {
        interactiveCard.classList.add("highlight");
        instructionText.textContent = activeInstruction;
    });
    interactiveCard.addEventListener("mouseleave", () => {
        interactiveCard.classList.remove("highlight");
        instructionText.textContent=defaultInstruction;
    });
    interactiveCard.addEventListener("focus", () => {
        interactiveCard.classList.add("highlight");
        instructionText.textContent=activeInstruction+" (via keyboard focus)";
    });

    interactiveCard.addEventListener("blur", () => {
        interactiveCard.classList.remove("highlight");
        instructionText.textContent=defaultInstruction;
    });
});