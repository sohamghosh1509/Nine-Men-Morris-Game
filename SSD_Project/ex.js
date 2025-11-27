  /*
    =============  COLOUR VARIABLE  =============
  */

    var DEFAULT_COLOUR = 0;
    var cell_OUTLINE_WEIGHT = 5;
    var cell_DEFAULT_COLOUR = 222;
    var CELL_INSIDE_COLOUR = 255;       // white colour
  
    var Player_1_COLOUR = '#11ff00';
    var Player_2_COLOUR = '#fb00ff';

    var flip1='#DFFF00';
    var flip2='#CCCCFF';
  
    /*
      =============  PIECE VARIABLE   ===============
    */
    var TOTAL_PIECE = 5;
    var morrish_man = 9;   //used till now  // uni
  
    var player_one_available = 9;
    var player_two_available = 9;
    var player_one_out = 0;
    var player_two_out = 0;
  
  
    var turn_player = 0;   // 0 for player 1 and 1 for player 2
  
    // ---------------------------------------
  
  
    var CELL_RADIUS = 40;
    var GAME_BOARD;
  
  
    player_one_avail_piece();
    player_one_out_piece();
    player_two_avail_piece();
    player_two_out_piece();
  
    function create_board(){
  
      var cell_1 = new cell ( 0 , 100 ,100);
      var cell_2 = new cell ( 1 , 550 ,100);
      var cell_3 = new cell ( 2 , 1000 ,100);
      var cell_4 = new cell ( 3 , 250 ,250);
      var cell_5 = new cell ( 4 , 550 ,250);
      var cell_6 = new cell ( 5 , 850 ,250);
      var cell_7 = new cell ( 6 , 400 , 400);
      var cell_8 = new cell ( 7 , 550, 400);
      var cell_9 = new cell ( 8 , 700 , 400);
      var cell_10 = new cell ( 9 , 100, 550);
      var cell_11 = new cell (10, 250, 550);
      var cell_12 = new cell (11 , 400, 550);
      var cell_13 = new cell (12, 700 , 550);
      var cell_14 = new cell (13 , 850,550);
      var cell_15 = new cell (14 , 1000 , 550);
      var cell_16 = new cell (15 , 400 , 700);
      var cell_17 = new cell (16 , 550 , 700);
      var cell_18 = new cell (17, 700 , 700);
      var cell_19 = new cell (18 , 250, 850);
      var cell_20 = new cell (19 , 550 , 850 );
      var cell_21 = new cell (20 , 850 , 850);
      var cell_22 = new cell (21 , 100 , 1000);
      var cell_23 = new cell ( 22, 550 , 1000 );
      var cell_24 = new cell ( 23 , 1000 ,1000 );
  
  
      cell_1.add_neighbours(cell_2);
      cell_1.add_neighbours(cell_10);
      cell_1.add_horizontal_cell(cell_2);
      cell_1.add_horizontal_cell(cell_3);
      cell_1.add_vertical_cell(cell_10);
      cell_1.add_vertical_cell(cell_22);
      
  
      cell_2.add_neighbours(cell_1);
      cell_2.add_neighbours(cell_3);
      cell_2.add_neighbours(cell_5);
      cell_2.add_horizontal_cell(cell_1);
      cell_2.add_horizontal_cell(cell_3);
      cell_2.add_vertical_cell(cell_5);
      cell_2.add_vertical_cell(cell_8);
      
  
      cell_3.add_neighbours(cell_2);
      cell_3.add_neighbours(cell_15);
      cell_3.add_horizontal_cell(cell_1);
      cell_3.add_horizontal_cell(cell_2);
      cell_3.add_vertical_cell(cell_15);
      cell_3.add_vertical_cell(cell_24);
  
  
      cell_4.add_neighbours(cell_5);
      cell_4.add_neighbours(cell_11);
      cell_4.add_horizontal_cell(cell_5);
      cell_4.add_horizontal_cell(cell_6);
      cell_4.add_vertical_cell(cell_11);
      cell_4.add_vertical_cell(cell_19);
  
      cell_5.add_neighbours(cell_4);
      cell_5.add_neighbours(cell_6);
      cell_5.add_neighbours(cell_8);
      cell_5.add_neighbours(cell_2);
      cell_5.add_horizontal_cell(cell_4);
      cell_5.add_horizontal_cell(cell_6);
      cell_5.add_vertical_cell(cell_2);
      cell_5.add_vertical_cell(cell_8);
  
      cell_6.add_neighbours(cell_5);
      cell_6.add_neighbours(cell_14);
      cell_6.add_horizontal_cell(cell_4);
      cell_6.add_horizontal_cell(cell_5);
      cell_6.add_vertical_cell(cell_14);
      cell_6.add_vertical_cell(cell_21);
  
      cell_7.add_neighbours(cell_8);
      cell_7.add_neighbours(cell_12);
      cell_7.add_horizontal_cell(cell_8);
      cell_7.add_horizontal_cell(cell_9);
      cell_7.add_vertical_cell(cell_12);
      cell_7.add_vertical_cell(cell_16);
  
      cell_8.add_neighbours(cell_5);
      cell_8.add_neighbours(cell_7);
      cell_8.add_neighbours(cell_9);
      cell_8.add_horizontal_cell(cell_7);
      cell_8.add_horizontal_cell(cell_9);
      cell_8.add_vertical_cell(cell_2);
      cell_8.add_vertical_cell(cell_5);
  
  
      cell_9.add_neighbours(cell_8);
      cell_9.add_neighbours(cell_13);
      cell_9.add_horizontal_cell(cell_7);
      cell_9.add_horizontal_cell(cell_8);
      cell_9.add_vertical_cell(cell_13);
      cell_9.add_vertical_cell(cell_18);
  
      cell_10.add_neighbours(cell_1);
      cell_10.add_neighbours(cell_11);
      cell_10.add_neighbours(cell_22);
      cell_10.add_horizontal_cell(cell_11);
      cell_10.add_horizontal_cell(cell_12);
      cell_10.add_vertical_cell(cell_1);
      cell_10.add_vertical_cell(cell_22);
  
      cell_11.add_neighbours(cell_10);
      cell_11.add_neighbours(cell_12);
      cell_11.add_neighbours(cell_4);
      cell_11.add_neighbours(cell_19);
      cell_11.add_horizontal_cell(cell_10);
      cell_11.add_horizontal_cell(cell_12);
      cell_11.add_vertical_cell(cell_4);
      cell_11.add_vertical_cell(cell_19);
  
      cell_12.add_neighbours(cell_7);
      cell_12.add_neighbours(cell_11);
      cell_12.add_neighbours(cell_16);
      cell_11.add_horizontal_cell(cell_10);
      cell_12.add_horizontal_cell(cell_11);
      cell_12.add_vertical_cell(cell_7);
      cell_12.add_vertical_cell(cell_16);
  
      cell_13.add_neighbours(cell_9);
      cell_13.add_neighbours(cell_18);
      cell_13.add_neighbours(cell_14);
      cell_13.add_horizontal_cell(cell_14);
      cell_13.add_horizontal_cell(cell_15);
      cell_13.add_vertical_cell(cell_9);
      cell_13.add_vertical_cell(cell_18);
  
      cell_14.add_neighbours(cell_6);
      cell_14.add_neighbours(cell_13);
      cell_14.add_neighbours(cell_15);
      cell_14.add_neighbours(cell_21);
      cell_14.add_horizontal_cell(cell_13);
      cell_14.add_horizontal_cell(cell_15);
      cell_14.add_vertical_cell(cell_6);
      cell_14.add_vertical_cell(cell_21);
  
      cell_15.add_neighbours(cell_3);
      cell_15.add_neighbours(cell_14);
      cell_15.add_neighbours(cell_24);
      cell_15.add_horizontal_cell(cell_13);
      cell_15.add_horizontal_cell(cell_14);
      cell_15.add_vertical_cell(cell_3);
      cell_15.add_vertical_cell(cell_24);
  
      cell_16.add_neighbours(cell_12);
      cell_16.add_neighbours(cell_17);
      cell_16.add_horizontal_cell(cell_17);
      cell_16.add_horizontal_cell(cell_18);
      cell_16.add_vertical_cell(cell_7);
      cell_16.add_vertical_cell(cell_12);
  
      cell_17.add_neighbours(cell_16);
      cell_17.add_neighbours(cell_18);
      cell_17.add_neighbours(cell_20);
      cell_17.add_horizontal_cell(cell_16);
      cell_16.add_horizontal_cell(cell_18);
      cell_17.add_vertical_cell(cell_20);
      cell_17.add_vertical_cell(cell_23);
  
      cell_18.add_neighbours(cell_13);
      cell_18.add_neighbours(cell_17);
      cell_18.add_horizontal_cell(cell_16);
      cell_18.add_horizontal_cell(cell_17);
      cell_18.add_vertical_cell(cell_9);
      cell_18.add_vertical_cell(cell_13);
  
      cell_19.add_neighbours(cell_11);
      cell_19.add_neighbours(cell_20);
      cell_19.add_horizontal_cell(cell_20);
      cell_19.add_horizontal_cell(cell_21);
      cell_19.add_vertical_cell(cell_4);
      cell_19.add_vertical_cell(cell_11);
  
      cell_20.add_neighbours(cell_17);
      cell_20.add_neighbours(cell_19);
      cell_20.add_neighbours(cell_21);
      cell_20.add_neighbours(cell_23);
      cell_20.add_horizontal_cell(cell_19);
      cell_20.add_horizontal_cell(cell_21);
      cell_20.add_vertical_cell(cell_17);
      cell_20.add_vertical_cell(cell_23);
  
      cell_21.add_neighbours(cell_14);
      cell_21.add_neighbours(cell_20);
      cell_21.add_horizontal_cell(cell_19);
      cell_21.add_horizontal_cell(cell_20);
      cell_21.add_vertical_cell(cell_6);
      cell_21.add_vertical_cell(cell_14);
  
      cell_22.add_neighbours(cell_10);
      cell_22.add_neighbours(cell_23);
      cell_22.add_horizontal_cell(cell_23);
      cell_22.add_horizontal_cell(cell_24);
      cell_22.add_vertical_cell(cell_1);
      cell_22.add_vertical_cell(cell_10);
  
      cell_23.add_neighbours(cell_20);
      cell_23.add_neighbours(cell_22);
      cell_23.add_neighbours(cell_24);
      cell_23.add_horizontal_cell(cell_22);
      cell_23.add_horizontal_cell(cell_24);
      cell_23.add_vertical_cell(cell_17);
      cell_23.add_vertical_cell(cell_20);
  
      cell_24.add_neighbours(cell_15);
      cell_24.add_neighbours(cell_23);
      cell_24.add_horizontal_cell(cell_22);
      cell_24.add_horizontal_cell(cell_23);
      cell_24.add_vertical_cell(cell_3);
      cell_24.add_vertical_cell(cell_15);
  
  
      all_cells_coll = [];
  
      all_cells_coll.push(cell_1);
      all_cells_coll.push(cell_2);
      all_cells_coll.push(cell_3);
      all_cells_coll.push(cell_4);
      all_cells_coll.push(cell_5);
      all_cells_coll.push(cell_6);
      all_cells_coll.push(cell_7);
      all_cells_coll.push(cell_8);
      all_cells_coll.push(cell_9);
      all_cells_coll.push(cell_10);
      all_cells_coll.push(cell_11);
      all_cells_coll.push(cell_12);
      all_cells_coll.push(cell_13);
      all_cells_coll.push(cell_14);
      all_cells_coll.push(cell_15);
      all_cells_coll.push(cell_16);
      all_cells_coll.push(cell_17);
      all_cells_coll.push(cell_18);
      all_cells_coll.push(cell_19);
      all_cells_coll.push(cell_20);
      all_cells_coll.push(cell_21);
      all_cells_coll.push(cell_22);
      all_cells_coll.push(cell_23);
      all_cells_coll.push(cell_24);
      
      return all_cells_coll;
    }
  
    class cell {

        constructor(cell_number, x_cord, y_cord) {
          this.cell_number = cell_number;
          this.x_cordinate = x_cord;
          this.y_cordinate = y_cord;
      
          // Initialize neighbours, vertical_cell, and horizontal_cell as empty arrays
          this.neighbours = [];
          this.vertical_cell = [];
          this.horizontal_cell = [];
      
          this.isEmpty = true;
          this.player_number = null;
          this.player_colour = DEFAULT_COLOUR;
        }



        add_neighbours(neighborCell) {
          this.neighbours.push(neighborCell);
          neighborCell.neighbours.push(this); // Make sure to add the reciprocal connection
          console.log(`Added neighbor ${neighborCell.cell_number} to cell ${this.cell_number}`);
        }
      
        add_vertical_cell(verticalCell) {
          this.vertical_cell.push(verticalCell);
          verticalCell.vertical_cell.push(this); // Add reciprocal connection
          console.log(`Added vertical cell ${verticalCell.cell_number} to cell ${this.cell_number}`);
        }
      
        add_horizontal_cell(horizontalCell) {
          this.horizontal_cell.push(horizontalCell);
          horizontalCell.horizontal_cell.push(this); // Add reciprocal connection
          console.log(`Added horizontal cell ${horizontalCell.cell_number} to cell ${this.cell_number}`);
        }
      
        display = () => {
          strokeWeight(cell_OUTLINE_WEIGHT);
          stroke(cell_DEFAULT_COLOUR);
          fill(this.player_colour);
          circle(this.x_cordinate, this.y_cordinate, CELL_RADIUS);
        }
    }
    
  
  
    class Player{
      constructor( number ,color){
  
        this.player_number = number;
        this.player_colour = color;
        this.on_board = 0;   // piece on board
        this.on_hand = TOTAL_PIECE;   // piece on hand
        this.out_piece = 0;   // piece on cut down by other player
  
      }
    }
  
  
    class Board{
  
      constructor(){
  
        this.all_cell = create_board();
        this.Player_1 = new Player(1 , '#11ff00');
        this.Player_2 = new Player(2 , '#fb00ff');
        this.turn = this.Player_1;
        this.waiting = this.Player_2;
        this.millMove = false;
        this.selected = null;
  
  
      }
  
    }
  
  
    // Creattion of board
  
  
    function create_game_board(){
  
      console.log("create page inoked!!!");
  
      noFill()
      strokeWeight(10);
      stroke(220);
  
      square(100 ,100, 900,10);
      square(250,250,600,10);
      square(400,400,300,10);
  
      line(550 , 100, 550, 400);
      line(100 , 550, 400, 550);
      line(700 , 550, 1000, 550);
      line(550 , 700, 550, 1000);
  
      GAME_BOARD.all_cell.forEach( (cell) => {
        cell.display();
      })
    }
  
  
    function setup() {
  
      var canvas = createCanvas(1200, 1200); // size of board
      background(50);
  
      canvas.id('canvas');
      GAME_BOARD = new Board();
      console.log("canvas invoke!!");
      create_game_board();
  
  
    }
  
    var player_1_turn=false;
    var player_2_turn=false;
    var full_now=false;



    function change_turn(turn_player){
      if(turn_player == 0)
        return 1;
  
        return 0;
  
    }

    function findTargetCell(clickedCell, prevCellNeighbors) {
      // Check if the clicked cell is a neighbor to the previous cell
      const isNeighbor = prevCellNeighbors.some(neighborCell => neighborCell.cell_number === clickedCell.cell_number);

      print(isNeighbor);
    
      if (isNeighbor && clickedCell.isEmpty) {
        // Return the clicked cell as the target cell if it's empty
        return clickedCell;
      } else {
        // Return null or handle the case where the clicked cell is not a valid target
        return null;
      }
    }
    

    let firstClick = null; // Variable to store the information of the first click
    let cut_piece = false; // remove the piece after mill formation


    function mouseClicked() {

      for (let i = 0; i < GAME_BOARD.all_cell.length; i++) {
        let cell = GAME_BOARD.all_cell[i];
        let d = dist(mouseX, mouseY, cell.x_cordinate, cell.y_cordinate);
    
        if (d < CELL_RADIUS / 2) {
          console.log(`Clicked on cell ${cell.cell_number}`);
          

          if(cut_piece){
            console.log("cut the piece"); 

            handle_mill(cell);
          }

          else{
            if (full_now) {
              console.log('moving phase');
              moving_phase(cell);
            }
            
            
            else {
              console.log("place");
              handleCellClick(cell);
            }
          }
          
          if(win_condition(GAME_BOARD.turn)){
            console.log(GAME_BOARD.waiting.player_number, "   win !!");
            break;
          }
          console.log(GAME_BOARD.turn.player_number, "turn arrived!!1");
          

        }
      }
    }
    

    // moving phase 
    function moving_phase(clicked_cell) {

        // First click: Check if the clicked cell has the correct player color

        if (firstClick === null) {


          if(clicked_cell.isEmpty == true){
            console.log("Empty cell is selected!!");
            return ;
          }

          // console.log("==================");
          // console.log(clicked_cell.player_colour);
          // console.log("=================");
          // console.log(GAME_BOARD.turn.player_colour);


          if( clicked_cell.player_colour != GAME_BOARD.turn.player_colour ){

            console.log("You selected the other player piece so you cant move the pieces");
            return;
          }

          
          var is_empty_neighbour = false;
          
          let len = clicked_cell.neighbours.length;
          
          for(let i=0; i<len; i++){
            
            if(clicked_cell.neighbours[i].isEmpty)
              is_empty_neighbour = true;
        }
        
        if(!is_empty_neighbour){
          console.log("Selected cell has no neighbur empty!!");
          return;
        }
        
        // if ((turn_player == 0 && cell.player_number === 1) || (turn_player == 1 && cell.player_number === 2)) {
        firstClick = clicked_cell;
        console.log('First click registered. Now select a neighbor for sliding.');
        // } 
          
          // else {
          //   print(turn_player);
          //   console.log(`Invalid first click. Choose a cell with the correct player color for turn ${turn_player + 1}.`);
          // }
        }
        


        // Second click: Check if the clicked cell is a neighbor to the first click and has the default color
        
        else {

          const firstClickNeighbors = getAdjacentCells(firstClick);

          // const isNeighborWithDefaultColor = firstClickNeighbors.some(
          //   neighborCell => neighborCell.cell_number === cell.cell_number && neighborCell.isEmpty
          // );
          
          if(clicked_cell.isEmpty == false){

            console.log("You selected filled cell !! select another!");
            return;
          }

          // if(clicked_cell.cell_number == firstClick.cell_number){

          //   console.log("Self click");
          //   return;
          // }

          let is_neighbour = false;
          let len = firstClickNeighbors.length; 

          for(let i=0; i < len ; i++){

            if(firstClickNeighbors[i].cell_number == clicked_cell.cell_number){
              is_neighbour = true;
              break;
            }
          }

          if(is_neighbour == false){
            console.log("You selected wrong neighbour!! select again!!");
            return;
          }

          // if (isNeighborWithDefaultColor) {
          //   console.log('Second click registered. Applying sliding.');

          slidePiece(firstClick, clicked_cell);

          // Check for mill formation after sliding
          const millFormed = checkForMill(clicked_cell);
          
          firstClick = null;

          if(millFormed){
            print("Mill formed");
            cut_piece = true;
            return;
          }
          else
            print("No mill formed");

          let temp = GAME_BOARD.turn;
          GAME_BOARD.turn = GAME_BOARD.waiting;
          GAME_BOARD.waiting = temp;


          if (GAME_BOARD.turn === GAME_BOARD.Player_1) {
            // Start player 1 timer
            toggleButtons("left");
            pauseTimers();
            startLeftTimer();
          } else {
            // Start player 2 timer
            toggleButtons("right");
            pauseTimers();
            startRightTimer();
          }
        

          // }
          
          // else {
          //   console.log('Invalid second click. Choose a neighbor cell with the default color.');
          // }
        }

    
    }
    
    
    
    
    
    function slidePiece(currentCell, targetCell) {
      // Check if the target cell is empty
      if (targetCell.isEmpty) {
        // Swap the content of the current cell and the target cell
        [targetCell.player_number, currentCell.player_number] = [currentCell.player_number, targetCell.player_number];
        [targetCell.player_colour, currentCell.player_colour] = [currentCell.player_colour, targetCell.player_colour];
        [targetCell.isEmpty, currentCell.isEmpty] = [currentCell.isEmpty, targetCell.isEmpty];

    
        // Update the board display or perform any necessary updates
        create_game_board();
    
        // Log the move
        console.log(`Player ${currentCell.player_number} slid a piece from ${currentCell.cell_number} to ${targetCell.cell_number}`);
    
        // Return true to indicate a successful slide
        return true;
      }
      
      else {
        // The target cell is not empty, sliding is not possible
        console.log('Cannot slide to an occupied cell.');
    
        // Return false to indicate an unsuccessful slide
        return false;
      }
    }


    //---------------------------------------------Mill formation-----------------------------------------------------------------------------------------------------------
    
  
    function checkForMill(cell) {

      // Check for a horizontal mill(

      // cell is empty
      if(cell.isEmpty){
        console.log("cell is empty!!!");
        return;
      }

      // console.log(cell)
      let horizontal_neighbour = cell.horizontal_cell;
      let len  = horizontal_neighbour.length;

      let is_horizontal_mill = true;

      for(let i =0; i<len; i++){

        if(horizontal_neighbour[i].player_colour != cell.player_colour)
          is_horizontal_mill = false;
      }

      let vertical_neighbour = cell.vertical_cell;
      len = vertical_neighbour.length;

      let is_vertical_mill = true;

      for(let i=0; i<len; i++){

        if(vertical_neighbour[i].player_colour != cell.player_colour)
          is_vertical_mill = false;

      }

      
      return is_horizontal_mill || is_vertical_mill;
    }
    
    function handle_mill(cell){


      if(cell.isEmpty){
        console.log("During mill selection piece ,   cell is empty")
        return;
      }
      
      console.log(cell.player_colour , "   =>   " ,  GAME_BOARD.turn.player_colour);
      console.log("================");


      if(cell.player_colour == GAME_BOARD.turn.player_colour){
        console.log("During mill selection piece ,  same colour piece selcted!");
        return;
      }

      let cut_player = cell.player_number;

      if(cut_player === 1){
        GAME_BOARD.Player_1.out_piece++;
        GAME_BOARD.Player_1.on_board--;
      }

      else{
        GAME_BOARD.Player_2.out_piece++;
        GAME_BOARD.Player_2.on_board--;
      }

      cell.isEmpty = true;
      cell.player_number = null;
      cell.player_colour = DEFAULT_COLOUR;

    
      create_game_board();
      
      // Switch players
      let temp = GAME_BOARD.turn;
      GAME_BOARD.turn = GAME_BOARD.waiting;
      GAME_BOARD.waiting = temp;

      if (GAME_BOARD.turn === GAME_BOARD.Player_1) {
        // Start player 1 timer
        toggleButtons("left");
        pauseTimers();
        startLeftTimer();
      } else {
        // Start player 2 timer
        toggleButtons("right");
        pauseTimers();
        startRightTimer();
      }
    

      cut_piece = false;
    }
    
  
  
  
    function handleCellClick(clickedCell) {
      
      console.log(`Handling click for cell ${clickedCell.cell_number}`);
  
      // Check if the cell is already colored with a player's color
      if (!clickedCell.isEmpty || clickedCell.player_number !== null) {
        console.log('Cell is already colored. No further action needed.');

       // full_now=true;

       // blinkNeighbors(clickedCell);
               
        return; 
      }
      
      
      // console.log(GAME_BOARD.turn);
      // console.log("-==================-");
      // console.log(GAME_BOARD.turn.on_board);
      // console.log("-==================-");

      if (
        
        (GAME_BOARD.turn === GAME_BOARD.Player_1 && GAME_BOARD.turn.on_board >= TOTAL_PIECE) ||
        (GAME_BOARD.turn === GAME_BOARD.Player_2 && GAME_BOARD.turn.on_board >= TOTAL_PIECE)
      ) {
        console.log(`Player ${GAME_BOARD.turn.player_number} has already placed 9 pieces. Cannot place more.`);

        full_now=true;   // doubt

        return; 
      }
  
      
      clickedCell.player_number = GAME_BOARD.turn.player_number;
      clickedCell.player_colour = GAME_BOARD.turn.player_colour;
      clickedCell.isEmpty=false;
  
      
      if (GAME_BOARD.turn === GAME_BOARD.Player_1) {
        player_one_available--;
        player_one_avail_piece();
        
        change_turn(turn_player);
      }
      
      else {
        player_two_available--;
        player_two_avail_piece();
        
        change_turn(turn_player);
      }

      GAME_BOARD.turn.on_board++;
      GAME_BOARD.turn.on_hand--;

      if(GAME_BOARD.Player_1.on_hand == 0 && GAME_BOARD.Player_2.on_hand ==0){
        full_now=true;
      }

  
      
      create_game_board();


      // Check for mill formation after sliding
      const millFormed = checkForMill(clickedCell);

      if(millFormed){
        print("Mill formed");
        cut_piece = true;
        return;
      }
      else
        print("No mill formed");

  
      // Switch players
      let temp = GAME_BOARD.turn;
      GAME_BOARD.turn = GAME_BOARD.waiting;
      GAME_BOARD.waiting = temp;


      if (GAME_BOARD.turn === GAME_BOARD.Player_1) {
        // Start player 1 timer
        toggleButtons("left");
        pauseTimers();
        startLeftTimer();
      } else {
        // Start player 2 timer
        toggleButtons("right");
        pauseTimers();
        startRightTimer();
      }
    

      // printNeighbors(clickedCell);
  
      // console.log(`Color of cell ${clickedCell.cell_number} set to ${clickedCell.player_colour}`);
      console.log(`It's now Player ${GAME_BOARD.turn.player_number}'s turn`);
      
    }


    function getAdjacentCells(clickedCell) {

      const adjacentCells = [];
    
      // console.log(`Neighbors array for cell ${clickedCell.cell_number}: ${clickedCell.neighbours}`);
    
      for (const neighborCell of clickedCell.neighbours) {

        const neighborCellObj = GAME_BOARD.all_cell.find(cell => cell.cell_number === neighborCell.cell_number);
    
        if (neighborCellObj) {
          adjacentCells.push(neighborCellObj);
        } else {
          console.log(`Neighbor cell ${neighborCell.cell_number} not found.`);
        }
      }
    
      return adjacentCells;
    }
    
    
    function printNeighbors(clickedCell) {
      // Get the adjacent cells for the clicked cell
      const adjacentCells = getAdjacentCells(clickedCell);
    
      console.log(`Neighbors of cell ${clickedCell.cell_number}:`);
      for (const neighborCell of adjacentCells) {
        if (neighborCell) {
          console.log(`Cell ${neighborCell.cell_number}`);
        } else {
          console.log('Neighbor cell not found.');
        }
      }
    //  blinkNeighbors(clickedCell);
    }
    


   

    //----------------------------------------Win condition--------------------------------------------------------------------------------


    function is_block(player_num){

      let all_block = true;

      // console.log(GAME_BOARD.all_cell);

      for(let i=0; i<24; i++){

        if(GAME_BOARD.all_cell[i].player_number == player_num){

          let len = GAME_BOARD.all_cell[i].neighbours.length;

          for(let j=0; j<len; j++){

            if(GAME_BOARD.all_cell[i].neighbours[j].player_number == null)
              all_block = false;
              return false;
          }

        }

      }

      return true;

    }

    function win_condition(player_obj){

      // first condition - out piece = 7
     // is_block


      if(player_obj.out_piece == TOTAL_PIECE-2){

        console.log("pichle wala win!!!");
        return true;
      }


      // second block condition

      let block_result = is_block(player_obj.player_number);

      if(block_result){

        console.log("pichle wala win!!!");
        return true;
      }
      return false;


    }
    
    
    
    
    
    
    
    

   
    
    
    
    
    




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    // player 1 html piece 
  
    function player_one_avail_piece(){
  
      document.getElementById('player_one_remaining_piece').innerHTML = `<h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Remaining Piece: </mark></h1>`
  
      for(let i = 0; i<player_one_available; i++)
        document.getElementById('player_one_remaining_piece').innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="player_one_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#11ff00}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`
    }
  
    function player_one_out_piece (){
  
      document.getElementById('player_out_one_piece').innerHTML = `<h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-red-700 rounded dark:bg-blue-500">Out Piece: </mark></h1>`
  
      for(let i = 0; i<player_one_out; i++)
        document.getElementById('player_out_one_piece').innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="player_one_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#11ff00}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`
    }
  
  
  
  
    function player_two_avail_piece(){
  
      document.getElementById('player_two_remaining_piece').innerHTML = `<h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Remaining Piece: </mark></h1>`
  
      for(let i = 0; i<player_two_available; i++)
        document.getElementById('player_two_remaining_piece').innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="player_two_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#005eff}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`
  
    }
  
    function player_two_out_piece (){
      // console.log("kokoko");
      document.getElementById('player_out_two_piece').innerHTML = `<h1 class="mt-3 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"><mark class="px-2 text-white bg-red-700 rounded dark:bg-blue-500">Out Piece: </mark></h1>`
  
      for(let i = 0; i<player_two_out; i++)
        document.getElementById('player_out_two_piece').innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" class="player_two_colour" height="2em" viewBox="0 0 320 512"><style>svg{fill:#005eff}</style><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg>`
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    


    //---------------- timer-----------------------------------------------------------------------------------//
function getTimeString(time) {
  var secs = time.get('seconds');
  if (secs < 10) {
    secs = "0" + secs;
  }
  return time.get('minutes') + ':' + secs;
}

// Toggle classes and disabled props of buttons
function toggleButtons(elem) {
  if (elem === "right") {
    // Props
    $("#left .toggle").prop("disabled", false);
    $("#right .toggle").prop("disabled", true);

    // Classes
    $("#right .toggle").addClass("btn-default btn-disabled");
    $("#right .toggle").removeClass("btn-primary");
    $("#left .toggle").addClass("btn-primary");
  } else if (elem === "left") {
    // Props
    $("#left .toggle").prop("disabled", true);
    $("#right .toggle").prop("disabled", false);

    // Classes
    $("#left .toggle").addClass("btn-default btn-disabled");
    $("#left .toggle").removeClass("btn-primary");
    $("#right .toggle").addClass("btn-primary");
  }
}

// Restores both toggles to the original state
function resetButtonClasses() {
  $("#left input").addClass("btn-primary");
  $("#left input").removeClass("btn-default btn-disabled");
  $("#right input").addClass("btn-primary");
  $("#right input").removeClass("btn-default btn-disabled");
}

// Change the time shown on the page
function displayTime(elem, time) {
  $(elem).html(getTimeString(time));
}


var t1, t2, leftTimer, rightTimer, activePlayer;

  let leftTimerRunning = false;
  let rightTimerRunning = false;
  let startButtonClicked = false;

  function initializeTimers(minutes) {
    t1 = moment.duration(minutes, "minutes");
    t2 = moment.duration(minutes, "minutes");
    displayTime("#left .time", t1);
    displayTime("#right .time", t2);
    activePlayer = "Player 1";
  }

  function startLeftTimer() {
    leftTimer = setInterval(function () {
      if (t1.as('seconds') > 0) {
        t1.subtract(moment.duration(1, 's'));
        displayTime("#left .time", t1);
        checkGameStatus('Player 1', t1);
      } else {
        clearInterval(leftTimer);
      }
    }, 1000);
  }

  function startRightTimer() {
    rightTimer = setInterval(function () {
      if (t2.as('seconds') > 0) {
        t2.subtract(moment.duration(1, 's'));
        displayTime("#right .time", t2);
        checkGameStatus('Player 2', t2);
      } else {
        clearInterval(rightTimer);
      }
    }, 1000);
  }

  function pauseTimers() {
    clearInterval(leftTimer);
    clearInterval(rightTimer);
  }

  function resetTimers(minutes) {
    pauseTimers();
    initializeTimers(minutes);
    resetButtonClasses();
    $("#left input").prop("disabled", false);
    $("#right input").prop("disabled", false);
  }

  // Init timers
  initializeTimers(5);
  displayTime("#left .time", t1);
  displayTime("#right .time", t2);

  // Set right timer
  $('#right .toggle').on('click', function () {
    startButtonClicked = true;
    pauseTimers();
    toggleButtons("right");
    activePlayer = "Player 2";
    startRightTimer();
  });

  // Set left timer
  $('#left .toggle').on('click', function () {
    startButtonClicked = true;
    pauseTimers();
    toggleButtons("left");
    activePlayer = "Player 1";
    startLeftTimer();
  });

  // Start button click handler
  $("#start").on('click', function () {
    if (!startButtonClicked) {
      console.log("Clicked");
      startButtonClicked = true;
      if (activePlayer === "Player 2" && rightTimerRunning == false) {
        toggleButtons("right");
        rightTimerRunning = true;
        startRightTimer();
      } else if(activePlayer === "Player 1" && leftTimerRunning == false) {
        toggleButtons("left");
        leftTimerRunning = true;
        startLeftTimer();
      }
    }
  });

  // Pause timer for the active player
  $("#pause").on('click', function () {
    startButtonClicked = false;
    if (activePlayer === "Player 1") {
      toggleButtons("left");
      leftTimerRunning = false;
    } else {
      toggleButtons("right");
      rightTimerRunning = false;
    }

    pauseTimers();
  });

  // Reset both timers and toggles
  $("#reset").on('click', function () {
    resetTimers(5);
    startButtonClicked = false;
    leftTimerRunning = rightTimerRunning = false;
  });

  $('#time-input').on('change', function () {
    resetTimers(parseInt($('#time-input').val()));
  });

