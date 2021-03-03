"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var Team = (function () {
    function Team(teams, teamSize) {
        this._teams = teams;
        this._teamSize = teamSize;
    }
    Object.defineProperty(Team.prototype, "teams", {
        get: function () {
            return this._teams;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Team.prototype, "teamSize", {
        get: function () {
            return this._teamSize;
        },
        enumerable: false,
        configurable: true
    });
    Team.prototype.givePizza = function () {
        if (this._teams > 0) {
            this._teams--;
            console.log("we just gave a pizza");
        }
        else {
            return false;
        }
    };
    return Team;
}());
var Delivery = (function () {
    function Delivery() {
    }
    Delivery.prototype.deliver = function () {
    };
    return Delivery;
}());
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var file_A;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    file_A = "in/a_example";
                    return [4, pizzaBot(file_A)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
})();

function delivery(pizza, t4, t3, t2) {
    while (pizza > 0) {
        switch (pizza > 0) {
            case pizza - t4.teamSize >= 2:
                pizza = pizza - t4.teamSize;
                console.log("t4 got a pizza , got " + pizza + "left");
                t4.givePizza();
                break;
            case pizza - t3.teamSize >= 1:
                pizza = pizza - t3.teamSize;
                console.log("t3 got a pizza , got " + pizza + "left");
                t3.givePizza();
                break;
            case pizza - t2.teamSize >= 0:
                pizza = pizza - t2.teamSize;
                console.log("t2 got a pizza , got +pizza +left");
                t2.givePizza();
                break;
            default:
                console.log("something went wrong");
        }
    }
    return [pizza, t4.teams, t3.teams, t2.teams];
}
function pizzaBot(file) {
    fs.readFile(file, "ASCII", function (err, data) {
        var _a;
        try {
            var trimStr = data.trim();
            var arr = trimStr.split(/\n/g);
            var topList = (_a = arr.shift()) === null || _a === void 0 ? void 0 : _a.trim().split(" ").map(function (x) { return +parseInt(x, 10); });
            var T4person = new Team(topList.pop(), 4);
            var T3person = new Team(topList.pop(), 3);
            var T2person = new Team(topList.pop(), 2);
            var Mpizza = topList.pop();
            var result = delivery(Mpizza, T4person, T3person, T2person);
            console.log(result);
        }
        catch (err) {
            console.error(err);
        }
    });
}
