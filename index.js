"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    }
    catch (_) {
        return false;
    }
}
function wrapTextInHTML(url, textContent) {
    return isValidURL(url) && textContent ? "<a href=\"".concat(url, "\">").concat(textContent, "</a>") : "";
}
function addLinksToResume() {
    var huggingfaceUrl = document.getElementById("huggingfaceUrl").value;
    var githubUrl = document.getElementById("githubUrl").value;
    var linkedinUrl = document.getElementById("linkedinUrl").value;
    var mediumUrl = document.getElementById("mediumUrl").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var tagContent = "India | ";
    if (phoneNumber) {
        tagContent += phoneNumber + " | ";
    }
    if (mediumUrl) {
        tagContent += wrapTextInHTML(mediumUrl, "Medium") + " | ";
    }
    if (linkedinUrl) {
        tagContent += wrapTextInHTML(linkedinUrl, "Linkedin") + " | ";
    }
    if (githubUrl) {
        tagContent += wrapTextInHTML(githubUrl, "Github") + " | ";
    }
    if (huggingfaceUrl) {
        tagContent += wrapTextInHTML(huggingfaceUrl, "Huggingface");
    }
    document.getElementById("contact-info").innerHTML = tagContent;
}
function modifySectionsInResume(jobDescription, sectionContent) {
    return __awaiter(this, void 0, void 0, function () {
        var apiKey, geminiApiUrl, prompt, response, data, generatedText, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = document.getElementById("api-key").value;
                    geminiApiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=".concat(apiKey);
                    prompt = "\n    You are a ATS-conqueror bot. Your goal is to modify a list of texts to beat the ATS algorithm and secure a good score. \n    You will do this by using the a job description and then modifying the text I provide you with in bullet points. \n\n    Here's a step by step breakdown of what I expect from you. \n    ### INSTRUCTIONS ### \n    1) You will be provided with a series of bullet points and a job description. \n    2) You will view each text of a bullet point and then modify it based on the job description to secure a good ATS score. \n    3) Your output will be an unordered list of HTML elements, with each modified bullet point as an HTML list item.  \n    \n    NOTE: \n    * Your OUTPUT MUST be in HTML. \n    * Make sure to fix the spelling mistakes the job description and then generate the modified text. \n    * Make sure that the sentences are human-like. \n    * DO NOT HALLUCINATE\n    \n    ### JOB DESCRIPTION ###\n    ".concat(jobDescription, "\n\n    ### SECTION TEXT ### \n    ").concat(sectionContent, "\n\n    ### HTML UNORDERED LIST OUTPUT ###\n    ");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(geminiApiUrl, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                contents: [{
                                        parts: [{
                                                text: prompt
                                            }]
                                    }]
                            })
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Http response not ok");
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    generatedText = data.candidates[0].content.parts[0].text;
                    return [2 /*return*/, generatedText];
                case 4:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [2 /*return*/, ""];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function addChangesToResume() {
    return __awaiter(this, void 0, void 0, function () {
        var jobDescription, itemBodies, i, inputBullets, modifiedResumePoints;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    jobDescription = document.getElementById("job-description").value;
                    localStorage.getItem("originalCollection");
                    itemBodies = document.getElementsByClassName("item-body");
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < itemBodies.length)) return [3 /*break*/, 4];
                    inputBullets = (_a = itemBodies.item(i)) === null || _a === void 0 ? void 0 : _a.textContent;
                    if (!inputBullets) return [3 /*break*/, 3];
                    return [4 /*yield*/, modifySectionsInResume(jobDescription, inputBullets)];
                case 2:
                    modifiedResumePoints = _b.sent();
                    if (modifiedResumePoints) {
                        itemBodies.item(i).innerHTML = modifiedResumePoints.split("```html")[1].split("```")[0];
                    }
                    _b.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    // this function here will add links to resume almost immediately with raw javascript
                    addLinksToResume();
                    return [2 /*return*/];
            }
        });
    });
}
