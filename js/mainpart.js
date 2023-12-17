function saveToLocalStorage() {
        const userInput1 = document.getElementById("inputText1").value;
        const userInput2 = document.getElementById("inputText2").value;
        const userInput3 = document.getElementById("inputText3").value;
        const userInput4 = document.getElementById("inputText4").value;
        const userInput5 = document.getElementById("inputText5").value;
        const userInput6 = document.getElementById("inputText6").value;
        const userInput7 = document.getElementById("inputText7").value;
        const userInput8 = document.getElementById("inputText8").value;
        const userInput9 = document.getElementById("inputText9").value;
        const userInput10 = document.getElementById("inputText10").value;
        const userInput11 = document.getElementById("inputText11").value;
        const userInput12 = document.getElementById("inputText12").value;
        const userInput13 = document.getElementById("inputText13").value;
        const userInput14 = document.getElementById("inputText14").value;
        const userInput15 = document.getElementById("inputText15").value;
        const userInput16 = document.getElementById("inputText16").value;
        const userInput17 = document.getElementById("inputText17").value;
        const userInput18 = document.getElementById("inputText18").value;
        const userInput19 = document.getElementById("inputText19").value;
        const userInput20 = document.getElementById("inputText20").value;
        const userInput21 = document.getElementById("inputText21").value;
        const userInput22 = document.getElementById("inputText22").value;
        localStorage.setItem("userInput1", userInput1);
        localStorage.setItem("userInput2", userInput2);
        localStorage.setItem("userInput3", userInput3);
        localStorage.setItem("userInput4", userInput4);
        localStorage.setItem("userInput5", userInput5);
        localStorage.setItem("userInput6", userInput6);
        localStorage.setItem("userInput7", userInput7);
        localStorage.setItem("userInput8", userInput8);
        localStorage.setItem("userInput9", userInput9);
        localStorage.setItem("userInput10", userInput10);
        localStorage.setItem("userInput11", userInput11);
        localStorage.setItem("userInput12", userInput12);
        localStorage.setItem("userInput13", userInput13);
        localStorage.setItem("userInput14", userInput14);
        localStorage.setItem("userInput15", userInput15);
        localStorage.setItem("userInput16", userInput16);
        localStorage.setItem("userInput17", userInput17);
        localStorage.setItem("userInput18", userInput18);
        localStorage.setItem("userInput19", userInput19);
        localStorage.setItem("userInput20", userInput20);
        localStorage.setItem("userInput21", userInput21);
        localStorage.setItem("userInput22", userInput22);
        document.getElementById("inputText1").value = "";
        document.getElementById("inputText2").value = "";
        document.getElementById("inputText3").value = "";
        document.getElementById("inputText4").value = "";
        document.getElementById("inputText5").value = "";
        document.getElementById("inputText6").value = "";
        document.getElementById("inputText7").value = "";
        document.getElementById("inputText8").value = "";
        document.getElementById("inputText9").value = "";
        document.getElementById("inputText10").value = "";
        document.getElementById("inputText11").value = "";
        document.getElementById("inputText12").value = "";
        document.getElementById("inputText13").value = "";
        document.getElementById("inputText14").value = "";
        document.getElementById("inputText15").value = "";
        document.getElementById("inputText16").value = "";
        document.getElementById("inputText17").value = "";
        document.getElementById("inputText18").value = "";
        document.getElementById("inputText19").value = "";
        document.getElementById("inputText20").value = "";
        document.getElementById("inputText21").value = "";
        document.getElementById("inputText22").value = "";
        location.reload();
      }

      const savedInput1 = localStorage.getItem("userInput1");
      if (savedInput1) {
        document.getElementById("inputText1").value = savedInput1;
      }
      const savedInput2 = localStorage.getItem("userInput2");
      if (savedInput2) {
        document.getElementById("inputText2").value = savedInput2;
      }
      const savedInput3 = localStorage.getItem("userInput3");
      if (savedInput3) {
        document.getElementById("inputText3").value = savedInput3;
      }
      const savedInput4 = localStorage.getItem("userInput4");
      if (savedInput4) {
        document.getElementById("inputText4").value = savedInput4;
      }
      const savedInput5 = localStorage.getItem("userInput5");
      if (savedInput5) {
        document.getElementById("inputText5").value = savedInput5;
      }
      const savedInput6 = localStorage.getItem("userInput6");
      if (savedInput6) {
        document.getElementById("inputText6").value = savedInput6;
      }
      const savedInput7 = localStorage.getItem("userInput7");
      if (savedInput7) {
        document.getElementById("inputText7").value = savedInput7;
      }
      const savedInput8 = localStorage.getItem("userInput8");
      if (savedInput8) {
        document.getElementById("inputText8").value = savedInput8;
      }
      const savedInput9 = localStorage.getItem("userInput9");
      if (savedInput9) {
        document.getElementById("inputText9").value = savedInput9;
      }
      const savedInput10 = localStorage.getItem("userInput10");
      if (savedInput10) {
        document.getElementById("inputText10").value = savedInput10;
      }
      const savedInput11 = localStorage.getItem("userInput11");
      if (savedInput11) {
        document.getElementById("inputText11").value = savedInput11;
      }
      const savedInput12 = localStorage.getItem("userInput12");
      if (savedInput12) {
        document.getElementById("inputText12").value = savedInput12;
      }
      const savedInput13 = localStorage.getItem("userInput13");
      if (savedInput13) {
        document.getElementById("inputText13").value = savedInput13;
      }
      const savedInput14 = localStorage.getItem("userInput14");
      if (savedInput14) {
        document.getElementById("inputText14").value = savedInput14;
      }
      const savedInput15 = localStorage.getItem("userInput15");
      if (savedInput15) {
        document.getElementById("inputText15").value = savedInput15;
      }
      const savedInput16 = localStorage.getItem("userInput16");
      if (savedInput16) {
        document.getElementById("inputText16").value = savedInput16;
      }
      const savedInput17 = localStorage.getItem("userInput17");
      if (savedInput17) {
        document.getElementById("inputText17").value = savedInput17;
      }
      const savedInput18 = localStorage.getItem("userInput18");
      if (savedInput18) {
        document.getElementById("inputText18").value = savedInput18;
      }
      const savedInput19 = localStorage.getItem("userInput19");
      if (savedInput19) {
        document.getElementById("inputText19").value = savedInput19;
      }
      const savedInput20 = localStorage.getItem("userInput20");
      if (savedInput20) {
        document.getElementById("inputText20").value = savedInput20;
      }
      const savedInput21 = localStorage.getItem("userInput21");
      if (savedInput21) {
        document.getElementById("inputText21").value = savedInput21;
      }
      const savedInput22 = localStorage.getItem("userInput22");
      if (savedInput22) {
        document.getElementById("inputText22").value = savedInput22;
      }

      // Function to handle checkbox changes
      function handleCheckboxChange(checkboxId, inputId) {
        const checkbox = document.getElementById(checkboxId);
        const input = document.getElementById(inputId);

        if (checkbox.checked) {
          input.style.textDecoration = "line-through";
        } else {
          input.style.textDecoration = "none";
        }

        // Save checkbox state in local storage
        localStorage.setItem(checkboxId, checkbox.checked);
      }

      // Function to load checkbox states from local storage
      function loadCheckboxStates() {
        for (let i = 1; i <= 22; i++) {
          const checkboxId = "ck" + i;
          const checkbox = document.getElementById(checkboxId);

          if (checkbox) {
            const savedState = localStorage.getItem(checkboxId);

            if (savedState === "true") {
              checkbox.checked = true;

              // If the checkbox is checked, apply line-through text decoration
              const inputId = "inputText" + i;
              const input = document.getElementById(inputId);

              if (input) {
                input.style.textDecoration = "line-through";
              }
            }
          }
        }
      }
   
      // Function to reset checkboxes
      function resetCheckboxes() {
        for (let i = 1; i <= 22; i++) {
          const checkboxId = "ck" + i;
          const checkbox = document.getElementById(checkboxId);

          if (checkbox) {
            checkbox.checked = false;

            // Reset the text decoration of corresponding inputs
            const inputId = "inputText" + i;
            const input = document.getElementById(inputId);

            if (input) {
              input.style.textDecoration = "none";

              // Save checkbox state in local storage
              localStorage.setItem(checkboxId, checkbox.checked);
            }
          }
        }
      }