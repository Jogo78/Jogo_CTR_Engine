//////////////////////////////////////////////////////////////////////////////

//       CTR_Engine by Jogo v2.3                                            //

//////////////////////////////////////////////////////////////////////////////

Camera Translate Rotation ENGINE :
"Rotate Camera in 3d Tilemap or just isometric"
Author Jogo | Version: 2.3 | Date: 19.02.10



//////////////////////////////////////////////////////////////////////////////

//       /!\ Require WebGL (ShaderTilemap) /!\                              //

//////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////

//       PIXI                                                               //

//////////////////////////////////////////////////////////////////////////////

This Engine require pixi-spine.js:
https://github.com/pixijs/pixi-spine/blob/master/bin/pixi-spine.js

And pixi-projection-spine.js:
https://github.com/pixijs/pixi-projection/blob/master/dist/pixi-projection-spine.js

Just add in \js\plugins and place above in plugins manager.

OR

Just add in \js/libs and add these lines in index.html:

<script type="text/javascript" src="js/libs/pixi-spine.js"></script>
<script type="text/javascript" src="js/libs/pixi-projection-spine.js"></script>




//////////////////////////////////////////////////////////////////////////////

//       Wall Tile                                                          //

//////////////////////////////////////////////////////////////////////////////

The wall is tile A4 a line on two.
 
First ligne is the tile to add in map editor and the wall auto create with seconde line under the tile added.

Set the terrain tag for high +1: 0 is 1 of high and 7 is 8 of high.



//////////////////////////////////////////////////////////////////////////////

//       Wall Events Objects                                                //

//////////////////////////////////////////////////////////////////////////////

For wall object or wall door add '!+' above a character name.


For middle door just add '+' above a character name, can be open and close by plugin command.


For all the down character only it's display and not forgot change direction for turn the sprite in good direction in the 3d world.



//////////////////////////////////////////////////////////////////////////////

//       Galv_DiagonalMovement                                              //

//////////////////////////////////////////////////////////////////////////////

https://galvs-scripts.com/2015/12/12/mv-diagonal-movement/

Galv_DiagonalMovement is compatible with this engine. Just place above.

But if you want use diagonal graphic set enable on Diagonal Graphics and in the Galv_DiagonalMovement set false on Diagonal Charset.



//////////////////////////////////////////////////////////////////////////////

//       Setting Info                                                       //

//////////////////////////////////////////////////////////////////////////////

Camera:


'B' => Is Base of camera (Tile : ['X','Y']. Pixel : ['X','Y',true]. Chara : ['-1'] Follower 1, ['0'] Player, ['1'] Event 1).

'H' => Is Horizontal rotation (Angle between : 0 to 359, if 'MIN' 'H' != 0 && 'MAX' 'H' != 359 camera not move in the short rotation because is missing complete axis).

'V' => Is Vertical rotation (Angle between : 0 to 80).

'S' => Is Scale rate (Minimum : 0.75).

'X' => Is Shift X (Can be negative).

'Y' => Is Shift Y (Can be negative).

'Z' => Is Shift Z (Can be negative).




Value:


'CB' => 'B','H','V','S','X','Y'and/or'Z' (Separate by ",").

'C' => 'H','V','S','X','Y'and/or'Z' (Separate by ",").

'n' => Is number.

'nc' => Is number (Set 'CURRENT' to current value).

'b' => Is bool ('true' or 'false').

'sr' => Is speed rate (Set 'CURRENT' to current speed).

'ki' => Input list separate by ',' (Refer to input list).



//////////////////////////////////////////////////////////////////////////////

//       Plugin_Command                                                     //

//////////////////////////////////////////////////////////////////////////////

Open/Close door system:


'CTR_ENGINE' 'DOOR' 'POSITIVE' 'OPEN' 'EventID'

'CTR_ENGINE' 'DOOR' 'POSITIVE' 'CLOSE' 'EventID'


'CTR_ENGINE' 'DOOR' 'NEGATIVE' 'OPEN' 'EventID'

'CTR_ENGINE' 'DOOR' 'NEGATIVE' 'CLOSE' 'EventID'





Plugin param:


'CTR_ENGINE' 'INITIAL_STATE' 'CB' 'nc'

'CTR_ENGINE' 'MIN' 'C' 'n'

'CTR_ENGINE' 'MAX' 'C' 'n'

'CTR_ENGINE' 'DISABLE_INPUT' 'C' 'b'

'CTR_ENGINE' 'POSITIVE_INPUT' 'C' 'ki'

'CTR_ENGINE' 'NEGATIVE_INPUT' 'C' 'ki'

'CTR_ENGINE' 'INPUT_MOVE' 'C' 'n'

'CTR_ENGINE' 'SPEED_RATE' 'CB' 'n'

'CTR_ENGINE' 'RESET_UNINPUT' 'C' 'b'




Action command:


'CTR_ENGINE' 'SET' 'CB' 'n' : 
Set current value.

'CTR_ENGINE' 'MOVE' 'C' 'n' 'sr' :
Move current value.

'CTR_ENGINE' 'MOVE_TO' 'CB' 'n' 'sr' :
Move current value to.

'CTR_ENGINE' 'RESET' 'CB' :
Set current value to initial value.

'CTR_ENGINE' 'RESET_TO' 'CB' 'sr' :
Move current value to initial value.

'CTR_ENGINE' 'REINITIALIZE' 'Plugin param' 'CB' :
Set param value to plugin value.



//////////////////////////////////////////////////////////////////////////////

//        Input List                                                        //

//////////////////////////////////////////////////////////////////////////////

Rpg Maker key:


  ok: '13, 32, 90',
  escape: '27, 45, 88, 96',

  left: '37, 100',
  up: '38, 104',
  right: '39, 102',
  down: '40, 98',

  control: '17, 18',
  shift: '16',
  tab: '9',

  pageup: '33, 81',
  pagedown: '34, 87',

  debug: '120'.




Number key:


  14: '0E',

   8: 'backspace',
   9: 'tab',
  13: 'enter',
  16: 'shift',
  17: 'ctrl',
  18: 'alt',
  27: 'esc',
  32: 'space',
  33: 'pageup',
  34: 'pagedown',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  45: 'escape',

  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  
  96: 'num0',
  97: 'num1',
  98: 'num2',
  99: 'num3',
 100: 'num4',
 101: 'num5',
 102: 'num6',
 103: 'num7',
 104: 'num8',
 105: 'num9',
  
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',
  
 112: 'f1',
 113: 'f2',
 114: 'f3',
 115: 'f4',
 116: 'f5',
 117: 'f6',
 118: 'f7',
 119: 'f8',
 120: 'f9',
 121: 'f10',
 122: 'f11',
 123: 'f12',
  
 186: 'semicolon',
 187: 'equal',
 188: 'comma',
 189: 'minus',
 190: 'period',
 191: 'slash',
 192: 'grave',
 219: 'openbracket',
 220: 'backslash',
 221: 'closedbracket',
 222: 'singlequote',


 Ect...



//////////////////////////////////////////////////////////////////////////////

//        END                                                               //

//////////////////////////////////////////////////////////////////////////////
