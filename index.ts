function isValidURL(url: string) : boolean {
    try {
        new URL(url); 
        return true; 
    } catch (_) {
        return false; 
    } 
}  

function wrapTextInHTML(url: string, textContent: string) : string {
    return isValidURL(url) && textContent ? `<a href="${url}">${textContent}</a>` : ""; 
}  

function insertContactInfo() : void {
    let huggingfaceUrl: string | null = (document.getElementById("huggingfaceUrl") as HTMLInputElement).value;  
    let githubUrl : string | null = (document.getElementById("githubUrl") as HTMLInputElement).value; 
    let linkedinUrl: string | null = (document.getElementById("linkedinUrl") as HTMLInputElement).value;  
    let mediumUrl: string | null = (document.getElementById("mediumUrl") as HTMLInputElement).value; 
    let phoneNumber: string | null = (document.getElementById("phoneNumber") as HTMLInputElement).value; 

    let tagContent: string = "India | "; 

    if (phoneNumber) {
        tagContent += phoneNumber + " | "
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

    (document.getElementById("contact-info") as HTMLElement).innerHTML = tagContent; 
    console.log(tagContent); 
}  