var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var GameItem = (function () {
    function GameItem(radius, colour, xPosition, yPosition) {
        if (colour === void 0) { colour = '#5E0028'; }
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this._radius = radius;
        this._colour = colour;
        this._xPos = xPosition;
        this._yPos = yPosition;
    }
    Object.defineProperty(GameItem.prototype, "xPosition", {
        get: function () {
            return this._xPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameItem.prototype, "yPosition", {
        get: function () {
            return this._yPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameItem.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        enumerable: true,
        configurable: true
    });
    return GameItem;
}());
var Booster = (function (_super) {
    __extends(Booster, _super);
    function Booster(name, radius, colour, xPosition, yPosition) {
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        var _this = _super.call(this, radius, colour, xPosition, yPosition) || this;
        _this._name = name;
        return _this;
    }
    Object.defineProperty(Booster.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Booster.prototype.draw = function () {
        if (this._colour == '#3CB371') {
            var img = new Image();
            img.src = "./assets/img/cookie.png";
            this.context.drawImage(img, this._xPos - 30, this._yPos - 30);
        }
        else {
            var img = new Image();
            img.src = "./assets/img/potion.png";
            this.context.drawImage(img, this._xPos - 30, this._yPos - 30);
        }
    };
    return Booster;
}(GameItem));
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(radius, colour, xPosition, yPosition, position) {
        if (radius === void 0) { radius = 10; }
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        if (position === void 0) { position = 0; }
        var _this = _super.call(this, radius, colour, xPosition, yPosition) || this;
        _this._health = 3;
        _this.position = position;
        return _this;
    }
    Object.defineProperty(Character.prototype, "SetPositionX", {
        set: function (xPos) {
            this._xPos = xPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "SetPositionY", {
        set: function (yPos) {
            this._yPos = yPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "SetHealth", {
        set: function (health) {
            this._health = health;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "SetPosition", {
        set: function (position) {
            this.position = position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "health", {
        get: function () {
            return this._health;
        },
        enumerable: true,
        configurable: true
    });
    Character.prototype.draw = function () {
        if (this.position == 0) {
            var img = new Image();
            img.src = "./assets/img/wizard.png";
            this.context.drawImage(img, this._xPos - 30, this._yPos - 30);
        }
        else if (this.position == 3) {
            var img = new Image();
            img.src = "./assets/img/wizard_3.png";
            this.context.drawImage(img, this._xPos - 30, this._yPos - 30);
        }
        else {
            var img = new Image();
            img.src = "./assets/img/wizard_2.png";
            this.context.drawImage(img, this._xPos - 30, this._yPos - 30);
        }
    };
    Character.prototype.drawHealth = function () {
        this.context.font = "30px 'Lato'";
        this.context.fillStyle = "#fff";
        this.context.fillText("Lives: " + this._health, 25, 50);
    };
    return Character;
}(GameItem));
var Game = (function () {
    function Game() {
        var _this = this;
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.keys = [];
        this.gameLoop = function () {
            requestAnimationFrame(_this.gameLoop);
            var movementSpeed = 10;
            if ((_this.position_x > 10 || _this.keys[65]) && _this._player.xPosition - _this._player.radius > 0) {
                _this._player.SetPositionX = _this._player.xPosition - movementSpeed;
                _this._player.SetPositionX = _this._player.xPosition + (_this.position_x / 100);
                _this._player.SetPosition = 0;
            }
            if ((_this.position_x < -10 || _this.keys[68]) && _this._player.xPosition + _this._player.radius < innerWidth) {
                _this._player.SetPositionX = _this._player.xPosition + movementSpeed;
                _this._player.SetPositionX = _this._player.xPosition + (_this.position_x / 100);
                _this._player.SetPosition = 1;
            }
            if ((_this.position_y < -10 || _this.keys[83]) && _this._player.yPosition + _this._player.radius < innerHeight) {
                _this._player.SetPositionY = _this._player.yPosition + movementSpeed;
                _this._player.SetPositionY = _this._player.yPosition + (_this.position_y / 100);
                _this._player.SetPosition = 1;
            }
            if ((_this.position_y > 10 || _this.keys[87]) && _this._player.yPosition - _this._player.radius > 0) {
                _this._player.SetPositionY = _this._player.yPosition - movementSpeed;
                _this._player.SetPositionY = _this._player.yPosition + (_this.position_y / 100);
                _this._player.SetPosition = 3;
            }
            _this.update();
        };
        var playerRadius = 20;
        this.position_x = 0;
        this.position_y = 0;
        this.shooting = 0;
        this._projectiles = new Array();
        this._boosters = new Array();
        this._player = new Character(playerRadius, "#912F40", window.innerWidth / 2 - playerRadius / 2, window.innerHeight / 2 - playerRadius / 2);
        this._score = new Scoreboard(0);
        window.addEventListener('keydown', function (e) {
            _this.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', function (e) {
            _this.keys[e.keyCode] = false;
        });
        this.setCanvasSize();
        this.draw();
        this.gameLoop();
    }
    Game.prototype.setCanvasSize = function () {
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
    };
    Game.prototype.draw = function () {
        var _this = this;
        var radius = 25;
        var xPos = Math.random() * (innerWidth - radius * 2) + radius;
        var yPos = Math.random() * (innerHeight - radius * 2) + radius;
        var xVel = (Math.random() - 0.5) * 10;
        var yVel = (Math.random() - 0.5) * 10;
        var currentScore = this._score.getScore;
        if (this.Distance(xPos, yPos, this._player) < radius + this._player.radius + 30) {
            xPos = Math.random() * (innerWidth - radius * 2) + radius;
            yPos = Math.random() * (innerHeight - radius * 2) + radius;
        }
        this._projectiles.push(new Projectile(radius, '#FFF', xPos, yPos, xVel, yVel));
        var spawnNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        var spawnKind = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        var spawnTime = Math.floor(Math.random() * (20 - 3 + 1)) + 3;
        console.log(this._player.position);
        if (spawnNumber > 2) {
            if (spawnKind == 1) {
                this._boosters.push(new Booster("health", 10, "#3CB371", xPos, yPos));
                console.log("spawned");
            }
            else {
                this._boosters.push(new Booster("bonus", 10, "#20B2AA", xPos, yPos));
                console.log("spawned 2");
            }
        }
        if (this._player.health > 0) {
            this._score.setScore = currentScore += 1;
            setTimeout(function () {
                _this.draw();
            }, 5000);
        }
    };
    Game.prototype.update = function () {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        if (this._player.health > 0) {
            this._projectiles.map(function (projectile) {
                projectile.draw();
                projectile.update();
            });
            this._boosters.map(function (booster) {
                booster.draw();
            });
            this.CheckCollisionProjectile();
            this.CheckCollisionBooster();
            this._player.drawHealth();
            this._player.draw();
            this._score.draw();
        }
        else {
            var score = this._score.getScore;
            this.context.textBaseline = "middle";
            this.context.font = "30px ' 'Kaushan Script";
            var img = new Image();
            img.src = "./assets/img/skeleton.png";
            this.context.drawImage(img, innerWidth / 2 - 35, innerHeight / 2 - 125);
            this.context.fillText("Game Over!", innerWidth / 2 - 75, innerHeight / 2 - 25);
            this.context.fillText("score: " + score, innerWidth / 2 - 55, innerHeight / 2 + 25);
        }
    };
    Game.prototype.CheckCollisionProjectile = function () {
        var _this = this;
        this._projectiles.map(function (projectile, index) {
            var distance = _this.Distance(projectile.xPosition, projectile.yPosition, _this._player);
            if (distance < projectile.radius + _this._player.radius) {
                console.log("Collision");
                _this._projectiles.splice(index, 1);
                _this._player.SetHealth = _this._player.health - 1;
            }
        });
    };
    Game.prototype.CheckCollisionBooster = function () {
        var _this = this;
        this._boosters.map(function (booster, index) {
            var distance = _this.Distance(booster.xPosition, booster.yPosition, _this._player);
            if (distance < booster.radius + _this._player.radius) {
                console.log("Collision Booster!");
                if (booster.name === "health") {
                    _this._player.SetHealth = _this._player.health + 1;
                    _this._score.setScore = _this._score.getScore + 5;
                }
                else if (booster.name === "bonus") {
                    _this._score.setScore = _this._score.getScore + 10;
                }
                _this._boosters.splice(index, 1);
            }
        });
    };
    Game.prototype.Distance = function (xPos, yPos, object) {
        var xDistance = xPos - object.xPosition;
        var yDistance = yPos - object.yPosition;
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    };
    Game.prototype.SetArdMove = function (xPos, yPos) {
        this.position_x = xPos;
        this.position_y = yPos;
    };
    return Game;
}());
var _this = this;
var app = {};
(function () { return __awaiter(_this, void 0, void 0, function () {
    var init;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                init = function () {
                    app.game = new Game();
                };
                window.addEventListener('load', init);
                return [4, window.setupMqtt('ws://192.168.1.29:8000')];
            case 1:
                _a.sent();
                return [4, window.subscribeMqtt('hz/bluecherry/backstory')];
            case 2:
                _a.sent();
                return [4, window.subscribeMqtt('hz/bluecherry/backstory-rec')];
            case 3:
                _a.sent();
                return [4, window.registerMessageListenerMqtt('hz/bluecherry/backstory', function (msg) {
                        var msgArr = msg.split(',');
                        app.game.position_y = msgArr[0];
                        app.game.position_x = msgArr[1];
                        app.game.shooting = msgArr[2];
                    })];
            case 4:
                _a.sent();
                setInterval(function () {
                    var score = lpad(app.game._score._points, 4, '0');
                    var health = lpad(app.game._player._health, 3, '0');
                    var string = score + ',' + health;
                    window.publishMqtt('hz/bluecherry/backstory-rec', string);
                }, 1000);
                return [2];
        }
    });
}); })();
function lpad(s, width, char) {
    return (s.length >= width) ? s : (new Array(width).join(char) + s).slice(-width);
}
var Projectile = (function (_super) {
    __extends(Projectile, _super);
    function Projectile(radius, colour, xPosition, yPosition, xVelocity, yVelocity) {
        if (radius === void 0) { radius = 10; }
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        var _this = _super.call(this, radius, colour, xPosition, yPosition) || this;
        _this._xVel = xVelocity;
        _this._yVel = yVelocity;
        return _this;
    }
    Projectile.prototype.bounce = function () {
        this._xVel = -this._xVel;
        this._yVel = -this._yVel;
    };
    Projectile.prototype.draw = function () {
        var img = new Image();
        img.src = "./assets/img/slime.png";
        this.context.drawImage(img, this._xPos - 30, this._yPos - 30);
    };
    Projectile.prototype.update = function () {
        if (this._xPos + this._radius > innerWidth || this._xPos - this._radius < 0) {
            this._xVel = -this._xVel;
        }
        if (this._yPos + this._radius > innerHeight || this._yPos - this._radius < 0) {
            this._yVel = -this._yVel;
        }
        this._xPos += this._xVel;
        this._yPos += this._yVel;
    };
    return Projectile;
}(GameItem));
var Scoreboard = (function () {
    function Scoreboard(points) {
        if (points === void 0) { points = 0; }
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this._points = points;
    }
    Object.defineProperty(Scoreboard.prototype, "setScore", {
        set: function (points) {
            this._points = points;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Scoreboard.prototype, "getScore", {
        get: function () {
            return this._points;
        },
        enumerable: true,
        configurable: true
    });
    Scoreboard.prototype.draw = function () {
        this.context.font = "30px 'Lato'";
        this.context.fillStyle = "#fff";
        this.context.fillText("Score: " + this._points, window.innerWidth - 175, 50);
    };
    return Scoreboard;
}());
var Shooter = (function () {
    function Shooter() {
    }
    return Shooter;
}());
//# sourceMappingURL=main.js.map