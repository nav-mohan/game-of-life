function Board(w, h) 
{
    this.width = w;
    this.height = h;
    this.boardDOM;
    this.cellArray = new Array();
    this.getWidth = getWidth;
    this.getHeight = getHeight;
    this.getCell = getCell;
    this.buildCellObject = buildCellObject;
    this.assignCellToArray = assignCellToArray;
    this.buildBoard = buildBoard;
    this.deletePetritable = deletePetritable;
    this.syncDrawingStatusToLife = syncDrawingStatusToLife;
    this.syncLifeStatusToDrawing = syncLifeStatusToDrawing;

    function getWidth() {return this.width;}

    function getHeight() {return this.height;}

    function getCell(width, height) {return this.cellArray[width + "_" + height];}

    function buildCellObject(cellHTMLElement, width, height) 
    {
        var newCell = new Cell(cellHTMLElement);
        newCell.setID(width, height);
        newCell.setAttribute("id", width + "_" + height);
        newCell.setAttribute("class", "cell deadcell");
        newCell.addEventListener("click", function myfunc() {
            if (this.getAttribute("class") == "cell deadcell")
                this.setAttribute("class", "cell alivecell");
            else
                this.setAttribute("class", "cell deadcell");
        });
        return newCell;
    }

    function assignCellToArray(cell, width, height) {
        this.cellArray[width + "_" + height] = cell;
    }

    function buildBoard() 
    {
        this.boardDOM = document.createElement("table");
        this.boardDOM.setAttribute("class", "petritable");
        this.boardDOM.setAttribute("id", "petritable");

        for (var i = 0; i < this.width; i++) 
        {
            var rowHTMLElement = this.boardDOM.insertRow(i);
            for (var j = 0; j < this.height; j++) 
            {
                var cellHTMLElement = rowHTMLElement.insertCell(j);
                var newCell = buildCellObject(cellHTMLElement, i, j);
                this.assignCellToArray(newCell, i, j);
            }
        }

        document.body.appendChild(this.boardDOM);
    }

    function deletePetritable() {
        document.getElementById("petritable").remove();
    }

    function syncDrawingStatusToLife() 
    {
        for (var i = 0; i < this.width; i++) 
        {
            for (var j = 0; j < this.height; j++) 
            {
                var currentCell = this.getCell(i, j);
                if (currentCell.isAlive()) 
                    currentCell.setAttribute("class", "cell alivecell");
                else 
                    currentCell.setAttribute("class", "cell deadcell");
            }
        }
    }

    function syncLifeStatusToDrawing() 
    {
        for (var i = 0; i < this.width; i++) 
        {
            for (var j = 0; j < this.height; j++) 
            {
                var currentCell = this.getCell(i, j);
                if (currentCell.getAttribute("class") == "cell alivecell")
                    currentCell.setAlive(true);
                else
                    currentCell.setAlive(false);
            }
        }
    }

    this.buildBoard();
}

