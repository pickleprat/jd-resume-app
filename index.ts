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

function addLinksToResume() : void {
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
} 

function modifySectionsInResume(jobDescription: string, sectionContent: string): string {
	let apiKey: string = (document.getElementById("api-key") as HTMLInputElement).value; 
	const geminiApiUrl : string = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

    let prompt : string = `
    You are a ATS-conqueror bot. Your goal is to modify a list of texts to beat the ATS algorithm and secure a good score. 
    You will do this by using the a job description and then modifying the text I provide you with in bullet points. 

    Here's a step by step breakdown of what I expect from you. 
    ### INSTRUCTIONS ### 
    1) You will be provided with a series of bullet points and a job description. 
    2) You will view each text of a bullet point and then modify it based on the job description to secure a good ATS score. 
    3) Your output will be an unordered list of HTML elements, with each modified bullet point as an HTML list item.  
    
    NOTE: 
    * Your OUTPUT MUST be in HTML. 
    * Make sure to fix the spelling mistakes the job description and then generate the modified text. 
    * Make sure that the sentences are human-like. 
    * DO NOT HALLUCINATE
    
    ### JOB DESCRIPTION ###
    ${jobDescription}

    ### SECTION TEXT ### 
    ${sectionContent}

    ### HTML UNORDERED LIST OUTPUT ###
    `

    fetch(geminiApiUrl)
    return ""
} 

function addChangesToResume() : void {
    let jobDescription: string = (document.getElementById("job-description") as HTMLTextAreaElement).value; 
    let itemBodies : HTMLCollectionOf<Element> = document.getElementsByClassName("item-body"); 
    console.log(itemBodies); 

    for(let i = 0; i < itemBodies.length; i++) {
        console.log(itemBodies.item(i)?.textContent) 
    } 

    // this function here will add links to resume almost immediately with raw javascript
    addLinksToResume(); 
}  
