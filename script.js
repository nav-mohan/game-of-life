const boardWidth    = 50;
const boardHeight   = 50;
var intervalId      = null;
let generator       = new Game(boardWidth,boardHeight);

function OnClickStart()
{
    generator.board.syncLifeStatusToDrawing();
    intervalId = setInterval(function () { generator.lifeAndDeath(); }, 50);
    this.setAttribute("disabled", true);
}

function OnResetClick()
{
    generator.board.deletePetritable();
    clearInterval(intervalId);
    document.getElementById("startBtn").removeAttribute("disabled");
    generator = new Game(boardWidth, boardHeight);
}

document.getElementById("startBtn").addEventListener("click", OnClickStart, false);
document.getElementById("resetBtn").addEventListener("click", OnResetClick, false);