class Chess {
    static AH = "abcdefgh";

    static KING = "k";
    static QUEEN = "q";
    static ROOK = "r";
    static BISHOP = "b";
    static KNIGHT = "n";
    static PAWN = "p";

    static WHITE = 0;
    static BLACK = 1;

    constructor() {
        this.pieces = [];

        let piece = {
            "color": "white",
            "type": Chess.ROOK,
        };
        let col = piece.color;
        let coll = piece["color"];

        let board = document.getElementById("board");
        for (let i = 0; i < 8; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < 8; j++) {
                let cell = document.createElement("div");
                cell.classList.add("cell");
                let id = Chess.AH[j] + (8 - i);
                cell.id = id;
                cell.setAttribute("onclick", "chess.select(this.id)");
                row.appendChild(cell);
            }
            board.appendChild(row);
        }
    }

    select(id) {
        console.log(id);
    }

    piece_at(id) {
        //
    }
}

"ekbqbnkrpppppppp................................PPPPPPPPRNBQKBNR"