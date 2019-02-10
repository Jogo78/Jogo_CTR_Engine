//////////////////////////////////////////////////////////////////////////////
//       CTR_Engine by Jogo v2.3                                            //
//////////////////////////////////////////////////////////////////////////////
/*:
 * @plugindesc Camera Translate Rotation ENGINE :
 * "Rotate Camera in 3d Tilemap or just isometric"
 * @author Jogo | Version: 2.3 | Date: 19.02.10
 *
 * @param CTR Engine
 *
 * 
 * @param Galv_DiagonalMovement
 * @parent CTR Engine
 *
 *
 * @param Diagonal Graphics
 * @parent Galv_DiagonalMovement
 * @desc Enable diagonal graphics
 * @type Boolean
 * @on Enable
 * @off Disable
 * @default false
 *
 *
 * @param Wall
 * @parent CTR Engine
 *
 *
 * @param Tile Tall
 * @parent Wall
 * @desc Set the tall must be the same of tileHeight and tileWidth.
 * @type Number
 * @default 48
 *
 *
 * @param Camera
 * @parent CTR Engine
 *
 * 
 * @param Base
 * @parent Camera
 *
 *
 * @param Initial State B
 * @parent Base
 * @desc Tile : ['X','Y']. Pixel : ['X','Y',true].
 * Character : ['-1'] Follower1, ['0'] Player, ['1'] Event 1.
 * @default 0
 *
 * @param Speed Rate B
 * @parent Base
 * @desc Set the speed rate for move camera.
 * @type Number
 * @decimals 2
 * @default 0.50
 *
 * 
 * @param Horizontal
 * @parent Camera
 *
 * 
 * @param Initial State H
 * @parent Horizontal
 * @desc Set the initial angle of camera between 0 to 360.
 * (In degrees)
 * @type Number
 * @min 0
 * @max 359
 * @default 0
 *
 * @param MIN H
 * @parent Horizontal
 * @desc Set the minimum angle of camera between 0 to 360.
 * (In degrees)
 * @type Number
 * @min 0
 * @max 360
 * @default 0
 *
 * @param MAX H
 * @parent Horizontal
 * @desc Set the maximum angle of camera between 0 to 360.
 * (In degrees)
 * @type Number
 * @min 0
 * @max 359
 * @default 359
 *
 * @param Disable Input H
 * @parent Horizontal
 * @desc Disable camera rotation input.
 * @type Boolean
 * @on Disable
 * @off Enable
 * @default false
 *
 * @param Positive Input H
 * @parent Horizontal
 * @desc Set the positive rotation keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default pageup
 *
 * @param Negative Input H
 * @parent Horizontal
 * @desc Set the negative rotation keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default pagedown
 *
 * @param Input Move H
 * @parent Horizontal
 * @desc Set the rotation angle of camera by input.
 * (In degrees)
 * @type Number
 * @min 1
 * @max 360
 * @default 45.00
 *
 * @param Speed Rate H
 * @parent Horizontal
 * @desc Set the speed rate for rotate.
 * @type Number
 * @decimals 2
 * @default 0.50
 *
 * @param Reset Uninput H
 * @parent Horizontal
 * @desc Rese camera rotate when uninput.
 * @type Boolean
 * @on Enable
 * @off Disable
 * @default false
 *
 * 
 * @param Vertical
 * @parent Camera
 *
 * 
 * @param Initial State V
 * @parent Vertical
 * @desc Set the initial angle of camera between 0 to 80.
 * (In degrees)
 * @type Number
 * @min 0
 * @max 80
 * @default 60
 *
 * @param MIN V
 * @parent Vertical
 * @desc Set the minimum angle of camera between 0 to 80.
 * (In degrees)
 * @type Number
 * @min 0
 * @max 80
 * @default 0
 *
 * @param MAX V
 * @parent Vertical
 * @desc Set the maximum angle of camera between 0 to 80.
 * (In degrees)
 * @type Number
 * @min 0
 * @max 80
 * @default 80
 *
 * @param Disable Input V
 * @parent Vertical
 * @desc Disable camera rotation input.
 * @type Boolean
 * @on Disable
 * @off Enable
 * @default true
 *
 * @param Positive Input V
 * @parent Vertical
 * @desc Set the positive rotation keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default
 *
 * @param Negative Input V
 * @parent Vertical
 * @desc Set the negative rotation keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default
 *
 * @param Input Move V
 * @parent Vertical
 * @desc Set the rotation angle of camera by input.
 * (In degrees)
 * @type Number
 * @min 1
 * @max 80
 * @default 10
 *
 * @param Speed Rate V
 * @parent Vertical
 * @desc Set the speed rate for rotate.
 * @type Number
 * @decimals 2
 * @default 0.50
 *
 * @param Reset Uninput V
 * @parent Vertical
 * @desc Rese camera rotate when uninput.
 * @type Boolean
 * @on Enable
 * @off Disable
 * @default false
 *
 *
 * @param Scale
 * @parent Camera
 *
 * 
 * @param Initial State S
 * @parent Scale
 * @desc Set the initial scale of camera.
 * @type Number
 * @decimals 2
 * @min 0.75
 * @default 1.00
 *
 * @param MIN S
 * @parent Scale
 * @desc Set the minimum scale of camera.
 * (Can it's negative)
 * @type Number
 * @decimals 2
 * @min 0.75
 * @default 1.00
 *
 * @param MAX S
 * @parent Scale
 * @desc Set the maximum scale of camera.
 * (Can it's negative)
 * @type Number
 * @decimals 2
 * @min 0.75
 * @default 1.25
 *
 * @param Disable Input S
 * @parent Scale
 * @desc Disable camera scale input.
 * @type Boolean
 * @on Disable
 * @off Enable
 * @default false
 *
 * @param Positive Input S
 * @parent Scale
 * @desc Set the positive scale keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default down,left,right,up
 *
 * @param Negative Input S
 * @parent Scale
 * @desc Set the negative scale keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default
 *
 * @param Input Move S
 * @parent Scale
 * @desc Set the scale of camera by input.
 * (Can it's negative)
 * @type Number
 * @decimals 2
 * @min -9999
 * @default 0.25
 *
 * @param Speed Rate S
 * @parent Scale
 * @desc Set the speed rate for scale.
 * @type Number
 * @decimals 2
 * @default 0.50
 *
 * @param Reset Uninput S
 * @parent Scale
 * @desc Rese camera scale when uninput.
 * @type Boolean
 * @on Enable
 * @off Disable
 * @default true
 * 
 * 
 * @param Shift X
 * @parent Camera
 *
 * 
 * @param Initial State X
 * @parent Shift X
 * @desc Set the initial shift of camera.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default 0
 *
 * @param MIN X
 * @parent Shift X
 * @desc Set the minimum shift of camera.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default -144
 *
 * @param MAX X
 * @parent Shift X
 * @desc Set the maximum shift of camera.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default 144
 *
 * @param Disable Input X
 * @parent Shift X
 * @desc Disable camera shift input.
 * @type Boolean
 * @on Disable
 * @off Enable
 * @default false
 *
 * @param Positive Input X
 * @parent Shift X
 * @desc Set the positive shift keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default left
 *
 * @param Negative Input X
 * @parent Shift X
 * @desc Set the negative shift keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default right
 *
 * @param Input Move X
 * @parent Shift X
 * @desc Set the shift of camera by input.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default 288
 *
 * @param Speed Rate X
 * @parent Shift X
 * @desc Set the speed rate for shift.
 * @type Number
 * @decimals 2
 * @default 0.50
 *
 * @param Reset Uninput X
 * @parent Shift X
 * @desc Rese camera shift when uninput.
 * @type Boolean
 * @on Enable
 * @off Disable
 * @default true
 *
 * 
 * @param Shift Y
 * @parent Camera
 *
 * 
 * @param Initial State Y
 * @parent Shift Y
 * @desc Set the initial shift of camera.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default 0
 *
 * @param MIN Y
 * @parent Shift Y
 * @desc Set the minimum shift of camera.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default -144
 *
 * @param MAX Y
 * @parent Shift Y
 * @desc Set the maximum shift of camera.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default 144
 *
 * @param Disable Input Y
 * @parent Shift Y
 * @desc Disable camera shift input.
 * @type Boolean
 * @on Disable
 * @off Enable
 * @default false
 *
 * @param Positive Input Y
 * @parent Shift Y
 * @desc Set the positive shift keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default up
 *
 * @param Negative Input Y
 * @parent Shift Y
 * @desc Set the negative shift keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default down
 *
 * @param Input Move Y
 * @parent Shift Y
 * @desc Set the shift of camera by input.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default 288
 *
 * @param Speed Rate Y
 * @parent Shift Y
 * @desc Set the speed rate for shift.
 * @type Number
 * @decimals 2
 * @default 0.50
 *
 * @param Reset Uninput Y
 * @parent Shift Y
 * @desc Rese camera shift when uninput.
 * @type Boolean
 * @on Enable
 * @off Disable
 * @default true
 *
 * 
 * @param Shift Z
 * @parent Camera
 *
 * 
 * @param Initial State Z
 * @parent Shift Z
 * @desc Set the initial shift of camera.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default 0
 *
 * @param MIN Z
 * @parent Shift Z
 * @desc Set the minimum shift of camera.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default 0
 *
 * @param MAX Z
 * @parent Shift Z
 * @desc Set the maximum shift of camera.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default 0
 *
 * @param Disable Input Z
 * @parent Shift Z
 * @desc Disable camera shift input.
 * @type Boolean
 * @on Enable
 * @off Disable
 * @default true
 *
 * @param Positive Input Z
 * @parent Shift Z
 * @desc Set the positive shift keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default 
 *
 * @param Negative Input Z
 * @parent Shift Z
 * @desc Set the negative shift keys input list separate by ",".
 * Example: ok,escape,1,2 (Leave blank for not use.)
 * @default 
 *
 * @param Input Move Z
 * @parent Shift Z
 * @desc Set the shift of camera by input.
 * (Can it's negative)
 * @type Number
 * @min -9999
 * @default 0
 *
 * @param Speed Rate Z
 * @parent Shift Z
 * @desc Set the speed rate for shift.
 * @type Number
 * @decimals 2
 * @default 0.50
 *
 * @param Reset Uninput Z
 * @parent Shift Z
 * @desc Rese camera shift when uninput.
 * @type Boolean
 * @on Enable
 * @off Disable
 * @default false
 *
 * @help
 * //////////////////////////////////////////////////////////////////////////////
 * //        CTR_Engine                                                        //
 * //////////////////////////////////////////////////////////////////////////////
 *           
 *                             171321     11        11 121711111                
 *                             1332221  153        721  7111273                 
 *                             12322227255        13151  11 1 1111              
 *                              2322232337        13351713511  1                
 *                             2352332335          1323545711115711             
 *               110802      111589333531       100112233596371751              
 *              12358880021   1258885933     1758022725123022359232             
 *               13358888802110888888022  11730802237005000  13334              
 *                733000888853235532980738688880057359055653  11                
 *                125300888005532     610888888041223231   16231                
 *                 12550808865331 1    7     50801255355271155521               
 *                  1733569222351551 1  35 3  5088801083355690111               
 *                     173537235140845  90887 5088855465328047111               
 *                      58317755318001177729520088095532540511121               
 *                   1404411111177177777775882003532112115555115                
 *                 1904967111111117222277588888053711 1717511751                
 *                2800694123323372111122324888523211  1711131555                
 *              1580080832355217    1111111206959571  33111325506               
 *             16000000023535511            4609652711406535570880              
 *            1406944640322234711          134049455275643353358880             
 *           75046669960422774511          3690906653325044921888889            
 *          1504646996665727730717      11235099553333359080950888883           
 *         13809444009575222725511111111111138846555555400880000088881          
 *        120044466065 13322773632223355558088804555449606340946960000          
 *        15894696690  123227734555333335088880080496990212540664499991         
 *       120099694491   25227256555233500555988888889601  1330094466940         
 *       13800099404    733235595372338095532233355561     134000000660         
 *      125800000901    13572227777773888080000006461      1238000000007        
 *      130888809711111111223255454665088888888803771       730099900009        
 *      13888571             1227177111111111      111111      111249698        
 *      138011               1                                      1168        
 *      1331                11                                        18        
 *      27                  91                               1         3        
 *     131                 161                           113001        3        
 *    123             11   651             11173562      13571         0        
 *    132          1750051133111235401     73549002       1           92        
 *    757         1754540772311723560      57117352                 1301        
 *    732         1681731711735590485      28  1252                   7         
 *    735         5086 11   125906382      185 1357         11                  
 *    1351        58883     135904501       0811357       16031                 
 *    13551        125211  1259904001       4061357       98007                 
 *    123051                118000891       1802357       388081             2  
 *     133051                 1788831        000357       1888051        15552  
 *      7558871             11358803       1 088357       1888841     123552    
 *       7350043111       1177348881  1173599088651  1172268888021 1172211      
 *        123544453271117117723332272723222272227222772723088800617111          
 *          173322223333771171121    11712 121121 11777272233222771             
 *         13221  1 5 5 272 5 522122 373111 3 722 3 1 11 513 2 31111171         
 *       123 1271 1113131 7 1 32210213711 7111572  111 1122211 311 3222         
 *     172321 213 1  313722727222772223232722727772712727257715 31 1127211      
 *  1322723222222223355333333222222222222222222223333333335533227771377377225   
 * 173332232226651111111                              1111117223355327737721    
 *   133723350002                                             1736080063771     
 *   132223659431                                              7333355537771    
 *  15333221111                                                11172233532237   
 * 1111                                                               11111
 *   
 *
 * //////////////////////////////////////////////////////////////////////////////
 * //       /!\ Require WebGL (ShaderTilemap) /!\                              //
 * //////////////////////////////////////////////////////////////////////////////
 *
 *
 *
 * //////////////////////////////////////////////////////////////////////////////
 * //       PIXI                                                               //
 * //////////////////////////////////////////////////////////////////////////////
 *
 *This Engine require pixi-spine.js:
 *https://github.com/pixijs/pixi-spine/blob/master/bin/pixi-spine.js
 *
 *And pixi-projection-spine.js:
 *https://github.com/pixijs/pixi-projection/blob/master/dist/pixi-projection-spine.js
 *
 *Just add in \js\plugins and place above in plugins manager.
 *
 *OR
 *
 *Just add in \js/libs and add these lines in index.html:
 *
 *<script type="text/javascript" src="js/libs/pixi-spine.js"></script>
 *<script type="text/javascript" src="js/libs/pixi-projection-spine.js"></script>
 *
 *
 *
 * //////////////////////////////////////////////////////////////////////////////
 * //       Wall Tile                                                          //
 * //////////////////////////////////////////////////////////////////////////////
 *
 *The wall is tile A4 a line on two.
 *
 *First ligne is the tile to add in map editor and the wall auto create with [..
 *..]seconde line under the tile added.
 *
 *Set the terrain tag for high +1: 0 is 1 of high and 7 is 8 of high.
 *
 *
 *
 * //////////////////////////////////////////////////////////////////////////////
 * //       Wall Events Objects                                                //
 * //////////////////////////////////////////////////////////////////////////////
 *
 *For wall object or wall door add '!+' above a character name.
 *
 *
 *For middle door just add '+' above a character name, can be open and close [..
 *..]by plugin command.
 *
 *
 *For all the down character only it's display and not forgot change direction[..
 *..]for turn the sprite in good direction in the 3d world.
 *
 *
 *
 * //////////////////////////////////////////////////////////////////////////////
 * //       Galv_DiagonalMovement                                              //
 * //////////////////////////////////////////////////////////////////////////////
 *
 *https://galvs-scripts.com/2015/12/12/mv-diagonal-movement/
 *
 *Galv_DiagonalMovement is compatible with this engine. Just place above.
 *
 *But if you want use diagonal graphic set enable on Diagonal Graphics and in[..
 *..]the Galv_DiagonalMovement set false on Diagonal Charset.
 *
 *
 *
 * //////////////////////////////////////////////////////////////////////////////
 * //       Setting Info                                                       //
 * //////////////////////////////////////////////////////////////////////////////
 *
 *Camera:
 * 
 * 
 *'B' => Is Base of camera (Tile : ['X','Y']. Pixel : ['X','Y',true]. Chara :[..
 *..]['-1'] Follower 1, ['0'] Player, ['1'] Event 1).
 *
 *'H' => Is Horizontal rotation (Angle between : 0 to 359, if 'MIN' 'H' != 0 [..
 *..]&& 'MAX' 'H' != 359 camera not move in the short rotation because is    [..
 *..]missing complete axis).
 *
 *'V' => Is Vertical rotation (Angle between : 0 to 80).
 *
 *'S' => Is Scale rate (Minimum : 0.75).
 *
 *'X' => Is Shift X (Can be negative).
 *
 *'Y' => Is Shift Y (Can be negative).
 *
 *'Z' => Is Shift Z (Can be negative).
 *
 *
 *
 *
 *Value:
 * 
 *
 *'CB' => 'B','H','V','S','X','Y'and/or'Z' (Separate by ",").
 *
 *'C' => 'H','V','S','X','Y'and/or'Z' (Separate by ",").
 *
 *'n' => Is number.
 *
 *'nc' => Is number (Set 'CURRENT' to current value).
 *
 *'b' => Is bool ('true' or 'false').
 *
 *'sr' => Is speed rate (Set 'CURRENT' to current speed).
 *
 *'ki' => Input list separate by ',' (Refer to input list).
 *
 *
 *
 * //////////////////////////////////////////////////////////////////////////////
 * //       Plugin_Command                                                     //
 * //////////////////////////////////////////////////////////////////////////////
 *
 *Open/Close door system:
 *
 *
 *'CTR_ENGINE' 'DOOR' 'POSITIVE' 'OPEN' 'EventID'
 *
 *'CTR_ENGINE' 'DOOR' 'POSITIVE' 'CLOSE' 'EventID'
 *
 *
 *'CTR_ENGINE' 'DOOR' 'NEGATIVE' 'OPEN' 'EventID'
 *
 *'CTR_ENGINE' 'DOOR' 'NEGATIVE' 'CLOSE' 'EventID'
 *
 *
 * 
 * 
 * 
 *Plugin param:
 * 
 *
 *'CTR_ENGINE' 'INITIAL_STATE' 'CB' 'nc'
 *
 *'CTR_ENGINE' 'MIN' 'C' 'n'
 *
 *'CTR_ENGINE' 'MAX' 'C' 'n'
 *
 *'CTR_ENGINE' 'DISABLE_INPUT' 'C' 'b'
 *
 *'CTR_ENGINE' 'POSITIVE_INPUT' 'C' 'ki'
 *
 *'CTR_ENGINE' 'NEGATIVE_INPUT' 'C' 'ki'
 *
 *'CTR_ENGINE' 'INPUT_MOVE' 'C' 'n'
 *
 *'CTR_ENGINE' 'SPEED_RATE' 'CB' 'n'
 *
 *'CTR_ENGINE' 'RESET_UNINPUT' 'C' 'b'
 *
 * 
 * 
 * 
 *Action command:
 *
 * 
 *'CTR_ENGINE' 'SET' 'CB' 'n' : 
 *Set current value.
 *
 *'CTR_ENGINE' 'MOVE' 'C' 'n' 'sr' :
 *Move current value.
 *
 *'CTR_ENGINE' 'MOVE_TO' 'CB' 'n' 'sr' :
 *Move current value to.
 *
 *'CTR_ENGINE' 'RESET' 'CB' :
 *Set current value to initial value.
 *
 *'CTR_ENGINE' 'RESET_TO' 'CB' 'sr' :
 *Move current value to initial value.
 *
 *'CTR_ENGINE' 'REINITIALIZE' 'Plugin param' 'CB' :
 *Set param value to plugin value.
 *
 *
 * 
 * //////////////////////////////////////////////////////////////////////////////
 * //        Input List                                                        //
 * //////////////////////////////////////////////////////////////////////////////
 * 
 * Rpg Maker key:
 * 
 * 
 *   ok: '13, 32, 90',
 *   escape: '27, 45, 88, 96',
 * 
 *   left: '37, 100',
 *   up: '38, 104',
 *   right: '39, 102',
 *   down: '40, 98',
 * 
 *   control: '17, 18',
 *   shift: '16',
 *   tab: '9',
 * 
 *   pageup: '33, 81',
 *   pagedown: '34, 87',
 * 
 *   debug: '120'.
 * 
 * 
 *
 *
 * Number key:
 * 
 * 
 *   14: '0E',
 *
 *    8: 'backspace',
 *    9: 'tab',
 *   13: 'enter',
 *   16: 'shift',
 *   17: 'ctrl',
 *   18: 'alt',
 *   27: 'esc',
 *   32: 'space',
 *   33: 'pageup',
 *   34: 'pagedown',
 *   37: 'left',
 *   38: 'up',
 *   39: 'right',
 *   40: 'down',
 *   45: 'escape',
 *
 *   48: '0',
 *   49: '1',
 *   50: '2',
 *   51: '3',
 *   52: '4',
 *   53: '5',
 *   54: '6',
 *   55: '7',
 *   56: '8',
 *   57: '9',
 *   
 *   96: 'num0',
 *   97: 'num1',
 *   98: 'num2',
 *   99: 'num3',
 *  100: 'num4',
 *  101: 'num5',
 *  102: 'num6',
 *  103: 'num7',
 *  104: 'num8',
 *  105: 'num9',
 *   
 *   65: 'a',
 *   66: 'b',
 *   67: 'c',
 *   68: 'd',
 *   69: 'e',
 *   70: 'f',
 *   71: 'g',
 *   72: 'h',
 *   73: 'i',
 *   74: 'j',
 *   75: 'k',
 *   76: 'l',
 *   77: 'm',
 *   78: 'n',
 *   79: 'o',
 *   80: 'p',
 *   81: 'q',
 *   82: 'r',
 *   83: 's',
 *   84: 't',
 *   85: 'u',
 *   86: 'v',
 *   87: 'w',
 *   88: 'x',
 *   89: 'y',
 *   90: 'z',
 *   
 *  112: 'f1',
 *  113: 'f2',
 *  114: 'f3',
 *  115: 'f4',
 *  116: 'f5',
 *  117: 'f6',
 *  118: 'f7',
 *  119: 'f8',
 *  120: 'f9',
 *  121: 'f10',
 *  122: 'f11',
 *  123: 'f12',
 *   
 *  186: 'semicolon',
 *  187: 'equal',
 *  188: 'comma',
 *  189: 'minus',
 *  190: 'period',
 *  191: 'slash',
 *  192: 'grave',
 *  219: 'openbracket',
 *  220: 'backslash',
 *  221: 'closedbracket',
 *  222: 'singlequote',
 * 
 * 
 *  Ect...
 * 
 *
 * 
 * //////////////////////////////////////////////////////////////////////////////
 * //        END                                                               //
 * //////////////////////////////////////////////////////////////////////////////
 */
 
var Imported = Imported || {};
Imported.CTR_Engine = true;

var CTR_Engine = CTR_Engine || {};

(function() {
CTR_Engine.Wall = CTR_Engine.Wall || {};
			
			
	CTR_Engine.Wall.Base = CTR_Engine.Wall.Base || {};
		CTR_Engine.Wall.Base.TileTall = Number(PluginManager.parameters('Jogo_CTR_Engine')["Tile Tall"]);
})();


////////////////////////////////////////////////////////////////////////////////
//       Plugin_Command                                                       //
////////////////////////////////////////////////////////////////////////////////

CTR_Engine.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	CTR_Engine.Game_Interpreter_pluginCommand.call(this, command, args);
	if (command.toUpperCase() === 'CTR_ENGINE') {
		if (String(args[0]).toUpperCase() == "DOOR") $gameMap.event(Number(args[3]))._doorState = String(args[1]).toUpperCase() + "," + String(args[2]).toUpperCase();
		if (String(args[0]).toUpperCase() == "INITIAL_STATE") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[2]).toUpperCase() == "CURRENT") {
					if (String(args[1].split(',')[i]).toUpperCase() == "B") $gameMap.B.InitialState = $gameMap._newCamera;
					else if (String(args[1].split(',')[i]).toUpperCase() == "H") $gameMap.H.InitialState = $gameMap._currentH;
					else if (String(args[1].split(',')[i]).toUpperCase() == "V") $gameMap.V.InitialState = $gameMap._currentV;
					else if (String(args[1].split(',')[i]).toUpperCase() == "S") $gameMap.S.InitialState = $gameMap._currentS;
					else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap.X.InitialState = $gameMap._currentX;
					else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.InitialState = $gameMap._currentY;
					else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.InitialState = $gameMap._currentZ;
				} else {
					if (String(args[1].split(',')[i]).toUpperCase() == "B") $gameMap.B.InitialState = args[2].toLowerCase().split(',');
					else if (String(args[1].split(',')[i]).toUpperCase() == "H") $gameMap.H.InitialState = Number(args[2])/180*Math.PI;
					else if (String(args[1].split(',')[i]).toUpperCase() == "V") $gameMap.V.InitialState = Number(args[2])/180*Math.PI;
					else if (String(args[1].split(',')[i]).toUpperCase() == "S") $gameMap.S.InitialState = Number(args[2]);
					else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap.X.InitialState = Number(args[2]);
					else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.InitialState = Number(args[2]);
					else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.InitialState = Number(args[2]);	
				}
			}
		}
		if (String(args[0]).toUpperCase() == "MIN") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "H") $gameMap.H.MIN = Number(args[2])/180*Math.PI;
				else if (String(args[1].split(',')[i]).toUpperCase() == "V") $gameMap.V.MIN = Number(args[2])/180*Math.PI;
				else if (String(args[1].split(',')[i]).toUpperCase() == "S") $gameMap.S.MIN = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap.X.MIN = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.MIN = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.MIN = Number(args[2]);
			}
		}
		if (String(args[0]).toUpperCase() == "MAX") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "H") $gameMap.H.MAX = Number(args[2])/180*Math.PI;
				else if (String(args[1].split(',')[i]).toUpperCase() == "V") $gameMap.V.MAX = Number(args[2])/180*Math.PI;
				else if (String(args[1].split(',')[i]).toUpperCase() == "S") $gameMap.S.MAX = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap.X.MAX = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.MAX = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.MAX = Number(args[2]);
			}
		}
		if (String(args[0]).toUpperCase() == "DISABLE_INPUT") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "H") $gameMap.H.DisableInput = eval(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "V") $gameMap.V.DisableInput = eval(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "S") $gameMap.S.DisableInput = eval(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap.X.DisableInput = eval(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.DisableInput = eval(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.DisableInput = eval(args[2]);
			}
		}
		if (String(args[0]).toUpperCase() == "POSITIVE_INPUT") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "H") $gameMap.H.PositiveInput = args[2].toLowerCase().split(',');
				else if (String(args[1].split(',')[i]).toUpperCase() == "V") $gameMap.V.PositiveInput = args[2].toLowerCase().split(',');
				else if (String(args[1].split(',')[i]).toUpperCase() == "S") $gameMap.S.PositiveInput = args[2].toLowerCase().split(',');
				else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap.X.PositiveInput = args[2].toLowerCase().split(',');
				else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.PositiveInput = args[2].toLowerCase().split(',');
				else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.PositiveInput = args[2].toLowerCase().split(',');
			}
		}
		if (String(args[0]).toUpperCase() == "NEGATIVE_INPUT") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "H") $gameMap.H.NegativeInput = args[2].toLowerCase().split(',');
				else if (String(args[1].split(',')[i]).toUpperCase() == "V") $gameMap.V.NegativeInput = args[2].toLowerCase().split(',');
				else if (String(args[1].split(',')[i]).toUpperCase() == "S") $gameMap.S.NegativeInput = args[2].toLowerCase().split(',');
				else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap.X.NegativeInput = args[2].toLowerCase().split(',');
				else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.NegativeInput = args[2].toLowerCase().split(',');
				else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.NegativeInput = args[2].toLowerCase().split(',');
			}
		}
		if (String(args[0]).toUpperCase() == "INPUT_MOVE") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "H") $gameMap.H.InputMove = Number(args[2])/180*Math.PI;
				else if (String(args[1].split(',')[i]).toUpperCase() == "V") $gameMap.V.InputMove = Number(args[2])/180*Math.PI;
				else if (String(args[1].split(',')[i]).toUpperCase() == "S") $gameMap.S.InputMove = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap.X.InputMove = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.InputMove = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.InputMove = Number(args[2]);
			}
		}
		if (String(args[0]).toUpperCase() == "SPEED_RATE") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "B") $gameMap.B.SpeedRate = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "H") $gameMap.H.SpeedRate = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "V") $gameMap.V.SpeedRate = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "S") $gameMap.S.SpeedRate = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap.X.SpeedRate = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.SpeedRate = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.SpeedRate = Number(args[2]);
			}
		}
		if (String(args[0]).toUpperCase() == "RESET_UNINPUT") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "H") $gameMap.H.ResetUninput = eval(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "V") $gameMap.V.ResetUninput = eval(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "S") $gameMap.S.ResetUninput = eval(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap.X.ResetUninput = eval(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.ResetUninput = eval(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.ResetUninput = eval(args[2]);
			}
		}
		if (String(args[0]).toUpperCase() == "SET") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "B") {
					$gameMap._newCamera = args[2].toLowerCase().split(',');
					if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) === 0) var character = $gamePlayer;
					else if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) < 0) var character = $gamePlayer.followers()._data[Math.abs(Number($gameMap._newCamera[0]) + 1)];
					else if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) > 0) var character = $gameMap.event(Number($gameMap._newCamera[0]));
					if (character) $gameMap.setDisplayChara(character);
					else if ($gameMap._newCamera.length == 3) $gameMap.setDisplayPixelPos(Number($gameMap._newCamera[0]), Number($gameMap._newCamera[1]));
					else if ($gameMap._newCamera.length == 2) $gameMap.setDisplayPos(Number($gameMap._newCamera[0]), Number($gameMap._newCamera[1]));
					$gameMap._lastCamera = $gameMap._newCamera;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "H") SceneManager._scene._spriteset._tilemap.euler.z = $gameMap._currentH = $gameMap._inputH = $gameMap._commandH = Number(args[2])/180*Math.PI;
				else if (String(args[1].split(',')[i]).toUpperCase() == "V") SceneManager._scene._spriteset._tilemap.euler.x = $gameMap._currentV = $gameMap._inputV = $gameMap._commandV = Number(args[2])/180*Math.PI;
				else if (String(args[1].split(',')[i]).toUpperCase() == "s") $gameScreen._zoomScale = $gameMap._currentS = $gameMap._inputS = $gameMap._commandS = Number(args[1]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap._currentX = $gameMap._inputX = $gameMap._commandX = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap._currentY = $gameMap._inputY = $gameMap._commandY = Number(args[2]);
				else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap._currentZ = $gameMap._inputZ = $gameMap._commandZ = Number(args[2]);
			}
			SceneManager._scene._spriteset._tilemap.updateMargin();
		}
		if (String(args[0]).toUpperCase() == "MOVE") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "H") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateH = $gameMap.H.SpeedRate;
					else $gameMap._moveSpeedRateH = Number(args[3]);
					$gameMap._commandH += Number(args[2])/180*Math.PI;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "V") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateV = $gameMap.V.SpeedRate;
					else $gameMap._moveSpeedRateV = Number(args[3]);
					$gameMap._commandV += Number(args[2])/180*Math.PI;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "S") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateS = $gameMap.S.SpeedRate;
					else $gameMap._moveSpeedRateS = Number(args[3]);
					$gameMap._commandS += Number(args[2]);
				} else if (String(args[1].split(',')[i]).toUpperCase() == "X") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateX = $gameMap.X.SpeedRate;
					else $gameMap._moveSpeedRateX = Number(args[3]);
					$gameMap._commandX += Number(args[2]);
				} else if (String(args[1].split(',')[i]).toUpperCase() == "Y") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateY = $gameMap.Y.SpeedRate;
					else $gameMap._moveSpeedRateY = Number(args[3]);
					$gameMap._commandY += Number(args[2]);
				} else if (String(args[1].split(',')[i]).toUpperCase() == "Z") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateZ = $gameMap.Z.SpeedRate;
					else $gameMap._moveSpeedRateZ = Number(args[3]);
					$gameMap._commandZ += Number(args[2]);
				}
			}
		}
		if (String(args[0]).toUpperCase() == "MOVE_TO") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "B") {
					if (String(args[3]).toUpperCase() != "CURRENT") $gameMap._moveSpeedRateB = Number(args[3]);
					$gameMap._newCamera = args[2].toLowerCase().split(',');
					if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) === 0) var character = $gamePlayer;
					else if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) < 0) var character = $gamePlayer.followers()._data[Math.abs(Number($gameMap._newCamera[0]) + 1)];
					else if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) > 0) var character = $gameMap.event(Number($gameMap._newCamera[0]));
					if (character) $gameMap.moveDisplayChara(character);
					else if ($gameMap._newCamera.length == 3) $gameMap.moveDisplayPixelPos(Number($gameMap._newCamera[0]), Number($gameMap._newCamera[1]));
					else if ($gameMap._newCamera.length == 2) $gameMap.moveDisplayPos(Number($gameMap._newCamera[0]), Number($gameMap._newCamera[1]));
					$gameMap._lastCamera = $gameMap._newCamera;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "H") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateH = $gameMap.H.SpeedRate;
					else $gameMap._moveSpeedRateH = Number(args[3]);
					$gameMap._commandH += $gameMap.H.MIN == 0 && $gameMap.H.MAX == 359/180*Math.PI ? this.moveToCamera(Number(args[2]), $gameMap._currentH*180/Math.PI)/180*Math.PI : (Number(args[2])/180*Math.PI - $gameMap._currentH);
				} else if (String(args[1].split(',')[i]).toUpperCase() == "V") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateV = $gameMap.V.SpeedRate;
					else $gameMap._moveSpeedRateV = Number(args[3]);
					$gameMap._commandV += Number(args[2])/180*Math.PI - $gameMap._currentV;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "S") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateS = $gameMap.S.SpeedRate;
					else $gameMap._moveSpeedRateS = Number(args[3]);
					$gameMap._commandS += Number(args[2]) - $gameMap._currentS;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "X") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateX = $gameMap.X.SpeedRate;
					else $gameMap._moveSpeedRateX = Number(args[3]);
					$gameMap._commandX += Number(args[2]) - $gameMap._currentX;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "Y") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateY = $gameMap.Y.SpeedRate;
					else $gameMap._moveSpeedRateY = Number(args[3]);
					$gameMap._commandY += Number(args[2]) - $gameMap._currentY;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "Z") {
					if (String(args[3]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateZ = $gameMap.Z.SpeedRate;
					else $gameMap._moveSpeedRateZ = Number(args[3]);
					$gameMap._commandZ += Number(args[2]) - $gameMap._currentZ;
				}
			}
		}
		if (String(args[0]).toUpperCase() == "RESET") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "B") {
					$gameMap._newCamera = $gameMap.B.InitialState;
					if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) === 0) var character = $gamePlayer;
					else if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) < 0) var character = $gamePlayer.followers()._data[Math.abs(Number($gameMap._newCamera[0]) + 1)];
					else if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) > 0) var character = $gameMap.event(Number($gameMap._newCamera[0]));
					if (character) $gameMap.setDisplayChara(character);
					else if ($gameMap._newCamera.length == 3) $gameMap.setDisplayPixelPos(Number($gameMap._newCamera[0]), Number($gameMap._newCamera[1]));
					else if ($gameMap._newCamera.length == 2) $gameMap.setDisplayPos(Number($gameMap._newCamera[0]), Number($gameMap._newCamera[1]));
					$gameMap._lastCamera = $gameMap._newCamera;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "H") SceneManager._scene._spriteset._tilemap.euler.z = $gameMap._currentH = $gameMap._inputH = $gameMap._commandH = $gameMap.H.InitialState;
				else if (String(args[1].split(',')[i]).toUpperCase() == "V") SceneManager._scene._spriteset._tilemap.euler.x = $gameMap._currentV = $gameMap._inputV = $gameMap._commandV = $gameMap.V.InitialState;
				else if (String(args[1].split(',')[i]).toUpperCase() == "s") $gameScreen._zoomScale = $gameMap._currentS = $gameMap._inputS = $gameMap._commandS = $gameMap.S.InitialState;
				else if (String(args[1].split(',')[i]).toUpperCase() == "X") $gameMap._currentX = $gameMap._inputX = $gameMap._commandX = $gameMap.X.InitialState;
				else if (String(args[1].split(',')[i]).toUpperCase() == "Y") $gameMap._currentY = $gameMap._inputY = $gameMap._commandY = $gameMap.Y.InitialState;
				else if (String(args[1].split(',')[i]).toUpperCase() == "Z") $gameMap._currentZ = $gameMap._inputZ = $gameMap._commandZ = $gameMap.Z.InitialState;
			}
			SceneManager._scene._spriteset._tilemap.updateMargin();
		}
		if (String(args[0]).toUpperCase() == "RESET_TO") {
			for (var i = 0; i < args[1].split(',').length; i++) {
				if (String(args[1].split(',')[i]).toUpperCase() == "B") {
					if (String(args[2]).toUpperCase() != "CURRENT") $gameMap._moveSpeedRateB = Number(args[2]);
					$gameMap._newCamera = $gameMap.B.InitialState;
					if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) === 0) var character = $gamePlayer;
					else if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) < 0) var character = $gamePlayer.followers()._data[Math.abs(Number($gameMap._newCamera[0]) + 1)];
					else if ($gameMap._newCamera.length == 1 && Number($gameMap._newCamera[0]) > 0) var character = $gameMap.event(Number($gameMap._newCamera[0]));
					if (character) $gameMap.moveDisplayChara(character);
					else if ($gameMap._newCamera.length == 3) $gameMap.moveDisplayPixelPos(Number($gameMap._newCamera[0]), Number($gameMap._newCamera[1]));
					else if ($gameMap._newCamera.length == 2) $gameMap.moveDisplayPos(Number($gameMap._newCamera[0]), Number($gameMap._newCamera[1]));
					$gameMap._lastCamera = $gameMap._newCamera;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "H") {
					if (String(args[2]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateH = $gameMap.H.SpeedRate;
					else $gameMap._moveSpeedRateH = Number(args[2]);
					$gameMap._commandH += $gameMap.H.MIN == 0 && $gameMap.H.MAX == 359/180*Math.PI ? this.moveToCamera($gameMap.H.InitialState*180/Math.PI, $gameMap._currentH*180/Math.PI)/180*Math.PI : (Number(args[2])/180*Math.PI - $gameMap._currentH);
				} else if (String(args[1].split(',')[i]).toUpperCase() == "V") {
					if (String(args[2]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateV = $gameMap.V.SpeedRate;
					else $gameMap._moveSpeedRateV = Number(args[2]);
					$gameMap._commandV += $gameMap.V.InitialState - $gameMap._currentV;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "S") {
					if (String(args[2]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateS = $gameMap.S.SpeedRate;
					else $gameMap._moveSpeedRateS = Number(args[2]);
					$gameMap._commandS += $gameMap.S.InitialState - $gameMap._currentS;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "X") {
					if (String(args[2]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateX = $gameMap.X.SpeedRate;
					else $gameMap._moveSpeedRateX = Number(args[2]);
					$gameMap._commandX += $gameMap.X.InitialState - $gameMap._currentX;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "Y") {
					if (String(args[2]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateY = $gameMap.Y.SpeedRate;
					else $gameMap._moveSpeedRateY = Number(args[2]);
					$gameMap._commandY += $gameMap.Y.InitialState - $gameMap._currentY;
				} else if (String(args[1].split(',')[i]).toUpperCase() == "Z") {
					if (String(args[2]).toUpperCase() == "CURRENT") $gameMap._moveSpeedRateZ = $gameMap.Z.SpeedRate;
					else $gameMap._moveSpeedRateZ = Number(args[2]);
					$gameMap._commandZ += $gameMap.Z.InitialState - $gameMap._currentZ;
				}
			}
		}
		if (String(args[0]).toUpperCase() == "REINITIALIZE") {	
			if (String(args[1]).toUpperCase() == "INITIAL_STATE") {
				for (var i = 0; i < args[2].split(',').length; i++) {
					if (String(args[2].split(',')[i]).toUpperCase() == "B") $gameMap.B.InitialState = PluginManager.parameters('Jogo_CTR_Engine')["Initial State B"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "H") $gameMap.H.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State H"])/180*Math.PI;
					else if (String(args[2].split(',')[i]).toUpperCase() == "V") $gameMap.V.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State V"])/180*Math.PI;
					else if (String(args[2].split(',')[i]).toUpperCase() == "s") $gameMap.S.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State S"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "X") $gameMap.X.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State X"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State Y"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State Z"]);
				}
			} else if (String(args[1]).toUpperCase() == "MIN") {
				for (var i = 0; i < args[2].split(',').length; i++) {
					if (String(args[2].split(',')[i]).toUpperCase() == "H") $gameMap.H.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN H"])/180*Math.PI;
					else if (String(args[2].split(',')[i]).toUpperCase() == "V") $gameMap.V.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN V"])/180*Math.PI;
					else if (String(args[2].split(',')[i]).toUpperCase() == "s") $gameMap.S.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN S"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "X") $gameMap.X.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN X"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN Y"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN Z"]);
				}
			} else if (String(args[1]).toUpperCase() == "MAX") {
				for (var i = 0; i < args[2].split(',').length; i++) {
					if (String(args[2].split(',')[i]).toUpperCase() == "H") $gameMap.H.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX H"])/180*Math.PI;
					else if (String(args[2].split(',')[i]).toUpperCase() == "V") $gameMap.V.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX V"])/180*Math.PI;
					else if (String(args[2].split(',')[i]).toUpperCase() == "s") $gameMap.S.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX S"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "X") $gameMap.X.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX X"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX Y"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX Z"]);
				}
			} else if (String(args[1]).toUpperCase() == "DISABLE_INPUT") {
				for (var i = 0; i < args[2].split(',').length; i++) {
					if (String(args[2].split(',')[i]).toUpperCase() == "H") $gameMap.H.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input H"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "V") $gameMap.V.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input V"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "s") $gameMap.S.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input S"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "X") $gameMap.X.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input X"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input Y"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input Z"]);
				}
			} else if (String(args[1]).toUpperCase() == "POSITIVE_INPUT") {
				for (var i = 0; i < args[2].split(',').length; i++) {
					if (String(args[2].split(',')[i]).toUpperCase() == "H") $gameMap.H.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input H"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "V") $gameMap.V.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input V"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "s") $gameMap.S.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input S"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "X") $gameMap.X.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input X"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input Y"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input Z"].toLowerCase().split(',');
				}
			} else if (String(args[1]).toUpperCase() == "NEGATIVE_INPUT") {
				for (var i = 0; i < args[2].split(',').length; i++) {
					if (String(args[2].split(',')[i]).toUpperCase() == "H") $gameMap.H.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input H"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "V") $gameMap.V.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input V"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "s") $gameMap.S.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input S"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "X") $gameMap.X.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input X"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input Y"].toLowerCase().split(',');
					else if (String(args[2].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input Z"].toLowerCase().split(',');
				}
			} else if (String(args[1]).toUpperCase() == "INPUT_MOVE") {
				for (var i = 0; i < args[2].split(',').length; i++) {
					if (String(args[2].split(',')[i]).toUpperCase() == "H") $gameMap.H.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move H"])/180*Math.PI;
					else if (String(args[2].split(',')[i]).toUpperCase() == "V") $gameMap.V.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move V"])/180*Math.PI;
					else if (String(args[2].split(',')[i]).toUpperCase() == "s") $gameMap.S.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move S"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "X") $gameMap.X.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move X"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move Y"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move Z"]);
				}
			} else if (String(args[1]).toUpperCase() == "SPEED_RATE") {
				for (var i = 0; i < args[2].split(',').length; i++) {
					if (String(args[2].split(',')[i]).toUpperCase() == "B") $gameMap.B.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate B"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "H") $gameMap.H.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate H"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "V") $gameMap.V.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate V"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "s") $gameMap.S.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate S"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "X") $gameMap.X.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate X"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate Y"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate Z"]);
				}
			} else if (String(args[1]).toUpperCase() == "RESET_UNINPUT") {
				for (var i = 0; i < args[2].split(',').length; i++) {
					if (String(args[2].split(',')[i]).toUpperCase() == "H") $gameMap.H.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput H"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "V") $gameMap.V.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput V"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "s") $gameMap.S.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput S"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "X") $gameMap.X.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput X"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Y") $gameMap.Y.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput Y"]);
					else if (String(args[2].split(',')[i]).toUpperCase() == "Z") $gameMap.Z.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput Z"]);
				}
			}
		}
	}
};

Game_Interpreter.prototype.moveToCamera = function(moveVal, currentVal) {
	var result = moveVal - currentVal;
	var resultNeg = -360 + result;
	var resultPos = 360 + result;
	if (Math.abs(result) > Math.abs(resultNeg)) result = resultNeg;
	if (Math.abs(result) > Math.abs(resultPos)) result = resultPos;
	return result;
	
};

////////////////////////////////////////////////////////////////////////////////
//       Graphics                                                             //
////////////////////////////////////////////////////////////////////////////////

Graphics._setupEventHandlers = function() {
    window.addEventListener('resize', this._onWindowResize.bind(this));
    document.addEventListener('keydown', this._onKeyDown.bind(this));
    document.addEventListener('keyup', this._onKeyUp.bind(this));
    document.addEventListener('keydown', this._onTouchEnd.bind(this));
    document.addEventListener('mousedown', this._onTouchEnd.bind(this));
    document.addEventListener('touchend', this._onTouchEnd.bind(this));
};

CTR_Engine.Graphics_onKeyDown = Graphics._onKeyDown;
Graphics._onKeyDown = function(event) {
  CTR_Engine.Graphics_onKeyDown.call(this, event);
  if (!event.ctrlKey && !event.altKey) CTR_Engine.keyReset(event.keyCode);
};

Graphics._onKeyUp = function(event) {
	if (!event.ctrlKey && !event.altKey) CTR_Engine.keyReset(event.keyCode, true);
};

CTR_Engine.keyReset = function(code, value) {
	if (!$gameTemp) return;
	if (SceneManager._scene.constructor.name == "Scene_Map") {
		for (var i = 0; i < $gameMap.H.PositiveInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.H.PositiveInput[i] || code === Number($gameMap.H.PositiveInput[i])) {
				if (!value && $gameMap._currentH == $gameMap._commandH && $gameMap._currentH == $gameMap._inputH && !$gameMap.H.DisableInput)
					$gameMap._inputH += $gameMap.H.InputMove;
				$gameMap._resetH = value;
			}
		}
		for (var i = 0; i < $gameMap.H.NegativeInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.H.NegativeInput[i] || code === Number($gameMap.H.NegativeInput[i])) {
				if (!value && $gameMap._currentH == $gameMap._commandH && $gameMap._currentH == $gameMap._inputH && !$gameMap.H.DisableInput)
					$gameMap._inputH -= $gameMap.H.InputMove;
				$gameMap._resetH = value;
			}
		}
		for (var i = 0; i < $gameMap.V.PositiveInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.V.PositiveInput[i] || code === Number($gameMap.V.PositiveInput[i])) {
				if (!value && $gameMap._currentV == $gameMap._commandV && $gameMap._currentV == $gameMap._inputV && !$gameMap.V.DisableInput && $gameMap._currentV != $gameMap.V.MAX)
					$gameMap._inputV += $gameMap.V.InputMove;
				$gameMap._resetV = value;
			}
		}
		for (var i = 0; i < $gameMap.V.NegativeInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.V.NegativeInput[i] || code === Number($gameMap.V.NegativeInput[i])) {
				if (!value && $gameMap._currentV == $gameMap._commandV && $gameMap._currentV == $gameMap._inputV && !$gameMap.V.DisableInput && $gameMap._currentV != $gameMap.V.MIN)
					$gameMap._inputV -= $gameMap.V.InputMove;
				$gameMap._resetV = value;
			}
		}
		for (var i = 0; i < $gameMap.S.PositiveInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.S.PositiveInput[i] || code === Number($gameMap.S.PositiveInput[i])) {
				if (!value && $gameMap._currentS == $gameMap._commandS && $gameMap._currentS == $gameMap._inputS && !$gameMap.S.DisableInput && $gameMap._currentS != $gameMap.S.MAX)
					$gameMap._inputS += $gameMap.S.InputMove;
				$gameMap._resetS = value;
			}
		}
		for (var i = 0; i < $gameMap.S.NegativeInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.S.NegativeInput[i] || code === Number($gameMap.S.NegativeInput[i])) {
				if (!value && $gameMap._currentS == $gameMap._commandS && $gameMap._currentS == $gameMap._inputS && !$gameMap.S.DisableInput && $gameMap._currentS != $gameMap.S.MIN)
					$gameMap._inputS -= $gameMap.S.InputMove;
				$gameMap._resetS = value;
			}
		}
		for (var i = 0; i < $gameMap.X.PositiveInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.X.PositiveInput[i] || code === Number($gameMap.X.PositiveInput[i])) {
				if (!value && $gameMap._currentX == $gameMap._commandX && $gameMap._currentX == $gameMap._inputX && !$gameMap.X.DisableInput && $gameMap._currentX != $gameMap.X.MAX)
					$gameMap._inputX += $gameMap.X.InputMove;
				$gameMap._resetX = value;
			}
		}
		for (var i = 0; i < $gameMap.X.NegativeInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.X.NegativeInput[i] || code === Number($gameMap.X.NegativeInput[i])) {
				if (!value && $gameMap._currentX == $gameMap._commandX && $gameMap._currentX == $gameMap._inputX && !$gameMap.X.DisableInput && $gameMap._currentX != $gameMap.X.MIN)
					$gameMap._inputX -= $gameMap.X.InputMove;
				$gameMap._resetX = value;
			}
		}
		for (var i = 0; i < $gameMap.Y.PositiveInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.Y.PositiveInput[i] || code === Number($gameMap.Y.PositiveInput[i])) {
				if (!value && $gameMap._currentY == $gameMap._commandY && $gameMap._currentY == $gameMap._inputY && !$gameMap.Y.DisableInput && $gameMap._currentY != $gameMap.Y.MAX)
					$gameMap._inputY += $gameMap.Y.InputMove;
				$gameMap._resetY = value;
			}
		}
		for (var i = 0; i < $gameMap.Y.NegativeInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.Y.NegativeInput[i] || code === Number($gameMap.Y.NegativeInput[i])) {
				if (!value && $gameMap._currentY == $gameMap._commandY && $gameMap._currentY == $gameMap._inputY && !$gameMap.Y.DisableInput && $gameMap._currentY != $gameMap.Y.MIN)
					$gameMap._inputY -= $gameMap.Y.InputMove;
				$gameMap._resetY = value;
			}
		}
		for (var i = 0; i < $gameMap.Z.PositiveInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.Z.PositiveInput[i] || code === Number($gameMap.Z.PositiveInput[i])) {
				if (!value && $gameMap._currentZ == $gameMap._commandZ && $gameMap._currentZ == $gameMap._inputZ && !$gameMap.Z.DisableInput && $gameMap._currentZ != $gameMap.Z.MAX)
					$gameMap._inputZ += $gameMap.Z.InputMove;
				$gameMap._resetZ = value;
			}
		}
		for (var i = 0; i < $gameMap.Z.NegativeInput.length; i++) {
			if (Input.keyMapper[code] == $gameMap.Z.NegativeInput[i] || code === Number($gameMap.Z.NegativeInput[i])) {
				if (!value && $gameMap._currentZ == $gameMap._commandZ && $gameMap._currentZ == $gameMap._inputZ && !$gameMap.Z.DisableInput && $gameMap._currentZ != $gameMap.Z.MIN)
					$gameMap._inputZ -= $gameMap.Z.InputMove;
				$gameMap._resetZ = value;
			}
		}
	}
};


////////////////////////////////////////////////////////////////////////////////
//       Tilemap                                                              //
////////////////////////////////////////////////////////////////////////////////

Tilemap.prototype.updateMargin = function() {
	this._updateMargin = false;
	this._updateMarginTime = true;
	this.position3d.set(Graphics.width / 2 + $gameMap._currentX, Graphics.height / 2 + $gameMap._currentY, $gameMap._currentZ);
	this.pivot3d.set(Graphics.width / 2 + $gameMap._currentX, Graphics.height / 2 + $gameMap._currentY, $gameMap._currentZ);
	$gameScreen._zoomX = Graphics.width / 2 + $gameMap._currentX;
	$gameScreen._zoomY = Graphics.height / 2 + $gameMap._currentY + $gameMap._currentZ;
	var rateX = Math.abs($gameMap._currentX) / (Graphics.width / 2);
	var rateY = Math.abs($gameMap._currentY + $gameMap._currentZ) / (Graphics.height / 2);
	if (Graphics.width > Graphics.height) {
		this._margin = (Graphics.width * ($gameMap._scale3dY / (2 - (rateX + rateY)))) / ($gameMap._currentS);
		this._width = (Graphics.width + this._margin * 2) / $gameMap._currentS * 2;
		this._height = (Graphics.width + this._margin * 2) / $gameMap._currentS * 2;
	} else {
		this._margin = (Graphics.height * ($gameMap._scale3dY / (2 - (rateX + rateY)))) / ($gameMap._currentS);
		this._width = (Graphics.height + this._margin * 2) / $gameMap._currentS * 2;
		this._height = (Graphics.height + this._margin * 2) / $gameMap._currentS * 2;
	}
	this._needsRepaint = true;
	this.updateTransform();
	setTimeout(this._updateMarginTime = false, 6);
};


////////////////////////////////////////////////////////////////////////////////
//       Spriteset_Map                                                        //
////////////////////////////////////////////////////////////////////////////////

CTR_Engine.Spriteset_Map_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
	
	if($gameMap._currentH === undefined) this._tilemap.euler.z = $gameMap._inputH = $gameMap._commandH = $gameMap._currentH = $gameMap.H.InitialState;
	else if ($gameMap._commandH != $gameMap._currentH) {
		if (($gameMap._commandH > $gameMap._currentH) && ((Math.abs($gameMap._commandH - $gameMap._currentH)) < Math.abs($gameMap._moveSpeedRateH / 10))) $gameMap._currentH = $gameMap._commandH;
		else if (($gameMap._commandH < $gameMap._currentH) && ((Math.abs($gameMap._currentH - $gameMap._commandH)) < Math.abs($gameMap._moveSpeedRateH / 10))) $gameMap._currentH = $gameMap._commandH;
		else if ($gameMap._commandH > $gameMap._currentH) $gameMap._currentH += $gameMap._moveSpeedRateH / 10;
		else $gameMap._currentH -= $gameMap._moveSpeedRateH / 10;
		if ($gameMap._currentH > $gameMap.H.MAX) { $gameMap._currentH -= ($gameMap.H.MAX + 1 / 180 * Math.PI); $gameMap._commandH -= ($gameMap.H.MAX + 1 / 180 * Math.PI); }
		else if ($gameMap._currentH < $gameMap.H.MIN) { $gameMap._currentH += ($gameMap.H.MAX + 1 / 180 * Math.PI); $gameMap._commandH += ($gameMap.H.MAX + 1 / 180 * Math.PI); }
		this._tilemap.euler.z = $gameMap._inputH = $gameMap._currentH;
		var checkH = $gameMap._currentH * 180 / Math.PI;
		if (this._checkH != 0 && (checkH >= 90 && checkH <= 270)) { this._checkH = 0; this._tilemap._needsRepaint = true; }
		else if (this._checkH != 1 && (checkH >= 180 && checkH <= 360)) { this._checkH = 1; this._tilemap._needsRepaint = true; }
		else if (this._checkH != 2 && ((checkH >= 270 && checkH <= 360) || (checkH >= 2 && checkH <= 90))) { this._checkH = 0; this._tilemap._needsRepaint = true; }
		else if (this._checkH != 3 && (checkH >= 0 && checkH <= 180)) { this._checkH = 3; this._tilemap._needsRepaint = true; }
	} else if ($gameMap._inputH != $gameMap._currentH) {
		if (($gameMap._inputH > $gameMap._currentH) && ((Math.abs($gameMap._inputH - $gameMap._currentH)) < Math.abs($gameMap.H.SpeedRate / 10))) $gameMap._currentH = $gameMap._inputH;
		else if (($gameMap._inputH < $gameMap._currentH) && ((Math.abs($gameMap._currentH - $gameMap._inputH)) < Math.abs($gameMap.H.SpeedRate / 10))) $gameMap._currentH = $gameMap._inputH;
		else if ($gameMap._inputH > $gameMap._currentH) $gameMap._currentH += $gameMap.H.SpeedRate / 10;
		else $gameMap._currentH -= $gameMap.H.SpeedRate / 10;
		if ($gameMap._currentH > $gameMap.H.MAX) { $gameMap._currentH -= ($gameMap.H.MAX + 1 / 180 * Math.PI); $gameMap._inputH -= ($gameMap.H.MAX + 1 / 180 * Math.PI); }
		else if ($gameMap._currentH < $gameMap.H.MIN) { $gameMap._currentH += ($gameMap.H.MAX + 1 / 180 * Math.PI); $gameMap._inputH += ($gameMap.H.MAX + 1 / 180 * Math.PI); }
		this._tilemap.euler.z = $gameMap._commandH = $gameMap._currentH;
		var checkH = $gameMap._currentH * 180 / Math.PI;
		if (this._checkH != 0 && (checkH >= 90 && checkH <= 270)) { this._checkH = 0; this._tilemap._needsRepaint = true; }
		else if (this._checkH != 1 && (checkH >= 180 && checkH <= 360)) { this._checkH = 1; this._tilemap._needsRepaint = true; }
		else if (this._checkH != 2 && ((checkH >= 270 && checkH <= 360) || (checkH >= 2 && checkH <= 90))) { this._checkH = 0; this._tilemap._needsRepaint = true; }
		else if (this._checkH != 3 && (checkH >= 0 && checkH <= 180)) { this._checkH = 3; this._tilemap._needsRepaint = true; }
		console.log(checkH)
	} else if ($gameMap.H.ResetUninput && $gameMap._resetH) {
		$gameMap._inputH = $gameMap.H.InitialState;
	}

	if (($gameMap._currentV === undefined) || ($gameMap._currentV != $gameMap._commandV) || ($gameMap._currentV != $gameMap._inputV)) {
		if ($gameMap._currentV === undefined) this._tilemap.euler.x = $gameMap._inputV = $gameMap._commandV = $gameMap._currentV = $gameMap.V.InitialState;
		else if ($gameMap._commandV != $gameMap._currentV) {
			if (($gameMap._commandV > $gameMap._currentV) && ((Math.abs($gameMap._commandV - $gameMap._currentV)) < Math.abs($gameMap._moveSpeedRateV / 10))) $gameMap._currentV = $gameMap._commandV;
			else if (($gameMap._commandV < $gameMap._currentV) && ((Math.abs($gameMap._currentV - $gameMap._commandV)) < Math.abs($gameMap._moveSpeedRateV / 10))) $gameMap._currentV = $gameMap._commandV;
			else if ($gameMap._commandV > $gameMap._currentV) $gameMap._currentV += $gameMap._moveSpeedRateV / 10;
			else $gameMap._currentV -= $gameMap._moveSpeedRateV / 10;
			if ($gameMap._currentV > $gameMap.V.MAX) { $gameMap._currentV = $gameMap.V.MAX; $gameMap._commandV = $gameMap.V.MAX; }
			else if ($gameMap._currentV < $gameMap.V.MIN) { $gameMap._currentV = $gameMap.V.MIN; $gameMap._commandV = $gameMap.V.MIN; }
			this._tilemap.euler.x = $gameMap._inputV = $gameMap._currentV;
		} else if ($gameMap._inputV != $gameMap._currentV) {
			if (($gameMap._inputV > $gameMap._currentV) && ((Math.abs($gameMap._inputV - $gameMap._currentV)) < Math.abs($gameMap.V.SpeedRate / 10))) $gameMap._currentV = $gameMap._inputV;
			else if (($gameMap._inputV < $gameMap._currentV) && ((Math.abs($gameMap._currentV - $gameMap._inputV)) < Math.abs($gameMap.V.SpeedRate / 10))) $gameMap._currentV = $gameMap._inputV;
			else if ($gameMap._inputV > $gameMap._currentV) $gameMap._currentV += $gameMap.V.SpeedRate / 10;
			else $gameMap._currentV -= $gameMap.V.SpeedRate / 10;
			if ($gameMap._currentV > $gameMap.V.MAX) { $gameMap._currentV = $gameMap.V.MAX; $gameMap._inputV = $gameMap.V.MAX; }
			else if ($gameMap._currentV < $gameMap.V.MIN) { $gameMap._currentV = $gameMap.V.MIN; $gameMap._inputV = $gameMap.V.MIN; }
			this._tilemap.euler.x = $gameMap._commandV = $gameMap._currentV;
		} else if ($gameMap.V.ResetUninput && $gameMap._resetV) {
			$gameMap._inputV = $gameMap.V.InitialState;
		}
		if ($gameMap._currentV < 15/180*Math.PI) {
			$gameMap._scale3dY = 1+$gameMap._currentV/10;
		} else if ($gameMap._currentV < 30/180*Math.PI) {
			$gameMap._scale3dY = 1.8+$gameMap._currentV*0.5/Math.PI - Math.pow($gameMap._currentV*1/Math.PI, $gameMap._currentV*1/Math.PI);

		} else if ($gameMap._currentV < 45/180*Math.PI) {
			$gameMap._scale3dY = 0.1 + $gameMap._currentV*0.5/Math.PI + Math.pow($gameMap._currentV*5.4/Math.PI, $gameMap._currentV*2.5/Math.PI);

		} else if ($gameMap._currentV < 60/180*Math.PI) {
			$gameMap._scale3dY = 0.2 + Math.pow($gameMap._currentV*5/Math.PI, $gameMap._currentV*3.4/Math.PI);
			
		} else if ($gameMap._currentV < 68/180*Math.PI) {
			$gameMap._scale3dY = 0.4 + Math.pow($gameMap._currentV*3.8/Math.PI, $gameMap._currentV*6/Math.PI);

		} else if ($gameMap._currentV < 69/180*Math.PI) {
			$gameMap._scale3dY = -0.5 + Math.pow($gameMap._currentV*6/Math.PI, $gameMap._currentV*3.75/Math.PI);
			
		} else if ($gameMap._currentV < 74/180*Math.PI) {
			$gameMap._scale3dY = -0.8 + Math.pow($gameMap._currentV*6/Math.PI, $gameMap._currentV*4/Math.PI);
			
		} else if ($gameMap._currentV < 76/180*Math.PI) {
			$gameMap._scale3dY = -1 + Math.pow($gameMap._currentV*6/Math.PI, $gameMap._currentV*4.15/Math.PI);
			
		} else {
			$gameMap._scale3dY = -3.7 + Math.pow($gameMap._currentV*9.1/Math.PI, $gameMap._currentV*3.61/Math.PI);

		}
		if (this._checkV != Math.floor($gameMap._currentV / 10)) {
			this._checkV = Math.floor($gameMap._currentV / 10);
			this._tilemap._updateMargin = true;
		}
	}
	
	if($gameMap._currentS === undefined) $gameScreen._zoomScale = $gameMap._inputS = $gameMap._commandS = $gameMap._currentS = $gameMap.S.InitialState;
	else if ($gameMap._commandS != $gameMap._currentS) {
		if (($gameMap._commandS > $gameMap._currentS) && ((Math.abs($gameMap._commandS - $gameMap._currentS)) < Math.abs($gameMap._moveSpeedRateS / 20))) $gameMap._currentS = $gameMap._commandS;
		else if (($gameMap._commandS < $gameMap._currentS) && ((Math.abs($gameMap._currentS - $gameMap._commandS)) < Math.abs($gameMap._moveSpeedRateS / 20))) $gameMap._currentS = $gameMap._commandS;
		else if ($gameMap._commandS > $gameMap._currentS) $gameMap._currentS += $gameMap._moveSpeedRateS / 20;
		else $gameMap._currentS -= $gameMap._moveSpeedRateS / 20;
		if ($gameMap._currentS > $gameMap.S.MAX) { $gameMap._currentS -= ($gameMap.S.MAX); $gameMap._commandS = ($gameMap.S.MAX); }
		else if ($gameMap._currentS < $gameMap.S.MIN) { $gameMap._currentS += ($gameMap.S.MAX); $gameMap._commandS = ($gameMap.S.MIN); }
		$gameScreen._zoomScale = $gameMap._inputS = $gameMap._currentS;
		if (this._checkS != Math.floor($gameMap._currentS * 10)) {
			this._checkS = Math.floor($gameMap._currentS * 10);
			this._tilemap._updateMargin = true;
		}
	} else if ($gameMap._inputS != $gameMap._currentS) {
		if (($gameMap._inputS > $gameMap._currentS) && ((Math.abs($gameMap._inputS - $gameMap._currentS)) < Math.abs($gameMap.S.SpeedRate / 20))) $gameMap._currentS = $gameMap._inputS;
		else if (($gameMap._inputS < $gameMap._currentS) && ((Math.abs($gameMap._currentS - $gameMap._inputS)) < Math.abs($gameMap.S.SpeedRate / 20))) $gameMap._currentS = $gameMap._inputS;
		else if ($gameMap._inputS > $gameMap._currentS) $gameMap._currentS += $gameMap.S.SpeedRate / 20;
		else $gameMap._currentS -= $gameMap.S.SpeedRate / 20;
		if ($gameMap._currentS > $gameMap.S.MAX) { $gameMap._currentS = ($gameMap.S.MAX); $gameMap._inputS = ($gameMap.S.MAX); }
		else if ($gameMap._currentS < $gameMap.S.MIN) { $gameMap._currentS = ($gameMap.S.MIN); $gameMap._inputS = ($gameMap.S.MIN); }
		$gameScreen._zoomScale = $gameMap._commandS = $gameMap._currentS;
		if (this._checkS != Math.floor($gameMap._currentS * 10)) {
			this._checkS = Math.floor($gameMap._currentS * 10);
			this._tilemap._updateMargin = true;
		}
	} else if ($gameMap.S.ResetUninput && $gameMap._resetS) {
		$gameMap._inputS = $gameMap.S.InitialState;
	}

	if ($gameMap._commandX != $gameMap._currentX) {
		if (($gameMap._commandX > $gameMap._currentX) && ((Math.abs($gameMap._commandX - $gameMap._currentX)) < Math.abs($gameMap._moveSpeedRateX * 20))) $gameMap._currentX = $gameMap._commandX;
		else if (($gameMap._commandX < $gameMap._currentX) && ((Math.abs($gameMap._currentX - $gameMap._commandX)) < Math.abs($gameMap._moveSpeedRateX * 20))) $gameMap._currentX = $gameMap._commandX;
		else if ($gameMap._commandX > $gameMap._currentX) $gameMap._currentX += $gameMap._moveSpeedRateX * 20;
		else $gameMap._currentX -= $gameMap._moveSpeedRateX * 20;
		if ($gameMap._currentX > $gameMap.X.MAX) { $gameMap._currentX = $gameMap.X.MAX; $gameMap._commandX = $gameMap.X.MAX; }
		else if ($gameMap._currentX < $gameMap.X.MIN) { $gameMap._currentX = $gameMap.X.MIN; $gameMap._commandX = $gameMap.X.MIN; }
		$gameMap._inputX = $gameMap._currentX;
		if (this._checkX != Math.floor($gameMap._currentX / 48)) {
			this._checkX = Math.floor($gameMap._currentX / 48);
			this._tilemap._updateMargin = true;
		} else {
			this._tilemap.position3d.x = Graphics.width / 2 + $gameMap._currentX;
			this._tilemap.pivot3d.x = Graphics.width / 2 + $gameMap._currentX;
			$gameScreen._zoomX = Graphics.width / 2 + $gameMap._currentX;
		}
	} else if ($gameMap._inputX != $gameMap._currentX) {
		if (($gameMap._inputX > $gameMap._currentX) && ((Math.abs($gameMap._inputX - $gameMap._currentX)) <= Math.abs($gameMap.X.SpeedRate * 20))) $gameMap._currentX = $gameMap._inputX;
		else if (($gameMap._inputX < $gameMap._currentX) && ((Math.abs($gameMap._currentX - $gameMap._inputX)) <= Math.abs($gameMap.X.SpeedRate * 20))) $gameMap._currentX = $gameMap._inputX;
		else if ($gameMap._inputX > $gameMap._currentX) $gameMap._currentX += $gameMap.X.SpeedRate * 20;
		else $gameMap._currentX -= $gameMap.X.SpeedRate * 20;
		if ($gameMap._currentX > $gameMap.X.MAX) { $gameMap._currentX = $gameMap.X.MAX; $gameMap._inputX = $gameMap.X.MAX; }
		else if ($gameMap._currentX < $gameMap.X.MIN) { $gameMap._currentX = $gameMap.X.MIN; $gameMap._inputX = $gameMap.X.MIN; }
		$gameMap._commandX = $gameMap._currentX;
		if (this._checkX != Math.floor($gameMap._currentX / 48)) {
			this._checkX = Math.floor($gameMap._currentX / 48);
			this._tilemap._updateMargin = true;
		} else {
			this._tilemap.position3d.x = Graphics.width / 2 + $gameMap._currentX;
			this._tilemap.pivot3d.x = Graphics.width / 2 + $gameMap._currentX;
			$gameScreen._zoomX = Graphics.width / 2 + $gameMap._currentX;
		}
	} else if ($gameMap.X.ResetUninput && $gameMap._resetX) {
		$gameMap._inputX = $gameMap.X.InitialState;
	}
	
	if ($gameMap._commandY != $gameMap._currentY) {
		if (($gameMap._commandY > $gameMap._currentY) && ((Math.abs($gameMap._commandY - $gameMap._currentY)) < Math.abs($gameMap._moveSpeedRateY * 20))) $gameMap._currentY = $gameMap._commandY;
		else if (($gameMap._commandY < $gameMap._currentY) && ((Math.abs($gameMap._currentY - $gameMap._commandY)) < Math.abs($gameMap._moveSpeedRateY * 20))) $gameMap._currentY = $gameMap._commandY;
		else if ($gameMap._commandY > $gameMap._currentY) $gameMap._currentY += $gameMap._moveSpeedRateY * 20;
		else $gameMap._currentY -= $gameMap._moveSpeedRateY * 20;
		if ($gameMap._currentY > $gameMap.Y.MAX) { $gameMap._currentY = $gameMap.Y.MAX; $gameMap._commandY = $gameMap.Y.MAX; }
		else if ($gameMap._currentY < $gameMap.Y.MIN) { $gameMap._currentY = $gameMap.Y.MIN; $gameMap._commandY = $gameMap.Y.MIN; }
		$gameMap._inputY = $gameMap._currentY;
		if (this._checkY != Math.floor($gameMap._currentY / 48)) {
			this._checkY = Math.floor($gameMap._currentY / 48);
			this._tilemap._updateMargin = true;
		} else {
			this._tilemap.position3d.y = Graphics.height / 2 + $gameMap._currentY;
			this._tilemap.pivot3d.y = Graphics.height / 2 + $gameMap._currentY;
			$gameScreen._zoomY = Graphics.height / 2 + $gameMap._currentY + $gameMap._currentZ;
		}
	} else if ($gameMap._inputY != $gameMap._currentY) {
		if (($gameMap._inputY > $gameMap._currentY) && ((Math.abs($gameMap._inputY - $gameMap._currentY)) < Math.abs($gameMap.Y.SpeedRate * 20))) $gameMap._currentY = $gameMap._inputY;
		else if (($gameMap._inputY < $gameMap._currentY) && ((Math.abs($gameMap._currentY - $gameMap._inputY)) < Math.abs($gameMap.Y.SpeedRate * 20))) $gameMap._currentY = $gameMap._inputY;
		else if ($gameMap._inputY > $gameMap._currentY) $gameMap._currentY += $gameMap.Y.SpeedRate * 20;
		else $gameMap._currentY -= $gameMap.Y.SpeedRate * 20;
		if ($gameMap._currentY > $gameMap.Y.MAX) { $gameMap._currentY = $gameMap.Y.MAX; $gameMap._inputY = $gameMap.Y.MAX; }
		else if ($gameMap._currentY < $gameMap.Y.MIN) { $gameMap._currentY = $gameMap.Y.MIN; $gameMap._inputY = $gameMap.Y.MIN; }
		$gameMap._commandY = $gameMap._currentY;
		if (this._checkY != Math.floor($gameMap._currentY / 48)) {
			this._checkY = Math.floor($gameMap._currentY / 48);
			this._tilemap._updateMargin = true;
		} else {
			this._tilemap.position3d.y = Graphics.height / 2 + $gameMap._currentY;
			this._tilemap.pivot3d.y = Graphics.height / 2 + $gameMap._currentY;
			$gameScreen._zoomY = Graphics.height / 2 + $gameMap._currentY + $gameMap._currentZ;
		}
	} else if ($gameMap.Y.ResetUninput && $gameMap._resetY) {
		$gameMap._inputY = $gameMap.Y.InitialState;
	}

	if ($gameMap._commandZ != $gameMap._currentZ) {
		if (($gameMap._commandZ > $gameMap._currentZ) && ((Math.abs($gameMap._commandZ - $gameMap._currentZ)) < Math.abs($gameMap._moveSpeedRateZ * 20))) $gameMap._currentZ = $gameMap._commandZ;
		else if (($gameMap._commandZ < $gameMap._currentZ) && ((Math.abs($gameMap._currentZ - $gameMap._commandZ)) < Math.abs($gameMap._moveSpeedRateZ * 20))) $gameMap._currentZ = $gameMap._commandZ;
		else if ($gameMap._commandZ > $gameMap._currentZ) $gameMap._currentZ += $gameMap._moveSpeedRateZ * 20;
		else $gameMap._currentZ -= $gameMap._moveSpeedRateZ * 20;
		if ($gameMap._currentZ > $gameMap.Z.MAX) { $gameMap._currentZ = $gameMap.Z.MAX; $gameMap._commandZ = $gameMap.Z.MAX; }
		else if ($gameMap._currentZ < $gameMap.Z.MIN) { $gameMap._currentZ = $gameMap.Z.MIN; $gameMap._commandZ = $gameMap.Z.MIN; }
		$gameMap._inputZ = $gameMap._currentZ;
		if (this._checkZ != Math.floor($gameMap._currentZ / 48)) {
			this._checkZ = Math.floor($gameMap._currentZ / 48);
			this._tilemap._updateMargin = true;
		} else {
			this._tilemap.position3d.z = $gameMap._currentZ;
			this._tilemap.pivot3d.z = $gameMap._currentZ;
			$gameScreen._zoomY = Graphics.height / 2 + $gameMap._currentY + $gameMap._currentZ;
		}
	} else if ($gameMap._inputZ != $gameMap._currentZ) {
		if (($gameMap._inputZ > $gameMap._currentZ) && ((Math.abs($gameMap._inputZ - $gameMap._currentZ)) < Math.abs($gameMap.Z.SpeedRate * 20))) $gameMap._currentZ = $gameMap._inputZ;
		else if (($gameMap._inputZ < $gameMap._currentZ) && ((Math.abs($gameMap._currentZ - $gameMap._inputZ)) < Math.abs($gameMap.Z.SpeedRate * 20))) $gameMap._currentZ = $gameMap._inputZ;
		else if ($gameMap._inputZ > $gameMap._currentZ) $gameMap._currentZ += $gameMap.Z.SpeedRate * 20;
		else $gameMap._currentZ -= $gameMap.Z.SpeedRate * 20;
		if ($gameMap._currentZ > $gameMap.Z.MAX) { $gameMap._currentZ = $gameMap.Z.MAX; $gameMap._inputZ = $gameMap.Z.MAX; }
		else if ($gameMap._currentZ < $gameMap.Z.MIN) { $gameMap._currentZ = $gameMap.Z.MIN; $gameMap._inputZ = $gameMap.Z.MIN; }
		$gameMap._commandZ = $gameMap._currentZ;
		if (this._checkZ != Math.floor($gameMap._currentZ / 48)) {
			this._checkZ = Math.floor($gameMap._currentZ / 48);
			this._tilemap._updateMargin = true;
		} else {
			this._tilemap.position3d.z = $gameMap._currentZ;
			this._tilemap.pivot3d.z = $gameMap._currentZ;
			$gameScreen._zoomY = Graphics.height / 2 + $gameMap._currentY + $gameMap._currentZ;
		}
	} else if ($gameMap.Z.ResetUninput && $gameMap._resetZ) {
		$gameMap._inputZ = $gameMap.Z.InitialState;
	}

	if (this._tilemap._updateMargin && !this._tilemap._updateMarginTime) this._tilemap.updateMargin();
	CTR_Engine.Spriteset_Map_update.call(this);
};

CTR_Engine.Spriteset_Map_createTilemap = Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap = function() {
	CTR_Engine.Spriteset_Map_createTilemap.call(this);
	this._tilemap.convertTo3d();
	this._tilemap.position3d.set(Graphics.width / 2 + $gameMap.X.InitialState, Graphics.height / 2 + $gameMap.Y.InitialState, $gameMap.Z.InitialState);
	this._tilemap.pivot3d.set(Graphics.width / 2 + $gameMap.X.InitialState, Graphics.height / 2 + $gameMap.Y.InitialState, $gameMap.Z.InitialState)
	$gameScreen._zoomX = Graphics.width / 2 + $gameMap.X.InitialState;
	$gameScreen._zoomY = Graphics.height / 2 + $gameMap.Y.InitialState + $gameMap.Z.InitialState;
	$gameScreen._zoomScale = $gameMap._currentS;
	if ($gameMap._currentX === undefined) $gameMap._currentX = $gameMap._inputX = $gameMap._commandX = $gameMap.X.InitialState;
	if ($gameMap._currentY === undefined) $gameMap._currentY = $gameMap._inputY = $gameMap._commandY = $gameMap.Y.InitialState;
	if ($gameMap._currentZ === undefined) $gameMap._currentZ = $gameMap._inputZ = $gameMap._commandZ = $gameMap.Z.InitialState;
};

CTR_Engine.Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function() {
	CTR_Engine.Spriteset_Map_createCharacters.call(this);
    for (var i = 0; i < this._characterSprites.length; i++) {
		this._characterSprites[i].convertTo3d();
		var shiftY = this._characterSprites[i]._character.shiftY();
		var middle = !this._characterSprites[i]._character.isObjectCharacter();
		if (this._characterSprites[i]._character.isWallCharacter()) {
			this._characterSprites[i].euler.x = -0.5 * Math.PI;
			if (this._characterSprites[i]._character.direction() == 2) {
				this._characterSprites[i].position3d.set(- $gameMap.tileWidth() / 2, middle ? - $gameMap.tileHeight() / 2 + shiftY : shiftY, 0);
				this._characterSprites[i].pivot3d.set(0, 0, 0);
			} else if (this._characterSprites[i]._character.direction() == 4) {
				this._characterSprites[i].position3d.set(middle ? 0 : - $gameMap.tileWidth() / 2, - $gameMap.tileHeight() + shiftY, 0);
				this._characterSprites[i].pivot3d.set(0, 0, 0);
				this._characterSprites[i].euler.y = 1.5 * Math.PI;
			} else if (this._characterSprites[i]._character.direction() == 6) {
				this._characterSprites[i].position3d.set(middle ? 0 : $gameMap.tileWidth() / 2, shiftY, 0);
				this._characterSprites[i].pivot3d.set(0, 0, 0);
				this._characterSprites[i].euler.y = 0.5 * Math.PI;
			} else if (this._characterSprites[i]._character.direction() == 8) {
				this._characterSprites[i].position3d.set($gameMap.tileWidth() / 2, middle ? - $gameMap.tileHeight() / 2 + shiftY : - $gameMap.tileHeight() + shiftY, 0);
				this._characterSprites[i].pivot3d.set(0, 0, 0);
				this._characterSprites[i].euler.y = Math.PI;
			}
		} else if (!this._characterSprites[i]._character._tileId > 0) {
			this._characterSprites[i].position3d.set(0, -$gameMap.tileHeight() / 2 + shiftY, 0);
			this._characterSprites[i].pivot3d.set(0, -$gameMap.tileHeight() / 4 + shiftY, 0);
		} else {
			this._characterSprites[i].position3d.set(0, -$gameMap.tileHeight() / 4, 0);
			this._characterSprites[i].pivot3d.set(0, -$gameMap.tileHeight() / 4 + shiftY, 0);
		}
    }
};

CTR_Engine.Spriteset_Map_createDestination = Spriteset_Map.prototype.createDestination;
Spriteset_Map.prototype.createDestination = function() {
	CTR_Engine.Spriteset_Map_createDestination.call(this);
    this._destinationSprite.convertTo3d();
	this._destinationSprite.position3d.set(0, 0, 0);
};


////////////////////////////////////////////////////////////////////////////////
//       Sprite_Character                                                     //
////////////////////////////////////////////////////////////////////////////////

CTR_Engine.Sprite_Character_setCharacter = Sprite_Character.prototype.setCharacter;
Sprite_Character.prototype.setCharacter = function(character) {
	CTR_Engine.Sprite_Character_setCharacter.call(this, character);
	if (this._character.isWallCharacter()) {
		this.anchor.x = 0;
		this.anchor.y = 1;
	}
};

CTR_Engine.Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function() {
	CTR_Engine.Sprite_Character_updatePosition.call(this);
	if (!this._character._tileId > 0 && !this._character.isWallCharacter()) {
		this.euler.z = -$gameMap._currentH;
		this.scale3d.y = $gameMap._scale3dY;
		this.z += this.getDepth() / 1000 + this.adjustGetDepth();
	} else if (this._character.isWallCharacter()) {
		var eulerZ = $gameMap._currentH*180/Math.PI;
		var adjust = 0.025;
		this.z += this.adjustGetDepth();
		if (this._character.direction() == 2) {
			if (this._character.isObjectCharacter() && (eulerZ >= 90 && eulerZ <= 270)) this.z = 0;
			else if (eulerZ >= 0 && eulerZ <= 90) this.z += this.getDepth() / 1000 + adjust/1.5;
			else if (eulerZ >= 90 && eulerZ <= 180) this.z += this.getDepth() / 1000 + adjust/1.5;
			else this.z += this.getDepth() / 1000;
			if (this._character._doorState && String(this._character._doorState.split(',')[0]).toUpperCase() == "POSITIVE") {
				if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "OPEN") && this.euler.y < 0.5 * Math.PI) this.euler.y += 1/180*Math.PI;
				else if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "CLOSE") && this.euler.y > 0) this.euler.y -= 1/180*Math.PI;
			} else if (this._character._doorState && String(this._character._doorState.split(',')[0]).toUpperCase() == "NEGATIVE") {
				if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "OPEN") && this.euler.y > - 0.5 * Math.PI) this.euler.y -= 1/180*Math.PI;
				else if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "CLOSE") && this.euler.y < 0) this.euler.y += 1/180*Math.PI;
			}
		} else if (this._character.direction() == 4) {
			if (this._character.isObjectCharacter() && (eulerZ >= 0 && eulerZ <= 180)) this.z = 0;
			else if ((eulerZ >= 270 && eulerZ <= 360) || (eulerZ == 0)) this.z += this.getDepth() / 1000 + adjust;
			else if (eulerZ >= 0 && eulerZ <= 90) this.z += this.getDepth() / 1000 + adjust/1.5;
			else this.z += this.getDepth() / 1000;
			if (this._character._doorState && String(this._character._doorState.split(',')[0]).toUpperCase() == "POSITIVE") {
				if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "OPEN") && this.euler.y < 2 * Math.PI) this.euler.y += 1/180*Math.PI;
				else if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "CLOSE") && this.euler.y > 1.5 * Math.PI) this.euler.y -= 1/180*Math.PI;
			} else if (this._character._doorState && String(this._character._doorState.split(',')[0]).toUpperCase() == "NEGATIVE") {
				if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "OPEN") && this.euler.y > Math.PI) this.euler.y -= 1/180*Math.PI;
				else if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "CLOSE") && this.euler.y < 1.5 * Math.PI) this.euler.y += 1/180*Math.PI;
			}
		} else if (this._character.direction() == 6) {
			if (this._character.isObjectCharacter() && (eulerZ >= 180 && eulerZ <= 360)) this.z = 0;
			else if (this._character.isObjectCharacter() && (eulerZ >= 0 && eulerZ <= 90)) this.z += this.getDepth() / 1000 + adjust;
			else if (eulerZ >= 90 && eulerZ <= 180) this.z += this.getDepth() / 1000 + adjust;
			else if (eulerZ >= 180 && eulerZ <= 270) this.z += this.getDepth() / 1000 + adjust*1.5;
			else if (eulerZ >= 0 && eulerZ <= 90) this.z += this.getDepth() / 1000 - adjust/2;
			else this.z += this.getDepth() / 1000;
			if (this._character._doorState && String(this._character._doorState.split(',')[0]).toUpperCase() == "POSITIVE") {
				if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "OPEN") && this.euler.y < Math.PI) this.euler.y += 1/180*Math.PI;
				else if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "CLOSE") && this.euler.y > 0.5 * Math.PI) this.euler.y -= 1/180*Math.PI;
			} else if (this._character._doorState && String(this._character._doorState.split(',')[0]).toUpperCase() == "NEGATIVE") {
				if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "OPEN") && this.euler.y > 0) this.euler.y -= 1/180*Math.PI;
				else if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "CLOSE") && this.euler.y < 0.5 * Math.PI) this.euler.y += 1/180*Math.PI;
			}
		} else if (this._character.direction() == 8) {
			if (this._character.isObjectCharacter() && ((eulerZ >= 270 && eulerZ <= 360) || (eulerZ >= 0 && eulerZ <= 90))) this.z = 0;
			else if (eulerZ >= 180 && eulerZ <= 270) this.z += this.getDepth() / 1000 + adjust;
			else if (eulerZ >= 270 && eulerZ <= 360) this.z += this.getDepth() / 1000 + adjust/1.5;
			else if (eulerZ >= 0 && eulerZ <= 90) this.z += this.getDepth() / 1000 - adjust/2;
			else this.z += this.getDepth() / 1000;
			if (this._character._doorState && String(this._character._doorState.split(',')[0]).toUpperCase() == "POSITIVE") {
				if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "OPEN") && this.euler.y < 1.5 * Math.PI) this.euler.y += 1/180*Math.PI;
				else if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "CLOSE") && this.euler.y > Math.PI) this.euler.y -= 1/180*Math.PI;
			} else if (this._character._doorState && String(this._character._doorState.split(',')[0]).toUpperCase() == "NEGATIVE") {
				if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "OPEN") && this.euler.y > 0.5 * Math.PI) this.euler.y -= 1/180*Math.PI;
				else if ((String(this._character._doorState.split(',')[1]).toUpperCase() == "CLOSE") && this.euler.y < Math.PI) this.euler.y += 1/180*Math.PI;
			}
		}
	}
	this._character._screenX = this.position.x;
	this._character._screenY = this.position.y;
	this._character._screenZ = this.position.z;
};

Sprite_Character.prototype.characterPatternY = function() {
	var direction = this._character.isWallCharacter() ? 2 : this._character.isObjectCharacter() ? this._character.direction() : this._character.modifiedDirection(this._character.direction());
	return (direction - 2) / 2;
};

Sprite_Character.prototype.adjustGetDepth = function() {
	var eulerZ = $gameMap._currentH*180/Math.PI;
	if (eulerZ > 0 && eulerZ <= 90) {
		return this.position.y / 4800 + this.position.x / 4800;
	} else if (eulerZ > 90 && eulerZ <= 180) {
		return  - this.position.y / 4800 - this.position.x / 4800;
	} else if (eulerZ > 180 && eulerZ <= 270) {
		return - this.position.y / 4800 - this.position.x / 4800;
	} else return 0;
};

Sprite_Character.prototype.startBalloon = function() {
    if (!this._balloonSprite) {
        this._balloonSprite = new Sprite_Balloon();
    }
    this._balloonSprite.setup(this._character.balloonId());
    this.addChild(this._balloonSprite);
};

Sprite_Character.prototype.updateBalloon = function() {
    this.setupBalloon();
    if (this._balloonSprite) {
        this._balloonSprite.y = - this.height;
        if (!this._balloonSprite.isPlaying()) {
            this.endBalloon();
        }
    }
};

Sprite_Character.prototype.endBalloon = function() {
    if (this._balloonSprite) {
        this.removeChild(this._balloonSprite);
        this._balloonSprite = null;
    }
};

////////////////////////////////////////////////////////////////////////////////
//       Game_Character                                                       //
////////////////////////////////////////////////////////////////////////////////

Game_CharacterBase.prototype.isWallCharacter = function() {
    return this._isWallCharacter;
};

CTR_Engine.Game_CharacterBase_setImage = Game_CharacterBase.prototype.setImage;
Game_CharacterBase.prototype.setImage = function(characterName, characterIndex) {
	CTR_Engine.Game_CharacterBase_setImage.call(this, characterName, characterIndex);
    this._isWallCharacter = ImageManager.isWallCharacter(this._characterName);
};

Game_Character.prototype.modifiedDirection = function(direction) {
	var eulerZ = $gameMap._currentH*180/Math.PI;
	if (eulerZ > 225 && eulerZ <= 315) {
		if (direction == 2) var modifiedDirection = 6;
		else if (direction == 4) var modifiedDirection = 2;
		else if (direction == 6) var modifiedDirection = 8;
		else if (direction == 8) var modifiedDirection = 4;
	} else if (eulerZ > 135 && eulerZ <= 225) {
		if (direction == 2) var modifiedDirection  = 8;
		else if (direction == 4) var modifiedDirection = 6;
		else if (direction == 6) var modifiedDirection = 4;
		else if (direction == 8) var modifiedDirection = 2;
	} else if (eulerZ > 45 && eulerZ <= 135) {
		if (direction == 2) var modifiedDirection = 4;
		else if (direction == 4) var modifiedDirection = 8;
		else if (direction == 6) var modifiedDirection = 2;
		else if (direction == 8) var modifiedDirection = 6;
	} else {
		return direction;
	}
    return modifiedDirection;
};

////////////////////////////////////////////////////////////////////////////////
//       Game_Player                                                          //
////////////////////////////////////////////////////////////////////////////////

Game_Player.prototype.locate = function(x, y) {
    Game_Character.prototype.locate.call(this, x, y);
    this.makeEncounterCount();
    if (this.isInVehicle()) {
        this.vehicle().refresh();
    }
    this._followers.synchronize(x, y, this.direction());
};

Game_Player.prototype.updateScroll = function(lastScrolledX, lastScrolledY) {
};

Game_Player.prototype.moveByInput = function() {
    if (!this.isMoving() && this.canMove()) {
        var direction = this.modifiedMove(this.getInputDirection());
        if (direction > 0) {
			$gameTemp.clearDestination();
        } else if ($gameTemp.isDestinationValid()){
            var x = $gameTemp.destinationX();
            var y = $gameTemp.destinationY();
            direction = this.findDirectionTo(x, y);
        }
		if (direction > 0) {
            this.executeMove(direction);
        }
    }
};

Game_Player.prototype.modifiedMove = function(direction) {
	var eulerZ = $gameMap._currentH*180/Math.PI;
	if (eulerZ > 225 && eulerZ <= 315) {
		if (direction == 2) var modifiedMove = 4;
		else if (direction == 4) var modifiedMove = 8;
		else if (direction == 6) var modifiedMove = 2;
		else if (direction == 8) var modifiedMove = 6;
	} else if (eulerZ > 135 && eulerZ <= 225) {
		if (direction == 2) var modifiedMove  = 8;
		else if (direction == 4) var modifiedMove = 6;
		else if (direction == 6) var modifiedMove = 4;
		else if (direction == 8) var modifiedMove = 2;
	} else if (eulerZ > 45 && eulerZ <= 135) {
		if (direction == 2) var modifiedMove = 6;
		else if (direction == 4) var modifiedMove = 2;
		else if (direction == 6) var modifiedMove = 8;
		else if (direction == 8) var modifiedMove = 4;
	} else {
		return direction;
	}
    return modifiedMove;
};

////////////////////////////////////////////////////////////////////////////////
//       Scene_Map                                                            //
////////////////////////////////////////////////////////////////////////////////

CTR_Engine.Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
	CTR_Engine.Scene_Map_start.call(this);
	this._spriteset._tilemap.euler.z = $gameMap._currentH;
	this._spriteset._tilemap.euler.x = $gameMap._currentV;
	this._spriteset._tilemap.updateMargin();
};

Scene_Map.prototype.processMapTouch = function() {
    if (TouchInput.isTriggered() || this._touchCount > 0) {
        if (TouchInput.isPressed()) {
            if (this._touchCount === 0 || this._touchCount >= 15) {
				var pos = new PIXI.Point()
				pos.x = TouchInput.x;
				pos.y = TouchInput.y;
				var point = this._spriteset._tilemap.worldTransform.applyInverse(pos, point);
				var x = $gameMap.canvasToMapX(point.x);
				var y = $gameMap.canvasToMapY(point.y);
                $gameTemp.setDestination(x, y);
            }
            this._touchCount++;
        } else {
            this._touchCount = 0;
        }
    }
};


////////////////////////////////////////////////////////////////////////////////
//       Game_Map                                                             //
////////////////////////////////////////////////////////////////////////////////

Game_Map.prototype.tileTall = function() {
	return CTR_Engine.Wall.Base.TileTall;
};

Game_Map.prototype.isPassable = function(x, y, d) {
	var tileId = SceneManager._scene._spriteset._tilemap._readMapData(x, y, 0);
	if (Tilemap.isTileA4(tileId)) return false;
	else return this.checkPassage(x, y, (1 << (d / 2 - 1)) & 0x0f);
};

CTR_Engine.Game_Map_update = Game_Map.prototype.update;
Game_Map.prototype.update = function(sceneActive) {
	CTR_Engine.Game_Map_update.call(this, sceneActive);
    this.updateCTRScroll();
};

Game_Map.prototype.roundXWithDirection = function(x, d) {
    return this.roundX(x + (d === 6 || d === 3 || d === 9 ? 1 : d === 4 || d === 1 || d === 7 ? -1 : 0));
};

Game_Map.prototype.roundYWithDirection = function(y, d) {
    return this.roundY(y + (d === 2 || d === 3 || d === 1 ? 1 : d === 8 || d === 9 || d === 7 ? -1 : 0));
};

Game_Map.prototype.updateCTRScroll = function() {
	if (!this._initialized) {
		if (this.B.InitialState.length == 1) {
			this._newCamera = this.B.InitialState;
			if (Number(this._newCamera[0]) === 0) var character = $gamePlayer;
			else if (Number(this._newCamera[0]) < 0) var character = $gamePlayer.followers()._data[Math.abs(Number(this._newCamera[0]) + 1)];
			else if (Number(this._newCamera[0]) > 0) var character = this.event(Number(this._newCamera[0]));	
			if (character) this.setDisplayChara(character);
			else this.setDisplayPixelPos(0, 0);
			this._lastCamera = this._newCamera;
		} else {
			this._newCamera = this.B.InitialState;
			if (this._newCamera.length == 3) this.setDisplayPixelPos(Number(this._newCamera[0]), Number(this._newCamera[1]));
			else if (this._newCamera.length == 2) this.setDisplayPos(Number(this._newCamera[0]), Number(this._newCamera[1]));
			else this.setDisplayPos(0, 0);
			this._lastCamera = this._newCamera;
		}
		this._moveSpeedRateB = this.B.SpeedRate;
		this._initialized = true;
	}
	if (this._moveDisplayX != this._displayX || this._moveDisplayY != this._displayY) {
		var rad = Math.atan2(this._moveDisplayX - this._displayX, this._moveDisplayY - this._displayY);
		this._displayX += Math.sin(rad) * this._moveSpeedRateB;
		this._displayY += Math.cos(rad) * this._moveSpeedRateB;
		if (Math.abs(this._moveDisplayX - this._displayX) < this._moveSpeedRateB) this._displayX = this._moveDisplayX;
		if (Math.abs(this._moveDisplayY - this._displayY) < this._moveSpeedRateB) this._displayY = this._moveDisplayY;
		return;
	}
	this._moveSpeedRateB = this.B.SpeedRate;
	if (this._newCamera === this._lastCamera && this._newCamera.length == 1) {
		if (Number(this._lastCamera[0]) === 0) var character = $gamePlayer;
		else if (Number(this._lastCamera[0]) < 0) var character = $gamePlayer.followers()._data[Math.abs(Number(this._lastCamera[0]) + 1)];
		else if (Number(this._lastCamera[0]) > 0) var character = this.event(Number(this._lastCamera[0]));
		if (character) this.setDisplayChara(character);
	} else {
		if (this._newCamera.length == 1 && Number(this._newCamera[0]) === 0) var character = $gamePlayer;
		else if (this._newCamera.length == 1 && Number(this._newCamera[0]) < 0) var character = $gamePlayer.followers()._data[Math.abs(Number(this._newCamera[0]) + 1)];
		else if (this._newCamera.length == 1 && Number(this._newCamera[0]) > 0) var character = this.event(Number(this._newCamera[0]));
		if (character) this.moveDisplayChara(character);
		else if (this._newCamera.length == 3) this.moveDisplayPixelPos(Number(this._newCamera[0]), Number(this._newCamera[1]));
		else if (this._newCamera.length == 2) this.moveDisplayPos(Number(this._newCamera[0]), Number(this._newCamera[1]));
		this._lastCamera = this._newCamera;
	}
};

Game_Map.prototype.setDisplayPos = function(x, y) {
	this._moveDisplayX = x - (Graphics.width / 2 + this._currentX) / this.tileWidth() + 0.5;
	this._displayX = this._moveDisplayX;
	this._parallaxX = this._moveDisplayX;
	this._moveDisplayY = y - (Graphics.height / 2 + this._currentY) / this.tileHeight() + 0.5;
	this._displayY = this._moveDisplayY;
	this._parallaxY = this._moveDisplayY;
};

Game_Map.prototype.setDisplayPixelPos = function(px, py) {
	this._moveDisplayX = (px - Graphics.width / 2 - this._currentX) / this.tileWidth();
	this._displayX = this._moveDisplayX;
	this._parallaxX = this._moveDisplayX;
	this._moveDisplayY = (py - Graphics.height / 2 - this._currentY) / this.tileHeight();
	this._displayY = this._moveDisplayY;
	this._parallaxY = this._moveDisplayY;
};

Game_Map.prototype.moveDisplayPos = function(x, y) {
	this._moveDisplayX = x - (Graphics.width / 2 + this._currentX) / this.tileWidth() + 0.5;
	this._parallaxX = this._moveDisplayX;
	this._moveDisplayY = y - (Graphics.height / 2 + this._currentY) / this.tileHeight() + 0.5;
	this._parallaxY = this._moveDisplayY;
};

Game_Map.prototype.moveDisplayPixelPos = function(px, py) {
	this._moveDisplayX = (px - Graphics.width / 2 - this._currentX) / this.tileWidth();
	this._parallaxX = this._moveDisplayX;
	this._moveDisplayY = (py - Graphics.height / 2 - this._currentY) / this.tileHeight();
	this._parallaxY = this._moveDisplayY;
};

Game_Map.prototype.setDisplayChara = function(character) {
	var x1 = this._displayX + character._screenX / this.tileWidth();
	var y1 = this._displayY + (character._screenY - 18) / this.tileHeight() + character._screenZ / this.tileTall();

	var x2 = this._displayX + (Graphics.width / 2 + this._currentX) / this.tileWidth();
	var y2 = this._displayY + (Graphics.height / 2 + this._currentY) / this.tileHeight();
	if (y1 > y2) {
		this.setScrollDown(y1 - y2);
	}
	if (x1 < x2) {
		this.setScrollLeft(x2 - x1);
	}
	if (x1 > x2) {
		this.setScrollRight(x1 - x2);
	}
	if (y1 < y2) {
		this.setScrollUp(y2 - y1);
	}
};

Game_Map.prototype.moveDisplayChara = function(character) {
	var x1 = this._displayX + character._screenX / this.tileWidth();
	var y1 = this._displayY + (character._screenY - 18) / this.tileHeight() + character._screenZ / this.tileTall();

	var x2 = this._displayX + (Graphics.width / 2 + this._currentX) / this.tileWidth();
	var y2 = this._displayY + (Graphics.height / 2 + this._currentY) / this.tileHeight();
	if (y1 > y2) {
		this.scrollDown(y1 - y2);
	}
	if (x1 < x2) {
		this.scrollLeft(x2 - x1);
	}
	if (x1 > x2) {
		this.scrollRight(x1 - x2);
	}
	if (y1 < y2) {
		this.scrollUp(y2 - y1);
	}
};

Game_Map.prototype.setScrollDown = function(distance) {
    if (this.isLoopVertical()) {
        this._displayY += distance;
        this._moveDisplayY = this._displayY;
        this._displayY %= $dataMap.height;
        if (this._parallaxLoopY) {
            this._parallaxY += distance;
        }
    } else {
        var lastY = this._displayY;
        this._displayY += distance;
        this._moveDisplayY = this._displayY;
        this._parallaxY += this._displayY - lastY;
    }
};

Game_Map.prototype.setScrollLeft = function(distance) {
    if (this.isLoopHorizontal()) {
        this._displayX += $dataMap.width - distance;
        this._moveDisplayX = this._displayX;
        this._displayX %= $dataMap.width;
        if (this._parallaxLoopX) {
            this._parallaxX -= distance;
        }
    } else {
        var lastX = this._displayX;
        this._displayX -= distance;
        this._moveDisplayX = this._displayX;
        this._parallaxX += this._displayX - lastX;
    }
};

Game_Map.prototype.setScrollRight = function(distance) {
    if (this.isLoopHorizontal()) {
        this._displayX += distance;
        this._moveDisplayX = this._displayX;
        this._displayX %= $dataMap.width;
        if (this._parallaxLoopX) {
            this._parallaxX += distance;
        }
    } else {
        var lastX = this._displayX;
        this._displayX += distance;
        this._moveDisplayX = this._displayX;
        this._parallaxX += this._displayX - lastX;
    }
};

Game_Map.prototype.setScrollUp = function(distance) {
    if (this.isLoopVertical()) {
        this._displayY += $dataMap.height - distance;
        this._moveDisplayY = this._displayY;
        this._displayY %= $dataMap.height;
        if (this._parallaxLoopY) {
            this._parallaxY -= distance;
        }
    } else {
        var lastY = this._displayY;
        this._displayY -= distance;
        this._moveDisplayY = this._displayY;
        this._parallaxY += this._displayY - lastY;
    }
};

Game_Map.prototype.scrollDown = function(distance) {
    if (this.isLoopVertical()) {
        this._moveDisplayY += distance;
        this._moveDisplayY %= $dataMap.height;
        if (this._parallaxLoopY) {
            this._parallaxY += distance;
        }
    } else {
        var lastY = this._moveDisplayY;
        this._moveDisplayY += distance;
        this._parallaxY += this._moveDisplayY - lastY;
    }
};

Game_Map.prototype.scrollLeft = function(distance) {
    if (this.isLoopHorizontal()) {
        this._moveDisplayX += $dataMap.width - distance;
        this._moveDisplayX %= $dataMap.width;
        if (this._parallaxLoopX) {
            this._parallaxX -= distance;
        }
    } else {
        var lastX = this._moveDisplayX;
        this._moveDisplayX -= distance;
        this._parallaxX += this._moveDisplayX - lastX;
    }
};

Game_Map.prototype.scrollRight = function(distance) {
    if (this.isLoopHorizontal()) {
        this._moveDisplayX += distance;
        this._moveDisplayX %= $dataMap.width;
        if (this._parallaxLoopX) {
            this._parallaxX += distance;
        }
    } else {
        var lastX = this._moveDisplayX;
        this._moveDisplayX += distance
        this._parallaxX += this._moveDisplayX - lastX;
    }
};

Game_Map.prototype.scrollUp = function(distance) {
    if (this.isLoopVertical()) {
        this._moveDisplayY += $dataMap.height - distance;
        this._moveDisplayY %= $dataMap.height;
        if (this._parallaxLoopY) {
            this._parallaxY -= distance;
        }
    } else {
        var lastY = this._moveDisplayY;
        this._moveDisplayY -= distance;
        this._parallaxY += this._moveDisplayY - lastY;
    }
};

CTR_Engine.Game_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
	CTR_Engine.Game_Map_initialize.call(this);
	if (this._initializedValue) return;

this.B = this.B || {};
	this.B.InitialState = PluginManager.parameters('Jogo_CTR_Engine')["Initial State B"].toLowerCase().split(',');
	this.B.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate B"]);


this.H = this.H || {};
	this.H.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State H"])/180*Math.PI;
	this.H.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN H"])/180*Math.PI;
	this.H.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX H"])/180*Math.PI;
	this.H.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input H"]);
	this.H.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input H"].toLowerCase().split(',');
	this.H.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input H"].toLowerCase().split(',');
	this.H.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move H"])/180*Math.PI;
	this.H.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate H"]);
	this.H.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput H"]);
		
this.V = this.V || {};
	this.V.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State V"])/180*Math.PI;
	this.V.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN V"])/180*Math.PI;
	this.V.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX V"])/180*Math.PI;
	this.V.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input V"]);
	this.V.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input V"].toLowerCase().split(',');
	this.V.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input V"].toLowerCase().split(',');
	this.V.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move V"])/180*Math.PI;
	this.V.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate V"]);
	this.V.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput V"]);

this.S = this.S || {};
	this.S.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State S"]);
	this.S.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN S"]);
	this.S.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX S"]);
	this.S.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input S"]);
	this.S.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input S"].toLowerCase().split(',');
	this.S.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input S"].toLowerCase().split(',');
	this.S.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move S"]);
	this.S.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate S"]);
	this.S.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput S"]);

this.X = this.X || {};
	this.X.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State X"]);
	this.X.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN X"]);
	this.X.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX X"]);
	this.X.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input X"]);
	this.X.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input X"].toLowerCase().split(',');
	this.X.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input X"].toLowerCase().split(',');
	this.X.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move X"]);
	this.X.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate X"]);
	this.X.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput X"]);
	
this.Y = this.Y || {};
	this.Y.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State Y"]);
	this.Y.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN Y"]);
	this.Y.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX Y"]);
	this.Y.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input Y"]);
	this.Y.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input Y"].toLowerCase().split(',');
	this.Y.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input Y"].toLowerCase().split(',');
	this.Y.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move Y"]);
	this.Y.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate Y"]);
	this.Y.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput Y"]);

this.Z = this.Z || {};
	this.Z.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State Z"]);
	this.Z.MIN = Number(PluginManager.parameters('Jogo_CTR_Engine')["MIN Z"]);
	this.Z.MAX = Number(PluginManager.parameters('Jogo_CTR_Engine')["MAX Z"]);
	this.Z.DisableInput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Input Z"]);
	this.Z.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input Z"].toLowerCase().split(',');
	this.Z.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input Z"].toLowerCase().split(',');
	this.Z.InputMove = Number(PluginManager.parameters('Jogo_CTR_Engine')["Input Move Z"]);
	this.Z.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate Z"]);
	this.Z.ResetUninput = eval(PluginManager.parameters('Jogo_CTR_Engine')["Reset Uninput Z"]);

	this._initializedValue = true;
};


////////////////////////////////////////////////////////////////////////////////
//       ImageManager                                                         //
////////////////////////////////////////////////////////////////////////////////

ImageManager.isWallCharacter = function(filename) {
    var sign = filename.match(/^[\!\$\+]+/);
    return sign && sign[0].contains('+');
};


////////////////////////////////////////////////////////////////////////////////
//       ShaderTilemap                                                        //
////////////////////////////////////////////////////////////////////////////////

ShaderTilemap.prototype._paintAllTiles = function(startX, startY) {
    this.lowerZLayer.clear();
    this.upperZLayer.clear();
	var eulerZ = Math.cos($gameMap._currentH*180/Math.PI/360/10);
	var childs = this.children;
    for (var i = childs.length-1; i >= 0; i--) {
        if (childs[i].isFloor || childs[i].isWall) {
            if (childs[i]._restart) { delete childs[i].children; this.removeChild(childs[i]); }
			else {
				childs[i]._restart = true
				if (childs[i].isFloor) childs[i].z += eulerZ;
				else childs[i].z += eulerZ;
			}
        } else if (childs[i].position3d && childs[i]._character) childs[i].z += eulerZ;
    }
    var tileCols = Math.ceil(this._width / this._tileWidth) + 1;
    var tileRows = Math.ceil(this._height / this._tileHeight) + 1;
    for (var y = 0; y < tileRows; y++) {
        for (var x = 0; x < tileCols; x++) {
            this._paintTiles(startX, startY, x, y);
        }
    }
};

ShaderTilemap.prototype._drawAutotile = function(layer, tileId, dx, dy) {
    var autotileTable = Tilemap.FLOOR_AUTOTILE_TABLE;
    var kind = Tilemap.getAutotileKind(tileId);
    var shape = Tilemap.getAutotileShape(tileId);
    var tx = kind % 8;
    var ty = Math.floor(kind / 8);
    var bx = 0;
    var by = 0;
    var setNumber = 0;
    var isTable = false;
    var animX = 0, animY = 0;

    if (Tilemap.isTileA1(tileId)) {
        setNumber = 0;
        if (kind === 0) {
            animX = 2;
            by = 0;
        } else if (kind === 1) {
            animX = 2;
            by = 3;
        } else if (kind === 2) {
            bx = 6;
            by = 0;
        } else if (kind === 3) {
            bx = 6;
            by = 3;
        } else {
            bx = Math.floor(tx / 4) * 8;
            by = ty * 6 + Math.floor(tx / 2) % 2 * 3;
            if (kind % 2 === 0) {
                animX = 2;
            }
            else {
                bx += 6;
                autotileTable = Tilemap.WATERFALL_AUTOTILE_TABLE;
                animY = 1;
            }
        }
    } else if (Tilemap.isTileA2(tileId)) {
        setNumber = 1;
        bx = tx * 2;
        by = (ty - 2) * 3;
        isTable = this._isTableTile(tileId);
    } else if (Tilemap.isTileA3(tileId)) {
        setNumber = 2;
        bx = tx * 2;
        by = (ty - 6) * 2;
        autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
    } else if (Tilemap.isTileA4(tileId)) {
		if (ty % 2 !== 1) return this.drawWall(tileId, autotileTable, dx, dy, tx, ty);
		setNumber = 3;
        bx = tx * 2;
        by = Math.floor((ty - 10) * 2.5 + (ty % 2 === 1 ? 0.5 : 0));
        autotileTable = Tilemap.WALL_AUTOTILE_TABLE;
    }

    var table = autotileTable[shape];
    var w1 = this._tileWidth / 2;
    var h1 = this._tileHeight / 2;
    for (var i = 0; i < 4; i++) {
        var qsx = table[i][0];
        var qsy = table[i][1];
        var sx1 = (bx * 2 + qsx) * w1;
        var sy1 = (by * 2 + qsy) * h1;
        var dx1 = dx + (i % 2) * w1;
        var dy1 = dy + Math.floor(i / 2) * h1;
        if (isTable && (qsy === 1 || qsy === 5)) {
            var qsx2 = qsx;
            var qsy2 = 3;
            if (qsy === 1) {
                //qsx2 = [0, 3, 2, 1][qsx];
                qsx2 = (4-qsx)%4;
            }
            var sx2 = (bx * 2 + qsx2) * w1;
            var sy2 = (by * 2 + qsy2) * h1;
            layer.addRect(setNumber, sx2, sy2, dx1, dy1, w1, h1, animX, animY);
            layer.addRect(setNumber, sx1, sy1, dx1, dy1+h1/2, w1, h1/2, animX, animY);
        } else {
            layer.addRect(setNumber, sx1, sy1, dx1, dy1, w1, h1, animX, animY);
        }
    }
};

ShaderTilemap.prototype.drawWall = function(tileId, autotileTable, dx, dy, tx, ty) {
	var setNumber = 3;
	var tileset = $gameMap.tileset();
    if (tileset) var tilesetNames = tileset.tilesetNames;
    if (this.roundPixels) {
        var ox = Math.floor(this.origin.x);
        var oy = Math.floor(this.origin.y);
    } else {
        ox = this.origin.x;
        oy = this.origin.y;
    }
    var startX = Math.floor((ox - this._margin) / this._tileWidth);
    var startY = Math.floor((oy - this._margin) / this._tileHeight);
	var w1 = this._tileWidth / 2;
    var h1 = this._tileHeight / 2;

	var flags = $gameMap.tilesetFlags();
    var tag = flags[tileId] >> 12;
	if (!tag) var tag = 1;
	else tag += 1;

    var shape = Tilemap.getAutotileShape(tileId);
    var bx = tx * 2;
    var by = Math.floor((ty - 10) * 2.5 + (ty % 2 === 1 ? 0.5 : 0));
    var table = autotileTable[shape];

    var containerFloor = new WallAndFloorContainer(dx + startX * this._tileWidth, dy + startY * this._tileHeight, true);
    containerFloor.convertTo3d();
    containerFloor.position3d.set(w1, h1, tag*$gameMap.tileTall());
    containerFloor.pivot3d.set(w1, h1, 0);
	containerFloor.x = containerFloor.dx - ox;
	containerFloor.y = containerFloor.dy - oy;
    containerFloor.z = containerFloor.containerGetDepth();
    containerFloor.isFloor = true;
    this.addChild(containerFloor);
    for (var i = 0; i < 4; i++) {
        var qsx = table[i][0];
        var qsy = table[i][1];
        var sx1 = (bx * 2 + qsx) * w1;
        var sy1 = (by * 2 + qsy) * h1;
        var dx1 = (i % 2) * w1;
        var dy1 = Math.floor(i / 2) * h1;
		
			var floor = new Sprite();
			floor.bitmap = ImageManager.loadTileset(tilesetNames[setNumber]);
			floor.x = dx1;
			floor.y = dy1;
            floor.setFrame(sx1, sy1, w1, h1);
			containerFloor.addChild(floor)
    }

	if ($gameMap._eulerX == 0) return;

    autotileTable = Tilemap.WALL_AUTOTILE_TABLE;

	var floorId = Math.trunc((tileId - Tilemap.TILE_ID_A4) / 48) * 48 + Tilemap.TILE_ID_A4;
	var wallId = floorId + 8 * 48;
    var currentFloor = tileId - floorId;

	var eulerZ = $gameMap._currentH*180/Math.PI;

	for (var j = 0; j < 4; j++) {
		if (j == 0 && (eulerZ >= 90 && eulerZ <= 270)) continue;
		else if (j == 1 && (eulerZ >= 180 && eulerZ <= 360)) continue;
		else if (j == 2 && ((eulerZ >= 270 && eulerZ <= 360) || (eulerZ >= 0 && eulerZ <= 90))) continue;
		else if (j == 3 && (eulerZ >= 0 && eulerZ <= 180)) continue;
		var containerWall = new WallAndFloorContainer(dx + startX * this._tileWidth, dy + startY * this._tileHeight);
		containerWall.convertTo3d();
		containerWall.position3d.set((j == 1 || j == 2) ? this._tileWidth : 0, (j <= 1) ? this._tileHeight : 0, 0);
		containerWall.euler.y = j / 2 * Math.PI;
		containerWall.euler.x = 1.5 * Math.PI;
		containerWall.x = containerWall.dx - ox;
		containerWall.y = containerWall.dy - oy;	
		containerWall.z = containerWall.containerGetDepth();
		containerWall.isWall = true;
		this.addChild(containerWall);
		var thisWall = false;
		for (var high = 1; high <= tag; high++) {
			if (j == 0) {
				if (currentFloor == 46 || currentFloor == 44) { var thisWall = wallId; thisWall += (tag == 1) ? 15 : (high == 1) ? 13 : (high == tag) ? 7 : 5; }
				else if (currentFloor == 43 || currentFloor == 41 || currentFloor == 40) { var thisWall = wallId; thisWall += (tag == 1) ? 11 : (high == 1) ? 9 : (high == tag) ? 3 : 1; }
				else if (currentFloor == 45 || currentFloor == 39 || currentFloor == 38) { var thisWall = wallId; thisWall += (tag == 1) ? 14 : (high == 1) ? 12 : (high == tag) ? 6 : 4; }
				else if (currentFloor == 33 || currentFloor == 31 || currentFloor == 28) { var thisWall = wallId; thisWall += (tag == 1) ? 10 : (high == 1) ? 8 : (high == tag) ? 2 : 0; }
			} else if (j == 1) {
				if (currentFloor == 46 || currentFloor == 45) { var thisWall = wallId; thisWall += (tag == 1) ? 15 : (high == 1) ? 13 : (high == tag) ? 7 : 5; }
				else if (currentFloor == 44 || currentFloor == 39 || currentFloor == 38) { var thisWall = wallId; thisWall += (tag == 1) ? 11 : (high == 1) ? 9 : (high == tag) ? 3 : 1; }
				else if (currentFloor == 42 || currentFloor == 37 || currentFloor == 36) { var thisWall = wallId; thisWall += (tag == 1) ? 14 : (high == 1) ? 12 : (high == tag) ? 6 : 4; }
				else if (currentFloor == 32 || currentFloor == 27 || currentFloor == 24) { var thisWall = wallId; thisWall += (tag == 1) ? 10 : (high == 1) ? 8 : (high == tag) ? 2 : 0; }
			} else if (j == 2) {
				if (currentFloor == 46 || currentFloor == 42) { var thisWall = wallId; thisWall += (tag == 1) ? 15 : (high == 1) ? 13 : (high == tag) ? 7 : 5; }
				else if (currentFloor == 45 || currentFloor == 37 || currentFloor == 36) { var thisWall = wallId; thisWall += (tag == 1) ? 11 : (high == 1) ? 9 : (high == tag) ? 3 : 1; }
				else if (currentFloor == 43 || currentFloor == 35 || currentFloor == 34) { var thisWall = wallId; thisWall += (tag == 1) ? 14 : (high == 1) ? 12 : (high == tag) ? 6 : 4; }
				else if (currentFloor == 33 || currentFloor == 23 || currentFloor == 20) { var thisWall = wallId; thisWall += (tag == 1) ? 10 : (high == 1) ? 8 : (high == tag) ? 2 : 0; }
			} else if (j == 3) {
				if (currentFloor == 46 || currentFloor == 43) { var thisWall = wallId; thisWall += (tag == 1) ? 15 : (high == 1) ? 13 : (high == tag) ? 7 : 5; }
				else if (currentFloor == 42 || currentFloor == 35 || currentFloor == 34) { var thisWall = wallId; thisWall += (tag == 1) ? 11 : (high == 1) ? 9 : (high == tag) ? 3 : 1; }
				else if (currentFloor == 44 || currentFloor == 41 || currentFloor == 40) { var thisWall = wallId; thisWall += (tag == 1) ? 14 : (high == 1) ? 12 : (high == tag) ? 6 : 4; }
				else if (currentFloor == 32 || currentFloor == 19 || currentFloor == 16) { var thisWall = wallId; thisWall += (tag == 1) ? 10 : (high == 1) ? 8 : (high == tag) ? 2 : 0; }
			}
			if (!thisWall) continue;
			kind = Tilemap.getAutotileKind(thisWall);
			shape = Tilemap.getAutotileShape(thisWall);
			tx = kind % 8;
			ty = Math.floor(kind / 8);
			bx = tx * 2;
			by = Math.floor((ty - 10) * 2.5 + (ty % 2 === 1 ? 0.5 : 0));
			table = autotileTable[shape];
			for (var i = 0; i < 4; i++) {
				var qsx = table[i][0];
				var qsy = table[i][1];
				var sx1 = (bx * 2 + qsx) * w1;
				var sy1 = (by * 2 + qsy) * h1;
				var dx1 = (i % 2) * w1;
				var dy1 = Math.floor(i / 2) * h1;
            
				var wall = new Sprite();
				wall.bitmap = ImageManager.loadTileset(tilesetNames[setNumber]);
				wall.x = dx1;
				wall.y = dy1 - high*$gameMap.tileTall();
				wall.setFrame(sx1, sy1, w1, h1);
				containerWall.addChild(wall)
			}
		}
	}
};


////////////////////////////////////////////////////////////////////////////////
//       WallAndFloorContainer                                                //
////////////////////////////////////////////////////////////////////////////////

function WallAndFloorContainer() {
    this.initialize.apply(this, arguments);
}

WallAndFloorContainer.prototype = Object.create(PIXI.Container.prototype);
WallAndFloorContainer.prototype.constructor = WallAndFloorContainer;

WallAndFloorContainer.prototype.initialize = function(dx, dy, isFloor) {
	this.dx = dx;
	this.dy = dy;
	this.isFloor = isFloor;
    PIXI.Container.call(this);
};

WallAndFloorContainer.prototype.update = function() {
	this.updateTransform();
};

WallAndFloorContainer.prototype.updateTransform = function() {
	if (!SceneManager._scene._spriteset) return;
	if (SceneManager._scene._spriteset._tilemap.roundPixels) {
		var ox = Math.floor(SceneManager._scene._spriteset._tilemap.origin.x);
		var oy = Math.floor(SceneManager._scene._spriteset._tilemap.origin.y);
	} else {
		ox = SceneManager._scene._spriteset._tilemap.origin.x;
		oy = SceneManager._scene._spriteset._tilemap.origin.y;
	}
	this.x = this.dx - ox;
	this.y = this.dy - oy;	
	this.z = this.containerGetDepth(this.isFloor);
    PIXI.Container.prototype.updateTransform.call(this);
};

WallAndFloorContainer.prototype.containerGetDepth = function(isFloor) {
	var eulerZ = $gameMap._currentH*180/Math.PI;
	if (eulerZ > 0 && eulerZ <= 90) {
		if (isFloor) return 3 - this.position3d.z / 4800 + this.getDepth() / 1000 + this.position.y / 4800 + this.position.x / 4800;
		else return 3 + this.getDepth() / 1000 + this.position.y / 4800 + this.position.x / 4800;
	} else if (eulerZ > 90 && eulerZ <= 180) {
		if (isFloor) return 3 - this.position3d.z / 2400 + this.getDepth() / 1000 - this.position.y / 4800 - this.position.x / 4800;
		else return 3 + this.getDepth() / 1000 - this.position.y / 4800 - this.position.x / 4800;
	} else if (eulerZ > 180 && eulerZ <= 270) {
		if (isFloor) return 3 - this.position3d.z / 1800 + this.getDepth() / 1000 - this.position.y / 4800 - this.position.x / 4800;
		else return 3 + this.getDepth() / 1000 - this.position.y / 4800 - this.position.x / 4800;
	} else {
		if (isFloor) return 3 - this.position3d.z / 2400 + this.getDepth() / 1000;
		else return 3 + this.getDepth() / 1000;
	}
};

////////////////////////////////////////////////////////////////////////////////
//       Galv_DiagonalMovement                                                //
////////////////////////////////////////////////////////////////////////////////

if (Imported.Galv_DiagonalMovement) {
	
	if (eval(PluginManager.parameters('Jogo_CTR_Engine')["Diagonal Graphics"])) {
		Sprite_Character.prototype.characterPatternY = function() {
			var direction = this._character.isWallCharacter() ? 2 : this._character.modifiedDirection(this._character.direction());
			if (this._character.isDiag(direction)) return Galv.DM.diagRow[direction];
			else return (direction - 2) / 2;
		};

		CTR_Engine.Sprite_Character_characterBlockX = Sprite_Character.prototype.characterBlockX;
		Sprite_Character.prototype.characterBlockX = function() {
			var direction = this._character.isWallCharacter() ? this._character.direction() : this._character.modifiedDirection(this._character.direction());
			if (!this._isBigCharacter && this._character.isDiag(direction) && this._character.characterIndex() < 4) {
				var index = this._character.characterIndex() + 4;
				return index % 4 * 3;
			} else {	
				return CTR_Engine.Sprite_Character_characterBlockX.call(this);
			};
		};

		CTR_Engine.Sprite_Character_characterBlockY = Sprite_Character.prototype.characterBlockY;
		Sprite_Character.prototype.characterBlockY = function() {
			var direction = this._character.isWallCharacter() ? this._character.direction() : this._character.modifiedDirection(this._character.direction());
			if (!this._isBigCharacter && this._character.isDiag(direction) && this._character.characterIndex() < 4) {
				var index = this._character.characterIndex() + 4;
				return Math.floor(index / 4) * 4;
			} else {	
				return CTR_Engine.Sprite_Character_characterBlockY.call(this);
			};
		};

		Game_Character.prototype.isDiag = function(direction) {
			if (direction == 1 || direction == 3 || direction == 7 || direction == 9) return true;
			else return false;
		};

		Game_Character.prototype.modifiedDirection = function(direction) {
			var eulerZ = $gameMap._currentH*180/Math.PI;
			if (eulerZ > 292.5 && eulerZ <= 337.5) {
				if (direction == 1) var modifiedDirection = 2;
				else if (direction == 2) var modifiedDirection = 3;
				else if (direction == 3) var modifiedDirection = 6;
				else if (direction == 4) var modifiedDirection = 1;
				else if (direction == 6) var modifiedDirection = 9;
				else if (direction == 7) var modifiedDirection = 4;
				else if (direction == 8) var modifiedDirection = 7;
				else if (direction == 9) var modifiedDirection = 8;
			} else if (eulerZ > 247.5 && eulerZ <= 292.5) {
				if (direction == 1) var modifiedDirection = 3;
				else if (direction == 2) var modifiedDirection = 6;
				else if (direction == 3) var modifiedDirection = 9;
				else if (direction == 4) var modifiedDirection = 2;
				else if (direction == 6) var modifiedDirection = 8;
				else if (direction == 7) var modifiedDirection = 1;
				else if (direction == 8) var modifiedDirection = 4;
				else if (direction == 9) var modifiedDirection = 7;
			} else if (eulerZ > 202.5 && eulerZ <= 247.5) {
				if (direction == 1) var modifiedDirection = 6;
				else if (direction == 2) var modifiedDirection = 9;
				else if (direction == 3) var modifiedDirection = 8;
				else if (direction == 4) var modifiedDirection = 3;
				else if (direction == 6) var modifiedDirection = 7;
				else if (direction == 7) var modifiedDirection = 2;
				else if (direction == 8) var modifiedDirection = 1;
				else if (direction == 9) var modifiedDirection = 4;
			} else if (eulerZ > 157.5 && eulerZ <= 202.5) {
				if (direction == 1) var modifiedDirection = 9;
				else if (direction == 2) var modifiedDirection = 8;
				else if (direction == 3) var modifiedDirection = 7;
				else if (direction == 4) var modifiedDirection = 6;
				else if (direction == 6) var modifiedDirection = 4;
				else if (direction == 7) var modifiedDirection = 3;
				else if (direction == 8) var modifiedDirection = 2;
				else if (direction == 9) var modifiedDirection = 1;
			} else if (eulerZ > 112.5 && eulerZ <= 157.5) {
				if (direction == 1) var modifiedDirection = 8;
				else if (direction == 2) var modifiedDirection = 7;
				else if (direction == 3) var modifiedDirection = 4;
				else if (direction == 4) var modifiedDirection = 9;
				else if (direction == 6) var modifiedDirection = 1;
				else if (direction == 7) var modifiedDirection = 6;
				else if (direction == 8) var modifiedDirection = 3;
				else if (direction == 9) var modifiedDirection = 2;
			} else if (eulerZ > 67.5 && eulerZ <= 112.5) {
				if (direction == 1) var modifiedDirection = 7;
				else if (direction == 2) var modifiedDirection = 4;
				else if (direction == 3) var modifiedDirection = 1;
				else if (direction == 4) var modifiedDirection = 8;
				else if (direction == 6) var modifiedDirection = 2;
				else if (direction == 7) var modifiedDirection = 9;
				else if (direction == 8) var modifiedDirection = 6;
				else if (direction == 9) var modifiedDirection = 3;
			} else if (eulerZ > 22.5 && eulerZ <= 67.5) {
				if (direction == 1) var modifiedDirection = 4;
				else if (direction == 2) var modifiedDirection = 1;
				else if (direction == 3) var modifiedDirection = 2;
				else if (direction == 4) var modifiedDirection = 7;
				else if (direction == 6) var modifiedDirection = 3;
				else if (direction == 7) var modifiedDirection = 8;
				else if (direction == 8) var modifiedDirection = 9;
				else if (direction == 9) var modifiedDirection = 6;
			} else {
				return direction;
			}
			return modifiedDirection;
		};
	};

	Game_CharacterBase.prototype.getDir = function(horz,vert) {
		if (horz == 4 && vert == 2) return 2;
		if (horz == 6 && vert == 2) return 4;
		if (horz == 4 && vert == 8) return 6;
		if (horz == 6 && vert == 8) return 8;
		return 0;
	};

	Game_CharacterBase.prototype.moveDiagonally = function(horz, vert) {
		var diag = this.canPassDiagonally(this._x, this._y, horz, vert);
		var norm = this.canPass(this._x, this._y, horz) || this.canPass(this._x, this._y, vert);
		if (eval(PluginManager.parameters('Jogo_CTR_Engine')["Diagonal Graphics"])) var direction = Galv.DM.getDir(horz,vert);
		else var direction = this.getDir(horz,vert);
		this.setDirection(direction);
		if (diag) {
			//this.setDirection(Galv.DM.getDir(horz,vert));
			this._x = $gameMap.roundXWithDirection(this._x, horz);
			this._y = $gameMap.roundYWithDirection(this._y, vert);
			this._realX = $gameMap.xWithDirection(this._x, this.reverseDir(horz));
			this._realY = $gameMap.yWithDirection(this._y, this.reverseDir(vert));
			this.increaseSteps();
		} else /*if (norm) */{
			this._diagDir = false;
			//this.moveStraight(this.getOtherdir(horz,vert));
			this.checkEventTriggerTouchFront(direction);
		};

		this._diagStraigten = false;
		if (this._direction === this.reverseDir(horz)) this.setDirection(horz);
		if (this._direction === this.reverseDir(vert)) this.setDirection(vert);
		this._diagStraigten = true;
	};

	Game_Player.prototype.modifiedMove = function(direction) {
		var eulerZ = $gameMap._currentH*180/Math.PI;
		if (eulerZ > 292.5 && eulerZ <= 337.5) {
			if (direction == 1) var modifiedMove = 4;
			else if (direction == 2) var modifiedMove = 1;
			else if (direction == 3) var modifiedMove = 2;
			else if (direction == 4) var modifiedMove = 7;
			else if (direction == 6) var modifiedMove = 3;
			else if (direction == 7) var modifiedMove = 8;
			else if (direction == 8) var modifiedMove = 9;
			else if (direction == 9) var modifiedMove = 6;
		} else if (eulerZ > 247.5 && eulerZ <= 292.5) {
			if (direction == 1) var modifiedMove = 7;
			else if (direction == 2) var modifiedMove = 4;
			else if (direction == 3) var modifiedMove = 1;
			else if (direction == 4) var modifiedMove = 8;
			else if (direction == 6) var modifiedMove = 2;
			else if (direction == 7) var modifiedMove = 9;
			else if (direction == 8) var modifiedMove = 6;
			else if (direction == 9) var modifiedMove = 3;
		} else if (eulerZ > 202.5 && eulerZ <= 247.5) {
			if (direction == 1) var modifiedMove = 8;
			else if (direction == 2) var modifiedMove = 7;
			else if (direction == 3) var modifiedMove = 4;
			else if (direction == 4) var modifiedMove = 9;
			else if (direction == 6) var modifiedMove = 1;
			else if (direction == 7) var modifiedMove = 6;
			else if (direction == 8) var modifiedMove = 3;
			else if (direction == 9) var modifiedMove = 2;
		} else if (eulerZ > 157.5 && eulerZ <= 202.5) {
			if (direction == 1) var modifiedMove = 9;
			else if (direction == 2) var modifiedMove = 8;
			else if (direction == 3) var modifiedMove = 7;
			else if (direction == 4) var modifiedMove = 6;
			else if (direction == 6) var modifiedMove = 4;
			else if (direction == 7) var modifiedMove = 3;
			else if (direction == 8) var modifiedMove = 2;
			else if (direction == 9) var modifiedMove = 1;
		} else if (eulerZ > 112.5 && eulerZ <= 157.5) {
			if (direction == 1) var modifiedMove = 6;
			else if (direction == 2) var modifiedMove = 9;
			else if (direction == 3) var modifiedMove = 8;
			else if (direction == 4) var modifiedMove = 3;
			else if (direction == 6) var modifiedMove = 7;
			else if (direction == 7) var modifiedMove = 2;
			else if (direction == 8) var modifiedMove = 1;
			else if (direction == 9) var modifiedMove = 4;
		} else if (eulerZ > 67.5 && eulerZ <= 112.5) {
			if (direction == 1) var modifiedMove = 3;
			else if (direction == 2) var modifiedMove = 6;
			else if (direction == 3) var modifiedMove = 9;
			else if (direction == 4) var modifiedMove = 2;
			else if (direction == 6) var modifiedMove = 8;
			else if (direction == 7) var modifiedMove = 1;
			else if (direction == 8) var modifiedMove = 4;
			else if (direction == 9) var modifiedMove = 7;
		} else if (eulerZ > 22.5 && eulerZ <= 67.5) {
			if (direction == 1) var modifiedMove = 2;
			else if (direction == 2) var modifiedMove = 3;
			else if (direction == 3) var modifiedMove = 6;
			else if (direction == 4) var modifiedMove = 1;
			else if (direction == 6) var modifiedMove = 9;
			else if (direction == 7) var modifiedMove = 4;
			else if (direction == 8) var modifiedMove = 7;
			else if (direction == 9) var modifiedMove = 8;
		} else {
			return direction;
		}
		return modifiedMove;
	};

};
