
export class Quiz {
    constructor(resultsArr, amount) {
        this.currentElement = document.getElementById("current");
        this.totalAmountElemnt = document.getElementById("totalAmount");
        this.questionElement = document.getElementById("question");
        this.rowAnswerElement = document.getElementById("rowAnswer");
        this.resultsArr = resultsArr;
        this.amount = amount;
        this.index = 0;
        this.score=0;
        this.showQuiz()
        this.nextElement = document.getElementById("next");
        this.nextElement.addEventListener("click", () => { this.next() })

    }

    showQuiz() {
        this.currentElement.innerHTML = this.index + 1;
        this.totalAmountElemnt.innerHTML = this.amount;
        this.questionElement.innerHTML = this.resultsArr[this.index].question;
        let ansArray = [this.resultsArr[this.index].correct_answer, ...this.resultsArr[this.index].incorrect_answers]
        let newAns = this.ranAns(ansArray)
        console.log(ansArray);
        this.displayAns(newAns)
    }

    displayAns(ans) {
        var cartoonae = ``;
        for (var i = 0; i < ans.length; i++) {
            cartoonae += `<input type="radio" class="form-check-input" name="answer" id="q${i}" value="${ans[i]}">
          ${ans[i]} <br/>`
        }
        this.rowAnswerElement.innerHTML = cartoonae
    }

    ranAns(ansArray) {

        let ranNums = [],
            i = ansArray.length,
            j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            ranNums.push(ansArray[j]);
            ansArray.splice(j, 1);

        }
        return ranNums
    }


    nextQusetion() {
        this.index++;
        (this.index < this.amount) ? this.showQuiz() : this.finish()
    }

    checkAns() {
        var choices = Array.from(document.getElementsByName("answer"));
        choices = choices.filter((e) => { return e.checked });

        if (choices.length == 0) {
            $(".alert").fadeIn(500)
        }

        else {
            $(".alert").hide()
            if (choices[0].value == this.resultsArr[this.index].correct_answer) {
                $("#Correct").fadeIn(700, () => {
                    $("#Correct").hide()
                });
                this.score++;
            }
            else {
                $("#inCorrect").fadeIn(700, () => {
                    $("#inCorrect").hide()
                });
            }
            this.nextQusetion()
        }
    }

    next() {
        this.checkAns()

    }

    finish() {
        $("quiz").fadeOut(500,()=>{
            $("#finish").fadeIn(500,()=>{
              $("#score").text(this.score)
            })
        })
    }

}



