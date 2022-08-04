//*******************************************************/
//Creates a New Note 
//*****************************************************/
const noteDiv = document.getElementById('note-div');
document.getElementById('note-button').addEventListener ('click', ()=> {
    if(noteDiv.style.display === 'none'){
        noteDiv.removeAttribute('style');
        noteDiv.innerHTML = ""; 
    } else if(noteDiv.innerHTML === ""){
        noteDiv.innerHTML = 
        `<div id="container">
            <div class="note-container">
                <h1> Create Note </h1>
                <p> Choose a Label </p>
                <div class="color-container">
                    <div class="color-1"></div>
                    <div class="color-2"></div>
                    <div class="color-3"></div>
                    <div class="color-4"></div>
                    <div class="color-5"></div>
                    <div class="color-6"></div>
                    <div class="color-7"></div>
                    <div class="color-8"></div>
                    <div class="color-9"></div>
                    <div class="color-10"></div>
                    <div class="color-11"></div>
                    <div class="color-12"></div>
                    <div class="color-13"></div>
                    <div class="color-14"></div>
                    <div class="color-15"></div>
                    <div class="color-16"></div>
                    <div class="color-17"></div>
                    <div class="color-18"></div>
                </div>
                <p> Give your Note a title </p>
                <input id="title-Heading"></input>
                <p>Write down your note</p>
                <textarea id="note-value"></textarea>
                <button id="post">Post Note</button>
                <button id="cancel">Cancel</button>
            </div>
        </div>`;
    };
//********************************/
// Appends note to the display
//********************************/
    const title = document.getElementById('title-Heading');
    const note = document.getElementById('note-value');
    const h1 = document.createElement('h1').textContent = title.value; //adds h1 heading to const
    const p = document.createElement('p').textContent = note.value;  //adds h1 heading to const
    document.getElementById('post').addEventListener('click',()=>{
        const section = document.createElement('section');
        const h1 = document.createElement('h1').textContent = title.value; //adds h1 heading to const
        const p = document.createElement('p').textContent = note.value;  //adds h1 heading to const
        section.classList.add("paragraphs");  //sets clss to node
        section.innerHTML = `
            <div class="dates-flex">
                <span class="first-dot"></span>
                <p> June 20, 2021</p>
            </div>
            <h1>${h1}</h1>
            <p>${p}</p>
        `;
        document.querySelector('.grid').prepend(section);
        noteDiv.style.display = 'none';
        if(noteDiv.style.display === 'none'){ 
           title.value = ""; // Erases Content
            note.value = "";  //Erases Content
           
        } 
    });
    //******************************************************************/
// Closes Note when Canceled
//****************************************************************/
document.getElementById('cancel').addEventListener('click',()=>{
    title.value = "";
    p.value = "";
    noteDiv.style.display = 'none';
    
})
});