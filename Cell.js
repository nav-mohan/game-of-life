function Cell(c) 
{
    this.element = c;
    this.row;
    this.column;
    this.alive = false;
    this.generation = 0;
    this.setID = setID;
    this.setAttribute = setAttribute;
    this.getAttribute = getAttribute;
    this.addEventListener = addEventListener;
    this.setAlive = setAlive;
    this.isAlive = isAlive;
    this.getNumberOfNeighbours = getNumberOfNeighbours;
    this.getNeighborCoords = getNeighborCoords;
    this.isNeighbourAlive = isNeighbourAlive;

    function setAttribute(attribute, value) {
        this.element.setAttribute(attribute, value);
    }

    function getAttribute(attribute) {return this.element.getAttribute(attribute);}

    function addEventListener(action, func) {
        this.element.addEventListener(action, func);
    }

    function setID(row, col) {
        this.row = row;
        this.column = col;
    }

    function setAlive(isAlive) {
        this.alive = isAlive;
    }

    function isAlive() {
        return this.alive;
    }

    function getNumberOfNeighbours(table) 
    {
        var num = 0;
        var neighborCoords = this.getNeighborCoords();
        for (var i = 0; i < neighborCoords.length; i += 2) 
        {
            if (this.isNeighbourAlive(i, neighborCoords, table))
                num++;
        }
        return num;
    }

    function getNeighborCoords() 
    {
        var neighborCoords  = new Array();
        neighborCoords[0]   = this.row - 1;     // top row
        neighborCoords[1]   = this.column;      // top col
        neighborCoords[2]   = this.row + 1;     // bottom row
        neighborCoords[3]   = this.column;      // bottom col
        neighborCoords[4]   = this.row;         // left row
        neighborCoords[5]   = this.column - 1;  // left col
        neighborCoords[6]   = this.row;         // right row
        neighborCoords[7]   = this.column + 1;  // right col
        neighborCoords[8]   = this.row - 1;     // top left row
        neighborCoords[9]   = this.column - 1;  // top left col
        neighborCoords[10]  = this.row - 1;     // top right row
        neighborCoords[11]  = this.column + 1;  // top right col
        neighborCoords[12]  = this.row + 1;     // bottom left row
        neighborCoords[13]  = this.column - 1;  // bottom left col
        neighborCoords[14]  = this.row + 1;     // bottom right row
        neighborCoords[15]  = this.column + 1;  // bottom right col
        return neighborCoords;
    }

    function isNeighbourAlive(index, coords, table) 
    {
        var dir_r = coords[index];
        var dir_c = coords[index + 1];

        if (dir_r < 0 || dir_c < 0 ||
            dir_r > table.getWidth() - 1 ||
            dir_c > table.getHeight() - 1) {
            return false;
        }

        if (table.getCell(dir_r, dir_c).getAttribute("class") == "cell alivecell") {
            return true;
        }

        return false;
    }
}

