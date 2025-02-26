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
    var apiKey = document.getElementById("api-key").value;
    var geminiApiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=".concat(apiKey);
    var prompt = "\n    You are a ATS-conqueror bot. Your goal is to modify a list of texts to beat the ATS algorithm and secure a good score. \n    You will do this by using the a job description and then modifying the text I provide you with in bullet points. \n\n    Here's a step by step breakdown of what I expect from you. \n    ### INSTRUCTIONS ### \n    1) You will be provided with a series of bullet points and a job description. \n    2) You will view each text of a bullet point and then modify it based on the job description to secure a good ATS score. \n    3) Your output will be an unordered list of HTML elements, with each modified bullet point as an HTML list item.  \n    \n    NOTE: \n    * Your OUTPUT MUST be in HTML. \n    * Make sure to fix the spelling mistakes the job description and then generate the modified text. \n    * Make sure that the sentences are human-like. \n    * DO NOT HALLUCINATE\n    \n    ### JOB DESCRIPTION ###\n    ".concat(jobDescription, "\n\n    ### SECTION TEXT ### \n    ").concat(sectionContent, "\n\n    ### HTML UNORDERED LIST OUTPUT ###\n    ");
    fetch(geminiApiUrl);
    return "";
}
function addChangesToResume() {
    var _a;
    var jobDescription = document.getElementById("job-description").value;
    var itemBodies = document.getElementsByClassName("item-body");
    console.log(itemBodies);
    for (var i = 0; i < itemBodies.length; i++) {
        console.log((_a = itemBodies.item(i)) === null || _a === void 0 ? void 0 : _a.textContent);
    }
    // this function here will add links to resume almost immediately with raw javascript
    addLinksToResume();
}
