//////////////////////////////////////////////////////////////////////////////
//       CTR_Engine by Jogo v1.00                                           //
//////////////////////////////////////////////////////////////////////////////
/*:
 * @plugindesc Camera Translate Rotation ENGINE :
 * "Rotate Camera in 3d Tilemap"
 * @author Jogo | Version: 1.00 | Date: 18.08.24
 *
 * @param CTR Engine
 *
 * @param Camera
 * @parent CTR Engine
 *
 * @param Base
 * @parent Camera
 *
 * @param Initial State
 * @parent Base
 * @desc Set the initial angle of camera.
 * (In degrees)
 * @type Number
 * @default 0
 *
 * @param Disable Rotation
 * @parent Base
 * @desc Disable camera rotation input.
 * @type Boolean
 * @on Disable
 * @off Enable
 * @default false
 *
 * @param Input
 * @parent Camera
 *
 * @param Positive Input
 * @parent Input
 * @desc Set the positive rotation keys input list separate by ",".
 * Example: 33, 81
 * @default 33, 81
 *
 * @param Negative Input
 * @parent Input
 * @desc Set the negative rotation keys input list separate by ",".
 * Example: 34, 87
 * @default 34, 87
 *
 * @param Rotation Angle
 * @parent Input
 * @desc Set the rotation angle of camera by input.
 * (In degrees)
 * @type Number
 * @decimals 2
 * @default 45.00
 *
 * @param Speed Rate
 * @parent Input
 * @desc Set the number of frame for rotate.
 * @type Number
 * @decimals 2
 * @default 0.05
 *
 *
 * @help
 * //////////////////////////////////////////////////////////////////////////////
 * //        CTR_Engine                                                        //
 * //////////////////////////////////////////////////////////////////////////////
 *
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
 * 1111                                                               11111 *
 *
 * //////////////////////////////////////////////////////////////////////////////
 * //        Input List For Rotation                                           //
 * //////////////////////////////////////////////////////////////////////////////
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
 *  222: 'singlequote'
 *   
 * //////////////////////////////////////////////////////////////////////////////
 * //       Plugin_Command                                                     //
 * //////////////////////////////////////////////////////////////////////////////
 *
 *DISABLE_ROTATION true/false
 *ROTATION_ANGLE x(in degrees)
 *SPEED_RATE x
 *
 *SETCAMERA x(in degrees)
 *
 *MOVECAMERA x(in degrees) y(SPEED_RATE, set CURRENT for current SPEED_RATE)
 *
 * //////////////////////////////////////////////////////////////////////////////
 * //        END                                                               //
 * //////////////////////////////////////////////////////////////////////////////
 */

var CTR_Engine = CTR_Engine || {};


////////////////////////////////////////////////////////////////////////////////
//       Plugin_Manager                                                       //
////////////////////////////////////////////////////////////////////////////////

(function() {
CTR_Engine.Camera = CTR_Engine.Camera || {};
			
			
	CTR_Engine.Camera.Base = CTR_Engine.Camera.Base || {};
		CTR_Engine.Camera.Base.InitialState = Number(PluginManager.parameters('Jogo_CTR_Engine')["Initial State"]);
		CTR_Engine.Camera.Base.DisableRotation = eval(PluginManager.parameters('Jogo_CTR_Engine')["Disable Rotation"]);
			
	CTR_Engine.Camera.Input = CTR_Engine.Camera.Input || {};
		CTR_Engine.Camera.Input.PositiveInput = PluginManager.parameters('Jogo_CTR_Engine')["Positive Input"].toLowerCase().split(',');
		CTR_Engine.Camera.Input.NegativeInput = PluginManager.parameters('Jogo_CTR_Engine')["Negative Input"].toLowerCase().split(',');
		CTR_Engine.Camera.Input.RotationAngle = Number(PluginManager.parameters('Jogo_CTR_Engine')["Rotation Angle"]);
		CTR_Engine.Camera.Input.SpeedRate = Number(PluginManager.parameters('Jogo_CTR_Engine')["Speed Rate"]);
})();


////////////////////////////////////////////////////////////////////////////////
//       Plugin_Command                                                       //
////////////////////////////////////////////////////////////////////////////////

CTR_Engine.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    CTR_Engine.Game_Interpreter_pluginCommand.call(this, command, args);
		if (command.toUpperCase() === 'DISABLE_ROTATION') {
			CTR_Engine.Camera.Base.DisableRotation = eval(args[0])
		}
		if (command.toUpperCase() === 'ROTATION_ANGLE') {
			CTR_Engine.Camera.Input.RotationAngle = Number(args[0])
		}
		if (command.toUpperCase() === 'SPEED_RATE') {
			CTR_Engine.Camera.Input.SpeedRate = Number(args[0])
		}
		if (command.toUpperCase() === 'SETCAMERA') {
			SceneManager._scene._spriteset._tilemap.euler.z = $gameMap._eulerZ = $gameMap._rotationZ = $gameMap._moveZ = Number(args[0])/180*Math.PI;
		}
		if (command.toUpperCase() === 'MOVECAMERA') {
			if (String(args[1]) == "CURRENT") $gameMap._moveSpeedRate = CTR_Engine.Camera.Input.SpeedRate;
			else $gameMap._moveSpeedRate = Number(args[1]);
			$gameMap._moveRotationAngle = Number(args[0]);
			$gameMap._moveZ += $gameMap._moveRotationAngle/180*Math.PI;
		}
	};


////////////////////////////////////////////////////////////////////////////////
//       Input                                                                //
////////////////////////////////////////////////////////////////////////////////

CTR_Engine.Graphics_onKeyDown = Graphics._onKeyDown;
Graphics._onKeyDown = function(event) {
  CTR_Engine.Graphics_onKeyDown.call(this, event);
  if (!event.ctrlKey && !event.altKey) CTR_Engine.keyDown(event.keyCode);
};

CTR_Engine.keyDown = function(code) {
  if (!$gameTemp) return;
  if (SceneManager._scene.constructor.name == "Scene_Map" && $gameMap._moveZ == $gameMap._eulerZ) {
	  if ($gameMap._rotationZ == $gameMap._eulerZ && !CTR_Engine.Camera.Base.DisableRotation) {
			for (var i = 0; i < CTR_Engine.Camera.Input.PositiveInput.length; i++) {
				if (code === Number(CTR_Engine.Camera.Input.PositiveInput[i])) {
					$gameMap._rotationZ += CTR_Engine.Camera.Input.RotationAngle/180*Math.PI;
				}
			}
			for (var i = 0; i < CTR_Engine.Camera.Input.NegativeInput.length; i++) {
				if (code === Number(CTR_Engine.Camera.Input.NegativeInput[i])) {
					$gameMap._rotationZ -= CTR_Engine.Camera.Input.RotationAngle/180*Math.PI;
				}
			}
	  }
  }
};


////////////////////////////////////////////////////////////////////////////////
//       TouchInput                                                           //
////////////////////////////////////////////////////////////////////////////////

 CTR_Engine.TouchInput__onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event) {
	CTR_Engine.TouchInput__onMouseMove.call(this, event);
	if ($gameMap) {
		$gameMap._mouseMovementX = event.movementX;
		$gameMap._mouseMovementY = event.movementY;
	}
};

////////////////////////////////////////////////////////////////////////////////
//       Tilemap                                                              //
////////////////////////////////////////////////////////////////////////////////


CTR_Engine.Tilemap_initialize = Tilemap.prototype.initialize;
Tilemap.prototype.initialize = function() {
	CTR_Engine.Tilemap_initialize.call(this);
    if (Graphics.width > Graphics.height) this._margin = Graphics.width;
	else this._margin = Graphics.height;
    this._width = Graphics.width + this._margin*2;
    this._height = Graphics.height + this._margin*2;
};


////////////////////////////////////////////////////////////////////////////////
//       Spriteset_Map                                                        //
////////////////////////////////////////////////////////////////////////////////

CTR_Engine.Spriteset_Map_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
	if(!$gameMap._eulerZ && $gameMap._eulerZ != 0) $gameMap._rotationZ = $gameMap._moveZ = $gameMap._eulerZ = CTR_Engine.Camera.Base.InitialState/180*Math.PI;
	if ($gameMap._moveZ != $gameMap._eulerZ) {
		if ($gameMap._eulerZ*180/Math.PI >= 360) {$gameMap._eulerZ -= 360/180*Math.PI; $gameMap._moveZ -= 360/180*Math.PI;}
		else if ($gameMap._eulerZ*180/Math.PI < 0) {$gameMap._eulerZ += 360/180*Math.PI; $gameMap._moveZ += 360/180*Math.PI;}
		else if (((($gameMap._moveZ - $gameMap._eulerZ)*180/Math.PI < 0.00000001) && (($gameMap._moveZ - $gameMap._eulerZ)*180/Math.PI > 0)) || ((($gameMap._eulerZ - $gameMap._moveZ)*180/Math.PI < 0.00000001) && (($gameMap._eulerZ - $gameMap._moveZ)*180/Math.PI > 0))) $gameMap._eulerZ = $gameMap._moveZ;
		else if ($gameMap._moveZ > $gameMap._eulerZ) $gameMap._eulerZ += $gameMap._moveRotationAngle/180*Math.PI*$gameMap._moveSpeedRate;
		else if ($gameMap._moveZ < $gameMap._eulerZ) $gameMap._eulerZ -= $gameMap._moveRotationAngle/180*Math.PI*$gameMap._moveSpeedRate;
		this._tilemap.euler.z = $gameMap._rotationZ = $gameMap._eulerZ;
	} else if ($gameMap._rotationZ != $gameMap._eulerZ) {
		if ($gameMap._eulerZ*180/Math.PI >= 360) {$gameMap._eulerZ -= 360/180*Math.PI; $gameMap._rotationZ -= 360/180*Math.PI;}
		else if ($gameMap._eulerZ*180/Math.PI < 0) {$gameMap._eulerZ += 360/180*Math.PI; $gameMap._rotationZ += 360/180*Math.PI;}
		else if (((($gameMap._rotationZ - $gameMap._eulerZ)*180/Math.PI < 0.00000001) && (($gameMap._rotationZ - $gameMap._eulerZ)*180/Math.PI > 0)) || ((($gameMap._eulerZ - $gameMap._rotationZ)*180/Math.PI < 0.00000001) && (($gameMap._eulerZ - $gameMap._rotationZ)*180/Math.PI > 0))) $gameMap._eulerZ = $gameMap._rotationZ;
		else if ($gameMap._rotationZ > $gameMap._eulerZ) $gameMap._eulerZ += CTR_Engine.Camera.Input.RotationAngle/180*Math.PI*CTR_Engine.Camera.Input.SpeedRate;
		else if ($gameMap._rotationZ < $gameMap._eulerZ) $gameMap._eulerZ -= CTR_Engine.Camera.Input.RotationAngle/180*Math.PI*CTR_Engine.Camera.Input.SpeedRate;
		this._tilemap.euler.z = $gameMap._moveZ = $gameMap._eulerZ;
	}
	CTR_Engine.Spriteset_Map_update.call(this);
};

CTR_Engine.Spriteset_Map_createTilemap = Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap = function() {
	CTR_Engine.Spriteset_Map_createTilemap.call(this);
	this._tilemap.convertTo3d();
	this._tilemap.position3d.set(Graphics.width / 2, Graphics.height / 2, 0);
	this._tilemap.pivot3d.set(Graphics.width / 2, Graphics.height / 2, 0)
	this._tilemap.euler.x = 60/180*Math.PI;

};

CTR_Engine.Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function() {
	CTR_Engine.Spriteset_Map_createCharacters.call(this);
    for (var i = 0; i < this._characterSprites.length; i++) {
		this._characterSprites[i].convertTo3d();
		this._characterSprites[i]._checkZ = this._characterSprites[i]._character.z;
		if (!this._characterSprites[i]._character._tileId > 0) {
			this._characterSprites[i].scale3d.y = 2;
			this._characterSprites[i].position3d.set(0, -$gameMap.tileHeight() / 2 + this._characterSprites[i]._character.shiftY(), 0);
			this._characterSprites[i].pivot3d.set(0, -$gameMap.tileHeight() / 4 + this._characterSprites[i]._character.shiftY(), 0)
		} else {
			this._characterSprites[i].position3d.set(0, -$gameMap.tileHeight() / 4, 0);
			this._characterSprites[i].pivot3d.set(0, -$gameMap.tileHeight() / 4 + this._characterSprites[i]._character.shiftY(), 0)
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

CTR_Engine.Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function() {
	CTR_Engine.Sprite_Character_updatePosition.call(this);
	if (!this._character._tileId > 0) {
		this.euler.z = -$gameMap._eulerZ;
		this.z += this.getDepth()/1000+0.045;
		if (this._character._pz) this.z += this._character._pz;
	}
};

Sprite_Character.prototype.characterPatternY = function() {
	if ($gameMap._eulerZ*180/Math.PI > 225 && $gameMap._eulerZ*180/Math.PI <= 315) {
		if (this._character.direction() == 2) var direction  = 6;
		else if (this._character.direction() == 4) var direction  =  2;
		else if (this._character.direction() == 6) var direction  =  8;
		else if (this._character.direction() == 8) var direction  =  4;
	} else if ($gameMap._eulerZ*180/Math.PI > 135 && $gameMap._eulerZ*180/Math.PI <= 225) {
		if (this._character.direction() == 2) var direction  =  8;
		else if (this._character.direction() == 4) var direction  =  6;
		else if (this._character.direction() == 6) var direction  =  4;
		else if (this._character.direction() == 8) var direction  =  2;
	} else if ($gameMap._eulerZ*180/Math.PI > 45 && $gameMap._eulerZ*180/Math.PI <= 135) {
		if (this._character.direction() == 2) var direction  =  4;
		else if (this._character.direction() == 4) var direction  =  8;
		else if (this._character.direction() == 6) var direction  =  2;
		else if (this._character.direction() == 8) var direction  =  6;
	} else {
		var direction  =  this._character.direction();
	}
    return (direction - 2) / 2;
};


////////////////////////////////////////////////////////////////////////////////
//       Scene_Map                                                            //
////////////////////////////////////////////////////////////////////////////////

CTR_Engine.Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
	CTR_Engine.Scene_Map_start.call(this);
	this._spriteset._tilemap.euler.z = $gameMap._eulerZ;
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

Game_Map.prototype.setDisplayPos = function(x, y) {
    if (this.isLoopHorizontal()) {
        this._displayX = x;
        this._parallaxX = x;
    } else {
        this._displayX = x;
        this._parallaxX = this._displayX;
    }
    if (this.isLoopVertical()) {
        this._displayY = y;
        this._parallaxY = y;
    } else {
        this._displayY = y;
        this._parallaxY = this._displayY;
    }
};

Game_Map.prototype.scrollDown = function(distance) {
    if (this.isLoopVertical()) {
        this._displayY += distance;
        this._displayY %= $dataMap.height;
        if (this._parallaxLoopY) {
            this._parallaxY += distance;
        }
    } else {
        var lastY = this._displayY;
        this._displayY += distance;
        this._parallaxY += this._displayY - lastY;
    }
};

Game_Map.prototype.scrollLeft = function(distance) {
    if (this.isLoopHorizontal()) {
        this._displayX += $dataMap.width - distance;
        this._displayX %= $dataMap.width;
        if (this._parallaxLoopX) {
            this._parallaxX -= distance;
        }
    } else {
        var lastX = this._displayX;
        this._displayX -= distance;
        this._parallaxX += this._displayX - lastX;
    }
};

Game_Map.prototype.scrollRight = function(distance) {
    if (this.isLoopHorizontal()) {
        this._displayX += distance;
        this._displayX %= $dataMap.width;
        if (this._parallaxLoopX) {
            this._parallaxX += distance;
        }
    } else {
        var lastX = this._displayX;
        this._displayX += distance
        this._parallaxX += this._displayX - lastX;
    }
};

Game_Map.prototype.scrollUp = function(distance) {
    if (this.isLoopVertical()) {
        this._displayY += $dataMap.height - distance;
        this._displayY %= $dataMap.height;
        if (this._parallaxLoopY) {
            this._parallaxY -= distance;
        }
    } else {
        var lastY = this._displayY;
        this._displayY -= distance;
        this._parallaxY += this._displayY - lastY;
    }
};


////////////////////////////////////////////////////////////////////////////////
//       Game_Player                                                          //
////////////////////////////////////////////////////////////////////////////////

Game_Player.prototype.moveByInput = function() {
    if (!this.isMoving() && this.canMove()) {
        var direction = this.getInputDirection();
		if (direction > 0) {$gameTemp.clearDestination(); this.executeMoveModified(direction)};
        if (direction > 0) {
            $gameTemp.clearDestination();
        } else if ($gameTemp.isDestinationValid()){
            var x = $gameTemp.destinationX();
            var y = $gameTemp.destinationY();
            direction = this.findDirectionTo(x, y);
			this.executeMove(direction)
        }
    }
};

Game_Player.prototype.executeMoveModified = function(direction) {
	if ($gameMap._eulerZ*180/Math.PI > 225 && $gameMap._eulerZ*180/Math.PI <= 315) {
		if (direction == 2) var modifiedDirection  =  4;
		else if (direction == 4) var modifiedDirection  =  8;
		else if (direction == 6) var modifiedDirection  =  2;
		else if (direction == 8) var modifiedDirection  =  6;
	} else if ($gameMap._eulerZ*180/Math.PI > 135 && $gameMap._eulerZ*180/Math.PI <= 225) {
		if (direction == 2) var modifiedDirection  =  8;
		else if (direction == 4) var modifiedDirection  =  6;
		else if (direction == 6) var modifiedDirection  =  4;
		else if (direction == 8) var modifiedDirection  =  2;
	} else if ($gameMap._eulerZ*180/Math.PI > 45 && $gameMap._eulerZ*180/Math.PI <= 135) {
		if (direction == 2) var modifiedDirection  = 6;
		else if (direction == 4) var modifiedDirection  =  2;
		else if (direction == 6) var modifiedDirection  =  8;
		else if (direction == 8) var modifiedDirection  =  4;
	} else {
		var modifiedDirection  =  direction;
	}
    this.moveStraight(modifiedDirection);
};