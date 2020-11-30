class GridItem {
	constructor(shade) {
		this.colour = shade
	}
}
class Grid {
	letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
	colour = [["White", "Black"], ["Black", "White"]]
	board = []
	col
	constructor(row, col) {
		this.col = col
		this.row = row

		for (let i = 0; i < this.row; i++) {
			let tmp = []
			for(let j = 0; j < this.col; j++){
				tmp.push(new GridItem(this.colour[j % 2][i % 2]))
			}
			this.board.push(tmp)
		}
	}

	GetColour(row, col) {
		return this.board[row][col].colour
	}

	Display() {
		console.table(this.board)
	}
}

let grid = new Grid(8, 8)
let r = 1, c = 2
grid.Display();
console.log(`The colour of square ROW${r}:COL${c} is ${grid.GetColour(r, c)}`)