
function Game(w, h) {
    this.width = w;
    this.height = h;
    this.board = new Board(w, h);
    this.lifeAndDeath = lifeAndDeath;

    function lifeAndDeath() 
    {
        this.board.syncDrawingStatusToLife();

        for (var i = 0; i < this.width; i++) 
        {
            for (var j = 0; j < this.height; j++) 
            {
                var currentCell = this.board.getCell(i, j);
                var aliveNeighs = currentCell.getNumberOfNeighbours(this.board);
                
                if (currentCell.isAlive()) 
                {
                    if (aliveNeighs < 2) 
                    {
                        currentCell.setAlive(false);
                    } 
                    else if (aliveNeighs == 2 || aliveNeighs == 3) 
                    {
                        currentCell.generation++;
                    } 
                    else 
                    {
                        currentCell.setAlive(false);
                    }
                } 
                else 
                {
                    if (aliveNeighs == 3) 
                    {
                        currentCell.setAlive(true);
                    }
                }
            }
        }
    }
}

