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
function insertContactInfo() {
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
    console.log(tagContent);
}
